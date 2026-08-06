import React from "react";

const EmptyResponse = () => {
  return (
    <div className="mt-10 bg-white rounded-3xl border border-slate-200 shadow-lg p-10">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold text-slate-800 mt-8">
          No Recipes Generated
        </h2>
        <p className="mt-3 text-slate-500 text-center max-w-lg">
          Add your ingredients above and click
          <span className="font-semibold text-emerald-600">
            {" "}
            Generate Recipes
          </span>
          to get AI-generated recipes.
        </p>
      </div>
    </div>
  );
};

export default EmptyResponse;
