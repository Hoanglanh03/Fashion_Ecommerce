import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, title, price }) => {
  return (
    <div class=" lg:w-64 md:w-56 w-60 h-fit  bg-white border border-gray-200 rounded-[20px_20px_20px_20px] shadow dark:bg-white hover:drop-shadow-lg">
      <a href="#">
        <img
          className="h-[250px] w-full py-2 px-3  rounded-[20px_20px_0_0]"
          src={image}
          alt=""
        />
      </a>
      <div class="flex flex-col px-5 pb-4 gap-1 items-center justify-between bg-white rounded-[0_0_20px_20px]">
        <Link to="#">
          <h5 className=" text-lg font-semibold tracking-tight text-gray-800  line-clamp-1">
            {title}
          </h5>
        </Link>
        <span class="text-xl font-light text-gray-900 dark:text-black">
          ${price}
        </span>

        <Link
          to="#"
          className="inline-flex items-center px-4 py-2 text-xs font-bold text-center text-gray-400 bg-white rounded-3xl border-solid border-2 border-gray-300 hover:bg-orange-400 hover:text-white"
        >
          ADD TO CART
        </Link>
      </div>
    </div>
  );
};

export default Card;
