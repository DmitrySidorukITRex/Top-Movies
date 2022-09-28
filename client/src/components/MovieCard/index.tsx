import React from 'react';
import Image from 'next/image';
import { Movie } from '../../interfaces/movie';
import * as Styled from './styled';

interface MovieCard {
  movie: Movie;
}

const MovieCard: React.FC<MovieCard> = ({ movie }) => {
  return (
    <Styled.Card>
      <Styled.Poster>
        <Image
          unoptimized
          src={movie.imgSrc}
          width={180}
          height={250}
          alt="movie image"
        />
      </Styled.Poster>
      <Styled.Title>{movie.name}</Styled.Title>
      <Styled.Subtitle>
        {movie.year}, {movie.genre}
      </Styled.Subtitle>
      <Styled.Subtitle>
        IMDb Rating
        <Styled.Rate>{movie.rate}</Styled.Rate>
      </Styled.Subtitle>
    </Styled.Card>
  );
};

export default MovieCard;
