import React from "react";
import heroImg from "../../asserts/images/BannerHome.webp";

const HeroSection = () => {
  return (
    <div className=" relative h-auto">
      <img className="h-96 w-full md:h-full md:w-full" src={heroImg} alt="" />
      <div className=" absolute flex flex-col items-center right-1/4 inset-y-56 md:inset-y-80">
        <p className=" text-[white] cursor-pointer text-lg leading-none font-medium mx-auto ">
          new collection
        </p>
        <h1 className=" text-[white] cursor-pointer text-xl leading-none font-medium ">
          WOMEN'S FASHION
        </h1>
        <p className="text-[white] cursor-pointer text-xs leading-none font-light mx-auto ">
          SAVE UP TO 40% OFF
        </p>
        <button> SHOP NOW</button>
      </div>
    </div>
  );
};

export default HeroSection;
