import { gql } from "graphql-request";

export const GET_HOME_PAGE = gql`
  query getPages($slug: String) {
    page(where: { slug: $slug }) {
      slug
      title
      description
      image {
        url
      }
    }
  }
`;
