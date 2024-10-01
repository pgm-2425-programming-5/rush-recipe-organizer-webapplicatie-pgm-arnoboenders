import Button from "@/components/common/Button";
import RecipeList from "@/components/containers/RecipeList";

export default function Recipes() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">
        Recipes
      </h1>
      <Button href="/recipes/add">Add Recipe</Button>
      <RecipeList />
    </div>
  );
}
