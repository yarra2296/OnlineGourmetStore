export const getJWTToken = () => {
  return localStorage.getItem("user-jwt");
};

export const setJWTToken = (token) => {
  return localStorage.setItem("user-jwt", token);
};
