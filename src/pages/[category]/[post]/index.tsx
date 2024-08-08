import { getPost } from "@/service/post/getPost";
import { getPosts } from "@/service/post/getPosts";
import { PostTemplate } from "@/templates/Post";
import { GetStaticProps } from "next";

export default function Post({ post }: { post: string }) {
  return <PostTemplate post={post} />;
}

export async function getStaticPaths() {
  const posts = await getPosts();

  const paths = posts.map((post) => {
    const category = post.category?.slug || "";

    return {
      params: { post: post.slug, category: category },
    };
  });

  return { paths, fallback: true };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const paramPost = params?.post as string;

  const post = await getPost(paramPost);

  const currentPost = `/api/post/${paramPost}`;

  return {
    props: {
      fallback: {
        [currentPost]: post,
      },
      post: paramPost,
    },
  };
};
