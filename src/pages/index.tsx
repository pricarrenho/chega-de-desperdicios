import { TitleCard } from "@/components/TitleCard";
import { BigCards } from "@/components/BigCards";
import { SmallCards } from "@/components/SmallCards";
import { MediumCard } from "@/components/MediumCard";

export default function Home() {
  return (
    <div>
      <TitleCard />

      <div className="container mx-auto px-4 flex flex-col gap-14 my-8">
        <MediumCard title="receitas" />

        <SmallCards title="hortas" />

        <BigCards title="adubos" />
      </div>
    </div>
  );
}
