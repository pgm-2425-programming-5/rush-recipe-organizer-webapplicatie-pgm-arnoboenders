import React from 'react';
import recipes from '@/data/recipes.json'; // Adjust the path as necessary
import RecipeItem from './RecipeItem';

export default function RecipeList() {
    return (
        <div className="container mx-auto p-4">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {recipes.map((recipe) => (
                    <RecipeItem key={recipe.id} recipe={recipe} />
                ))}
            </ul>
        </div>
    );
}