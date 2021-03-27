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
  ContentH2,
  ContentsContainer,
  ContentsWrapper,
  UpIcon,
  IncreaseWrap,
  ChartLabel,
  ChartInput,
  ChartInputWrapper,
} from './styles/content';
import Menu from '../Menu';
import Sidebar from '../Sidebar';

const Content = ({ openMenu, setOpenMenu }) => {
  const [selected, setSelected] = useState('KR');
  const [showChart, setShowChart] = useState('Bar');
  const [searchCountry, setSearchCountry] = useState('kr');
  const [confirmedData, setConfirmedData] = useState({});
  const [todayData, setTodayData] = useState({});
  const [coupleDayData, setCoupleDayData] = useState({});
  const [activeData, setActiveData] = useState({});
  const [entireData, setEntireData] = useState({});

  useEffect(() => {
    const fetchEvents = async () => {
      const { data } = await axios.get(
        `https://api.covid19api.com/dayone/country/${searchCountry}`,
      );
      manuFactureData(data);
      console.log(data);
      setTodayData(data[data.length - 1]);
      setCoupleDayData(data[data.length - 2]);
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
        if (!findItem) {
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
            label: `${selected} 누적 확진자`,
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
            label: `${selected} 격리자`,
            backgroundColor: 'rgb(86, 115, 235)',
            fill: false,
            borderWidth: 1,
            borderColor: 'rgb(86, 115, 235)',
            data: active,
          },
        ],
      });
      setEntireData({
        labels: ['확진자', '완치자', '사망'],
        datasets: [
          {
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
  }, [selected, searchCountry]);

  return (
    <MainLayout>
      <MainContentSection>
        <TopContainer>
          <TopWrapper>
            <ConfirmedWrap>
              <H3>확진자</H3>
              <Figure confirmed='true'>{todayData.Confirmed}</Figure>
              <IncreaseWrap confirmed='true'>
                <Increase confirmed='true'>
                  {Math.abs(todayData.Confirmed - coupleDayData.Confirmed)}
                </Increase>
                <UpIcon confirmed='true' />
              </IncreaseWrap>
            </ConfirmedWrap>
            <DeathWrap>
              <H3>사망자</H3>
              <Figure>{todayData.Deaths}</Figure>
              <IncreaseWrap>
                <Increase>
                  {Math.abs(todayData.Deaths - coupleDayData.Deaths)}
                </Increase>
                <UpIcon />
              </IncreaseWrap>
            </DeathWrap>
            <RecoveredWrap>
              <H3>완치자</H3>
              <Figure recovered='true'>{todayData.Recovered}</Figure>
              <IncreaseWrap recovered='true'>
                <Increase recovered='true'>
                  {Math.abs(todayData.Recovered - coupleDayData.Recovered)}
                </Increase>
                <UpIcon recovered='true' />
              </IncreaseWrap>
            </RecoveredWrap>
            <CheckerWrap>
              <H3>검사자</H3>
              <Figure checker='true'>100,070</Figure>
              <IncreaseWrap checker='true'>
                <Increase checker='true'>494</Increase>
                <UpIcon checker='true' />
              </IncreaseWrap>
            </CheckerWrap>
          </TopWrapper>
        </TopContainer>
        <MiddleContainer>
          <MiddleWrapper>
            <TodayConfirmedWrap>
              <TodayConfirmedP>오늘 확진자수</TodayConfirmedP>
              <TodayConfirmedFigure>
                {Math.abs(todayData.Confirmed - coupleDayData.Confirmed)}명
              </TodayConfirmedFigure>
            </TodayConfirmedWrap>
            <VsWrapper>
              <VsWrap>
                <VsDate>vs 어제</VsDate>
                <IncreaseWrap confirmed='true'>
                  <Increase confirmed='true'>25</Increase>
                  <UpIcon confirmed='true' />
                </IncreaseWrap>
              </VsWrap>
              <VsWrap>
                <VsDate>vs 1주전</VsDate>
                <IncreaseWrap confirmed='true'>
                  <Increase confirmed='true'>23</Increase>
                  <UpIcon confirmed='true' />
                </IncreaseWrap>
              </VsWrap>
            </VsWrapper>

            <VsWrapper>
              <VsWrap>
                <VsDate>vs 2주전</VsDate>
                <IncreaseWrap confirmed='true'>
                  <Increase confirmed='true'>25</Increase>
                  <UpIcon confirmed='true' />
                </IncreaseWrap>
              </VsWrap>
              <VsWrap>
                <VsDate>vs 1달전</VsDate>
                <IncreaseWrap confirmed='true'>
                  <Increase confirmed='true'>102</Increase>
                  <UpIcon confirmed='true' />
                </IncreaseWrap>
              </VsWrap>
            </VsWrapper>
          </MiddleWrapper>
        </MiddleContainer>
        <BottomContainer>
          <ContentsContainer>
            <ChartInputWrapper>
              <ChartInput
                checked={showChart === 'Bar' ? true : false}
                id='Bar'
                type='radio'
                name='chart'
                value='Bar'
                onChange={(e) => setShowChart(e.target.value)}
              />
              <ChartLabel htmlFor='Bar'>누적 통계</ChartLabel>
              <ChartInput
                checked={showChart === 'Line' ? true : false}
                id='Line'
                type='radio'
                name='chart'
                value='Line'
                onChange={(e) => setShowChart(e.target.value)}
              />
              <ChartLabel htmlFor='Line'>격리자 통계</ChartLabel>
              <ChartInput
                checked={showChart === 'Doughnut' ? true : false}
                id='Doughnut'
                type='radio'
                name='chart'
                value='Doughnut'
                onChange={(e) => setShowChart(e.target.value)}
              />
              <ChartLabel htmlFor='Doughnut'>전체 통계</ChartLabel>
            </ChartInputWrapper>
            {showChart === 'Bar' ? (
              <ContentsWrapper>
                <ContentH2>{selected} 코로나 누적확진자 현황</ContentH2>
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
                        labels: {
                          fontColor: 'rgb(183, 193, 204)',
                          padding: 20,
                        },
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
            ) : showChart === 'Line' ? (
              <ContentsWrapper>
                <ContentH2>{selected} 코로나 누적격리자 현황</ContentH2>
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
                    {
                      legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                          fontColor: 'rgb(183, 193, 204)',
                          padding: 20,
                        },
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
            ) : showChart === 'Doughnut' ? (
              <ContentsWrapper>
                <ContentH2>{selected} 코로나 현황</ContentH2>
                <Doughnut
                  data={entireData}
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
                    {
                      legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                          fontColor: 'rgb(183, 193, 204)',
                          padding: 20,
                        },
                      },
                    })
                  }
                />
              </ContentsWrapper>
            ) : null}
          </ContentsContainer>
        </BottomContainer>
      </MainContentSection>
      <Menu
        selected={selected}
        setSelected={setSelected}
        setSearchCountry={setSearchCountry}
      />
      <Sidebar
        setOpenMenu={setOpenMenu}
        openMenu={openMenu}
        selected={selected}
        setSelected={setSelected}
        setSearchCountry={setSearchCountry}
      />
    </MainLayout>
  );
};

export default Content;
