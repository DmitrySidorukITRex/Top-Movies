import { Movie } from './movie';

export interface Director {
  id: string;
  name: string;
  age: string;
  imgSrc: string;
  born: string;
  bornPlace: string;
  career: string;
  genres: string;
  height: number;
  imdbSrc: string;
  moviesCount: number;
  moviesYears: string;
  movies: Movie[];
}
