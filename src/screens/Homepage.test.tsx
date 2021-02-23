import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Homepage from './Homepage';

describe('Homepage', () => {
  test('display the header on the homepage', () => {
    render(<Homepage />);

    expect(screen.getByRole('heading', { name: /Movies/ })).toBeInTheDocument();
  });

  test('render a list of movies', async () => {
    render(<Homepage />);

    await waitFor(() => {
      expect(screen.getByRole('list', { name: /MovieList/ })).toBeInTheDocument();
    })
  });
})
