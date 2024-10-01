import React, { useState } from "react";
import Button from "../common/Button";

interface RemoveMessageProps {
  id: string;
  name: string;
  onRemove: (id: string) => void;
}

export default function RemoveMessage({
  id,
  name,
  onRemove,
}: RemoveMessageProps) {
  const [isRemoved, setIsRemoved] = useState(false);

  const handleRemove = () => {
    onRemove(id);
    setIsRemoved(true);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleRemove();
      }}
      className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 sm:p-6 lg:p-8"
    >
      <h1 className="text-xl font-semibold text-center">
        Remove recipe: {name}
      </h1>
      {isRemoved && (
        <p className="text-green-500 text-center">
          Recipe removed successfully!
        </p>
      )}
      <Button
        type="submit"
        className="w-full py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700"
      >
        Remove
      </Button>
    </form>
  );
}
