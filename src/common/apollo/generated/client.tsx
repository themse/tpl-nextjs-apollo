/* eslint-disable */
import gql from 'graphql-tag';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type User = {
  id: Scalars['ID'];
  name: Scalars['String'];
  status: Scalars['String'];
};

export type Query = {
  viewer: Maybe<User>;
};

export type Mutation = {
  updateViewer: Maybe<User>;
};

export type Update_ViewerQueryVariables = Exact<{ [key: string]: never }>;

export type Update_ViewerQuery = {
  viewer: Maybe<Pick<User, 'id' | 'name' | 'status'>>;
};

export type Get_ViewerQueryVariables = Exact<{ [key: string]: never }>;

export type Get_ViewerQuery = {
  viewer: Maybe<Pick<User, 'id' | 'name' | 'status'>>;
};

export const Update_ViewerDocument = gql`
  query UPDATE_VIEWER {
    viewer {
      id
      name
      status
    }
  }
`;

/**
 * __useUpdate_ViewerQuery__
 *
 * To run a query within a React component, call `useUpdate_ViewerQuery` and pass it any options that fit your needs.
 * When your component renders, `useUpdate_ViewerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdate_ViewerQuery({
 *   variables: {
 *   },
 * });
 */
export function useUpdate_ViewerQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Update_ViewerQuery,
    Update_ViewerQueryVariables
  >
) {
  return Apollo.useQuery<Update_ViewerQuery, Update_ViewerQueryVariables>(
    Update_ViewerDocument,
    baseOptions
  );
}
export function useUpdate_ViewerLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Update_ViewerQuery,
    Update_ViewerQueryVariables
  >
) {
  return Apollo.useLazyQuery<Update_ViewerQuery, Update_ViewerQueryVariables>(
    Update_ViewerDocument,
    baseOptions
  );
}
export type Update_ViewerQueryHookResult = ReturnType<
  typeof useUpdate_ViewerQuery
>;
export type Update_ViewerLazyQueryHookResult = ReturnType<
  typeof useUpdate_ViewerLazyQuery
>;
export type Update_ViewerQueryResult = Apollo.QueryResult<
  Update_ViewerQuery,
  Update_ViewerQueryVariables
>;
export const Get_ViewerDocument = gql`
  query GET_VIEWER {
    viewer {
      id
      name
      status
    }
  }
`;

/**
 * __useGet_ViewerQuery__
 *
 * To run a query within a React component, call `useGet_ViewerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGet_ViewerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGet_ViewerQuery({
 *   variables: {
 *   },
 * });
 */
export function useGet_ViewerQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Get_ViewerQuery,
    Get_ViewerQueryVariables
  >
) {
  return Apollo.useQuery<Get_ViewerQuery, Get_ViewerQueryVariables>(
    Get_ViewerDocument,
    baseOptions
  );
}
export function useGet_ViewerLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Get_ViewerQuery,
    Get_ViewerQueryVariables
  >
) {
  return Apollo.useLazyQuery<Get_ViewerQuery, Get_ViewerQueryVariables>(
    Get_ViewerDocument,
    baseOptions
  );
}
export type Get_ViewerQueryHookResult = ReturnType<typeof useGet_ViewerQuery>;
export type Get_ViewerLazyQueryHookResult = ReturnType<
  typeof useGet_ViewerLazyQuery
>;
export type Get_ViewerQueryResult = Apollo.QueryResult<
  Get_ViewerQuery,
  Get_ViewerQueryVariables
>;
export const ListAllOperations = {
  Query: {
    UPDATE_VIEWER: 'UPDATE_VIEWER',
    GET_VIEWER: 'GET_VIEWER',
  },
};
