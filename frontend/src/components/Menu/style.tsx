import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MenuSt = styled.div`
  height: 70px;
  background-color: ${({ theme }) => theme.colors.bgHeader};
`;

export const MenuContainerSt = styled.div`
  max-width: 800px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;

export const MenuItemSt = styled.div``;

export const MenuLinkSt = styled(NavLink)`
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.accentFont};
  &.active, &:hover {
    padding-bottom: 2px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.accentFont};
  }
`;
