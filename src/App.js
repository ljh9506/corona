import { useState } from 'react';
import Content from './components/Content';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Header setOpenMenu={setOpenMenu} openMenu={openMenu} />
      <Content openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </>
  );
}

export default App;
