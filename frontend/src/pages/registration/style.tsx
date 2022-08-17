import styled from 'styled-components';

export const HardPopUpSt = styled.div`
  background-color: ${({ theme }) => theme.allColors.white};
  max-width: 384px;
  height: min-content;
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 8px;
  padding: 40px;
  box-shadow: 0 10px 10px -5px #000000;
`;
