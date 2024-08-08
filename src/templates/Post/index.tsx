import { getPost } from "@/service/post/getPost";
import useSWR from "swr";

export const PostTemplate = ({ post }: { post: string }) => {
  const { data } = useSWR(`/api/post/${post}`, () => getPost(post));

  if (!data) return;

  return (
    <div className="wrapper my-8 flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <h2 className="uppercase text-5xl">{data.title}</h2>
          <p className="mt-2 text-lg w-[720px]">{data.description}</p>
        </div>

        <div
          className="custom-content"
          dangerouslySetInnerHTML={{ __html: data.content.html }}
        />
      </div>

      <div>
        <p>----------------------------------------------------------</p>
        <h3>Veja também</h3>
        <p>CRIAR CARDS PEQUENOS AQUI</p>
      </div>
    </div>
  );
};
