import Link from "next/link";
import Image from "next/image";
import { ExtraSmallCardProps } from "./types";

export const ExtraSmallCard = ({ title, data }: ExtraSmallCardProps) => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-lg font-bold text-lime-800">{title}</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-0">
        {data
          ?.map((item, index) => {
            return (
              <article>
                <Link
                  href={`/${item?.category?.slug}/${item.slug}`}
                  className="flex flex-col"
                  key={index}
                >
                  <Image
                    src={item.bannerImage.url}
                    alt={item.bannerDescription || ""}
                    width={250}
                    height={250}
                    className="rounded w-[242px] h-[160px] object-cover hover-image"
                  />

                  <h3 className="font-bold">{item.title}</h3>
                </Link>
              </article>
            );
          })
          .slice(0, 3)}
      </div>
    </section>
  );
};
