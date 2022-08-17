import { fireEvent, act } from '@testing-library/react';
import ButtonSettings from '../ButtonSettings';
import { customRender } from '../../services/test-utils';
import React from 'react';

describe('ButtonSettings', () => {
  it('should render', () => {
    customRender(<ButtonSettings>Test</ButtonSettings>);
  });

  it('should render label', () => {
    const text = 'Button';
    const button = customRender(<ButtonSettings>{text}</ButtonSettings>);

    expect(button.getByText(text)).toBeInTheDocument();
  });

  it('should call callback on click', () => {
    const callback = jest.fn();
    const button = customRender(
      <ButtonSettings onClick={callback}>Test</ButtonSettings>
    );

    act(() => {
      fireEvent.click(button.getByText('Test'));
    });

    expect(callback).toHaveBeenCalled();
  });
});
