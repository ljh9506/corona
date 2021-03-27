import styled from 'styled-components/macro';
import { MdCancel } from 'react-icons/md';
import { GiSouthKorea } from 'react-icons/gi';
import { IoEarthSharp } from 'react-icons/io5';
import { RiPinDistanceLine } from 'react-icons/ri';
import { BsFillQuestionDiamondFill } from 'react-icons/bs';
import ReactFlagsSelect from 'react-flags-select';

export const Container = styled.div`
  z-index: 9999;
  position: absolute;
  top: 0;
  left: 100%;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(16, 20, 33);
  transition: 0.3s ease-in-out;

  left: ${({ openMenu }) => (openMenu ? '0' : '100%')};
`;

export const CloseIcon = styled(MdCancel)`
  position: absolute;
  right: 25px;
  top: 25px;
  font-size: 30px;
  z-index: 9999;
  color: white;
  cursor: pointer;
`;

export const MenuWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
`;

export const Wrapper = styled.div``;

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
  cursor: pointer;
  width: 100%;
`;
export const Select = styled(ReactFlagsSelect)`
  padding: 0;
`;
