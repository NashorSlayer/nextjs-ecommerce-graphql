import { gql } from 'graphql-tag';

export const GetProducts = gql`
  query GetProducts {
    getProducts {
      id
      name
      price
      stock
      description
      offer
      promotion
      image
      category_id
    }
  }
`;