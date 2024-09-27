import React from "react";
import Header from "../../layout/header";
import HeroSection from "./HeroSection";
import Footer from "../../layout/footer";
import FeatureProduct from "./featureProduct";
import Card from "../../layout/card";

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default HomePage;
