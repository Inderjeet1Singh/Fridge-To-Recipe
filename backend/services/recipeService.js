import ai from "../config/gemini.js";
import recipePrompt from "../prompts/recipePrompt.js";

const generateRecipe = async (ingredients) => {
  const prompt = recipePrompt(ingredients);

  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: prompt,
  });

  let text = response.text.trim();

  // Remove markdown if Gemini returns it
  text = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
  return JSON.parse(text);
};

export default generateRecipe;
