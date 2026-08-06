import generateRecipe from "../services/recipeService.js";

export const getRecipe = async (req, res, next) => {
  try {
    const { ingredients } = req.body;

    if (!ingredients || ingredients.trim() === "") {
      return res.json({
        success: false,
        message: "Ingredients are required.",
      });
    }

    const data = await generateRecipe(ingredients);
    
    res.json({
      success: true,
      recipes: data.recipes,
    });
  } catch (error) {
    next(error);
  }
};
