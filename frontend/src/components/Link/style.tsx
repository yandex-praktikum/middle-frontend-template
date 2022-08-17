import styled from 'styled-components';
import { Link as LinkSC } from 'react-router-dom';

export const Link = styled(LinkSC)`
  display: block;
  text-align: center;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.fontLink};
  font-size: 12px;
  &:hover {
    text-decoration: underline;
  }
`;

export default Link;
