import React from "react";
import HeroSection from "./components/HeroSection";
import Service from "./components/Service";
import Trusted from "./components/Trusted";
import FeatureProduct from "./components/FeaturedProduct";

const Home = () => {
  return (
    <>
      <HeroSection name="UNAS STORE" />
      <FeatureProduct />
      <Service />
      <Trusted />
    </>
  );
};

export default Home;
