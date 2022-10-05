import { gql } from '@apollo/client';

export const GET_DIRECTORS = gql`
  query GetDirectors {
    directors {
      id
      name
      age
      imgSrc
    }
  }
`;

export const GET_DIRECTOR = gql`
  query directorQuery($id: ID) {
    director(id: $id) {
      name
      age
      imgSrc
      born
      bornPlace
      career
      genres
      height
      imdbSrc
      moviesCount
      moviesYears
      movies {
        id
        name
        year
        genre
        rate
        imgSrc
      }
    }
  }
`;
