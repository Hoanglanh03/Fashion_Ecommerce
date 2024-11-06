import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  products: [],
  cart: [],
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
    setCart: (state, action) => {
      state.cart = action.payload.cart;
    },
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart.find((item) => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += product.quantity;
      } else {
        state.cart.push({ ...product, quantity: product.quantity });
      }
    },
    increaseQuantity: (state, action) => {
      const product = state.cart.find((item) => item.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const product = state.cart.find((item) => item.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const {
  setLogin,
  setLogout,
  setProducts,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} = userSlice.actions;
export default userSlice.reducer;
