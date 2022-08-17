import styled from 'styled-components';

export const TableSt = styled.table`
  background-color: ${({ theme }) => theme.colors.bgTable};
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 40px;
  font-size: 14px;
  @media (max-width: 768px) {
    display: inline-block;
    white-space: nowrap;
    overflow-x: auto;
  }
`;

export const TableBodySt = styled.tbody`
`;

export const TableRowSt = styled.tr`
  cursor: pointer;
  transition: ${({ theme }) => theme.skillsStartAnim} all;
  &:nth-child(even) {
    background: ${({ theme }) => theme.allColors.grey_light};
  }
  &:nth-child(odd) {
    background: ${({ theme }) => theme.allColors.white};
  }
  &:hover {
    background: ${({ theme }) => theme.allColors.purple_light};
  }
`;

export const TableColSt = styled.td`
  padding: 5px 10px;
  width: 150px;
`;

export const WrapperColSt = styled.div`
  display: flex;
  align-items: center;
`;

export const BlockUserSt = styled.div`
  margin-left: 20px;
`;
