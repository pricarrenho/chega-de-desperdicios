import Image from "next/image";
import useSWR from "swr";
import { BsClockHistory } from "react-icons/bs";
import { Whisper } from "next/font/google";
import { CheckBox } from "@/components/CheckBox";
import { ExtraSmallCard } from "@/components/ExtraSmallCard";
import { getPost } from "@/service/post/getPost";
import { getPosts } from "@/service/post/getPosts";

const whisper = Whisper({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const difficulties = ["Fácil", "Médio", "Difícil"];

export const PostTemplate = ({ post }: { post: string }) => {
  const { data } = useSWR(`/api/post/${post}`, () => getPost(post));
  const { data: posts } = useSWR(`/api/posts`, getPosts);

  if (!data) return;

  return (
    <main className="wrapper mb-12 mt-8 md:mt-12 md:mb-16 flex flex-col gap-20">
      <div className="flex flex-col gap-6">
        <header className="flex items-center gap-4">
          <h2 className="whisper-font text-6xl">Receita</h2>

          <div className="bg-[#DEF8B1] flex-1 py-2 px-6">
            <h1 className="text-xl">{data.title}</h1>
          </div>
        </header>

        <div className="grid grid-cols-1fr gap-10 md:grid-cols-[2fr,1fr] md:gap-0">
          <article className="flex flex-col gap-8 pr-14">
            <section>
              <div className="bg-[#f3b79b] inline-block px-6 mb-4 min-w-[180px]">
                <h2 className="whisper-font text-4xl">Ingredientes</h2>
              </div>

              <div
                className="custom-ingredients"
                dangerouslySetInnerHTML={{
                  __html: data.ingredients?.html ?? "",
                }}
              />
            </section>

            <section>
              <div className="bg-[#f3b79b] inline-block px-6 mb-4 min-w-[180px]">
                <h2 className="whisper-font text-4xl">Preparo</h2>
              </div>

              <div
                className="custom-preparationMethod"
                dangerouslySetInnerHTML={{
                  __html: data.preparationMethod?.html ?? "",
                }}
              />
            </section>
          </article>

          <aside className="flex flex-col gap-14 border-[#f3b79b] border-t-2 py-10 md:border-l-[1px] md:pl-14 md:border-y-0 md:py-0">
            <section>
              <div className="bg-[#f3b79b] px-6 text-center mb-6">
                <h3 className="whisper-font text-4xl">Tempo</h3>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-center items-center gap-2">
                  <BsClockHistory />

                  <p>{data.time}</p>
                </div>

                <p className="text-center text-sm text-slate-600">
                  O Tempo é aproximado e pode sofrer variações
                </p>
              </div>
            </section>

            <section>
              <div className="bg-[#f3b79b]  px-6 text-center mb-6">
                <h3 className="whisper-font text-4xl">Dificuldade</h3>
              </div>

              <div className="flex flex-col gap-1 items-center">
                <div>
                  {difficulties.map((difficulty) => (
                    <CheckBox
                      title={difficulty}
                      isChecked={difficulty === data.difficulty}
                      key={difficulty}
                    />
                  ))}
                </div>
              </div>
            </section>

            <Image
              src={data.bannerImage.url}
              alt={data.bannerDescription ?? ""}
              width={250}
              height={250}
              className="rounded w-[400px] h-[250px] object-cover"
            />
          </aside>
        </div>
      </div>

      <ExtraSmallCard title="Veja Mais" data={posts} />
    </main>
  );
};
