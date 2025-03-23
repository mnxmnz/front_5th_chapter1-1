import Layout from "./components/Layout.js";

import HomePage from "./components/HomePage.js";
import ProfilePage from "./components/ProfilePage.js";
import LoginPage from "./components/LoginPage.js";
import NotFoundPage from "./components/NotFoundPage.js";

const routes = {
  "/": Layout(HomePage()),
  "/login": LoginPage(),
  "/profile": Layout(ProfilePage()),
};

function renderRoute() {
  const currentRoute = window.location.pathname;

  if (routes[currentRoute]) {
    document.body.innerHTML = routes[currentRoute];
    window.history.pushState({ path: currentRoute }, "", currentRoute);
    return;
  }

  document.body.innerHTML = Layout(NotFoundPage());
  window.history.pushState({ path: currentRoute }, "", currentRoute);
}

window.addEventListener("popstate", () => {
  renderRoute();
});

window.addEventListener("load", renderRoute);
