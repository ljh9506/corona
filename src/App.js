import { useState } from 'react';
import Content from './components/Content';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global-styles';

const themeStyle = {
  dark: {
    bodyBgColor: 'rgb(16, 20, 33)',
    fontColor: 'rgb(183, 193, 204);',
    backgroundColor: 'rgb(16, 20, 33)',
  },
  light: {
    bodyBgColor: 'rgb(255, 255, 255)',
    fontColor: 'rgb(70, 77, 82);',
    backgroundColor: 'rgba(246, 246, 246, 0.5);',
  },
};

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={themeStyle[theme]}>
      <GlobalStyles />
      <Content
        theme={theme}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        toggleTheme={toggleTheme}
      />
    </ThemeProvider>
  );
}

export default App;
