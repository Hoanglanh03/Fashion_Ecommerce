const initState = {
  isLoggedIn: false,
  user: {
    email: "",
    password: "",
  },
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoggedIn: true,
        user: {
          ...state.user,
          email: action.payload.email,
          password: action.payload.password,
        },
      };
    case "LOGOUT_SUCCESS":
      return {
        ...state,
        isLoggedIn: false,
        user: {},
      };
    default:
      return state;
  }
};

export default rootReducer;
