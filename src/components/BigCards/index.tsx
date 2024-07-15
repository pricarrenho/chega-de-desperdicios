import Image from "next/image";
import imagefertilizers from "../../assets/images/image_teste_fertilizante.jpg";
import { BigCardsProps } from "./types";
import { DataCards } from "@/types/global";
import { SectionsTitle } from "../SectionsTitle";

const fertilizersMock: DataCards[] = [
  {
    image: imagefertilizers,
    imageDescription: "Foto de uma receita",
    title: "Título Card",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
    aspernatur pariatur, et illo veritatis totam consectetur facere aut
    cumque officia reprehenderit dolore recusandae, quas unde
    voluptatibus non. Error, nihil rerum?`,
  },
  {
    image: imagefertilizers,
    imageDescription: "Foto de uma receita",
    title: "Título Card",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
    aspernatur pariatur, et illo veritatis totam consectetur facere aut
    cumque officia reprehenderit dolore recusandae, quas unde
    voluptatibus non. Error, nihil rerum?`,
  },
];

export const BigCards = ({ title }: BigCardsProps) => {
  return (
    <section>
      {title && <SectionsTitle title={title} />}

      <nav>
        {fertilizersMock.map((fertilizer) => {
          return (
            <div className="flex flex-col gap-4 rounded">
              <Image
                src={fertilizer.image}
                alt={fertilizer.imageDescription}
                width={250}
                height={250}
                className="rounded w-full h-[200px] object-cover"
              />

              <div className="flex flex-col gap-1">
                <h3 className="font-bold">{fertilizer.title}</h3>
                <p className="line-clamp-3 text-sm">{fertilizer.description}</p>
              </div>
            </div>
          );
        })}
      </nav>
    </section>
  );
};
