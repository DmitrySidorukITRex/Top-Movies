import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { ParsedUrlQuery } from 'querystring';
import { initializeApollo } from '../../../apollo-client';
import MovieDetailsLayout from '../../containers/MovieDetailsLayout';
import { Movie } from '../../interfaces/movie';
import { GET_MOVIE, GET_MOVIES } from '../../services/movies';

const MovieDetails: NextPage = () => {
  const router = useRouter();
  const { data } = useQuery(GET_MOVIE, {
    variables: { id: router.query.id },
  });
  const { movie } = data;

  return (
    <>
      <Head>
        <title>{movie.name + 'details'}</title>
        <meta
          name="description"
          content={'Here are ' + movie.name + ' details'}
        />
      </Head>
      <MovieDetailsLayout movie={movie} />
    </>
  );
};

export const getStaticPaths = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: GET_MOVIES,
  });

  const paths = data.movies.map((movie: Movie) => ({
    params: { id: movie.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const apolloClient = initializeApollo();

  const { id } = context.params as ParsedUrlQuery;

  await apolloClient.query({
    query: GET_MOVIE,
    variables: { id },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default MovieDetails;
