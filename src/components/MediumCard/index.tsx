import Image from "next/image";
import imageRecipe from "../../assets/images/image_teste_receitas.jpg";
import { MediumCardProps } from "./types";
import { SectionsTitle } from "../SectionsTitle";
import { DataCards } from "@/types/global";
import Link from "next/link";

const recipesMock: DataCards[] = [
  {
    image: imageRecipe,
    imageDescription: "Foto de uma receita",
    title: "Título Card",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
    aspernatur pariatur, et illo veritatis totam consectetur facere aut
    cumque officia reprehenderit dolore recusandae, quas unde
    voluptatibus non. Error, nihil rerum?`,
  },
  {
    image: imageRecipe,
    imageDescription: "Foto de uma receita",
    title: "Título Card",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
    aspernatur pariatur, et illo veritatis totam consectetur facere aut
    cumque officia reprehenderit dolore recusandae, quas unde
    voluptatibus non. Error, nihil rerum?`,
  },
  {
    image: imageRecipe,
    imageDescription: "Foto de uma receita",
    title: "Título Card",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
    aspernatur pariatur, et illo veritatis totam consectetur facere aut
    cumque officia reprehenderit dolore recusandae, quas unde
    voluptatibus non. Error, nihil rerum?`,
  },
];

export const MediumCard = ({ title }: MediumCardProps) => {
  const transition = "transition duration-300 hover:ease-in-out";

  return (
    <section>
      {title && <SectionsTitle title={title} />}

      <nav className="flex gap-6">
        {recipesMock.map((recipe, index) => {
          return (
            <Link
              href={"/receitas"}
              className={`flex flex-col gap-4 group hover:brightness-125 ${transition}`}
              key={index}
            >
              <Image
                src={recipe.image}
                alt={recipe.imageDescription}
                width={250}
                height={250}
                className="rounded w-full h-[180px] object-cover"
              />

              <div className="flex flex-col gap-1">
                <h3
                  className={`font-bold group-hover:text-lime-900 ${transition}`}
                >
                  {recipe.title}
                </h3>
                <p className="line-clamp-3 text-sm">{recipe.description}</p>
              </div>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};
