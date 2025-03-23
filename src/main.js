import Layout from "./components/Layout.js";

import HomePage from "./components/HomePage.js";
import ProfilePage from "./components/ProfilePage.js";
import LoginPage from "./components/LoginPage.js";
import NotFoundPage from "./components/NotFoundPage.js";

import {
  setLocalStorageItem,
  removeLocalStorageItem,
} from "./utils/storage.js";

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

function redirectToHomePage() {
  window.location.href = "/";
}

function handleLogin() {
  const username = document.getElementById("username").value;

  setLocalStorageItem("userInfo", {
    username,
    email: "",
    bio: "",
  });
  redirectToHomePage();
}

function handleLogout() {
  removeLocalStorageItem("userInfo");
  redirectToHomePage();
}

function handleProfile() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const bio = document.getElementById("bio").value;

  setLocalStorageItem("userInfo", { username, email, bio });
  redirectToHomePage();
}

function setupEventListeners() {
  window.addEventListener("popstate", renderRoute);
  window.addEventListener("load", renderRoute);
  window.addEventListener("submit", (event) => {
    event.preventDefault();

    if (event.target.id === "login-form") {
      handleLogin();
    }

    if (event.target.id === "profile-form") {
      handleProfile();
    }
  });
  window.addEventListener("click", (event) => {
    if (event.target.id === "logout") {
      handleLogout();
    }
  });
}

setupEventListeners();
