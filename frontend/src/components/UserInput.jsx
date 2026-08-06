import { useContext } from "react";
import generateRecipe from "../assets/images/generateRecipe.png";
import { ChefHat } from "lucide-react";
import { RecipeContext } from "../context/RecipeContext";

const UserInput = () => {
  const { ingredients, setIngredients, loading, handleGenerate } =
    useContext(RecipeContext);
  return (
    <section className="bg-white rounded-[32px] shadow-xl border border-slate-200 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left */}

        <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-sm">
            <ChefHat size={18} />
            AI Recipe Generator
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl xl:text-6xl font-black leading-tight text-slate-900">
            Turn Your Ingredients Into
            <span className="block text-emerald-600">Delicious Recipes</span>
          </h1>

          <p className="mt-6 text-slate-500 text-base sm:text-lg leading-8 max-w-xl">
            Enter the ingredients available in your kitchen and let AI generate
            multiple recipes with smart ingredient swaps, scalable servings, and
            step-by-step cooking instructions.
          </p>

          <textarea
            rows={6}
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Example: Tomato, Onion, Cheese, Rice..."
            className="mt-8 w-full rounded-2xl border-2 border-slate-200 bg-slate-50 p-5 resize-none outline-none transition-all duration-300 focus:border-emerald-500 focus:bg-white"
          />

          <button
            onClick={handleGenerate}
            className="mt-6 w-full sm:w-fit bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg transition-all duration-300"
          >
            {loading ? "Generating..." : "Generate Recipes"}
          </button>
        </div>

        {/* Right */}

        <div className="bg-gradient-to-br from-emerald-50 via-lime-50 to-orange-50 flex justify-center items-center p-6 sm:p-10">
          <img
            src={generateRecipe}
            alt="Generate Recipe"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default UserInput;
