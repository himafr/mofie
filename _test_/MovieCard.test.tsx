import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import MovieCard from '../src/ui/shared/MovieCard';
import { Movie } from '../src/types/moviesTypes';

const movie:Movie = {
  id: 1,
  poster_path: '/abc.jpg',
  vote_count: 1200,
  vote_average: 8.5,
  title: 'Test Movie',
  release_date: '2020-01-01',
  popularity: 10,
  adult: false,
  backdrop_path:"",
   genre_ids:[1],
   original_language:"en",
   original_title:"sh",
   overview:"0s",
   video:false
};

test('renders poster and title', () => {
  render(
    <MemoryRouter>
      <MovieCard movie={movie}>
        <MovieCard.Title />
        <MovieCard.Rated />
      </MovieCard>
    </MemoryRouter>
  );

  expect(screen.getByText('Test Movie')).toBeInTheDocument();
  expect(screen.getByAltText('')).toHaveAttribute('src', expect.stringContaining('/abc.jpg'));
});
