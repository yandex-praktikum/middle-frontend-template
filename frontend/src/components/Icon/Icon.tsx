import React from 'react';
import IconsSVG from '../../assets/img/icons.svg';
import { WrapSvgSt } from './style';

interface IconProps {
  name?: string;
  size?: string;
  color?: string;
}

const Icon = (props: IconProps) => {
  const { name, size = "24", color = "#efefef" } = props;

  return (
    <WrapSvgSt>
      <svg stroke={color} width={size} height={size}>
        <use xlinkHref={`${IconsSVG}#icon-${name}`} />
      </svg>
    </WrapSvgSt>
  );
};

export default Icon;
