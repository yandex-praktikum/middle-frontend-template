import styled from 'styled-components';

export const WrapSvgSt = styled.div`
  svg {
    cursor: pointer;
    &:hover {
      stroke: ${({ theme }) => theme.allColors.white};
    }
  }
`;


