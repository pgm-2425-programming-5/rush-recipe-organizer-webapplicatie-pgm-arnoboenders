import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { Recipe } from "@/app/types/Recipe";

const recipesFilePath = path.join(
  process.cwd(),
  "public",
  "data",
  "recipes.json"
);

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const { id } = params;

  try {
    // Read the file asynchronously
    const fileContents = await fs.readFile(recipesFilePath, "utf8");
    let recipes: Recipe[] = JSON.parse(fileContents);

    // Check if the recipe ID is stored as a string or number in JSON and cast accordingly
    recipes = recipes.filter((recipe) => recipe.id !== id);

    // Write the updated data back asynchronously
    await fs.writeFile(
      recipesFilePath,
      JSON.stringify(recipes, null, 2),
      "utf8"
    );

    return NextResponse.json(
      { message: `Removed recipe with id ${id}` },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error handling DELETE request:", error);
    return NextResponse.json(
      { error: "Failed to delete the recipe" },
      { status: 500 }
    );
  }
}
