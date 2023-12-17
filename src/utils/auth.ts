export const isAuthenticated = () => {
  if (localStorage.getItem("authToken")) {
    return true;
  } else {
    return false;
  }
};
