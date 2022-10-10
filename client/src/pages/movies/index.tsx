import type { NextPage } from 'next';
import { useEffect, useRef } from 'react';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import MovieCard from '../../components/MovieCard';
import { initializeApollo } from '../../../apollo-client';
import PageLayout from '../../containers/PageLayout';
import { Movie } from '../../interfaces/movie';
import { GET_MOVIES } from '../../services/movies';

interface MoviesPageProps {
  movies: Movie[];
}

const Movies: NextPage<MoviesPageProps> = () => {
  const { data, fetchMore } = useQuery(GET_MOVIES, {
    variables: { offset: 0, limit: 15 },
  });
  const router = useRouter();
  const listInnerRef = useRef<HTMLDivElement>(null);
  const movies: Movie[] = data.movies;

  useEffect(() => {
    function watchScroll() {
      window.addEventListener('scroll', trackScrolling);
    }
    watchScroll();
    return () => {
      window.removeEventListener('scroll', trackScrolling);
    };
  });

  const onMovieClick = (movie: Movie) => {
    router.push(`movies/${movie.id}`);
  };

  const trackScrolling = () => {
    const el = listInnerRef.current;

    if (el) {
      if (el.getBoundingClientRect().bottom <= window.innerHeight) {
        fetchMore({ variables: { offset: movies.length } });
      }
    }
  };

  return (
    <div ref={listInnerRef}>
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

  console.log('cache', apolloClient.cache.extract());

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default Movies;
