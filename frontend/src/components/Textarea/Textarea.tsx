import React, { TextareaHTMLAttributes } from 'react';
import { TextareaSt } from './style';

const Textarea = ({
  rows = 10,
  ...textareaProps
}: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return <TextareaSt rows={rows} {...textareaProps} />;
};

export default Textarea;
