/* WARNING: THIS FILE IS GENERATED, DO NOT EDIT! */
/* eslint-disable */
import * as SchemaTypes from '../base-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type GetStatesQueryVariables = SchemaTypes.Exact<{ [key: string]: never }>;

export type GetStatesQuery = { __typename?: 'Query' } & {
  states: Array<{ __typename?: 'State' } & Pick<SchemaTypes.State, 'id' | 'name'>>;
};

export const GetStatesDocument = gql`
  query getStates {
    states {
      id
      name
    }
  }
`;

/**
 * __useGetStatesQuery__
 *
 * To run a query within a React component, call `useGetStatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStatesQuery(baseOptions?: Apollo.QueryHookOptions<GetStatesQuery, GetStatesQueryVariables>) {
  return Apollo.useQuery<GetStatesQuery, GetStatesQueryVariables>(GetStatesDocument, baseOptions);
}
export function useGetStatesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetStatesQuery, GetStatesQueryVariables>,
) {
  return Apollo.useLazyQuery<GetStatesQuery, GetStatesQueryVariables>(GetStatesDocument, baseOptions);
}
export type GetStatesQueryHookResult = ReturnType<typeof useGetStatesQuery>;
export type GetStatesLazyQueryHookResult = ReturnType<typeof useGetStatesLazyQuery>;
export type GetStatesQueryResult = Apollo.QueryResult<GetStatesQuery, GetStatesQueryVariables>;
export const ListAllOperations = {
  Query: {
    getStates: 'getStates',
  },
};
