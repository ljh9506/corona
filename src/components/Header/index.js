import React from 'react';
import { HeaderContainer, HeaderH1, MenuBars } from './styles/header';

const Header = ({ setOpenMenu, openMenu }) => {
  return (
    <HeaderContainer>
      <HeaderH1>COVID-19</HeaderH1>
      <MenuBars
        onClick={() => {
          setOpenMenu(!openMenu);
          console.log(openMenu);
        }}
      />
    </HeaderContainer>
  );
};

export default Header;
