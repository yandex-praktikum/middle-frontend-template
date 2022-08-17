import React, { FC } from 'react';
import Button from '../Button';
import TableHead from '../TableHead';
import { useNavigate } from 'react-router-dom';
import Avatar from '../Avatar';
import {
  TableSt,
  TableBodySt,
  TableRowSt,
  TableColSt,
  WrapperColSt,
  BlockUserSt,
} from './style';

interface TableProps {
  colNames: string[];
  content: Array<Record<string, string>>;
  isShowBtn?: boolean;
}

const Table: FC<TableProps> = ({ colNames, content, isShowBtn = true }) => {
  const navigate = useNavigate();

  const tableRow = Object.values(content).map((obj, i) => (
    <TableRowSt key={i}>
      {Object.keys(obj)
        .filter((key) => key !== 'id' && key !== 'user_avatar')
        .map((key, index) => {
          if (key == 'user_name' || key == 'user_name') {
            return (
              <TableColSt key={index}>
                <WrapperColSt>
                  <Avatar backgroundImage={content[i].user_avatar} size={40} />
                  <BlockUserSt>{content[i].user_name}</BlockUserSt>
                </WrapperColSt>
              </TableColSt>
            );
          } else {
            return <TableColSt key={index}>{obj[key]}</TableColSt>;
          }
        })}
      {isShowBtn &&
        <TableColSt>
          <Button onClick={() => navigate(`post/${content[i].id}`)} center>
            просмотр
          </Button>
        </TableColSt>
      }
    </TableRowSt>
  ));

  return (
    <TableSt>
      <TableHead colNames={colNames} />
      <TableBodySt>{tableRow}</TableBodySt>
    </TableSt>
  );
};

export default Table;
