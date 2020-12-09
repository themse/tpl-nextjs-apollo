/* eslint-disable */
import { gql } from '@apollo/client';
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
  id?: Maybe<Scalars['ID']>;
  login: Scalars['String'];
  avatar_url: Scalars['String'];
};

export type Query = {
  getUsers: Array<Maybe<User>>;
  getUser: User;
};

export type QueryGetUserArgs = {
  name?: Maybe<Scalars['String']>;
};

export type Mutation = {
  updateViewer?: Maybe<User>;
};

export type Get_UsersQueryVariables = Exact<{ [key: string]: never }>;

export type Get_UsersQuery = {
  getUsers: Array<Maybe<Pick<User, 'id' | 'login' | 'avatar_url'>>>;
};

export type Get_UserQueryVariables = Exact<{
  name: Scalars['String'];
}>;

export type Get_UserQuery = {
  getUser: Pick<User, 'id' | 'login' | 'avatar_url'>;
};

export const Get_UsersDocument = gql`
  query GET_USERS {
    getUsers {
      id
      login
      avatar_url
    }
  }
`;

/**
 * __useGet_UsersQuery__
 *
 * To run a query within a React component, call `useGet_UsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGet_UsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGet_UsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGet_UsersQuery(
  baseOptions?: Apollo.QueryHookOptions<Get_UsersQuery, Get_UsersQueryVariables>
) {
  return Apollo.useQuery<Get_UsersQuery, Get_UsersQueryVariables>(
    Get_UsersDocument,
    baseOptions
  );
}
export function useGet_UsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Get_UsersQuery,
    Get_UsersQueryVariables
  >
) {
  return Apollo.useLazyQuery<Get_UsersQuery, Get_UsersQueryVariables>(
    Get_UsersDocument,
    baseOptions
  );
}
export type Get_UsersQueryHookResult = ReturnType<typeof useGet_UsersQuery>;
export type Get_UsersLazyQueryHookResult = ReturnType<
  typeof useGet_UsersLazyQuery
>;
export type Get_UsersQueryResult = Apollo.QueryResult<
  Get_UsersQuery,
  Get_UsersQueryVariables
>;
export const Get_UserDocument = gql`
  query GET_USER($name: String!) {
    getUser(name: $name) {
      id
      login
      avatar_url
    }
  }
`;

/**
 * __useGet_UserQuery__
 *
 * To run a query within a React component, call `useGet_UserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGet_UserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGet_UserQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGet_UserQuery(
  baseOptions: Apollo.QueryHookOptions<Get_UserQuery, Get_UserQueryVariables>
) {
  return Apollo.useQuery<Get_UserQuery, Get_UserQueryVariables>(
    Get_UserDocument,
    baseOptions
  );
}
export function useGet_UserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Get_UserQuery,
    Get_UserQueryVariables
  >
) {
  return Apollo.useLazyQuery<Get_UserQuery, Get_UserQueryVariables>(
    Get_UserDocument,
    baseOptions
  );
}
export type Get_UserQueryHookResult = ReturnType<typeof useGet_UserQuery>;
export type Get_UserLazyQueryHookResult = ReturnType<
  typeof useGet_UserLazyQuery
>;
export type Get_UserQueryResult = Apollo.QueryResult<
  Get_UserQuery,
  Get_UserQueryVariables
>;
export const ListAllOperations = {
  Query: {
    GET_USERS: 'GET_USERS',
    GET_USER: 'GET_USER',
  },
};
