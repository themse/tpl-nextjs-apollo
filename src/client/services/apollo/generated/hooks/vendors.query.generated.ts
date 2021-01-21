/* WARNING: THIS FILE IS GENERATED, DO NOT EDIT! */
/* eslint-disable */
import * as SchemaTypes from '../base-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type GetVendorsQueryVariables = SchemaTypes.Exact<{ [key: string]: never }>;

export type GetVendorsQuery = { __typename?: 'Query' } & {
  vendors: { __typename?: 'VendorPagination' } & {
    items: Array<
      { __typename?: 'Vendor' } & Pick<SchemaTypes.Vendor, 'id' | 'status'> & {
          profile?: SchemaTypes.Maybe<
            { __typename?: 'VendorProfile' } & Pick<SchemaTypes.VendorProfile, 'id' | 'name'>
          >;
        }
    >;
  };
};

export const GetVendorsDocument = gql`
  query getVendors {
    vendors {
      items {
        id
        status
        profile {
          id
          name
        }
      }
    }
  }
`;

/**
 * __useGetVendorsQuery__
 *
 * To run a query within a React component, call `useGetVendorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVendorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVendorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetVendorsQuery(baseOptions?: Apollo.QueryHookOptions<GetVendorsQuery, GetVendorsQueryVariables>) {
  return Apollo.useQuery<GetVendorsQuery, GetVendorsQueryVariables>(GetVendorsDocument, baseOptions);
}
export function useGetVendorsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetVendorsQuery, GetVendorsQueryVariables>,
) {
  return Apollo.useLazyQuery<GetVendorsQuery, GetVendorsQueryVariables>(GetVendorsDocument, baseOptions);
}
export type GetVendorsQueryHookResult = ReturnType<typeof useGetVendorsQuery>;
export type GetVendorsLazyQueryHookResult = ReturnType<typeof useGetVendorsLazyQuery>;
export type GetVendorsQueryResult = Apollo.QueryResult<GetVendorsQuery, GetVendorsQueryVariables>;
export const ListAllOperations = {
  Query: {
    getVendors: 'getVendors',
  },
};
