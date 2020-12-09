import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GET_USERS {
    getUsers {
      id
      login
      avatar_url
    }
  }
`;

export const GET_USER = gql`
  query GET_USER($name: String!) {
    getUser(name: $name) {
      id
      login
      avatar_url
    }
  }
`;
