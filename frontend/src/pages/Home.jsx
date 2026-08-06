import React from "react";
import HeroSection from "../components/HeroSection";
import IngredientPreview from "../components/IngredientPreview";
import HowItWorks from "../components/HowItWorks";

const Home = () => {
  return (
    <div className="max-w-screen bg-gradient-to-br from-[#FFFDF6] via-[#F7FBEF] to-[#ECFDF5]">
      <HeroSection />
      <IngredientPreview />
      <HowItWorks />
    </div>
  );
};

export default Home;
