import { gql } from '@apollo/client';

export const GET_VIEWER = gql`
  query GET_VIEWER {
    viewer {
      id
      name
      status
    }
  }
`;
