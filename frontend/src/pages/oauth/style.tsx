import styled from 'styled-components';

export const CenterSt = styled.div`
  max-width: 500px;
  height: min-content;
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }
`;

export const BigSt = styled.span`
  font-size: 46px;
  padding: 30px;
`;

export const SmallSt = styled.span`
  font-size: 17px;
`;
