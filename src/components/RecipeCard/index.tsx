import Image from "next/image";
import imageRecipe from "../../assets/images/image_teste_receitas.jpg";
import { RecipeCardProps } from "./types";

const recipesMock: RecipeCardProps[] = [
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

export const RecipeCard = () => {
  return (
    <div className="flex gap-6">
      {recipesMock.map((recipe) => {
        return (
          <div className="flex flex-col gap-4">
            <Image
              src={recipe.image}
              alt={recipe.imageDescription}
              width={250}
              height={250}
              className="rounded w-full h-[180px] object-cover"
            />

            <div className="pb-4 flex flex-col gap-1">
              <h2 className="text-lime-800 font-bold">{recipe.title}</h2>
              <p className="line-clamp-3 text-sm">{recipe.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
