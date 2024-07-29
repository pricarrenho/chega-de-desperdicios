import Image from "next/image";
import Link from "next/link";
import { SectionsTitle } from "../SectionsTitle";
import { CategoriesCardsProps } from "./types";

export const CategoriesCards = ({ title, data }: CategoriesCardsProps) => {
  return (
    <section>
      {title && <SectionsTitle title={title} />}

      <nav className="grid grid-cols-1 gap-6 w-[800px]">
        {data?.map((recipe, index) => {
          return (
            <Link
              href={"/"}
              className="grid grid-cols-[2fr,4fr] gap-4 group"
              key={index}
            >
              <Image
                src={recipe.bannerImage.url}
                alt={recipe.bannerDescription}
                width={250}
                height={250}
                className="rounded w-full h-[180px] object-cover hover-image"
              />

              <div className="flex flex-col gap-1">
                <h3 className="font-bold group-hover:text-lime-900 transition-colors">
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
