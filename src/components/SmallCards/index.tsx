import Image from "next/image";
import imageGardens from "../../assets/images/image_teste_gardens.jpg";
import { SmallCardsProps } from "./types";
import { DataCards } from "@/types/global";
import { SectionsTitle } from "../SectionsTitle";

const gardensMock: DataCards[] = [
  {
    image: imageGardens,
    imageDescription: "Foto de uma receita",
    title: "Título Card",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
    aspernatur pariatur, et illo veritatis totam consectetur facere aut
    cumque officia reprehenderit dolore recusandae, quas unde
    voluptatibus non. Error, nihil rerum?`,
  },
  {
    image: imageGardens,
    imageDescription: "Foto de uma receita",
    title: "Título Card",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
    aspernatur pariatur, et illo veritatis totam consectetur facere aut
    cumque officia reprehenderit dolore recusandae, quas unde
    voluptatibus non. Error, nihil rerum?`,
  },
  {
    image: imageGardens,
    imageDescription: "Foto de uma receita",
    title: "Título Card",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
    aspernatur pariatur, et illo veritatis totam consectetur facere aut
    cumque officia reprehenderit dolore recusandae, quas unde
    voluptatibus non. Error, nihil rerum?`,
  },
  {
    image: imageGardens,
    imageDescription: "Foto de uma receita",
    title: "Título Card",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
    aspernatur pariatur, et illo veritatis totam consectetur facere aut
    cumque officia reprehenderit dolore recusandae, quas unde
    voluptatibus non. Error, nihil rerum?`,
  },
];

export const SmallCards = ({ title }: SmallCardsProps) => {
  return (
    <section>
      {title && <SectionsTitle title={title} />}

      <nav className="grid grid-cols-2 gap-6">
        {gardensMock.map((garden) => {
          return (
            <div className="flex gap-4 rounded">
              <Image
                src={garden.image}
                alt={garden.imageDescription}
                width={250}
                height={250}
                className="rounded w-full h-[90px] object-cover"
              />

              <div className="flex flex-col gap-1">
                <h3 className="font-bold">{garden.title}</h3>
                <p className="line-clamp-3 text-sm">{garden.description}</p>
              </div>
            </div>
          );
        })}
      </nav>
    </section>
  );
};
