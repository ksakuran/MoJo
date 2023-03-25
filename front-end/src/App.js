import './App.scss';
import React, { useContext } from 'react';
import TopNav from './components/TopNav';
import LandingPage from './components/LandingPage';
import MainContainer from './components/MainContainer';
import { appContext } from './providers/AppProvider';
import DaySelectionProvider from './providers/DaySelectionProvider';
import Background from './components/Background';
import AboutPage from './components/AboutPage';

function App() {
  const { userId, setUserId, viewMode } = useContext(appContext);
  setUserId(1);

  return (
    <>
      <TopNav />
      <Background />

      {/* {!userId && viewMode !== 'ABOUT' && <LandingPage />}
      {viewMode === 'ABOUT' && <AboutPage />} */}
      {userId && <DaySelectionProvider> <MainContainer /> </DaySelectionProvider>}
    </>
  );
}

export default App;
