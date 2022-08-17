import React from 'react';

interface AvatarProps {
  backgroundImage?: string | undefined;
  size?: number;
  onClick?: () => void | any;
}

import { AvatarSt, AvatarImgSt } from './style';

const Avatar = (props: AvatarProps) => {
  return (
    <AvatarSt
      size={props.size}
      onClick={props.onClick}
      editable={!!props.onClick}
    >
      <AvatarImgSt backgroundImage={props.backgroundImage} />
    </AvatarSt>
  );
};

export default Avatar;
