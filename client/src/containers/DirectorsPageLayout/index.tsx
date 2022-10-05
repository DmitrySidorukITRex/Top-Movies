import React from 'react';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import * as Styled from './styled';
import { Director } from '../../interfaces/director';
import DirectorCard from '../../components/DirectorCard';
import { GET_DIRECTORS } from '../../services/directors';

const DirectorsPageLayout = () => {
  const { data } = useQuery(GET_DIRECTORS);
  const router = useRouter();
  const directors: Director[] = data.directors;

  const onDirectorClick = (director: Director) => {
    router.push(`/directors/${director.id}`);
  };

  return (
    <Styled.Layout>
      {directors.map((director) => {
        return (
          <DirectorCard
            key={director.id}
            director={director}
            onCardClick={onDirectorClick}
          />
        );
      })}
    </Styled.Layout>
  );
};

export default DirectorsPageLayout;
