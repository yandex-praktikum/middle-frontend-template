import styled from 'styled-components';

export const WrapCommentsSt = styled.div`
  h4 {
    color: ${({ theme }) => theme.colors.accentFont};
  }
`;
export const CommentsBlockSt = styled.div`
  border-top: 1px solid ${({ theme }) => theme.allColors.purple_light};
  padding: 20px;
`;

export const CommentBlockSt = styled.div`
  margin-bottom: 20px;
`;

export const AuthorTextBlockST = styled.div`
  display: flex;
  align-items: center;
  div {
    margin-right: 10px;
  }
`;

export const CommentTextBlockST = styled.div`
  margin-left: 50px;
  h4{
    color:${({ theme }) => theme.allColors.white};
  }
`;

export const CommentTopBlockSt = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const CommentBottomBlockSt = styled.div`
  display: flex;
  justify-content: flex-end;
  div {
    cursor: pointer;
  }
`;
