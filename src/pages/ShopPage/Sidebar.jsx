import React, { useState } from "react";

const Sidebar = ({
  categories,
  selectedCard,
  setSelectedCard,
  setSearchTerm,
  setSelectedPriceRange,
}) => {
  return (
    <div className="w-1/5 p-3 h-screen border-5 rounded-lg bg-gray-100">
      <h1 className="text-2xl font-semibold mb-5 border-b-2">Store</h1>
      <section>
        <input
          type="text"
          className="border-1 rounded-lg px-2 sm:mb-0  w-5 md:w-full h-10"
          placeholder="Search product"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="mb-2  mt-5">
          <h2 className="text-xl font-semibold mt-3">Categories</h2>
        </div>

        {categories.map((item) => (
          <label key={item} className="block mb-1">
            <input
              type="radio"
              name="category"
              value={item}
              checked={selectedCard === item}
              onChange={() => {
                setSelectedCard(item);
              }}
              className="mr-2"
            />
            <span
              className={selectedCard === item ? "text-black" : "text-gray-400"}
            >
              {item}
            </span>
          </label>
        ))}

        <div className="mb-2  mt-5">
          <h2 className="text-xl font-semibold ">Price</h2>
        </div>

        <div className="relative">
          <label className="block mb-1">
            <input
              type="radio"
              name="price"
              onChange={() => setSelectedPriceRange([0, 100])}
            />
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6"></span>
            0-100$
          </label>
          <label className="block mb-1">
            <input
              type="radio"
              name="price"
              onChange={() => setSelectedPriceRange([100, 500])}
            />
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6"></span>
            100-500$
          </label>
          <label className="block mb-1">
            <input
              type="radio"
              name="price"
              onChange={() => setSelectedPriceRange([500, 1000])}
            />
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6"></span>
            500-1000$
          </label>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
