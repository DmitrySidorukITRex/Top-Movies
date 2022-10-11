import { ApolloClient, InMemoryCache } from '@apollo/client';
import { offsetLimitPagination } from '@apollo/client/utilities';

import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import { useMemo } from 'react';

let apolloClient: ApolloClient<NormalizedCacheObject>;

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        movies: offsetLimitPagination(),
        movie: {
          read(_, { args, toReference }) {
            console.log(
              'here',
              toReference({ __typename: 'Movie', id: args!.id })
            );
            return toReference({
              __typename: 'Movie',
              id: args!.id,
            });
          },
        },
      },
    },
  },
});

function createApolloClient(): ApolloClient<NormalizedCacheObject> {
  return new ApolloClient({
    cache,
    uri: process.env.serverURI,
    ssrMode: typeof window === 'undefined',
  });
}

export function initializeApollo(
  initialState: {} | null = null
): ApolloClient<NormalizedCacheObject> {
  const _apolloClient: ApolloClient<NormalizedCacheObject> =
    apolloClient ?? createApolloClient();

  if (initialState) {
    const existingCache = _apolloClient.extract();
    // console.log('cache', { ...existingCache, ...initialState });

    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  if (typeof window === 'undefined') return _apolloClient;

  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState: {} | null) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
