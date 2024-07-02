import Image from "next/image";
import imagefertilizers from "../../assets/images/image_teste_fertilizante.jpg";
import { FertilizersCardProps } from "./types";

const fertilizersMock: FertilizersCardProps[] = [
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

export const FertilizersCard = () => {
  return (
    <div className="flex gap-6">
      {fertilizersMock.map((fertilizer) => {
        return (
          <div className="flex flex-col gap-4 bg-lime-600 rounded">
            <Image
              src={fertilizer.image}
              alt={fertilizer.imageDescription}
              width={250}
              height={250}
              className="rounded-tl rounded-tr w-full h-[180px] object-cover"
            />

            <div className="px-4 pb-4 flex flex-col gap-1">
              <h2 className="text-white font-bold">{fertilizer.title}</h2>
              <p className="text-gray-100 line-clamp-3 text-sm">
                {fertilizer.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
