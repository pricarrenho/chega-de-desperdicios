import { getCategories } from "@/service/category/getCategories";
import { getPosts } from "@/service/post/getPosts";
import { HomeTemplate } from "@/templates/Home";

export default function Home() {
  return <HomeTemplate />;
}

export async function getStaticProps() {
  const categories = await getCategories();
  const posts = await getPosts();

  return {
    revalidate: 60,
    props: {
      fallback: {
        "/api/categories": categories,
        "/api/posts": posts,
      },
    },
  };
}
