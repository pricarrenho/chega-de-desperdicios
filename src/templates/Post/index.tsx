import { getPost } from "@/service/post/getPost";
import Image from "next/image";
import useSWR from "swr";
import { BsClockHistory } from "react-icons/bs";
import { Whisper } from "next/font/google";
import { CheckBox } from "@/components/CheckBox";

const whisper = Whisper({
  weight: "400",
  subsets: ["latin"],
});

const difficulties = ["Fácil", "Médio", "Difícil"];

export const PostTemplate = ({ post }: { post: string }) => {
  const { data } = useSWR(`/api/post/${post}`, () => getPost(post));

  if (!data) return;

  return (
    <main className="wrapper my-8 flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <header className="flex items-center gap-4">
          <h2 className={`${whisper.className} text-6xl`}>Receitas</h2>

          <div className="bg-[#DEF8B1] flex-1 py-3 px-6">
            <p>{data.title}</p>
          </div>
        </header>

        <div className="grid grid-cols-[2fr,1fr]">
          <article className="flex flex-col gap-8 pr-14">
            <section>
              <div className="bg-[#f3b79b] inline-block px-6 mb-2 min-w-[180px]">
                <h2 className={`${whisper.className} text-4xl`}>
                  Ingredientes
                </h2>
              </div>

              <div
                className="custom-ingredients"
                dangerouslySetInnerHTML={{
                  __html: data.ingredients?.html ?? "",
                }}
              />
            </section>

            <section>
              <div className="bg-[#f3b79b] inline-block px-6 mb-2 min-w-[180px]">
                <h2 className={`${whisper.className} text-4xl`}>Preparo</h2>
              </div>

              <div
                className="custom-preparationMethod mt-[-16px]"
                dangerouslySetInnerHTML={{
                  __html: data.preparationMethod?.html ?? "",
                }}
              />
            </section>
          </article>

          <aside className="flex flex-col gap-14 border-l-[1px] border-[#f3b79b] pl-14">
            <section>
              <div className="bg-[#f3b79b] px-6 text-center mb-2">
                <h3 className={`${whisper.className} text-4xl`}>Tempo</h3>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-center items-center gap-2">
                  <BsClockHistory />

                  <p>{data.time}</p>
                </div>

                <p className="text-center font-bold text-sm">
                  O Tempo é aproximado e pode sofrer variações
                </p>
              </div>
            </section>

            <section>
              <div className="bg-[#f3b79b]  px-6 text-center mb-2">
                <h3 className={`${whisper.className} text-4xl`}>Dificuldade</h3>
              </div>

              <div className="flex flex-col gap-1 items-center">
                <div>
                  {difficulties.map((difficulty) => (
                    <CheckBox
                      title={difficulty}
                      isChecked={difficulty === data.difficulty}
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

      <section>
        <p>----------------------------------------------------------</p>
        <h3>Veja também</h3>
        <p>CRIAR CARDS PEQUENOS AQUI</p>
      </section>
    </main>
  );
};
