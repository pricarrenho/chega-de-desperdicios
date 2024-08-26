import { TitleCardProps } from "./types";
import { Title } from "@/components/Title";
import { useEffect, useState } from "react";
import { getHomePage } from "@/service/homePage/getHomePage";
import Image from "next/image";

export const TitleCard = () => {
  const [pageData, setPageData] = useState<TitleCardProps>();

  useEffect(() => {
    getHomePage().then((result) => {
      if (result) {
        setPageData(result as TitleCardProps);
      }
    });
  }, []);

  if (!pageData) return;

  return (
    <div className="bg-lime-700">
      <div className="relative">
        <Image
          src={pageData.image.url}
          alt=""
          width={570}
          height={280}
          className="w-full h-full absolute object-cover z-0 md:w-1/2"
        />

        <div className="wrapper relative z-10 bg-black bg-opacity-70 md:bg-transparent">
          <div className="flex flex-col gap-3 py-14 px-8 justify-center md:w-1/2 md:ml-auto md:pl-16">
            <Title title={pageData?.title} />
            <p className="text-lg text-zinc-200">{pageData?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
