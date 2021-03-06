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
  background-color: ${({ theme }) => theme.backgroundColor};
  margin: 0;
  padding: 0;
}

.ReactFlagsSelect-module_flagsSelect__2pfa2 {
  width: 100% !important;
}
.ReactFlagsSelect-module_label__27pw9 {
  color: rgb(183,193,204);
}
.ReactFlagsSelect-module_selectOptions__3LNBJ {
  background-color: rgb(25, 31, 44);
}
.ReactFlagsSelect-module_filterBox__3m8EU {
  background-color: rgb(25, 31, 44);
}
.ReactFlagsSelect-module_selectOption__3pcgW {
  background-color: rgb(25, 31, 44);
}
.ReactFlagsSelect-module_selectOptions__3LNBJ {
  background-color: rgb(25, 31, 44);
}

::-webkit-scrollbar{width: 8px;}
::-webkit-scrollbar-track {  background-color: rgb(25, 31, 44);
}
::-webkit-scrollbar-thumb {
    background: rgba(126, 129, 134, 0.753);
    border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {   background-color: rgb(183,193,204);
}
@media screen and (max-width: 480px) {
  .chartjs-render-monitor {
    margin: 0;
  }
}


`;
