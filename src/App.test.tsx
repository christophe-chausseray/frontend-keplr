import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  test('navigate between the homepage and the details page', async () => {
    render(<App />);

    await waitFor(() => {
      userEvent.click(screen.getByAltText('Red Dot'));
    });

    await waitFor(() => {
      expect(screen.getByText('Red Dot')).toBeInTheDocument();

      userEvent.click(screen.getByRole('img', { name: 'Back' }));
    });

    await waitFor(() => {
      expect(screen.getByRole('textbox', { name: /SearchBar/ })).toBeInTheDocument();
    });
  })
});
