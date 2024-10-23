import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Header from "../../components/header";
import Sidebar from "./Sidebar";
import ProductGird from "./ProductGird";
import Footer from "../../components/footer";
import Banner from "../../asserts/images/banner.avif";

const ShopPage = () => {
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
    <div>
      <Header />
      <div className=" relative h-auto md:h-96 md:w-full">
        <img
          className="w-full md:h-full md:w-full object-fit"
          src={Banner}
          alt=""
        />
        <div className=" absolute flex flex-col  items-center justify-between inset-y-2/4 ml-11  gap-2">
          <h1 className=" text-[black] cursor-pointer text-2xl md:text-4xl leading-none font-medium ">
            WOMEN'S FASHION
          </h1>
          <p className="text-[black] cursor-pointer text-xl leading-none font-light mx-auto  ">
            SAVE UP TO 40% OFF
          </p>
        </div>
      </div>

      <div className="container flex flex-col sm:flex-row  lg:mx-auto lg:w-full lg:p-4 md:p-4 gap-5">
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

      <Footer />
    </div>
  );
};

export default ShopPage;
