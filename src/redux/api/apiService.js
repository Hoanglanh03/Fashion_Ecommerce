import axios from "axios";
import { setProducts } from "../state";

export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    if (response.status === 200) {
      return response.data;
    } else {
      console.log("Not contact with API");
    }
  } catch (error) {
    console.error("Error fetching product data:", error);
  }
};

export const fetchProductALL = () => async (dispatch) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/`);
    if (response.status === 200) {
      dispatch(setProducts({ products: response.data }));
    } else {
      console.log("Could not fetch products from API");
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
