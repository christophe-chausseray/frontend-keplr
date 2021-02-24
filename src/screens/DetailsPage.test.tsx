import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import DetailsPage from './DetailsPage';
import { renderWithRouter } from '../utilsTest';

describe('DetailsPage', () => {
  test('render the movie details', async () => {
    renderWithRouter(<DetailsPage />, { route: '/details/1', path: '/details/:movieId' });

    await waitFor(() => {
      expect(screen.getByText('Red Dot')).toBeInTheDocument();
      expect(screen.getByText('Red Dot is a science-fi movie')).toBeInTheDocument();
      expect(screen.getByText('7.8 / 10')).toBeInTheDocument();
      expect(screen.getByRole('img', { name: /Red Dot/ }).getAttribute('src')).toContain('xZ2KER2gOHbuHP2GJoODuXDSZCb.jpg');
    });
  })
});
