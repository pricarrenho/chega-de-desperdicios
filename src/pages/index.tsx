import { FertilizersCard } from "@/components/FertilizersCard";
import { RecipeCard } from "@/components/RecipeCard";

export default function Home() {
  return (
    <div className="py-6 flex flex-col gap-6">
      <RecipeCard />
      <FertilizersCard />
    </div>
  );
}
