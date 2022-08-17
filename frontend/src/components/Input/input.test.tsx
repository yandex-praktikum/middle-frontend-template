import { screen, fireEvent, act } from '@testing-library/react';
import Input from '../Input';

import { customRender } from '../../services/test-utils';

import React from 'react';

describe('Input', () => {
  it('should render', () => {
    customRender(<Input name={'email'} type={'email'} placeholder={'почта'} />);
  });

  it('should render with placeholder', () => {
    const placeholder = 'test';

    customRender(
      <Input name={'email'} type={'email'} placeholder={placeholder} />
    );
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  it('typing into email input', () => {
    const input = customRender(
      <Input name={'email'} type={'email'} placeholder={'test'} />
    );

    act(() => {
      fireEvent.change(input.getByPlaceholderText('test'), {
        target: { value: 'test@test.com' },
      });
    });

    expect(input.getByPlaceholderText('test')).toHaveValue('test@test.com');
  });
});
