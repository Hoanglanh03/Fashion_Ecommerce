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
    <div className="w-full ml-5">
      <h2 className="text-xl font-semibold  p-2 border-b-2">Show product</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {filteredProducts.map((card) => (
          <div key={card.id} className="w-32  ">
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
