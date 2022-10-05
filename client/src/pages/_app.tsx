import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import NextNProgress from 'nextjs-progressbar';
import { useApollo } from '../../apollo-client';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo((pageProps as any).initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <NextNProgress color="#fff" height={1} />
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
