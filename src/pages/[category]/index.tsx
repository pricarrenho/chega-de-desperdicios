import { GetStaticProps } from "next";
import { getCategories } from "@/service/category/getCategories";
import { getCategory } from "@/service/category/getCategory";
import { CategoryTemplate } from "@/templates/Category";
import { CategoryData } from "@/types/global";

export default function Category({ category }: { category: CategoryData }) {
  return <CategoryTemplate category={category} />;
}

export async function getStaticPaths() {
  const categories = await getCategories();

  const paths = categories.map((category) => ({
    params: { category: category.slug },
  }));

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const categories = await getCategories();

  const categorySlug = params?.category as string;

  const category = await getCategory(categorySlug).catch((error) => {
    console.error("Failed to fetch category:", error);
    return null;
  });

  const currentCategory = `/api/post/${categorySlug}`;

  return {
    props: {
      fallback: {
        [currentCategory]: category,
        "/api/categories": categories,
      },
      category,
    },
  };
};
