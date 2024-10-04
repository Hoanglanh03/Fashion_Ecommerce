import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import axios from "axios";
import toast from "react-hot-toast";

const Carousel = () => {
  const [selectedType, setSelectedType] = useState("men's clothing");
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const filteredProducts = data.filter(
    (card) => card.category === selectedType
  );
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const updateItemsPerPage = () => {
    if (window.innerWidth < 640) {
      setItemsPerPage(1);
    } else if (window.innerWidth < 1024) {
      setItemsPerPage(2);
    } else {
      setItemsPerPage(4);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        if (response.status === 200) {
          setData(response.data);
        } else {
          toast.error("not contact with API");
        }
      } catch (error) {
        console.error("Error occurred while fetching data:", error);
        alert("Error:", error);
      }
    };

    fetchData();
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  return (
    <div>
      <div className="flex w-96 gap-2 m-auto align-center">
        {["men's clothing", "women's clothing", "electronics", "jewelery"].map(
          (type) => (
            <button
              key={type}
              className={`text-xm bg-white hover:text-gray-500 ${
                selectedType === type ? "text-black" : "text-gray-400"
              }`}
              onClick={() => {
                console.log("Selected Type:", type);
                setSelectedType(type);
                setCurrentPage(0);
              }}
            >
              {type}
            </button>
          )
        )}
      </div>

      <div className="container flex justify-between mt-2 mb-1">
        {filteredProducts
          .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
          .map((card) => (
            <div key={card.id} className="no-underline">
              <Link to={`/shop/${card.id}`}>
                <Card
                  image={card.image}
                  title={card.title}
                  price={card.price}
                />
              </Link>
            </div>
          ))}
      </div>

      <div className="flex justify-center mt-1 mb-3">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`mx-1 px-2 py-1 border rounded w-7 bg-gray-500  ${
              currentPage === index ? "bg-gray-950" : "bg-gray-300"
            }`}
            onClick={() => setCurrentPage(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
