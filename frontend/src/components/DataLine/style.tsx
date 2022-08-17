import styled from 'styled-components';

export const DataLineSt = styled.div`
  border-bottom: 1px solid #eaeaea;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  padding: 12px 0;
  min-height: 44px;
`;

export const TitleSt = styled.div`
  position: absolute;
  left: 0;
  color: ${({ theme }) => theme.colors.fontBtn};
`;
