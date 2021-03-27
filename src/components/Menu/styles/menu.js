import styled from 'styled-components/macro';
import { IoEarthSharp } from 'react-icons/io5';
import { GiSouthKorea } from 'react-icons/gi';
import { BsFillQuestionDiamondFill } from 'react-icons/bs';
import { RiPinDistanceLine } from 'react-icons/ri';
import ReactFlagsSelect from 'react-flags-select';

export const MenuSection = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  max-width: 240px;
  width: 100%;

  @media screen and (max-width: 750px) {
    order: 1;
    max-width: 510px;
  }
`;

export const TopContainer = styled.div`
  width: 100%;
  background-color: rgb(25, 31, 44);
  border: 1px solid rgba(207, 207, 207, 0.25);
  border-radius: 16px;
  padding: 0 20px;
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const TopH1 = styled.h2`
  margin: 12px 0;
  color: rgb(183, 193, 204);
`;

export const MiddleContainer = styled.div`
  width: 100%;
  background-color: rgb(25, 31, 44);
  border: 1px solid rgba(207, 207, 207, 0.25);
  border-radius: 16px;
  margin-top: 18px;
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
  color: rgb(183, 193, 204);
  margin-right: 12px;
`;
export const MenuIcon2 = styled(IoEarthSharp)`
  color: rgb(183, 193, 204);
  margin-right: 12px;
`;
export const MenuIcon3 = styled(RiPinDistanceLine)`
  color: rgb(183, 193, 204);
  margin-right: 12px;
`;
export const MenuIcon4 = styled(BsFillQuestionDiamondFill)`
  color: rgb(183, 193, 204);
  margin-right: 12px;
`;
export const MenuLi = styled.li`
  color: rgb(183, 193, 204);
  list-style: none;
`;
export const Select = styled(ReactFlagsSelect)`
  padding: 0;
`;

export const BottomContainer = styled.div`
  width: 100%;
  background-color: rgb(25, 31, 44);
  border: 1px solid rgba(207, 207, 207, 0.25);
  border-radius: 16px;
  padding: 12px 20px;
  margin-top: 18px;
`;

export const BottomWrapper = styled.div``;

export const Icon = styled.div``;

export const DarkModeWrap = styled.div`
  display: flex;
`;

export const DarkModeText = styled.div`
  color: rgb(183, 193, 204);
  list-style: none;
`;

export const DarkModeTrigger = styled.div`
  color: rgb(183, 193, 204);
`;
