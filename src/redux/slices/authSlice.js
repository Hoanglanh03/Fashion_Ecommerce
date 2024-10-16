import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  password: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      const { email, password } = action.payload;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isLoggedIn = true; 
      localStorage.setItem("user", JSON.stringify({ email, password }));
    },
    logoutSuccess: (state) => {
      state.email = null;
      state.password = null;
      state.isLoggedIn = false; 
      localStorage.removeItem("user");
    },
    loadUserFromLocalStorage: (state) => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        state.email = user.email;
        state.password = user.password;
        state.isLoggedIn = true;
      }
    },
  },
});

export const { setLogin, logoutSuccess, loadUserFromLocalStorage } =
  authSlice.actions;
export default authSlice.reducer;
