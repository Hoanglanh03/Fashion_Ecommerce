import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
};

export const userSlice = createSlice({
  name: "fashionEcommerce",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.email = action.payload.email;
    },
    setLogout: (state) => {
      state.email = null;
    },
  },
});

export const { setLogin, setLogout } = userSlice.actions;
export default userSlice.reducer;
