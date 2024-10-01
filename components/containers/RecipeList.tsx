import React from 'react';
import recipes from '@/public/data/recipes.json'; // Adjust the path as necessary
import RecipeItem from './RecipeItem';

export default function RecipeList({ category = '' }) {
    const filteredRecipes = category 
        ? recipes.filter(recipe => recipe.category.toLowerCase() === category.toLowerCase()) 
        : recipes;

    return (
        <div className="container mx-auto p-4">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredRecipes.map((recipe) => (
                    <RecipeItem key={recipe.id} recipe={recipe} />
                ))}
            </ul>
        </div>
    );
}