import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ModalContainer from './modal-container';

describe('<ModalContainer />', () => {
  test('it should mount', () => {
    render(
      <ModalContainer type="center" isOpen onClose={() => {}}>
        <span>MODAL</span>
      </ModalContainer>,
    );

    const modalContainer = screen.getByTestId('ModalContainer');

    expect(modalContainer).toBeInTheDocument();
  });
});
