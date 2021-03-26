import React from 'react';
import {
  HeaderContainer,
  HeaderH1,
  HeaderOption,
  HeaderSelect,
} from './styles/header';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderH1>COVID-19</HeaderH1>
      <HeaderSelect>
        <HeaderOption>국내</HeaderOption>
        <HeaderOption>세계</HeaderOption>
      </HeaderSelect>
    </HeaderContainer>
  );
};

export default Header;
