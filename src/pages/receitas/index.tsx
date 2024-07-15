import { MediumCard } from "@/components/MediumCard";
import { SectionsTitle } from "@/components/SectionsTitle";

export default function Receitas() {
  return (
    <div className="container mx-auto px-4 flex flex-col my-8">
      <SectionsTitle title="Receitas" />

      <MediumCard />
    </div>
  );
}
