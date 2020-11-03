import { ApolloClient, NormalizedCacheObject } from '@apollo/client/core';
import { useMemo } from 'react';
import { cache } from './cache';
import { ResolverContext } from './types';

let globalApolloClient: ApolloClient<NormalizedCacheObject> | undefined;

const createIsomorphLink = (context: ResolverContext = {}) => {
  if (typeof window === 'undefined') {
    const { SchemaLink } = require('@apollo/client/link/schema');
    const { schema } = require('./schema');

    return new SchemaLink({ schema, context });
  }

  const { HttpLink } = require('@apollo/client/link/http');
  return new HttpLink({ uri: '/api/graphql', credentials: 'same-origin' });
};

const createApolloClient = (context?: ResolverContext) => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createIsomorphLink(context),
    cache,
  });
};

export const initializeApollo = (
  initialState: any = null,
  // Pages with Next.js data fetching methods, like `getStaticProps`, can send
  // a custom context which will be used by `SchemaLink` to server render pages
  context?: ResolverContext
): ApolloClient<NormalizedCacheObject> => {
  const apolloClient: ApolloClient<NormalizedCacheObject> =
    globalApolloClient ?? createApolloClient(context);

  // hydration
  if (initialState) {
    apolloClient.cache.restore(initialState);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') {
    return apolloClient;
  }
  // Create the Apollo Client once in the client
  if (!globalApolloClient) {
    globalApolloClient = apolloClient;
  }

  return apolloClient;
};

export const useApollo = (
  initialState: any
): ApolloClient<NormalizedCacheObject> =>
  useMemo(() => initializeApollo(initialState), [initialState]);
