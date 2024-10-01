import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { Recipe } from "@/app/types/Recipe";

const filePath = path.join(process.cwd(), "data", "recipes.json");

export async function POST(req: NextRequest) {
  const newRecipe: Recipe = await req.json();

  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const recipes: Recipe[] = JSON.parse(fileContents);

    newRecipe.id = recipes.length ? recipes[recipes.length - 1].id + 1 : 1;
    recipes.push(newRecipe);

    fs.writeFileSync(filePath, JSON.stringify(recipes, null, 2));

    return NextResponse.json(newRecipe, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to save the recipe" },
      { status: 500 }
    );
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
