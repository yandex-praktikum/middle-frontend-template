import { fireEvent, act } from '@testing-library/react';
import Avatar from '../../components/Avatar';
import { customRender } from '../../services/test-utils';
import React from 'react';

import defaultAvatar from '../../assets/img/default_avatar.png';

describe('Avatar', () => {
  const backgroundImage = defaultAvatar;

  it('should render', () => {
    customRender(<Avatar size={130} backgroundImage={backgroundImage} />);
  });

  it('should render different button if fullWidth is passed', () => {
    const avatar1 = customRender(
      <Avatar size={130} backgroundImage={backgroundImage} />
    );
    const avatar2 = customRender(
      <Avatar size={25} backgroundImage={backgroundImage} />
    );

    expect(avatar1.container.outerHTML).not.toEqual(
      avatar2.container.outerHTML
    );
  });

  it('should call callback on click', () => {
    const callback = jest.fn();
    const element = customRender(
      <Avatar backgroundImage={backgroundImage} size={130} onClick={callback} />
    );

    act(() => {
      fireEvent.click(element.getByRole('button'));
    });

    expect(callback).toHaveBeenCalled();
  });
});
