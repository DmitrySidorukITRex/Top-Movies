import { gql } from '@apollo/client';
import client from '../../apollo-client';

export const getMovies = () =>
  client.query({
    query: gql`
      query moviesQuery {
        movies {
          id
          name
          genre
          rate
          year
          imgSrc
        }
      }
    `,
  });
