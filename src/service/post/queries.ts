import { gql } from "graphql-request";

export const GET_POSTS = gql`
  query getPosts {
    posts(orderBy: createdAt_DESC) {
      id
      slug
      title
      category {
        name
        slug
      }
      bannerImage {
        url
      }
      bannerDescription
      description
    }
  }
`;
