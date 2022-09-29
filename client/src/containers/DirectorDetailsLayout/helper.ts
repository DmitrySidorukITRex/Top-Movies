import { Director } from '../../interfaces/director';

export const getFieldsInfo = (director: Director) => {
  const {
    career,
    height,
    born,
    age,
    bornPlace,
    genres,
    moviesCount,
    moviesYears,
  } = director;

  return [
    {
      key: 'Career',
      value: career,
    },
    {
      key: 'Height',
      value: `${height}m`,
    },
    {
      key: 'Date of Birth',
      value: `${born}, ${age} years`,
    },
    {
      key: 'Place of Birth',
      value: bornPlace,
    },
    {
      key: 'Genres',
      value: genres,
    },
    {
      key: 'Total Films',
      value: `${moviesCount}, ${moviesYears}`,
    },
  ];
};
