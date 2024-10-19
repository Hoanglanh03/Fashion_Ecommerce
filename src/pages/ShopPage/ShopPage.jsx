import React from "react";
import Header from "../../layout/header";
import Footer from "../../layout/footer";
import BannerShop from "./BannerShop";
import Sidebar from "./Sidebar";
import ProductGird from "./ProductGird";
import Productfilter from "./Productfilter";

const ShopPage = () => {
  return (
    <div>
      <Header />
      <BannerShop />
      <Productfilter />
      <Footer />
    </div>
  );
};

export default ShopPage;
