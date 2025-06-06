import auth from "../features/auth/authStore.js";
import { restoreAuth } from "../features/auth/authService.js";

class HistoryRouter {
  containerElement = null;
  routeMapping = {};
  protectedRoutes = ["/profile"];
  guestOnlyRoutes = ["/login"];
  activeRoutePath = null;
  basePath =
    process.env.NODE_ENV === "production" ? "/front_5th_chapter1-1" : "";

  constructor(routes) {
    this.routeMapping = routes;
    this.containerElement = document.getElementById("root") || document.body;

    restoreAuth();

    this._initializeEventListeners();
    this.processRouteChange();
  }

  _initializeEventListeners() {
    window.addEventListener("DOMContentLoaded", () =>
      this.processRouteChange(),
    );
    window.addEventListener("popstate", () => this.processRouteChange());
    document.addEventListener("click", this._handleNavLinkClick.bind(this));
  }

  _handleNavLinkClick(event) {
    if (
      event.target.tagName === "A" &&
      event.target.href.startsWith(window.location.origin)
    ) {
      event.preventDefault();

      const pathname = event.target.pathname;
      const path = pathname.startsWith(this.basePath)
        ? pathname.slice(this.basePath.length) || "/"
        : pathname;

      this.changeRoute(path);
    }
  }

  hasAccessPermission(requestedPath) {
    const userIsAuthenticated = auth.getIsLoggedIn();

    if (this.protectedRoutes.includes(requestedPath)) {
      return userIsAuthenticated;
    }

    if (this.guestOnlyRoutes.includes(requestedPath)) {
      return !userIsAuthenticated;
    }

    return true;
  }

  _redirectBasedOnAuthStatus() {
    const userIsAuthenticated = auth.getIsLoggedIn();

    if (userIsAuthenticated) {
      this.changeRoute("/");
    } else {
      this.changeRoute("/login");
    }
  }

  _renderPageContent(pageComponent) {
    const renderedContent = pageComponent();

    if (typeof renderedContent === "string") {
      this.containerElement.innerHTML = renderedContent;
      return;
    }

    if (renderedContent.template) {
      this.containerElement.innerHTML = renderedContent.template;

      if (typeof renderedContent.init === "function") {
        renderedContent.init();
      }
    } else {
      console.error();
    }
  }

  getPath() {
    const fullPath = window.location.pathname;

    return fullPath.startsWith(this.basePath)
      ? fullPath.slice(this.basePath.length) || "/"
      : fullPath;
  }

  processRouteChange() {
    const requestedPath = this.getPath();

    this.activeRoutePath = requestedPath;

    if (!this.hasAccessPermission(requestedPath)) {
      this._redirectBasedOnAuthStatus();
      return;
    }

    const pageComponent =
      this.routeMapping[requestedPath] || this.routeMapping["/error"];

    this._renderPageContent(pageComponent);
  }

  changeRoute(targetPath) {
    if (this.activeRoutePath === targetPath) return;

    const fullPath = targetPath.startsWith("/")
      ? `${this.basePath}${targetPath}`
      : `${this.basePath}/${targetPath}`;

    window.history.pushState({}, "", fullPath);

    this.processRouteChange();
  }
}

export default HistoryRouter;
