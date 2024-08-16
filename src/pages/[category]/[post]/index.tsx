import { getCategories } from "@/service/category/getCategories";
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
  const posts = await getPosts();

  const currentPost = `/api/post/${paramPost}`;

  const categories = await getCategories();

  return {
    props: {
      fallback: {
        [currentPost]: post,
        "/api/categories": categories,
        "/api/posts": posts,
      },
      post: paramPost,
    },
  };
};
