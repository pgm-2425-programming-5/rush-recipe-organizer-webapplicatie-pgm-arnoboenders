'use client';
import { useState } from "react";
import Button from "@/components/common/Button";
import RecipeList from "@/components/containers/RecipeList";

export default function Recipes() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">
        Recipes
      </h1>
      <div className="mb-4 text-center">
        <label htmlFor="category" className="mr-2">Filter by Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="border rounded p-2"
        >
          <option value="">All</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="dessert">Dessert</option>
        </select>
      </div>
      <Button href="/recipes/add">Add Recipe</Button>
      <RecipeList category={selectedCategory} />
    </div>
  );
}
