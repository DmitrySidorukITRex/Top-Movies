import { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import MovieDetailsLayout from '../../containers/MovieDetailsLayout';
import { Movie } from '../../interfaces/movie';
import { getMovie, getMovies } from '../../services/movies';

interface MovieDetailsPage {
  movie: Movie;
}

const MovieDetails: NextPage<MovieDetailsPage> = ({ movie }) => {
  return <MovieDetailsLayout movie={movie} />;
};

// HERE IS SSR

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;

  try {
    const { data } = await getMovie(id as string);

    return {
      props: {
        movie: data.movie,
      },
    };
  } catch (err) {
    return {
      props: {
        movie: {},
      },
    };
  }
};

// HERE IS SSG

// export const getStaticPaths = async () => {
//   const { data } = await getMovies();

//   const paths = data.movies.map((movie: Movie) => ({
//     params: { id: movie.id },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps = async (context) => {
//   try {
//     const { id } = context.params as ParsedUrlQuery;
//     const { data } = await getMovie(id as string);

//     return {
//       props: {
//         movie: data.movie,
//       },
//     };
//   } catch (err) {
//     return {
//       props: {
//         movie: {},
//       },
//     };
//   }
// };

export default MovieDetails;
