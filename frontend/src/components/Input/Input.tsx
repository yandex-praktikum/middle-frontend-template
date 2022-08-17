import React, { InputHTMLAttributes } from 'react';

import { InputSt } from './style';

type inputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ ...inputProps }: inputProps) => {
  return <InputSt {...inputProps} />;
};

export default Input;
