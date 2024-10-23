import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Heart, BaggageClaim } from "lucide-react";
import Header from "../../components/header";
import Card from "../../components/Card";

const ProductPage = ({ data }) => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        if (response.status === 200) {
          setProduct(response.data);
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
    fetchData();
  }, [id]);

  console.log(product);
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <section className="container mx-auto py-8 mt-24 bg-white rounded-md md:py-8 dark:bg-gray-800 mb-10">
        <div className="container px-4 mx-auto 2xl:px-0">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
              <img
                className="w-60 md:w-72 lg:w-96 dark:block rounded-md mx-auto"
                src={product.image}
                alt={product.title}
              />
            </div>

            <div className="mt-6 sm:mt-8 lg:mt-0">
              <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                {product.title}
              </h1>
              <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                  {product.price} $
                </p>
              </div>

              <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                <Link
                  to="/#"
                  className="flex gap-1 items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  <Heart />
                  Add to favorites
                </Link>

                <Link
                  to="/#"
                  className="text-white gap-2 mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
                >
                  <BaggageClaim />
                  Add to cart
                </Link>
              </div>

              <hr className="my-6 md:my-4 border-gray-200 dark:border-gray-400" />
              <p className="text-gray-500 dark:text-gray-400">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto">
        <h3>
          Related Products{" "}
          <hr className="my-6 md:my-4 border-gray-200 dark:border-gray-400" />
        </h3>
      </div>
    </>
  );
};

export default ProductPage;
