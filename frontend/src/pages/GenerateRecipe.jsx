import { useState } from "react";
import UserInput from "../components/UserInput";
import RecipeOutput from "../components/RecipeOutput";
import axios from "axios";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
const GenerateRecipe = () => {
  const { handleGenerate, ingredients, setIngredients, loading, recipes } =
    useContext(RecipeContext);
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFDF6] via-[#F7FBEF] to-[#ECFDF5] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <UserInput />
        <RecipeOutput />
      </div>
    </div>
  );
};

export default GenerateRecipe;
