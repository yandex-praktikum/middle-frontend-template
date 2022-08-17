import styled from 'styled-components';

export const InputSt = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.semi_bold};
`;
