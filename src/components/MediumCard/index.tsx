import Image from "next/image";
import Link from "next/link";
import { SectionsTitle } from "../SectionsTitle";
import { MediumCardProps } from "./types";

export const MediumCard = ({ title, data }: MediumCardProps) => {
  return (
    <section>
      {title && <SectionsTitle title={title} />}

      <nav className="grid grid-cols-3 gap-6">
        {data
          ?.map((recipe, index) => {
            return (
              <Link
                href={"/receitas"}
                className="flex flex-col gap-4 group"
                key={index}
              >
                <Image
                  src={recipe.bannerImage.url}
                  alt={recipe.bannerDescription}
                  width={250}
                  height={250}
                  className="rounded w-full h-[180px] object-center hover-image"
                />

                <div className="flex flex-col gap-1">
                  <h3 className="font-bold group-hover:text-lime-900 transition-colors">
                    {recipe.title}
                  </h3>
                  <p className="line-clamp-3 text-sm">{recipe.description}</p>
                </div>
              </Link>
            );
          })
          .slice(0, 3)}
      </nav>
    </section>
  );
};
