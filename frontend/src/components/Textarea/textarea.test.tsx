import { screen, fireEvent, act } from '@testing-library/react';
import Textarea from '../Textarea';

import { customRender } from '../../services/test-utils';
import React from 'react';

describe('Textarea', () => {
  it('should render', () => {
    customRender(<Textarea name={'content'} placeholder={'текст поста'} />);
  });

  it('should render with placeholder', () => {
    const placeholder = 'test';

    customRender(<Textarea name={'content'} placeholder={placeholder} />);
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  it('typing into textarea', () => {
    const input = customRender(
      <Textarea name={'email'} placeholder={'test'} />
    );

    act(() => {
      fireEvent.change(input.getByPlaceholderText('test'), {
        target: { value: 'text' },
      });
    });

    expect(input.getByPlaceholderText('test')).toHaveValue('text');
  });
});
