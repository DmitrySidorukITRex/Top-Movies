import Image from 'next/image';
import React from 'react';
import { Director } from '../../interfaces/director';
import * as Styled from './styled';

interface DirectorCardProps {
  director: Director;
  onCardClick: (director: Director) => void;
}

const DirectorCard: React.FC<DirectorCardProps> = ({
  director,
  onCardClick,
}) => {
  const { name, imgSrc } = director;

  return (
    <Styled.Card>
      <Styled.Image onClick={() => onCardClick(director)}>
        <Image src={imgSrc} width={180} height={250} alt="director image" />
        <Styled.Details>Details</Styled.Details>
      </Styled.Image>
      <Styled.Title>{name}</Styled.Title>
    </Styled.Card>
  );
};

export default DirectorCard;
