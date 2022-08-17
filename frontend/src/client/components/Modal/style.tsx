import styled from 'styled-components';

export const WrapperSt = styled.div`
  z-index: 700;
  max-width: 384px;
  height: min-content;
  position: fixed;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const BackdropSt = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 500;
`;

export const ModalSt = styled.div`
  z-index: 100;
  background: ${({ theme }) => theme.colors.bgModal};
  position: relative;
  margin: auto;
  border-radius: ${({ theme }) => theme.borderRadius};
  min-width: 380px;
  min-height: 100px;
  padding: 40px;
  h4 {
    color: ${({ theme }) => theme.colors.accentFont};
  }
`;
