import { CategoriesCards } from "@/components/CategoriesCards";
import { getPostsByCategory } from "@/service/post/getPostsbyCategory";
import { DataCards } from "@/types/global";
import { useEffect, useState } from "react";

export const CategoryTemplate = ({ category }: any) => {
  const [data, setData] = useState<DataCards[]>();
  const categorySlug = category?.slug as string;

  useEffect(() => {
    getPostsByCategory(categorySlug).then((result) => {
      if (result) {
        setData(result as any);
      }
    });
  }, []);

  return (
    <div className="container mx-auto px-4 flex flex-col my-8">
      <CategoriesCards data={data} title={category.name} />
    </div>
  );
};
