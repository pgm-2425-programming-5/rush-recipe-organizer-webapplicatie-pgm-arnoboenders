"use client";
import { useState } from "react";
import Button from "../common/Button";

interface RecipeFormProps {
    name: string;
    setName: (name: string) => void;
    ingredients: string;
    setIngredients: (ingredients: string) => void;
    preparation: string;
    setPreparation: (preparation: string) => void;
    category: string;
    setCategory: (category: string) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function RecipeForm({
    name,
    setName,
    ingredients,
    setIngredients,
    preparation,
    setPreparation,
    category,
    setCategory,
    handleSubmit,
}: RecipeFormProps) {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        handleSubmit(event);
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000); // Hide the message after 3 seconds
    };

    return (
        <form onSubmit={onSubmit} className="space-y-4 max-w-lg mx-auto p-4">
            {isSubmitted && (
                <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg" role="alert">
                    Recipe submitted successfully!
                </div>
            )}
            <label className="block">
                <span className="block text-sm font-medium text-gray-700">Name</span>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
            </label>
            <label className="block">
                <span className="block text-sm font-medium text-gray-700">
                    Ingredients
                </span>
                <input
                    type="text"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
            </label>
            <label className="block">
                <span className="block text-sm font-medium text-gray-700">
                    Preparation
                </span>
                <textarea
                    value={preparation}
                    onChange={(e) => setPreparation(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
            </label>
            <label className="block">
                <span className="block text-sm font-medium text-gray-700">
                    Category
                </span>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                    <option value="">Select a category</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                    <option value="dessert">Dessert</option>
                </select>
            </label>
            <div className="flex justify-between">
                <Button type="button" href="/recipes">Cancel</Button>
                <Button type="submit">Add Recipe</Button>
            </div>
        </form>
    );
}
