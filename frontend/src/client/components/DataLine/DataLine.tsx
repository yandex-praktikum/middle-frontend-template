import React, { FC } from 'react';

import { DataLineSt, TitleSt } from './style';

interface DataLineProps {
  title: string;
  value: string;
}

const DataLine: FC<DataLineProps> = ({ title, value }) => {
  return (
    <DataLineSt>
      <TitleSt>{title}</TitleSt>
      <div>{value}</div>
    </DataLineSt>
  );
};

export default DataLine;
