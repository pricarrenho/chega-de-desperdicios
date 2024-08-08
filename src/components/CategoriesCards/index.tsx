import Image from "next/image";
import Link from "next/link";
import { SectionsTitle } from "../SectionsTitle";
import { CategoriesCardsProps } from "./types";

export const CategoriesCards = ({ title, data }: CategoriesCardsProps) => {
  return (
    <section>
      {title && <SectionsTitle title={title} />}

      <nav className="grid grid-cols-1 gap-6 w-[800px]">
        {data?.map((item, index) => {
          return (
            <Link
              href={`/${item.category.slug}/${item.slug}`}
              className="grid grid-cols-[2fr,4fr] gap-6 group"
              key={index}
            >
              <Image
                src={item.bannerImage.url}
                alt={item.bannerDescription}
                width={250}
                height={250}
                className="rounded w-full h-[180px] object-cover hover-image"
              />

              <div className="flex flex-col gap-1">
                <h3 className="font-bold group-hover:text-lime-900 transition-colors text-lg">
                  {item.title}
                </h3>
                <p className="line-clamp-3 text-base">{item.description}</p>
              </div>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};
