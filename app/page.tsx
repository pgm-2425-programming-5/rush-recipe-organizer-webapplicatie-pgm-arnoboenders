import Button from "@/components/common/Button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 md:mb-8 text-center">
        Organiseer je favoriete recepten!
      </h1>
      <Button href="/recipes">Go to recipes</Button>
    </div>
  );
}
