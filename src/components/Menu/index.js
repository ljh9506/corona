import React, { useState } from 'react';

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
  MenuIcon3,
  MenuIcon4,
  Select,
} from './styles/menu';

const Menu = ({ setSearchCountry }) => {
  const [selected, setSelected] = useState('KR');
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
            <Select
              countries={[
                'KR',
                'JP',
                'CA',
                'GB',
                'FR',
                'CH',
                'DE',
                'IT',
                'AU',
                'IN',
                'RU',
                'TW',
                'BR',
                'DK',
                'TH',
                'VN',
                'PH',
              ]}
              searchable
              selected={selected}
              onSelect={(code) => {
                setSelected(code);
                setSearchCountry(code);
              }}
            />
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
