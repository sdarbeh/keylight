import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SubHeader from './sub-header';

describe('<SubHeader />', () => {
  test('it should mount', () => {
    render(<SubHeader title="header" />);

    const emptyContent = screen.getByTestId('SubHeader');

    expect(emptyContent).toBeInTheDocument();
  });
});
