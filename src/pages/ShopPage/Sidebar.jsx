import React, { useState } from "react";
import { Command } from "lucide-react"; // Import icon

const Sidebar = ({
  categories,
  selectedCard,
  setSelectedCard,
  setSearchTerm,
  setSelectedPriceRange, // Nhận props từ App
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <button
          className="fixed z-50 p-2 rounded-full bg-black text-white lg:hidden ml-5"
          style={{ left: "20px", top: "500px" }}
          onClick={() => setIsOpen(true)}
        >
          <Command size={24} />
        </button>
      )}

      {/* <div
        className={`fixed left-0 top-0 z-40 h-screen w-60 p-4 bg-gray-100 transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full" // Sidebar sẽ mở khi isOpen là true
        }`}
      > */}
      <div
        className={`${
          isOpen
            ? "block fixed left-0 top-0 z-40 h-screen w-60 p-4 bg-gray-100 transition-transform duration-300 ease-in-out lg:static lg:translate-x-0"
            : "hidden lg:block h-screen w-60 p-4 bg-gray-100 transition-transform duration-300 ease-in-out lg:translate-x-0"
        } `}
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
                onChange={() => setSelectedPriceRange([0, 100])}
              />
              0-100$
            </label>
            <label className="block mb-1">
              <input
                type="radio"
                name="price"
                onChange={() => setSelectedPriceRange([100, 500])}
              />
              100-500$
            </label>
            <label className="block mb-1">
              <input
                type="radio"
                name="price"
                onChange={() => setSelectedPriceRange([500, 1000])}
              />
              500-1000$
            </label>
          </div>
        </section>
      </div>
    </>
  );
};

export default Sidebar;
