import React from 'react';

import {
  BottomWrapper,
  DarkModeText,
  DarkModeTrigger,
  DarkModeWrap,
  Icon,
  MenuLi,
  MenuSection,
  BottomContainer,
  MiddleContainer,
  MiddleWrapper,
  TopContainer,
  TopWrapper,
  TopH1,
  MenuLiWrap,
  MenuIcon1,
  MenuIcon2,
  MenuIcon3,
  MenuIcon4,
} from './styles/menu';

const Menu = () => {
  return (
    <MenuSection>
      <TopContainer>
        <TopWrapper>
          <TopH1>CORONA</TopH1>
        </TopWrapper>
      </TopContainer>
      <MiddleContainer>
        <MiddleWrapper>
          <MenuLiWrap>
            <MenuIcon1 />
            <MenuLi>국내</MenuLi>
          </MenuLiWrap>
          <MenuLiWrap>
            <MenuIcon2 />
            <MenuLi>세계</MenuLi>
          </MenuLiWrap>
          <MenuLiWrap>
            <MenuIcon3 />
            <MenuLi>거리두기</MenuLi>
          </MenuLiWrap>
          <MenuLiWrap>
            <MenuIcon4 />
            <MenuLi>자주 묻는 질문</MenuLi>
          </MenuLiWrap>
        </MiddleWrapper>
      </MiddleContainer>
      <BottomContainer>
        <BottomWrapper>
          <DarkModeWrap>
            <Icon />
            <DarkModeText>다크모드</DarkModeText>
            <DarkModeTrigger>?</DarkModeTrigger>
          </DarkModeWrap>
        </BottomWrapper>
      </BottomContainer>
    </MenuSection>
  );
};

export default Menu;
