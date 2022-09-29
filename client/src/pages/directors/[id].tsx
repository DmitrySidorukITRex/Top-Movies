import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import DirectorDetailsLayout from '../../containers/DirectorDetailsLayout';
import { Director } from '../../interfaces/director';
import { Movie } from '../../interfaces/movie';
import { getDirector } from '../../services/directors';

interface DirectorDetailsProps {
  director: Director;
}

const DirectorDetails: NextPage<DirectorDetailsProps> = ({ director }) => {
  const router = useRouter();

  const onMovieClick = (movie: Movie) => {
    router.push(`/movies/${movie.id}`);
  };

  return (
    <DirectorDetailsLayout director={director} onMovieClick={onMovieClick} />
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;

  try {
    const { data } = await getDirector(id as string);

    return {
      props: {
        director: data.director,
      },
    };
  } catch (err) {
    return {
      props: {
        director: {},
      },
    };
  }
};

export default DirectorDetails;
