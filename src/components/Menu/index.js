import React, { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import {
  BottomWrapper,
  DarkModeText,
  DarkModeWrap,
  DarkModeSwitch,
  ToggleIcon,
  DarkModeSwitchWrap,
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
  MenuIcon2,
  DarkModeLabel,
  MenuBars,
} from './styles/menu';

const Menu = ({
  setSelected,
  setSearchCountry,
  selected,
  toggleTheme,
  setOpenMenu,
  openMenu,
}) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <MenuSection>
      <TopContainer>
        <TopWrapper>
          <TopH1>CORONA</TopH1>
        </TopWrapper>
        <MenuBars
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        />
      </TopContainer>
      <MiddleContainer>
        <MiddleWrapper>
          <MenuLiWrap>
            <MenuIcon1 />
            <MenuLi
              onClick={() => {
                setSelected('KR');
                setSearchCountry('KR');
              }}>
              국내
            </MenuLi>
          </MenuLiWrap>
          <MenuLiWrap>
            <MenuIcon2 />
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
          <DarkModeWrap
            onClick={() => {
              setDarkMode(!darkMode);
              toggleTheme();
            }}>
            <DarkModeLabel>다크모드</DarkModeLabel>
            <DarkModeSwitchWrap>
              <DarkModeSwitch darkMode={darkMode} />
              <DarkModeText darkMode={darkMode}>
                <ToggleIcon>
                  <FaMoon size='20' />
                </ToggleIcon>
                <ToggleIcon>
                  <FaSun size='20' />
                </ToggleIcon>
              </DarkModeText>
            </DarkModeSwitchWrap>
          </DarkModeWrap>
        </BottomWrapper>
      </BottomContainer>
    </MenuSection>
  );
};

export default Menu;
