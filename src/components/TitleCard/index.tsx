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
          className="w-1/2 h-full absolute object-cover"
        />

        <div className="wrapper">
          <div className="flex flex-col gap-3 p-8 justify-center w-1/2 ml-auto">
            <Title title={pageData?.title} />
            <p>{pageData?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
