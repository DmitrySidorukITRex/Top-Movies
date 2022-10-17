import Image from 'next/image';
import React, { useMemo } from 'react';
import MovieCard from '../../components/MovieCard';
import { GET_DIRECTOR } from '../../services/directors';
import { Director } from '../../interfaces/director';
import { Movie } from '../../interfaces/movie';
import { getFieldsInfo } from './helper';
import * as Styled from './styled';

interface DirectorDetailsLayoutProps {
  director: Director;
  onMovieClick: (movie: Movie) => void;
}

const DirectorDetailsLayout: React.FC<DirectorDetailsLayoutProps> = ({
  director,
  onMovieClick,
}) => {
  const { name, imgSrc, imdbSrc, movies } = director;

  const info = useMemo(() => getFieldsInfo(director), [director]);

  return (
    <Styled.Layout>
      <Styled.Director>
        <Image
          unoptimized
          width={280}
          height={420}
          src={imgSrc}
          alt="director image"
        />
        <Styled.Info>
          <Styled.Title data-testid="title">{name}</Styled.Title>
          {info.map((item) => {
            return (
              <Styled.InfoItem key={item.value}>
                <Styled.Field>{item.key}</Styled.Field>
                {item.value}
              </Styled.InfoItem>
            );
          })}
          <Styled.InfoItem>
            <Styled.Field className="link">
              <a href={imdbSrc} target={'_blank'} rel="noreferrer">
                Read More
              </a>
            </Styled.Field>
          </Styled.InfoItem>
        </Styled.Info>
      </Styled.Director>
      <Styled.Title>Top Movies</Styled.Title>
      <Styled.Movies>
        {movies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              onCardClick={onMovieClick}
            />
          );
        })}
      </Styled.Movies>
    </Styled.Layout>
  );
};

export default DirectorDetailsLayout;
