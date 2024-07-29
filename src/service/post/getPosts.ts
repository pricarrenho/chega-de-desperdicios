import { GetPostsQuery } from "@/gql/graphql";
import { api } from "../api";
import { GET_POSTS } from "./queries";

export const getPosts = async () => {
  const { posts } = await api.request<GetPostsQuery>(GET_POSTS);

  return posts;
};
