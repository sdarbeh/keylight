import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Loader from './loader';

describe('<Loader />', () => {
  test('it should mount', () => {
    render(<Loader spinner />);

    const loader = screen.getByTestId('Loader');

    expect(loader).toBeInTheDocument();
  });
});
