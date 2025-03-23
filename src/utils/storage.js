function getLocalStorageItem(key) {
  return JSON.parse(localStorage.getItem(key)) || "";
}

function setLocalStorageItem(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}

function removeLocalStorageItem(key) {
  return localStorage.removeItem(key);
}

export { getLocalStorageItem, setLocalStorageItem, removeLocalStorageItem };
