import type { NextPage } from 'next';
import MoviesLayout from '../containers/MoviesLayout';
import { Movie } from '../interfaces/movie';
import { getMovies } from '../services/movies';

interface MoviesPageProps {
  movies: Movie[];
}

const Movies: NextPage<MoviesPageProps> = ({ movies }) => {
  return <MoviesLayout movies={movies} />;
};

export async function getStaticProps() {
  try {
    const { data } = await getMovies();

    return {
      props: {
        movies: data.movies || [],
      },
    };
  } catch (err) {
    return {
      props: {
        movies: [],
      },
    };
  }
}

export default Movies;
