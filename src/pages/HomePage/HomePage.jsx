import React from "react";
import Header from "../../components/header";
import HeroSection from "./HeroSection";
import Advertisement from "./Advertisement";
import Carousel from "./Carousel";
import Footer from "../../components/footer";

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <HeroSection />
      <Advertisement />
      <Carousel />
      <Footer />
    </div>
  );
};

export default HomePage;
