import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import MovieCard from '../../components/MovieCard';
import PageLayout from '../../containers/PageLayout';
import { Movie } from '../../interfaces/movie';
import { getMovies } from '../../services/movies';

interface MoviesPageProps {
  movies: Movie[];
}

const Movies: NextPage<MoviesPageProps> = ({ movies }) => {
  const router = useRouter();

  const onMovieClick = (movie: Movie) => {
    router.push(`movies/${movie.id}`);
  };

  return (
    <PageLayout>
      {movies?.map((movie) => {
        return (
          <MovieCard key={movie.id} movie={movie} onCardClick={onMovieClick} />
        );
      })}
    </PageLayout>
  );
};

export const getStaticProps = async () => {
  try {
    const { data } = await getMovies();

    return {
      props: {
        movies: data.movies || [],
      },
      revalidate: 60,
    };
  } catch (err) {
    return {
      props: {
        movies: [],
      },
    };
  }
};

export default Movies;
