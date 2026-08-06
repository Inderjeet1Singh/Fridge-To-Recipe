const recipePrompt = (ingredients) => `
You are an expert chef.

The user has these ingredients:

${ingredients}

Generate 5 different recipes.

Return ONLY valid JSON .

Use this exact structure:

{
  "recipes": [
    {
      "id": 1,
      "name": "Recipe Name",
      "servings": 2,
      "ingredients": [
        {
          "name": "Ingredient",
          "quantity": 2,
          "unit": "cups"
        },
        {
          "name": "Ingredient2",
          "quantity": 1,
          "unit": "letre"
        },
        .....
        ,
        {
          "name": "Ingredientn",
          "quantity": 1/2,
          "unit": "spoon"
        }
      ],
      "swaps": [
        {
          "from": "Milk",
          "to": "Almond Milk"
        }
      ],
      "steps": [
        "Step 1",
        "Step 2",
        "Step 3",
        "Step 4",
        ........
        ........
        "Step n",
      ]
    }
  ]
}

Rules:
-if the names are not for recipe and other things (like any things not relatd to food) then give empty json i.e { "recipes":[]}; 
- Return exactly 5 recipes.
- Use only the provided ingredients as much as possible (but if names spelling are incorrect then correct them).
- Suggest ingredient swaps if something is commonly substituted.
- Keep the recipes simple.
- Do not include markdown.
- Do not include explanation.
- Do not wrap the JSON inside \`\`\`.
- Return only JSON.
`;

export default recipePrompt;
