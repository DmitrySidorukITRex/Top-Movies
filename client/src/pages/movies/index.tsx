import type { NextPage } from 'next';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import MovieCard from '../../components/MovieCard';
import { initializeApollo } from '../../../apollo-client';
import PageLayout from '../../containers/PageLayout';
import { Movie } from '../../interfaces/movie';
import { GET_MOVIES } from '../../services/movies';

interface MoviesPageProps {
  movies: Movie[];
}

const Movies: NextPage<MoviesPageProps> = () => {
  const { data } = useQuery(GET_MOVIES, { fetchPolicy: 'cache-and-network' });
  const router = useRouter();
  const movies: Movie[] = data.movies;

  const onMovieClick = (movie: Movie) => {
    router.push(`movies/${movie.id}`);
  };

  return (
    <PageLayout>
      {movies.map((movie) => {
        return (
          <MovieCard key={movie.id} movie={movie} onCardClick={onMovieClick} />
        );
      })}
    </PageLayout>
  );
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
