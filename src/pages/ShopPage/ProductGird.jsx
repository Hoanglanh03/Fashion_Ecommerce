import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card";

const ProductGird = ({
  data,
  selectedCard,
  searchTerm,
  selectedPriceRange,
}) => {
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
    <div className="w-4/5 ml-5">
      <h2 className="text-xl font-semibold  p-2 border-b-2">Show product</h2>
      <div className="w-full flex flex-wrap align-middle text-center ">
        {filteredProducts.map((card) => (
          <div key={card.id} className="w-full sm:w-1/2 md:w-1/3 mt-5">
            <Link to={`/shop/${card.id}`}>
              <Card image={card.image} title={card.title} price={card.price} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGird;
