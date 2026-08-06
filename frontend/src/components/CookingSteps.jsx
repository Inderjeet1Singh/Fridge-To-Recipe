import React from "react";
import { ChefHat, ListChecks } from "lucide-react";
const CookingSteps = ({ recipe }) => {
  return (
    <div className="mt-10 rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-50 to-white p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-sky-500 flex justify-center items-center">
          <ListChecks size={22} className="text-white" />
        </div>

        <div>
          <h4 className="text-xl font-bold">Steps to Make</h4>

          <p className="text-sm text-slate-500">Follow each step in order</p>
        </div>
      </div>

      <div className="space-y-4">
        {recipe.steps.map((step, index) => (
          <label
            key={index}
            className="flex items-start gap-4 bg-white border border-sky-100 rounded-2xl p-4 cursor-pointer hover:border-sky-300 transition"
          >
            <input
              type="checkbox"
              className="mt-1 w-5 h-5 accent-emerald-600"
            />

            <div className="flex-1">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-700 flex justify-center items-center text-sm font-bold">
                  {index + 1}
                </span>

                <h5 className="font-semibold">Step {index + 1}</h5>
              </div>

              <p className="mt-2 text-slate-600">{step}</p>
            </div>
          </label>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex justify-center items-center">
            <ChefHat size={22} className="text-emerald-600" />
          </div>

          <div>
            <h5 className="font-semibold">Ready to Cook</h5>

            <p className="text-sm text-slate-500">
              Complete each step and enjoy your meal.
            </p>
          </div>
        </div>

        <button className="w-full md:w-auto px-8 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition">
          Start Cooking
        </button>
      </div>
    </div>
  );
};

export default CookingSteps;
