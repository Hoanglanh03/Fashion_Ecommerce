import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  products: [],
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
    setProducts: (state, action) => {
      state.products = action.payload.products;
    },
  },
});

export const { setLogin, setLogout, setProducts } =
  userSlice.actions;
export default userSlice.reducer;
