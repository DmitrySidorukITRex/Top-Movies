import { NextPage } from 'next';
import { useRouter } from 'next/router';
import DirectorCard from '../../components/DirectorCard';
import PageLayout from '../../containers/PageLayout';
import { Director } from '../../interfaces/director';
import { getDirectors } from '../../services/directors';

interface DirectorsProps {
  directors: Director[];
}

const Directors: NextPage<DirectorsProps> = ({ directors }) => {
  const router = useRouter();

  const onDirectorClick = (director: Director) => {
    router.push(`/directors/${director.id}`);
  };

  return (
    <PageLayout>
      {directors?.length ? (
        directors.map((director) => {
          return (
            <DirectorCard
              key={director.id}
              director={director}
              onCardClick={onDirectorClick}
            />
          );
        })
      ) : (
        <h1>No directors</h1>
      )}
    </PageLayout>
  );
};

export const getStaticProps = async () => {
  try {
    const { data } = await getDirectors();

    return {
      props: {
        directors: data.directors || [],
      },
    };
  } catch (err) {
    return {
      props: {
        directors: [],
      },
    };
  }
};

export default Directors;
