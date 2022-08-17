import { screen } from '@testing-library/react';
import Title from '../Title';
import { customRender } from '../../services/test-utils';
import React from 'react';

describe('Title with text', () => {
  it('should render', () => {
    customRender(<Title h={4}>Test</Title>);
    expect(screen.getByRole('heading')).toHaveTextContent('Test');
  });

  it('should render heading level 1', () => {
    customRender(<Title h={1}>Test</Title>);
    expect(screen.getByRole('heading', { level: 1 }));
  });

  it('should render heading level 4', () => {
    customRender(<Title h={4}>Test</Title>);
    expect(screen.getByRole('heading', { level: 4 }));
  });
});
