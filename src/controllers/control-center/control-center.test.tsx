import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ControlCenter from './control-center';

describe('<ControlCenter />', () => {
  test('it should mount', () => {
    render(<ControlCenter />);

    const controlCenter = screen.getByTestId('ControlCenter');

    expect(controlCenter).toBeInTheDocument();
  });
});
