import useSWR from "swr";
import { CategoriesCards } from "@/components/CategoriesCards";
import { getPostsByCategory } from "@/service/post/getPostsbyCategory";
import { CategoryData, DataCards } from "@/types/global";

export const CategoryTemplate = ({ category }: { category: CategoryData }) => {
  const categorySlug = category?.slug as string;

  const { data } = useSWR(`/api/posts/${categorySlug}`, () =>
    getPostsByCategory(categorySlug)
  );

  return (
    <div className="wrapper mb-12 mt-8 md:mt-12 md:mb-16">
      <CategoriesCards data={data} title={category.name} />
    </div>
  );
};
