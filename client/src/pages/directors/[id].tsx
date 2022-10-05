import { GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { initializeApollo } from '../../../apollo-client';
import DirectorDetailsLayout from '../../containers/DirectorDetailsLayout';
import { Director } from '../../interfaces/director';
import { GET_DIRECTOR, GET_DIRECTORS } from '../../services/directors';

interface DirectorDetailsProps {
  director: Director;
}

const DirectorDetails: NextPage<DirectorDetailsProps> = ({ director }) => {
  return <DirectorDetailsLayout />;
};

export const getStaticPaths = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: GET_DIRECTORS,
  });

  const paths = data.directors.map((director: Director) => ({
    params: { id: director.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const apolloClient = initializeApollo();

  const { id } = context.params as ParsedUrlQuery;

  await apolloClient.query({
    query: GET_DIRECTOR,
    variables: { id },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default DirectorDetails;
