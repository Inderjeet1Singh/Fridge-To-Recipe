import React from "react";
import { Carrot, RefreshCcw } from "lucide-react";
const SwapRecipe = ({ recipe }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
      <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex justify-center items-center">
            <Carrot size={22} className="text-white" />
          </div>

          <div>
            <h4 className="text-xl font-bold">Ingredients</h4>

            <p className="text-sm text-slate-500">Required Ingredients</p>
          </div>
        </div>

        <div className="space-y-3">
          {recipe.ingredients.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white border border-emerald-100 rounded-2xl p-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>

                <span>{item.name}</span>
              </div>

              <span>
                {item.quantity} {item.unit}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-amber-100 bg-gradient-to-br from-amber-50 to-white p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-500 flex justify-center items-center">
            <RefreshCcw size={20} className="text-white" />
          </div>

          <div>
            <h4 className="text-xl font-bold">Ingredient Swaps</h4>

            <p className="text-sm text-slate-500">Suggested Alternatives</p>
          </div>
        </div>

        <div className="space-y-3">
          {recipe.swaps.map((swap, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white border border-amber-100 rounded-2xl p-4"
            >
              <span>{swap.from}</span>

              <span className="font-semibold text-amber-600">→ {swap.to}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SwapRecipe;
