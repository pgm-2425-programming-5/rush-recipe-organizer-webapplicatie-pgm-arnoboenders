"use client";
import RemoveMessage from "@/components/containers/RemoveMessage";


export default function RemoveRecipe({ params }: { params: { id: string } }) {

  const handleRemove = async (id: string) => {
    const response = await fetch(`/api/recipes/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      console.log(`Removed recipe with id ${id}`);

    } else {
      console.error("Failed to delete the recipe");
    }
  };

  return (
    <div>
      <RemoveMessage id={params.id} name="Pancakes" onRemove={handleRemove} />
    </div>
  );
}
