import { Link } from "react-router-dom";
import Button from "./Button";
import { ingredients } from "../data/response";
const IngredientPreview = () => {
  return (
    <section className="relative overflow-hidden py-5 ">
      <div className="absolute -top-20 left-0 w-72 h-72  blur-[120px] rounded-full opacity-40"></div>
      <div className="absolute bottom-0 left-72 w-60 h-60 bg-yellow-200 blur-[120px] rounded-full opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Side Design */}
          <div className="bg-white rounded-3xl shadow-2xl p-6 w-full max-w-sm">
            <div className="space-y-3">
              {ingredients.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3"
                >
                  <span className={`text-xl font-bold ${item.color}`}>+</span>
                  <span className="font-medium text-gray-700">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side  */}
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-gray-900">
              Ingredient Input Preview
            </h2>

            <p className="mt-5 text-lg text-gray-600 leading-8">
              Tell our AI what ingredients you have, and instantly receive
              personalized recipes with step-by-step cooking instructions,
              ingredient substitutions, and serving adjustments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientPreview;
