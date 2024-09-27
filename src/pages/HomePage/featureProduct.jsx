import React, { useState, useEffect } from "react";
import Card from "../../layout/card";
import { Link } from "react-router-dom";
import axios from "axios";

const FeatureProduct = () => {
  const [data, setData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (error) {
        alert("Error:", error);
      }
    };
    fetchData();
  }, []);

  const loadMore = () => {
    setVisibleCount((visibleCount) => visibleCount + 4);
  };
  return (
    <div>
      <div className="listCard">
        {data.slice(0, visibleCount).map((card) => (
          <div key={card.id} className="Card">
            <Link to={`/shop/${card.id}`}>
              <Card
                image={card.image}
                title={card.title}
                price={card.price}
                description={card.description}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureProduct;
