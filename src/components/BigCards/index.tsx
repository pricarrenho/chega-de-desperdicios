import Image from "next/image";
import { BigCardsProps } from "./types";
import { SectionsTitle } from "../SectionsTitle";
import Link from "next/link";

export const BigCards = ({ title, data }: BigCardsProps) => {
  return (
    <section>
      {title && <SectionsTitle title={title} />}

      <nav className="flex gap-6">
        {data
          ?.map((fertilizer, index) => {
            return (
              <Link
                href={"/adubos"}
                className="flex flex-col gap-4 group"
                key={index}
              >
                <Image
                  src={fertilizer.bannerImage.url}
                  alt={fertilizer.bannerDescription}
                  width={250}
                  height={250}
                  className="rounded w-full h-[250px] object-cover hover-image"
                />

                <div className="flex flex-col gap-1">
                  <h3 className="font-bold group-hover:text-lime-900 transition-colors">
                    {fertilizer.title}
                  </h3>
                  <p className="line-clamp-3 text-sm">
                    {fertilizer.description}
                  </p>
                </div>
              </Link>
            );
          })
          .slice(0, 2)}
      </nav>
    </section>
  );
};
