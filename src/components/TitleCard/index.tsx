import { TitleCardProps } from "./types";
import { Title } from "@/components/Title";
import Image from "next/image";
import foto from "../../assets/images/teste-capa.jpg";

export const TitleCard = () => {
  return (
    <div className="bg-lime-700">
      <div className="grid grid-cols-2">
        <div>
          <Image
            src={foto}
            alt=""
            width={570}
            height={380}
            className="w-full h-full"
          />
        </div>

        <div className="flex flex-col gap-3 p-8 justify-center">
          <Title title="Chega de desperdícios" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam animi
            ea vero perspiciatis molestiae vitae quis iusto nemo, eum odio
            veniam. Sapiente itaque quia, aliquid sit quasi nulla! Amet,
            molestias.
          </p>
        </div>
      </div>
    </div>
  );
};
