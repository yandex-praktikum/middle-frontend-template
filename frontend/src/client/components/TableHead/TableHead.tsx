import React, { FC } from 'react';

import { TableHeadSt, TableRowSt, TableColSt } from './style';

interface TableProps {
  colNames: string[];
}

const TableHead: FC<TableProps> = ({ colNames }) => {
  return (
    <TableHeadSt>
      <TableRowSt>
        {colNames.map((headerItem, i) => (
          <TableColSt key={i}>{headerItem}</TableColSt>
        ))}
      </TableRowSt>
    </TableHeadSt>
  );
};

export default TableHead;
