import { fireEvent, act } from '@testing-library/react';
import Button from '../../components/Button';
import { customRender } from '../../services/test-utils';
import React from 'react';

describe('Button', () => {
  it('should render', () => {
    customRender(<Button fullWidth>Test</Button>);
  });

  it('should render label', () => {
    const text = 'Button';
    const button = customRender(<Button>{text}</Button>);

    expect(button.getByText(text)).toBeInTheDocument();
  });

  it('should render different button if fullWidth is passed', () => {
    const button1 = customRender(<Button fullWidth>Test</Button>);
    const button2 = customRender(<Button>Test</Button>);

    expect(button1.container.outerHTML).not.toEqual(
      button2.container.outerHTML
    );
  });

  it('should call callback on click', () => {
    const callback = jest.fn();
    const button = customRender(
      <Button fullWidth onClick={callback}>
        Test
      </Button>
    );

    act(() => {
      fireEvent.click(button.getByText('Test'));
    });

    expect(callback).toHaveBeenCalled();
  });
});
