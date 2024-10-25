import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Heart, BaggageClaim } from "lucide-react";
import Header from "../../components/header";
import Card from "../../components/Card";
import { fetchProductById, fetchProductALL } from "../../api/apiService";
import Footer from "../../components/footer";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1); // Default number of products to display

  useEffect(() => {
    const loadProductData = async () => {
      try {
        const productData = await fetchProductById(id);
        setProduct(productData);

        const relatedProductsData = await fetchProductALL(productData.category);
        setRelatedProducts(
          relatedProductsData.filter((item) => item.id !== parseInt(id))
        );
      } catch (error) {
        console.error("Error loading product and related data:", error);
      }
    };

    loadProductData();
  }, [id]);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth <= 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth <= 768) {
        setItemsPerPage(2);
      } else if (window.innerWidth <= 1024) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(4);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const showNextProducts = () => {
    if (currentIndex + itemsPerPage < relatedProducts.length) {
      setCurrentIndex((prevIndex) => prevIndex + itemsPerPage);
    }
  };

  const showPreviousProducts = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - itemsPerPage);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="container mx-auto py-4 mt-24 bg-gray-200 rounded-md md:py-8 dark:bg-white mb-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16 2xl:px-0 mx-auto p-4 bg-white">
          <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
            <img
              className="w-60 md:w-72 lg:w-96 dark:block rounded-md mx-auto"
              src={product.image}
              alt={product.title}
            />
          </div>

          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-black">
              {product.title}
            </h1>
            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
              <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-black">
                {product.price} $
              </p>
            </div>

            <div className="flex w-2/5 justify-between gap-4 mt-4 border">
              <button
                onClick={decreaseQuantity}
                className="dark:bg-white w-1/4 h-9 text-black my-0 border-current"
              >
                -
              </button>
              <span className="my-auto">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="dark:bg-white w-1/4 h-9 text-black my-0 border-current"
              >
                +
              </button>
            </div>

            <div className="sm:gap-4 sm:items-center sm:flex sm:mt-6 b">
              <Link
                to="/#"
                className="flex gap-1 items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <Heart />
                Add to favorites
              </Link>

              <Link
                to="/#"
                className="text-black gap-2 mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
              >
                <BaggageClaim />
                Add to cart
              </Link>
            </div>

            <hr className="my-6 md:my-4 border-gray-200 dark:border-gray-400" />
            <p className="text-gray-500 dark:text-gray-400 ">
              {product.description}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-black">
          Related Products
        </h3>
        <hr className="my-6 md:my-4 border-gray-200 dark:border-gray-400" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mb-8 justify-center">
          {relatedProducts
            .slice(currentIndex, currentIndex + itemsPerPage)
            .map((card) => (
              <div className="w-full flex justify-center" key={card.id}>
                <Card
                  image={card.image}
                  title={card.title}
                  price={card.price}
                />
              </div>
            ))}
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={showPreviousProducts}
            className={`bg-gray-500 text-white p-2 rounded ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={currentIndex === 0}
          >
            &lt; Previous
          </button>
          <button
            onClick={showNextProducts}
            className={`bg-gray-500 text-white p-2 rounded ${
              currentIndex + itemsPerPage >= relatedProducts.length
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            disabled={currentIndex + itemsPerPage >= relatedProducts.length}
          >
            Next &gt;
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
