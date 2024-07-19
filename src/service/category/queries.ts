import { gql } from "graphql-request";

export const GET_CATEGORIES = gql`
  query getCategories {
    categories {
      id
      name
      slug
    }
  }
`;
