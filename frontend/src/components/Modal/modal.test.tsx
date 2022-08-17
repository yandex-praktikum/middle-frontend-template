import { screen } from '@testing-library/react';
import Modal from '../Modal';
import { customRender } from '../../services/test-utils';
import React from 'react';

describe('Modal', () => {
  const isShown = true;

  it('should render', () => {
    customRender(<Modal isShown={isShown} headerText={'Test'}></Modal>);

    expect(screen.getByRole('heading')).toHaveTextContent('Test');
  });
});
