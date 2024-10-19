import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../asserts/images/banner.avif";

const BannerShop = () => {
  return (
    <div className=" relative h-auto md:h-96">
      <img className=" md:h-full md:w-full object-fit" src={Banner} alt="" />
      <div className=" absolute flex flex-col  items-center justify-between inset-y-2/4 ml-11  gap-2">
        <h1 className=" text-[black] cursor-pointer text-2xl md:text-4xl leading-none font-medium ">
          WOMEN'S FASHION
        </h1>
        <p className="text-[black] cursor-pointer text-xl leading-none font-light mx-auto  ">
          SAVE UP TO 40% OFF
        </p>
      </div>
    </div>
  );
};

export default BannerShop;
