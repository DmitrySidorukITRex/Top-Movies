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

export const getMovie = (id: string) =>
  client.query({
    query: gql`
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
    `,
    variables: { id },
  });
