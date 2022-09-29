import { Director } from './director';

export interface Movie {
  id: string;
  name: string;
  genre: string;
  rate: number;
  year: number;
  imgSrc: string;
  trailerId: string;
  description: string;
  director: Director;
}
