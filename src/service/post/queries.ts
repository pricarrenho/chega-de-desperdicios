import { gql } from "graphql-request";

export const GET_POST = gql`
  query getPost($post: String) {
    post(where: { slug: $post }) {
      id
      slug
      title
      description
      category {
        name
        slug
      }
      content {
        html
      }
      ingredients {
        html
      }
      preparationMethod {
        html
      }
      bannerImage {
        url
      }
      bannerDescription
      time
      difficulty
    }
  }
`;

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

export const GET_POSTS_BY_CATEGORY = gql`
  query getPostsByCategory($category: String) {
    posts(where: { category: { slug: $category } }) {
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
