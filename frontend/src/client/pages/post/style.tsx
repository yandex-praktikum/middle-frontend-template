import styled from 'styled-components';

export const InnerBlockSt = styled.div`
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const HeaderSt = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PostBodySt = styled.div`
  margin-bottom: 80px;
  h2 {
   color: ${({ theme }) => theme.colors.accentFont};
  }
`;

export const SettingsBlockSt = styled.div`
  display: flex;
  align-items: center;
  div{
    margin-left: 20px;
  }
`;

export const TextSt = styled.div`
  font-size: 14px;
`;

export const CommentsBlockSt = styled.div`
  border-top: 1px solid ${({ theme }) => theme.allColors.purple_light};
  padding: 20px;
`;

export const CommentBlockSt = styled.div`
  margin-bottom: 20px;
`;

export const CommentAddBlockSt = styled.div`
  margin-top: 20px;
`;
