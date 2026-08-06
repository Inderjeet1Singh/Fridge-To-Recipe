import React, { useState } from "react";
import { ChefHat, Users } from "lucide-react";
import CookingSteps from "./CookingSteps";
import IngrendientsOfRecipe from "./IngredientsOfRecipe";
const RecipeCards = ({ recipe }) => {
  const [servings, setServings] = useState(recipe.servings);

  const increaseServing = () => {
    setServings((prev) => prev + 1);
  };

  const decreaseServing = () => {
    if (servings > 1) {
      setServings((prev) => prev - 1);
    }
  };
  return (
    <div
      key={recipe.id}
      className="bg-white rounded-[30px] border border-slate-200 shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
    >
      <div className="h-2 bg-gradient-to-r from-emerald-500 via-lime-500 to-orange-400"></div>

      <div className="p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex justify-center items-center shadow-lg flex-shrink-0">
              <ChefHat size={34} className="text-white" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 break-words">
                {recipe.name}
              </h3>

              <p className="text-slate-500 mt-1">AI Generated Recipe</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-slate-100 rounded-2xl px-5 py-4 w-full lg:w-auto justify-center">
            <Users size={20} className="text-emerald-600" />

            <span className="font-semibold text-slate-600">Servings</span>

            <button
              onClick={decreaseServing}
              className="w-9 h-9 rounded-full border border-slate-300 bg-white hover:bg-slate-100"
            >
              -
            </button>

            <span className="font-bold text-lg">{servings}</span>

            <button
              onClick={increaseServing}
              className="w-9 h-9 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              +
            </button>
          </div>
        </div>
        <IngrendientsOfRecipe recipe={recipe} servings={servings} />
        <CookingSteps recipe={recipe} />
      </div>
    </div>
  );
};

export default RecipeCards;
