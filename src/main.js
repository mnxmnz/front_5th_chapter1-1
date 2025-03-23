import Layout from "./components/Layout.js";

import HomePage from "./components/HomePage.js";
import ProfilePage from "./components/ProfilePage.js";
import LoginPage from "./components/LoginPage.js";
import NotFoundPage from "./components/NotFoundPage.js";

document.body.innerHTML = `
  ${Layout(HomePage())}
  ${Layout(ProfilePage())}
  ${LoginPage()}
  ${Layout(NotFoundPage())}
`;
