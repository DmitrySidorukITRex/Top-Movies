import { NextPage } from 'next';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { initializeApollo } from '../../../apollo-client';
import DirectorCard from '../../components/DirectorCard';
import PageLayout from '../../containers/PageLayout';
import { Director } from '../../interfaces/director';
import { GET_DIRECTORS } from '../../services/directors';

interface DirectorsProps {
  directors: Director[];
}

const Directors: NextPage<DirectorsProps> = () => {
  const { loading, data } = useQuery(GET_DIRECTORS, {
    fetchPolicy: 'cache-and-network',
  });
  const router = useRouter();
  const directors: Director[] = data?.directors;

  const onDirectorClick = (director: Director) => {
    router.push(`/directors/${director.id}`);
  };

  if (loading && !data) {
    return <h1>Loading...</h1>;
  }

  return (
    <PageLayout>
      {directors.map((director) => {
        return (
          <DirectorCard
            key={director.id}
            director={director}
            onCardClick={onDirectorClick}
          />
        );
      })}
    </PageLayout>
  );
};

// export const getStaticProps = async () => {
//   const apolloClient = initializeApollo();

//   await apolloClient.query({
//     query: GET_DIRECTORS,
//   });

//   return {
//     props: {
//       initialApolloState: apolloClient.cache.extract(),
//     },
//   };
// };

export default Directors;
