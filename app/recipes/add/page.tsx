'use client';
import RecipeForm from "@/components/containers/RecipeForm";
import { useState } from "react";

export default function AddRecipe() {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newCategory = category.charAt(0).toUpperCase() + category.slice(1);
    const newRecipe = {
      name,
      ingredients: ingredients.split(","),
      preparation,
      category: newCategory,
    };

    const response = await fetch("/api/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    });

    if (response.ok) {
      setName("");
      setIngredients("");
      setPreparation("");
      setCategory("");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">
        Add a Recipe
      </h1>
      <RecipeForm
        name={name}
        setName={setName}
        ingredients={ingredients}
        setIngredients={setIngredients}
        preparation={preparation}
        setPreparation={setPreparation}
        category={category}
        setCategory={setCategory}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
