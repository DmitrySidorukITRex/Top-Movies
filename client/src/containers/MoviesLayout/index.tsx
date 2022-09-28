import React from 'react';
import MovieCard from '../../components/MovieCard';
import { Movie } from '../../interfaces/movie';
import * as Styled from './styled';

interface MoviesLayoutProps {
  movies: Movie[];
}

const MoviesLayout: React.FC<MoviesLayoutProps> = ({ movies }) => {
  return (
    <Styled.Layout>
      {movies.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </Styled.Layout>
  );
};

export default MoviesLayout;
