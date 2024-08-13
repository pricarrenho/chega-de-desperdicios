import { BigCards } from "@/components/BigCards";
import { MediumCard } from "@/components/MediumCard";
import { SmallCards } from "@/components/SmallCards";
import { TitleCard } from "@/components/TitleCard";
import { getPosts } from "@/service/post/getPosts";
import useSWR from "swr";

export const HomeTemplate = () => {
  const { data } = useSWR("/api/posts", getPosts);

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
