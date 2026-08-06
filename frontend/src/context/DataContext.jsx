import { createContext, useContext } from "react";
import howItsWork1 from "../assets/images/howItsWork1.png";
import howItsWork2 from "../assets/images/howItsWork2.png";
import howItsWork3 from "../assets/images/howItsWork3.png";
import howItsWork4 from "../assets/images/howItsWork4.png";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const ingredients = [
    { name: "Tomato", color: "text-red-500" },
    { name: "Onion", color: "text-green-500" },
    { name: "Eggs", color: "text-yellow-500" },
    { name: "Cheese", color: "text-orange-400" },
    { name: "Rice", color: "text-green-500" },
  ];
  const steps = [
    {
      id: 1,
      image: howItsWork1,
      title: "Add Ingredients",
      description: "Enter everything available in your kitchen.",
      color: "bg-green-500",
      bg: "bg-green-50",
    },
    {
      id: 2,
      image: howItsWork2,
      title: "AI Generates Recipe",
      description: "Our AI analyzes your ingredients and suggests recipes.",
      color: "bg-orange-500",
      bg: "bg-orange-50",
    },
    {
      id: 3,
      image: howItsWork3,
      title: "Cook Step-by-Step",
      description: "Follow easy interactive cooking instructions.",
      color: "bg-green-500",
      bg: "bg-green-50",
    },
    {
      id: 4,
      image: howItsWork4,
      title: "Enjoy Your Meal",
      description: "Save and share your favorite recipes.",
      color: "bg-yellow-500",
      bg: "bg-yellow-50",
    },
  ];
  //   {
  //     id: 1,
  //     name: "Creamy Tomato Pasta",
  //     servings: 4,

  //     ingredients: [
  //       {
  //         name: "Tomato",
  //         quantity: 2,
  //         unit: "pcs",
  //       },
  //       {
  //         name: "Pasta",
  //         quantity: 200,
  //         unit: "g",
  //       },
  //       {
  //         name: "Cheese",
  //         quantity: 100,
  //         unit: "g",
  //       },
  //       {
  //         name: "Olive Oil",
  //         quantity: 2,
  //         unit: "tbsp",
  //       },
  //     ],

  //     swaps: [
  //       {
  //         from: "Milk",
  //         to: "Almond Milk",
  //       },
  //       {
  //         from: "Butter",
  //         to: "Olive Oil",
  //       },
  //     ],

  //     steps: [
  //       "Boil pasta until cooked.",
  //       "Cook tomatoes in olive oil.",
  //       "Mix pasta with sauce.",
  //       "Top with cheese.",
  //     ],
  //   },

  //   {
  //     id: 2,
  //     name: "Vegetable Fried Rice",
  //     servings: 3,

  //     ingredients: [
  //       {
  //         name: "Rice",
  //         quantity: 2,
  //         unit: "cups",
  //       },
  //       {
  //         name: "Carrot",
  //         quantity: 1,
  //         unit: "pc",
  //       },
  //       {
  //         name: "Capsicum",
  //         quantity: 1,
  //         unit: "pc",
  //       },
  //       {
  //         name: "Soy Sauce",
  //         quantity: 2,
  //         unit: "tbsp",
  //       },
  //     ],

  //     swaps: [
  //       {
  //         from: "Soy Sauce",
  //         to: "Tamari",
  //       },
  //       {
  //         from: "Oil",
  //         to: "Sesame Oil",
  //       },
  //     ],

  //     steps: [
  //       "Heat oil.",
  //       "Cook vegetables.",
  //       "Add rice.",
  //       "Mix with soy sauce.",
  //     ],
  //   },
  // ];
  return (
    <DataContext.Provider value={{ steps, ingredients }}>
      {children}
    </DataContext.Provider>
  );
};
