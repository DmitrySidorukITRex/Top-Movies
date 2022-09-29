import { gql } from '@apollo/client';
import client from '../../apollo-client';

export const getDirectors = () =>
  client.query({
    query: gql`
      query directorsQuery {
        directors {
          id
          name
          age
          imgSrc
        }
      }
    `,
  });

export const getDirector = (id: string) =>
  client.query({
    query: gql`
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
    `,
    variables: { id },
  });
