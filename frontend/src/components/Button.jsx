import React from "react";
import { Link } from "react-router-dom";
const Button = () => {
  return (
    <button className="mt-8 bg-green-600 hover:bg-green-700 transition text-white px-8 py-4 rounded-xl font-semibold shadow-lg">
      <Link to={"/generate"}>Generate Recipe</Link>
    </button>
  );
};

export default Button;
