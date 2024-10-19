import React, { useState, useEffect } from "react";
import ProductGird from "./ProductGird"; // Import ProductGrid
import Sidebar from "./Sidebar"; // Import Sidebar
import axios from "axios";
import toast from "react-hot-toast";

const Productfilter = () => {
  const [selectedCard, setSelectedCard] = useState("null");
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 1000]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        if (response.status === 200) {
          setData(response.data);

          const allCategories = [
            ...new Set(response.data.map((ele) => ele.category)),
          ];

          setCategories(allCategories);
          setSelectedCard(allCategories[0]);
        } else {
          toast.error("Not contact with API");
        }
      } catch (error) {
        console.error("Error occurred while fetching data:", error);
        alert("Error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container flex">
      <Sidebar
        categories={categories}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
        setSearchTerm={setSearchTerm}
        setSelectedPriceRange={setSelectedPriceRange}
      />

      <ProductGird
        data={data}
        selectedCard={selectedCard}
        searchTerm={searchTerm}
        selectedPriceRange={selectedPriceRange}
      />
    </div>
  );
};

export default Productfilter;
