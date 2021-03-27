import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import {
  MainContentSection,
  TopContainer,
  MiddleContainer,
  BottomContainer,
  TopWrapper,
  Figure,
  H3,
  Increase,
  ConfirmedWrap,
  DeathWrap,
  CheckerWrap,
  RecoveredWrap,
  MainLayout,
  MiddleWrapper,
  TodayConfirmedWrap,
  TodayConfirmedP,
  TodayConfirmedFigure,
  VsWrapper,
  VsWrap,
  VsDate,
  VsFigure,
  ContentH2,
  ContentsContainer,
  ContentsWrapper,
} from './styles/content';

const Content = () => {
  const [confirmedData, setConfirmedData] = useState({});
  const [activeData, setActiveData] = useState({});
  const [comparedData, setComparedData] = useState({});

  useEffect(() => {
    const fetchEvents = async () => {
      const { data } = await axios.get(
        'https://api.covid19api.com/dayone/country/kr',
      );
      manuFactureData(data);
    };

    const manuFactureData = (data) => {
      const arr = data.reduce((acc, cur) => {
        const currentDate = new Date(cur.Date);
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const date = currentDate.getDate();
        const confirmed = cur.Confirmed; // 확진자
        const active = cur.Active; // 격리자
        const death = cur.Deaths; // 사망
        const recovered = cur.Recovered; // 완치

        const findItem = acc.find(
          (item) => item.year === year && item.month === month,
        );
        if (!findItem && year !== 2021) {
          acc.push({
            year,
            month,
            date,
            confirmed,
            active,
            death,
            recovered,
          });
        }
        if (findItem && findItem.date < date) {
          findItem.active = active;
          findItem.death = death;
          findItem.date = date;
          findItem.year = year;
          findItem.month = month;
          findItem.recovered = recovered;
          findItem.confirmed = confirmed;
        }

        return acc;
      }, []);

      const labels = arr.map((value) => `${value.month + 1}월`);
      const confirmed = arr.map((value) => value.confirmed);
      const active = arr.map((value) => value.active);
      const last = arr[arr.length - 1];

      setConfirmedData({
        labels,
        datasets: [
          {
            label: '국내 누적 확진자',
            backgroundColor: 'salmon',
            fill: true,
            data: confirmed,
          },
        ],
      });
      setActiveData({
        labels,
        datasets: [
          {
            label: '국내 누적 격리자',
            backgroundColor: 'salmon',
            fill: false,
            data: active,
          },
        ],
      });
      setComparedData({
        labels: ['확진자', '격리해제', '사망'],
        datasets: [
          {
            label: '국내 누적 격리자',
            fontColor: '#fff',
            backgroundColor: ['#ff3d67', '#059dff', '#ffc233'],
            borderColor: ['#ff3d67', '#059dff', '#ffc233'],
            fill: false,
            data: [last.confirmed, last.recovered, last.death],
          },
        ],
      });
    };

    fetchEvents();
  }, []);

  return (
    <MainLayout>
      <MainContentSection>
        <TopContainer>
          <TopWrapper>
            <ConfirmedWrap>
              <H3>확진자</H3>
              <Figure>100,070</Figure>
              <Increase>494</Increase>
            </ConfirmedWrap>
            <DeathWrap>
              <H3>사망자</H3>
              <Figure>100,070</Figure>
              <Increase>494</Increase>
            </DeathWrap>
            <RecoveredWrap>
              <H3>완치자</H3>
              <Figure>100,070</Figure>
              <Increase>494</Increase>
            </RecoveredWrap>
            <CheckerWrap>
              <H3>검사자</H3>
              <Figure>100,070</Figure>
              <Increase>494</Increase>
            </CheckerWrap>
          </TopWrapper>
        </TopContainer>
        <MiddleContainer>
          <MiddleWrapper>
            <TodayConfirmedWrap>
              <TodayConfirmedP>오늘 확진자수</TodayConfirmedP>
              <TodayConfirmedFigure>357명</TodayConfirmedFigure>
            </TodayConfirmedWrap>
            <VsWrapper>
              <VsWrap>
                <VsDate>vs 어제</VsDate>
                <VsFigure>100</VsFigure>
              </VsWrap>
              <VsWrap>
                <VsDate>vs 어제</VsDate>
                <VsFigure>100</VsFigure>
              </VsWrap>
            </VsWrapper>

            <VsWrapper>
              <VsWrap>
                <VsDate>vs 어제</VsDate>
                <VsFigure>100</VsFigure>
              </VsWrap>
              <VsWrap>
                <VsDate>vs 어제</VsDate>
                <VsFigure>100</VsFigure>
              </VsWrap>
            </VsWrapper>
          </MiddleWrapper>
        </MiddleContainer>
        <BottomContainer>
          <ContentH2>국내 코로나현황</ContentH2>
          <ContentsContainer>
            <ContentsWrapper>
              <Bar
                data={confirmedData}
                options={
                  ({
                    title: {
                      display: true,
                      text: '누적 확진자 추이',
                      fontSize: 16,
                    },
                  },
                  {
                    legend: {
                      display: true,
                      position: 'bottom',
                      labels: { fontColor: 'rgb(183, 193, 204)' },
                    },
                    scales: {
                      xAxes: [
                        {
                          ticks: {
                            fontColor: 'rgb(183, 193, 204)',
                          },
                        },
                      ],
                      yAxes: [
                        {
                          ticks: {
                            fontColor: 'rgb(183, 193, 204)',
                          },
                        },
                      ],
                    },
                  })
                }
              />
            </ContentsWrapper>
            {/* <ContentsWrapper>
              <Line
                data={activeData}
                options={
                  ({
                    title: {
                      display: true,
                      text: '누적 확진자 추이',
                      fontSize: 16,
                    },
                  },
                  { legend: { display: true, position: 'bottom' } })
                }
              />
            </ContentsWrapper>
            <ContentsWrapper>
              <Doughnut
                data={comparedData}
                options={
                  ({
                    title: {
                      display: true,
                      text: `누적, 확진, 해제, 사망 (${
                        new Date().getMonth() + 1
                      }월)`,
                      fontSize: 16,
                    },
                  },
                  { legend: { display: true, position: 'bottom' } })
                }
              />
            </ContentsWrapper> */}
          </ContentsContainer>
        </BottomContainer>
      </MainContentSection>
    </MainLayout>
  );
};

export default Content;
