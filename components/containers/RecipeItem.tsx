import { Recipe } from "@/app/types/Recipe";
import Button from "../common/Button";

export default function RecipeItem({
  recipe,
}: Readonly<{
  recipe: Recipe;
}>) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 md:p-8 lg:p-10">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
        {recipe.name}
      </h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg">
        {recipe.category}
      </p>
      <div className="flex justify-end mt-4">
        <Button href={`/recipes/${recipe.id}`}>View Recipe</Button>
      </div>
    </div>
  );
}
