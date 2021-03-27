import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: relative;
  background-color: rgb(25, 31, 44);
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  align-items: center;
`;
export const MenuBars = styled(FaBars)`
  display: none;
  position: absolute;
  color: #fff;
  font-size: 22px;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  @media screen and (max-width: 480px) {
    display: block;
  }
`;

export const HeaderH1 = styled.h1`
  color: rgb(183, 193, 204);
`;
export const HeaderSelect = styled.select`
  height: 30px;
  width: 140px;
  border-radius: 5px;
  border: none;
`;
export const HeaderOption = styled.option``;
// export const Header = styled.div``;
