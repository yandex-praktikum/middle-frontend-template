import styled from 'styled-components';

export const TableHeadSt = styled.thead`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.allColors.purple_light};
`;

export const TableRowSt = styled.tr`
  padding: 5px 10px;
`;

export const TableColSt = styled.td`
  padding: 5px 10px;
  width: 150px;
`;
