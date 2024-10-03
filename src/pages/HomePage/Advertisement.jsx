import React from "react";
import GirlAdv from "../../asserts/images/woman.webp";
import Jewelry from "../../asserts/images/jewelry.webp";
import Boy from "../../asserts/images/boy.webp";
import { Link } from "react-router-dom";

const Advertisement = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 h-auto md:h-[500px]">
        <div className="relative group flex w-full h-auto md:h-full">
          <img
            src={GirlAdv}
            alt="Design 1"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
            <h2 className="text-lg font-semibold ">NEW DESIGN</h2>
            <p className="text-sm">SEND HER YOUR LOVE</p>
            <Link to="/" className="mt-2 text-sm underline">
              Get it now
            </Link>
          </div>
        </div>

        <div className="relative group w-full h-auto md:h-full md:col-start-1 md:row-start-2">
          <img
            src={Jewelry}
            alt="Design 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
            <h2 className="text-lg font-semibold">NEW DESIGN</h2>
            <p className="text-sm">SEND HER YOUR LOVE</p>
            <Link to="/" className="mt-2 text-sm underline">
              Get it now
            </Link>
          </div>
        </div>

        <div className="relative group w-full h-auto md:h-full md:row-span-2 md:col-start-2 md:row-start-1">
          <img
            src={Boy}
            alt="Men's Fashion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
            <h2 className="text-lg font-semibold">MEN'S FASHION</h2>
            <p className="text-sm">MID SEASON SALE</p>
            <Link to="/" className="mt-2 text-sm underline">
              View Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
