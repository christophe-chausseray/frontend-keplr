import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Homepage from './Homepage';
import { renderWithRouter } from '../../../utilsTest';


describe('Homepage', () => {
  test('display the header on the homepage', () => {
    renderWithRouter(<Homepage />);

    expect(screen.getByRole('heading', { name: /Movies/ })).toBeInTheDocument();
  });

  test('render a list of movies', async () => {
    renderWithRouter(<Homepage />);

    await waitFor(() => {
      expect(screen.getByRole('list', { name: /MovieList/ })).toBeInTheDocument();
      expect(screen.getAllByRole('listitem').length).toEqual(3);
    })
  });

  test('search on the list of movies', async () => {
    renderWithRouter(<Homepage />);

    await waitFor(() => {
      expect(screen.getAllByRole('listitem').length).toEqual(3);

      const searchInput = screen.getByRole('textbox', { name: /SearchBar/ });
      userEvent.type(searchInput, 'Red Dot');
    });

    await waitFor(() => {
      expect(screen.getAllByRole('listitem').length).toEqual(1);
    });
  });

  test('remove search value when clicking on a clear button', async () => {
    renderWithRouter(<Homepage />);

    await waitFor(async () => {
      const searchInput = screen.getByRole('textbox', { name: /SearchBar/ });
      userEvent.type(searchInput, 'Red Dot');
    });

    await waitFor(() => {
      expect(screen.getAllByRole('listitem').length).toEqual(1);

      const clearSearchButton = screen.getByRole('button', { name: /ClearSearchButton/ });
      userEvent.click(clearSearchButton);
    });

    await waitFor(() => {
      expect(screen.getAllByRole('listitem').length).toEqual(3);
    });
  });

  test('display the movie title on the item hover', async () => {
    renderWithRouter(<Homepage />);

    await waitFor(() => {
      userEvent.hover(screen.getByRole('listitem', { name: /Red Dot/ }));

      expect(screen.getByText('Red Dot')).toBeInTheDocument();
    });
  });

  test('display a loader when the list is loading', async () => {
    renderWithRouter(<Homepage />);

    expect(screen.getByTitle('Loader')).toBeInTheDocument();
  });
})
