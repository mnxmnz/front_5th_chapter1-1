import { getLocalStorageItem } from "./storage.js";

const auth = {
  user: getLocalStorageItem("user"),
  isLoggedIn: getLocalStorageItem("user") ? true : false,
};

export { auth };
