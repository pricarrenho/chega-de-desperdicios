import Image from "next/image";
import { BigCardsProps } from "./types";
import { SectionsTitle } from "../SectionsTitle";
import Link from "next/link";

export const BigCards = ({ title, data }: BigCardsProps) => {
  return (
    <section>
      {title && <SectionsTitle title={title} />}

      <nav className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {data
          ?.map((item, index) => {
            return (
              <Link
                href={`/${item?.category?.slug}/${item.slug}`}
                className="flex flex-col gap-4 group"
                key={index}
              >
                <Image
                  src={item.bannerImage.url}
                  alt={item?.bannerDescription || ""}
                  width={250}
                  height={250}
                  className="rounded w-full h-[280px] object-center hover-image"
                />

                <div className="flex flex-col gap-1">
                  <h3 className="font-bold group-hover:text-lime-900 transition-colors text-lg">
                    {item.title}
                  </h3>
                  <p className="line-clamp-3 text-base">{item.description}</p>
                </div>
              </Link>
            );
          })
          .slice(0, 2)}
      </nav>
    </section>
  );
};
