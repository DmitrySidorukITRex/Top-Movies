import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useRef } from 'react';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import MovieCard from '../../components/MovieCard';
import { initializeApollo } from '../../../apollo-client';
import PageLayout from '../../containers/PageLayout';
import { Movie } from '../../interfaces/movie';
import { GET_MOVIES } from '../../services/movies';

const Movies: NextPage = () => {
  const { data, fetchMore } = useQuery(GET_MOVIES, {
    variables: { offset: 0, limit: 15 },
  });
  const router = useRouter();
  const listInnerRef = useRef<HTMLDivElement>(null);
  const movies: Movie[] = data?.movies || [];

  useEffect(() => {
    const trackScrolling = () => {
      const el = listInnerRef.current;

      if (el) {
        if (el.getBoundingClientRect().bottom <= window.innerHeight) {
          fetchMore({ variables: { offset: movies.length } });
        }
      }
    };

    const watchScroll = () => {
      window.addEventListener('scroll', trackScrolling);
    };

    watchScroll();

    return () => {
      window.removeEventListener('scroll', trackScrolling);
    };
  }, [fetchMore, movies.length]);

  const onMovieClick = (movie: Movie) => {
    router.push(`movies/${movie.id}`);
  };

  return (
    <div ref={listInnerRef}>
      <Head>
        <title>Top Movies</title>
        <meta name="description" content="Here are the best movies" />
      </Head>
      <PageLayout>
        {movies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              onCardClick={onMovieClick}
            />
          );
        })}
      </PageLayout>
    </div>
  );
};

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_MOVIES,
    variables: { offset: 0, limit: 15 },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default Movies;
