import React from 'react';

import {
  CloseIcon,
  Container,
  MenuWrapper,
  Wrapper,
  MenuIcon1,
  MenuIcon2,
  MenuIcon3,
  MenuIcon4,
  MenuLi,
  MenuLiWrap,
  Select,
} from './styles/sidebar';

const Sidebar = ({
  openMenu,
  setOpenMenu,
  selected,
  setSelected,
  setSearchCountry,
}) => {
  return (
    <Container openMenu={openMenu}>
      <CloseIcon
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
      />
      <Wrapper>
        <MenuWrapper>
          <MenuLiWrap>
            <MenuIcon1 />
            <MenuLi
              onClick={() => {
                setSelected('KR');
                setSearchCountry('KR');
                setOpenMenu(false);
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
                setOpenMenu(false);
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
        </MenuWrapper>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
