import React from "react";

const Loading = () => {
  return (
    <div className="mt-10 bg-white rounded-3xl border border-slate-200 shadow-lg p-12 flex flex-col items-center">
      <div className="w-14 h-14 border-[5px] border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
      <h2 className="mt-6 text-2xl font-bold text-slate-800">
        AI is generating your recipes...
      </h2>

      <p className="mt-2 text-slate-500">
        Please wait while we prepare the best recipes.
      </p>
    </div>
  );
};

export default Loading;
