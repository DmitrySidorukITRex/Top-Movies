import { gql } from '@apollo/client';

export const GET_MOVIES = gql`
  query GetMovies {
    movies {
      id
      name
      genre
      rate
      year
      imgSrc
    }
  }
`;

export const GET_MOVIE = gql`
  query movieQuery($id: ID) {
    movie(id: $id) {
      id
      name
      genre
      rate
      year
      imgSrc
      trailerId
      description
      director {
        id
        name
      }
    }
  }
`;
