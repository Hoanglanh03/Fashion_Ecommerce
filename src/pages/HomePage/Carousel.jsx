import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProductALL } from "../../api/apiService";
import Card from "../../components/Card";

const Carousel = () => {
  const [selectedCard, setSelectedCard] = useState("null");
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [data, setData] = useState([]);

  const updateItemsPerPage = () => {
    if (window.innerWidth < 640) {
      setItemsPerPage(1);
    } else if (window.innerWidth < 1024) {
      setItemsPerPage(2);
    } else {
      setItemsPerPage(4);
    }
  };

  const filteredProducts = data.filter(
    (card) => card.category === selectedCard
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchProductALL();
      setData(response);

      const allCategories = [...new Set(response.map((ele) => ele.category))];

      setCategories(allCategories);
      setSelectedCard(allCategories[0]);
    };
    fetchData();
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  return (
    <div>
      <div className="container flex justify-center gap-10 mx-auto align-center">
        {categories.map((item) => (
          <button
            key={item}
            className={`text-xs md:text-sm lg:text-lg  bg-white hover:text-gray-500 ${
              selectedCard === item ? "text-black" : "text-gray-400"
            }`}
            onClick={() => {
              console.log("Selected item:", item);
              setSelectedCard(item);
              setCurrentPage(0);
            }}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="container flex justify-center gap-5 mt-5 mb-2 mx-auto ">
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
