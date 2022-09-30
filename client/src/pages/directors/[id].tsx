import { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import DirectorDetailsLayout from '../../containers/DirectorDetailsLayout';
import { Director } from '../../interfaces/director';
import { Movie } from '../../interfaces/movie';
import { getDirector, getDirectors } from '../../services/directors';

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

// HERE IS SSR

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

// HERE IS SSG

// export const getStaticPaths = async () => {
//   const { data } = await getDirectors();

//   const paths = data.directors.map((director: Director) => ({
//     params: { id: director.id },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps = async (context) => {
//   try {
//     const { id } = context.params as ParsedUrlQuery;
//     const { data } = await getDirector(id as string);

//     return {
//       props: {
//         director: data.director,
//       },
//     };
//   } catch (err) {
//     return {
//       props: {
//         director: {},
//       },
//     };
//   }
// };

export default DirectorDetails;
