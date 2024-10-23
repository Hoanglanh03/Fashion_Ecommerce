import React from "react";
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
    <div className="w-full p-4 md:p-0 lg:p-0 ">
      <h2 className="text-xl font-semibold  p-2 border-b-2 mt-5">
        Show product
      </h2>
      <div className="flex flex-col sm:items-center md:flex-row md:flex-wrap gap-6">
        {filteredProducts.map((card) => (
          <div
            key={card.id}
            className="mt-5 w-full sm:w-auto sm:max-w-xs flex justify-center"
          >
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
