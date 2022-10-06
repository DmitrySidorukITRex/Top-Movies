import { ApolloClient, InMemoryCache } from '@apollo/client';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import { useMemo } from 'react';

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createApolloClient(): ApolloClient<NormalizedCacheObject> {
  return new ApolloClient({
    cache: new InMemoryCache(),
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
