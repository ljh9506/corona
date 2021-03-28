import styled, { css } from 'styled-components/macro';
import { IoEarthSharp } from 'react-icons/io5';
import { GiSouthKorea } from 'react-icons/gi';
import { BsFillQuestionDiamondFill } from 'react-icons/bs';
import { RiPinDistanceLine } from 'react-icons/ri';
import ReactFlagsSelect from 'react-flags-select';
import { FaBars } from 'react-icons/fa';

export const MenuSection = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  max-width: 280px;
  width: 100%;

  @media screen and (max-width: 750px) {
    order: 1;
    max-width: 510px;
    padding-bottom: 0;
  }
`;

export const TopContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.bodyBgColor};
  border: 1px solid rgba(207, 207, 207, 0.25);
  border-radius: 16px;
  padding: 0 20px;
`;
export const MenuBars = styled(FaBars)`
  display: none;
  position: absolute;
  color: ${({ theme }) => theme.fontColor};
  font-size: 22px;
  right: 28px;
  top: 28px;
  transform: translateY(-50%);
  cursor: pointer;

  @media screen and (max-width: 480px) {
    display: block;
  }
`;
export const TopWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const TopH1 = styled.h2`
  margin: 12px 0;
  color: ${({ theme }) => theme.fontColor};
`;

export const MiddleContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.bodyBgColor};

  border: 1px solid rgba(207, 207, 207, 0.25);
  border-radius: 16px;
  margin-top: 18px;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const MiddleWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  padding: 0;
`;
export const MenuLiWrap = styled.div`
  display: flex;
  padding: 16px;
  width: 100%;
  align-items: center;
`;
export const MenuIcon1 = styled(GiSouthKorea)`
  color: ${({ theme }) => theme.fontColor};

  margin-right: 12px;
`;
export const MenuIcon2 = styled(IoEarthSharp)`
  color: ${({ theme }) => theme.fontColor};

  margin-right: 12px;
`;
export const MenuIcon3 = styled(RiPinDistanceLine)`
  color: ${({ theme }) => theme.fontColor};

  margin-right: 12px;
`;
export const MenuIcon4 = styled(BsFillQuestionDiamondFill)`
  color: ${({ theme }) => theme.fontColor};

  margin-right: 12px;
`;
export const MenuLi = styled.li`
  color: ${({ theme }) => theme.fontColor};

  list-style: none;
  cursor: pointer;
  width: 100%;
`;
export const Select = styled(ReactFlagsSelect)`
  padding: 0;
`;

export const BottomContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.bodyBgColor};

  border: 1px solid rgba(207, 207, 207, 0.25);
  border-radius: 16px;
  padding: 12px 20px;
  margin-top: 18px;
`;

export const BottomWrapper = styled.div``;
export const DarkModeWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const DarkModeLabel = styled.span`
  color: ${({ theme }) => theme.fontColor};
`;
export const DarkModeSwitchWrap = styled.div`
  position: relative;
  width: 55px;
  height: 25px;
  cursor: pointer;
`;
export const DarkModeSwitch = styled.div`
  position: absolute;
  top: 1px;
  left: 0px;
  width: 23px;
  height: 23px;
  background-color: #fff;
  border-radius: 100%;
  transition: left 0.3s;

  ${({ darkMode }) =>
    darkMode &&
    css`
      left: 31px;
    `}
`;
export const DarkModeText = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ darkMode }) => (darkMode ? '#3dbf87' : '#fc3164')};
  border-radius: 25px;
  box-shadow: 2px 2px 5px 0 rgba(50, 50, 50, 0.75);
  transition: background-color 0.3s;
`;

export const ToggleIcon = styled.div`
  display: flex;
  align-items: center;
  height: 25px;
  width: 35%;
  line-height: 25px;
  color: #fff;
  & + & {
    margin-left: 10px;
  }
`;
