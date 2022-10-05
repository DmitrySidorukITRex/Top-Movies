import { NextPage } from 'next';
import { initializeApollo } from '../../../apollo-client';
import DirectorsPageLayout from '../../containers/DirectorsPageLayout';
import { Director } from '../../interfaces/director';
import { GET_DIRECTORS } from '../../services/directors';

interface DirectorsProps {
  directors: Director[];
}

const Directors: NextPage<DirectorsProps> = () => {
  return <DirectorsPageLayout />;
};

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_DIRECTORS,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default Directors;
