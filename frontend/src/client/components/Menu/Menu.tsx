import React from 'react';

import { AppRoute } from '../../services/const';

import { MenuContainerSt, MenuItemSt, MenuLinkSt, MenuSt } from './style';

const Menu = () => {
  return (
    <MenuSt>
      <MenuContainerSt>
        <MenuItemSt>
          <MenuLinkSt to={AppRoute.FORUM}>форум</MenuLinkSt>
        </MenuItemSt>
        <MenuItemSt>
          <MenuLinkSt to={AppRoute.GAME}>игра</MenuLinkSt>
        </MenuItemSt>
        <MenuItemSt>
          <MenuLinkSt to={AppRoute.PROFILE}>профиль</MenuLinkSt>
        </MenuItemSt>
        <MenuItemSt>
          <MenuLinkSt to={AppRoute.RECORDS}>лидеры</MenuLinkSt>
        </MenuItemSt>
      </MenuContainerSt>
    </MenuSt>
  );
};

export default Menu;
