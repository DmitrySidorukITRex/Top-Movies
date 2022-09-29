import React from 'react';
import Image from 'next/image';
import { Movie } from '../../interfaces/movie';
import * as Styled from './styled';

interface MovieCard {
  movie: Movie;
  onCardClick: (movie: Movie) => void;
}

const MovieCard: React.FC<MovieCard> = ({ movie, onCardClick }) => {
  const { name, genre, year, rate, imgSrc } = movie;

  return (
    <Styled.Card>
      <Styled.Poster onClick={() => onCardClick(movie)}>
        <Image src={imgSrc} width={180} height={250} alt="movie image" />
        <Styled.Details>Details</Styled.Details>
      </Styled.Poster>
      <Styled.Title>{name}</Styled.Title>
      <Styled.Subtitle>
        {year}, {genre}
      </Styled.Subtitle>
      <Styled.Subtitle>
        IMDb Rating
        <Styled.Rate>{rate}</Styled.Rate>
      </Styled.Subtitle>
    </Styled.Card>
  );
};

export default MovieCard;
