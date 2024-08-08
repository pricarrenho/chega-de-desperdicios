import useSWR from "swr";
import { CategoriesCards } from "@/components/CategoriesCards";
import { getPostsByCategory } from "@/service/post/getPostsbyCategory";
import { CategoryData, DataCards } from "@/types/global";

export const CategoryTemplate = ({ category }: { category: CategoryData }) => {
  const categorySlug = category?.slug as string;

  const { data } = useSWR(`/api/posts/${categorySlug}`, () =>
    getPostsByCategory(categorySlug)
  );

  const formattedData = data?.map((post) => ({
    ...post,
    category: {
      name: post.category?.name ?? "",
      slug: post.category?.slug ?? "",
    },
  })) as DataCards[];

  return (
    <div className="wrapper my-8">
      <CategoriesCards data={formattedData} title={category.name} />
    </div>
  );
};
