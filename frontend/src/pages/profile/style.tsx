import styled from 'styled-components';

export const InnerBlockSt = styled.div`
  padding: 0 100px;
  h4 {
    color: ${({ theme }) => theme.colors.accentFont};
  }
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const InfoSt = styled.div`
  margin: 60px 0;
`;

export const WrapperAvatarSt = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
`;
