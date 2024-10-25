import axios from "axios";

export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product data:", error);
    throw error;
  }
};

export const fetchProductALL = async () => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products ", error);
    throw error;
  }
};
