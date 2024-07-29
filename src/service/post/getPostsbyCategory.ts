import { GetPostsByCategoryQuery } from "@/gql/graphql";
import { api } from "../api";
import { GET_POSTS_BY_CATEGORY } from "./queries";

export const getPostsByCategory = async (category: string) => {
  const { posts } = await api.request<GetPostsByCategoryQuery>(
    GET_POSTS_BY_CATEGORY,
    {
      category: category,
    }
  );

  return posts;
};
