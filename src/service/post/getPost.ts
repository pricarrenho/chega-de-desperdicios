import { GetPostQuery } from "@/gql/graphql";
import { api } from "../api";
import { GET_POST } from "./queries";

export const getPost = async (postSlug: string) => {
  const { post } = await api.request<GetPostQuery>(GET_POST, {
    post: postSlug,
  });

  return post;
};
