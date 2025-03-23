const getCurrentPath = () => {
  return window.location.pathname;
};

const redirectToPath = (path) => {
  return (window.location.href = path);
};

export { getCurrentPath, redirectToPath };
