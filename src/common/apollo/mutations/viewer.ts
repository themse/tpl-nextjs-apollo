import { gql } from '@apollo/client';

export const UPDATE_VIEWER = gql`
  query UPDATE_VIEWER {
    viewer {
      id
      name
      status
    }
  }
`;
