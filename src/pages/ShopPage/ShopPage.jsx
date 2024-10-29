import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Command } from "lucide-react";
import { fetchProductALL } from "../../redux/api/apiService";
import { setProducts } from "../../redux/state";
import { useDispatch } from "react-redux";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Card from "../../components/Card";
import Banner from "../../asserts/images/banner.avif";

const ShopPage = () => {
  const [selectedCard, setSelectedCard] = useState("null");
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 1000]);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchProductALL();
      dispatch(setProducts({ products: response }));

      setData(response);
      const allCategories = [...new Set(response.map((ele) => ele.category))];

      setCategories(allCategories);
      setSelectedCard(allCategories[0]);
    };
    fetchData();
  }, [dispatch]);

  const filteredProducts = data.filter((card) => {
    const matchesCategory = card.category === selectedCard;
    const matchesSearch = card.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesPrice =
      card.price >= selectedPriceRange[0] &&
      card.price <= selectedPriceRange[1];
    return matchesCategory && matchesSearch && matchesPrice;
  });

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

      <div className="container flex  flex-col sm:flex-row   md:mx-auto md:w-full md:p-4 gap-5">
        <div>
          {!isOpen && (
            <button
              className="fixed z-50 p-2 rounded-full bg-black text-white lg:hidden ml-5 "
              style={{ left: "20px", top: "500px" }}
              onClick={() => setIsOpen(true)}
            >
              <Command size={24} />
            </button>
          )}

          <div
            className={`${
              isOpen
                ? "block fixed left-0 top-0 z-40 h-screen w-60 p-4 bg-gray-100 transition-transform duration-300 ease-in-out lg:static lg:translate-x-0"
                : "hidden lg:block h-screen w-60 p-4 bg-gray-100 transition-transform duration-300 ease-in-out lg:translate-x-0"
            }`}
          >
            <div className="flex justify-between items-center mb-5">
              <h1 className="text-2xl font-semibold">Store</h1>

              {isOpen && (
                <button
                  className="text-base text-white bg-black p-2 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Back
                </button>
              )}
            </div>

            <section>
              <input
                type="text"
                className="border-1 rounded-lg px-2 w-full h-10 text-base"
                placeholder="Search product"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="mb-2 mt-5">
                <h2 className="text-xl font-semibold mt-3">Categories</h2>
              </div>

              {categories.map((item) => (
                <label key={item} className="block mb-1 text-base">
                  <input
                    type="radio"
                    name="category"
                    value={item}
                    checked={selectedCard === item}
                    onChange={() => setSelectedCard(item)}
                    className="mr-2"
                  />
                  <span
                    className={
                      selectedCard === item ? "text-black" : "text-gray-400"
                    }
                  >
                    {item}
                  </span>
                </label>
              ))}

              <div className="mb-2 mt-5">
                <h2 className="text-xl font-semibold">Price</h2>
              </div>

              <div className="relative">
                <label className="block mb-1 text-base">
                  <input
                    type="radio"
                    name="price"
                    className="mr-2"
                    onChange={() => setSelectedPriceRange([0, 100])}
                  />
                  0-100$
                </label>
                <label className="block mb-1">
                  <input
                    type="radio"
                    name="price"
                    className="mr-2"
                    onChange={() => setSelectedPriceRange([100, 500])}
                  />
                  100-500$
                </label>
                <label className="block mb-1 ">
                  <input
                    type="radio"
                    name="price"
                    className="mr-2"
                    onChange={() => setSelectedPriceRange([500, 1000])}
                  />
                  500-1000$
                </label>
              </div>
            </section>
          </div>
        </div>

        <div className="w-full p-4 md:p-0 lg:p-0">
          <h2 className="text-xl font-semibold p-2 border-b-2 mt-2">
            Show product
          </h2>
          <div className="flex flex-col sm:items-center justify-center md:flex-row md:flex-wrap lg:justify-start gap-6">
            {filteredProducts.map((card) => (
              <div
                key={card.id}
                className="mt-5 w-full sm:w-auto sm:max-w-xs flex justify-center"
              >
                <Link to={`/shop/${card.id}`}>
                  <Card
                    image={card.image}
                    title={card.title}
                    price={card.price}
                    description={card.description}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShopPage;
