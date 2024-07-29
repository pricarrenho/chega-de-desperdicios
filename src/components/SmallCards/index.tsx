import Image from "next/image";
import { SmallCardsProps } from "./types";
import { SectionsTitle } from "../SectionsTitle";
import Link from "next/link";

export const SmallCards = ({ title, data }: SmallCardsProps) => {
  return (
    <section>
      {title && <SectionsTitle title={title} />}

      <nav className="grid grid-cols-2 gap-6">
        {data
          ?.map((garden, index) => {
            return (
              <Link href={"/hortas"} className="flex gap-4 group" key={index}>
                <Image
                  src={garden.bannerImage.url}
                  alt={garden.bannerDescription}
                  width={250}
                  height={250}
                  className="rounded w-full h-[90px] object-cover hover-image"
                />

                <div className="flex flex-col gap-1">
                  <h3 className="font-bold group-hover:text-lime-900 transition-colors">
                    {garden.title}
                  </h3>
                  <p className="line-clamp-3 text-sm">{garden.description}</p>
                </div>
              </Link>
            );
          })
          .slice(0, 6)}
      </nav>
    </section>
  );
};
