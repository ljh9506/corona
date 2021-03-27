import styled from 'styled-components/macro';
import { AiOutlineArrowUp } from 'react-icons/ai';

export const MainLayout = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;

  @media screen and (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const MainContentSection = styled.section`
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 510px;
  width: 100%;

  @media screen and (max-width: 750px) {
    order: 2;
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
  justify-content: space-between;
  padding: 12px;
  margin: 0 10px;
`;

export const ConfirmedWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DeathWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const RecoveredWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const CheckerWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const H3 = styled.h3`
  font-size: 12px;
  color: rgb(183, 193, 204);
  margin: 0;
`;

export const Figure = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin: 5px 0 10px 0;
  color: ${({ confirmed, recovered, checker }) =>
    confirmed
      ? 'rgb(235, 83, 116)'
      : recovered
      ? 'rgb(23, 138, 23)'
      : checker
      ? 'rgb(86, 115, 235)'
      : 'rgb(183, 193, 204)'};
`;
export const IncreaseWrap = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ confirmed, recovered, checker }) =>
    confirmed
      ? 'rgba(235, 83, 116, 0.082)'
      : recovered
      ? 'rgba(22, 171, 22, 0.082)'
      : checker
      ? 'rgba(86, 115, 235, 0.082)'
      : 'rgb(39, 43, 56)'};
  border-radius: 12px;
  padding: 0 6px;
`;

export const Increase = styled.div`
  font-size: 11.5px;
  font-weight: bold;
  color: ${({ confirmed, recovered, checker }) =>
    confirmed
      ? 'rgb(235, 83, 116)'
      : recovered
      ? 'rgb(23, 138, 23)'
      : checker
      ? 'rgb(86, 115, 235)'
      : 'rgb(183, 193, 204)'};
  margin-right: 4px;
`;

export const UpIcon = styled(AiOutlineArrowUp)`
  color: ${({ confirmed, recovered, checker }) =>
    confirmed
      ? 'rgb(235, 83, 116)'
      : recovered
      ? 'rgb(23, 138, 23)'
      : checker
      ? 'rgb(86, 115, 235)'
      : 'rgb(183, 193, 204)'};
  font-size: 12px;
  font-weight: bold;
`;

export const MiddleContainer = styled.div`
  width: 100%;
  background-color: rgb(25, 31, 44);
  border: 1px solid rgba(207, 207, 207, 0.25);
  border-radius: 16px;
  margin-top: 18px;
  padding: 0 20px;
`;

export const MiddleWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 12px 0;
`;

export const TodayConfirmedWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TodayConfirmedP = styled.div`
  color: rgb(183, 193, 204);
  font-size: 12px;
`;

export const TodayConfirmedFigure = styled.h2`
  color: rgb(207, 207, 207);
  font-size: 32px;
  margin: 4px 0;
`;

export const VsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const VsWrap = styled.div`
  display: flex;
`;

export const VsDate = styled.div`
  color: rgb(183, 193, 204);
  font-size: 12px;
  margin-right: 6px;
`;

export const VsFigure = styled.div`
  font-size: 12px;
  margin-left: 6px;
  background: rgba(235, 83, 116, 0.082);
  color: rgb(235, 83, 116);
  border-radius: 20px;
`;

export const BottomContainer = styled.div`
  width: 100%;
  background-color: rgb(25, 31, 44);
  border: 1px solid rgba(207, 207, 207, 0.25);
  border-radius: 16px;
  padding: 12px 20px;
  margin-top: 18px;
`;

export const ContentH2 = styled.div`
  color: rgb(207, 207, 207);
  padding: 14px 14px 20px 5px;
`;

export const ContentsContainer = styled.div``;

export const ContentsWrapper = styled.div``;
