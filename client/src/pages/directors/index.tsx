import { NextPage } from 'next';
import Head from 'next/head';
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
  const { data } = useQuery(GET_DIRECTORS);
  const router = useRouter();
  const directors: Director[] = data.directors;

  const onDirectorClick = (director: Director) => {
    router.push(`/directors/${director.id}`);
  };

  return (
    <>
      <Head>
        <title>Top Directors</title>
        <meta name="description" content="Here are the best directors" />
      </Head>
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
    </>
  );
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
