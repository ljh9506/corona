import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700&display=swap');

* {
  font-family: 'Noto Sans KR', sans-serif;
  box-sizing: border-box;
}

.container {
  display: flex;
  justify-content: center;
}

body {
  background-color: rgb(16, 20, 33);
  margin: 0;
  padding: 0;
}

`;
