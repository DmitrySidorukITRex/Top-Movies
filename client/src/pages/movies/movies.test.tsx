import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { GET_MOVIES } from '../../services/movies';
import Movies from '.';

const moviesMock = [
  {
    request: {
      query: GET_MOVIES,
      variables: { offset: 0, limit: 15 },
    },
    result: {
      data: {
        movies: [
          {
            id: '6333ec55640f532414cd2f3c',
            name: 'Batman Begins',
            rate: 8.2,
            year: 2005,
            genre: 'Action, Crime, Drama',
            imgSrc:
              'https://s3.vcdn.biz/static/f/888640311/image.jpg/pt/r300x423x4',
          },
        ],
      },
    },
  },
];

describe('Movies', () => {
  it('renders without error', async () => {
    render(
      <MockedProvider mocks={moviesMock} addTypename={false}>
        <Movies />
      </MockedProvider>
    );

    expect(await screen.findByText('Batman Begins')).toBeInTheDocument();
  });
});
