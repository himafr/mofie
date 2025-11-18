import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

// Simplify Modal and Search for tests
jest.mock('../src/ui/shared/Modal', () => {
  const React = require('react');
  const Modal = ({ children }: any) => <div>{children}</div>;
  Modal.Open = ({ children }: any) => <>{children}</>;
  Modal.Window = ({ children }: any) => <>{children}</>;
  return Modal;
});
jest.mock('../src/ui/shared/Search', () => () => <input aria-label="search" />);

import HeaderComponent from '../src/ui/shared/HeaderComponent';

test('renders logo and navigation links', () => {
  render(
    <MemoryRouter>
      <HeaderComponent openNav={() => {}} open={false} />
    </MemoryRouter>
  );

  expect(screen.getByAltText('logo')).toBeInTheDocument();
  const movies = screen.getAllByText(/Movies/i);
  expect(movies.length).toBeGreaterThan(0);
});
