import { GetStaticProps } from "next";
import { getCategories } from "@/service/category/getCategories";
import { getCategory } from "@/service/category/getCategory";
import { SectionsTitle } from "@/components/SectionsTitle";
import { CategoryTemplate } from "@/templates/Category";

export default function Category({ category }: any) {
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
  const categorySlug = params?.category as string;

  const category = await getCategory(categorySlug);

  const currentCategory = `/api/post/${categorySlug}`;

  return {
    props: {
      fallback: {
        [currentCategory]: category,
      },
      category,
    },
  };
};
