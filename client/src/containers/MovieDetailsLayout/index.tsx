import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import YouTube from 'react-youtube';
import { Movie } from '../../interfaces/movie';
import { GET_MOVIE } from '../../services/movies';
import * as Styled from './styled';

const MovieDetailsLayout = () => {
  const router = useRouter();
  const { data } = useQuery(GET_MOVIE, { variables: { id: router.query.id } });
  const { name, year, rate, trailerId, genre, description, director } =
    data.movie as Movie;

  const opts = {
    height: '480',
    width: '960',
  };

  return (
    <Styled.Layout>
      <Styled.Title>{name}</Styled.Title>
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
