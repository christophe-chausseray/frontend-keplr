import React from 'react';
import { render, screen } from '@testing-library/react';
import Homepage from './Homepage';

describe('Homepage', () => {
  test('display the header on the homepage', () => {
    render(<Homepage />);

    expect(screen.getByRole('heading', { name: /Movies/ })).toBeInTheDocument();
  });
})
