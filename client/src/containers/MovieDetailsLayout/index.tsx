import Link from 'next/link';
import React from 'react';
import YouTube from 'react-youtube';
import { Movie } from '../../interfaces/movie';
import * as Styled from './styled';

interface MovieDetailsLayoutProps {
  movie: Movie;
}

const MovieDetailsLayout: React.FC<MovieDetailsLayoutProps> = ({ movie }) => {
  const { name, year, rate, trailerId, genre, description, director } = movie;

  const opts = {
    height: '480',
    width: '960',
  };

  return (
    <Styled.Layout>
      <Styled.Title data-testid="title">{name}</Styled.Title>
      <Styled.Subtitle>
        {year}, IMDb Rating {rate}
      </Styled.Subtitle>
      <YouTube videoId={trailerId} opts={opts} />
      <Styled.Subtitle>{genre}</Styled.Subtitle>
      <Styled.Description>
        <div>{description}</div>
        <div>
          Director &nbsp;{' '}
          <Styled.Link>
            <Link href={`/directors/${director.id}`}>{director.name}</Link>
          </Styled.Link>
        </div>
      </Styled.Description>
    </Styled.Layout>
  );
};

export default MovieDetailsLayout;
