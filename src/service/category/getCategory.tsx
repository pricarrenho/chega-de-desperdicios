import { GetCategoryQuery } from "@/gql/graphql";
import { api } from "../api";
import { GET_CATEGORY } from "./queries";

export const getCategory = async (categorySlug: string) => {
  const { category } = await api.request<GetCategoryQuery>(GET_CATEGORY, {
    category: categorySlug,
  });

  return category;
};
