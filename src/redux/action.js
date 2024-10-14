export const loginSuccess = (email, password) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: { email, password },
  };
};

export const logoutSuccess = () => ({
  type: "LOGOUT_SUCCESS",
});
