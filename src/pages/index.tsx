import { BigCards } from "@/components/BigCards";
import { SmallCards } from "@/components/SmallCards";
import { MediumCard } from "@/components/MediumCard";
import { Title } from "@/components/Title";

export default function Home() {
  return (
    <div>
      <div className="bg-lime-700 p-10">
        <div className="grid grid-cols-2">
          <div>Image</div>

          <div className="flex flex-col gap-3">
            <Title titleName="Chega de desperdícios" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam animi
              ea vero perspiciatis molestiae vitae quis iusto nemo, eum odio
              veniam. Sapiente itaque quia, aliquid sit quasi nulla! Amet,
              molestias.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 flex flex-col gap-14 my-8">
        <MediumCard title="receitas" />

        <SmallCards title="hortas" />

        <BigCards title="adubos" />
      </div>
    </div>
  );
}
