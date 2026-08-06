import { createContext, useContext, useState } from "react";
import { DataContext } from "./DataContext";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const { sampleRecipes } = useContext(DataContext);
  const [ingredients, setIngredients] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      setRecipes(sampleRecipes);
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
