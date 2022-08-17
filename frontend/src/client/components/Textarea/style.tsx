import styled from 'styled-components';

export const TextareaSt = styled.textarea`
  width: 100%;
  resize: vertical;
  padding: 12px;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.semi_bold};
  min-height: 40px;
`;
