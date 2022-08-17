import styled, { css } from 'styled-components';

interface TitleStProps {
  isCenter?: boolean;
}

const titleSt = css<TitleStProps>`
  text-align: ${({ isCenter }) => (isCenter ? 'center' : 'initial')};
  text-transform: uppercase;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.font};
  font-weight: ${({ theme }) => theme.fonts.black};
`;

export const H1St = styled.h1`
  ${titleSt}
`;

export const H2St = styled.h2`
  ${titleSt}
`;

export const H3St = styled.h3`
  ${titleSt}
`;

export const H4St = styled.h4`
  ${titleSt}
`;
