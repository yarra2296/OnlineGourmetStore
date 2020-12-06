export const getJWTToken = () => {
  return localStorage.getItem("user-jwt");
};

export const setJWTToken = (token) => {
  return localStorage.setItem("user-jwt", token);
};

export const getUserName = () => {
  return localStorage.getItem("user-name");
};

export const setUserName = (name) => {
  return localStorage.setItem("user-name", name);
};
