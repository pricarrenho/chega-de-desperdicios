import { GetPagesQuery } from "@/gql/graphql";
import { GET_HOME_PAGE } from "./queries";
import { api } from "../api";

export const getHomePage = async () => {
  const { page } = await api.request<GetPagesQuery>(GET_HOME_PAGE, {
    slug: "home",
  });

  return page;
};
