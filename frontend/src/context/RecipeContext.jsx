import { createContext, useContext, useState } from "react";
import { DataContext } from "./DataContext";
import axios from "axios";
import { toast } from "react-toastify";
export const RecipeContext = createContext();
export const RecipeProvider = ({ children }) => {
  const [ingredients, setIngredients] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const backendUrl = import.meta.env.VITE_URL;
  const handleGenerate = async () => {
    if (!ingredients.trim()) {
      toast.error("Please enter at least one ingredient.");
      return;
    }
    try {
      setLoading(true);
      const { data } = await axios.post(`${backendUrl}/api/recipes/generate`, {
        ingredients,
      });
      if (data.recipes.length === 0) {
        toast.error("Please enter valid food ingredients only.");
        return;
      }
      setRecipes(data.recipes);
    } catch (error) {
      console.error(error);

      const status = error.response?.status;

      if (status === 503) {
        toast.error("AI service is busy. Please try again in a few moments.");
      } else if (status === 400) {
        toast.error(error.response?.data?.message || "Invalid request.");
      } else {
        toast.error(
          error.response?.data?.message ||
            "Something went wrong. Please try again.",
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <RecipeContext.Provider
      value={{
        ingredients,
        setIngredients,
        recipes,
        setRecipes,
        loading,
        handleGenerate,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
