import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../../asserts/images/BannerHome.webp";

const HeroSection = () => {
  return (
    <div className=" relative h-auto md:h-screen">
      <img className="h-96 w-full md:h-full md:w-full" src={heroImg} alt="" />
      <div className=" h-32 absolute flex flex-col items-center justify-between right-1/4 inset-y-56 md:inset-y-80 gap-2">
        <p className=" text-[white] cursor-pointer text-lg leading-none font-medium mx-auto ">
          new collection
        </p>
        <h1 className=" text-[white] cursor-pointer text-xl md:text-3xl leading-none font-medium ">
          WOMEN'S FASHION
        </h1>
        <p className="text-[white] cursor-pointer text-xs leading-none font-light mx-auto  ">
          SAVE UP TO 40% OFF
        </p>
        <Link
          to="/shop"
          className="w-full bg-blue-500 text-center h-8  text-white rounded-md md:hover:bg-blue-700"
        >
          SHOP NOW
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
