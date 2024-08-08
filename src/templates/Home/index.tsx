import { useEffect, useState } from "react";
import { BigCards } from "@/components/BigCards";
import { MediumCard } from "@/components/MediumCard";
import { SmallCards } from "@/components/SmallCards";
import { TitleCard } from "@/components/TitleCard";
import { getPosts } from "@/service/post/getPosts";
import { DataCards } from "@/types/global";

export const HomeTemplate = () => {
  const [data, setData] = useState<DataCards[]>();

  useEffect(() => {
    getPosts().then((result) => {
      if (result) {
        setData(result as DataCards[]);
      }
    });
  }, []);

  const receitas = data?.filter((item) => item.category?.slug === "receitas");
  const hortas = data?.filter((item) => item.category?.slug === "hortas");
  const adubos = data?.filter((item) => item.category?.slug === "adubos");

  return (
    <div>
      <TitleCard />

      <div className="wrapper flex flex-col gap-14 mb-16 mt-12">
        <MediumCard title="receitas" data={receitas} />

        <SmallCards title="hortas" data={hortas} />

        <BigCards title="adubos" data={adubos} />
      </div>
    </div>
  );
};
