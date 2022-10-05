import React from 'react';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import MovieCard from '../../components/MovieCard';
import { Movie } from '../../interfaces/movie';
import { GET_MOVIES } from '../../services/movies';
import * as Styled from './styled';

interface PageLayoutProps {}

const MoviesPageLayout: React.FC<PageLayoutProps> = () => {
  const { data } = useQuery(GET_MOVIES);
  const router = useRouter();
  const movies: Movie[] = data.movies;

  const onMovieClick = (movie: Movie) => {
    router.push(`movies/${movie.id}`);
  };

  return (
    <Styled.Layout>
      {movies.map((movie) => {
        return (
          <MovieCard key={movie.id} movie={movie} onCardClick={onMovieClick} />
        );
      })}
    </Styled.Layout>
  );
};

export default MoviesPageLayout;
