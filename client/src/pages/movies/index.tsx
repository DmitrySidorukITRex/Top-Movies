import type { NextPage } from 'next';
import { initializeApollo } from '../../../apollo-client';
import MoviesPageLayout from '../../containers/MoviesPageLayout';
import { Movie } from '../../interfaces/movie';
import { GET_DIRECTORS } from '../../services/directors';
import { GET_MOVIES } from '../../services/movies';

interface MoviesPageProps {
  movies: Movie[];
}

const Movies: NextPage<MoviesPageProps> = () => {
  return <MoviesPageLayout />;
};

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_MOVIES,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default Movies;
