import React from 'react';
import { HeaderContainer, HeaderH1 } from './styles/header';

const Header = ({ setOpenMenu, openMenu }) => {
  return (
    <HeaderContainer>
      <HeaderH1>COVID-19</HeaderH1>
    </HeaderContainer>
  );
};

export default Header;
