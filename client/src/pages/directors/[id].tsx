import { GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { initializeApollo } from '../../../apollo-client';
import DirectorDetailsLayout from '../../containers/DirectorDetailsLayout';
import { Director } from '../../interfaces/director';
import { GET_DIRECTOR, GET_DIRECTORS } from '../../services/directors';
import { Movie } from '../../interfaces/movie';

const DirectorDetails: NextPage = () => {
  const router = useRouter();
  const { loading, data } = useQuery(GET_DIRECTOR, {
    fetchPolicy: 'cache-and-network',
    variables: { id: router.query.id },
  });

  const onMovieClick = (movie: Movie) => {
    router.push(`/movies/${movie.id}`);
  };

  if (loading && !data) {
    return <h1>Loading...</h1>;
  }

  return (
    <DirectorDetailsLayout
      director={data.director}
      onMovieClick={onMovieClick}
    />
  );
};

// export const getStaticPaths = async () => {
//   const apolloClient = initializeApollo();

//   const { data } = await apolloClient.query({
//     query: GET_DIRECTORS,
//   });

//   const paths = data.directors.map((director: Director) => ({
//     params: { id: director.id },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps = async (context) => {
//   const apolloClient = initializeApollo();

//   const { id } = context.params as ParsedUrlQuery;

//   await apolloClient.query({
//     query: GET_DIRECTOR,
//     variables: { id },
//   });

//   return {
//     props: {
//       initialApolloState: apolloClient.cache.extract(),
//     },
//   };
// };

export default DirectorDetails;
