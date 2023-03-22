import './App.scss';
import React, { useContext } from 'react';
import TopNav from './components/TopNav';
import LandingPage from './components/LandingPage';
import MainContainer from './components/MainContainer';
import { appContext } from './providers/AppProvider';
import DaySelectionProvider from './providers/DaySelectionProvider';

function App() {
  const { userId } = useContext(appContext);

  return (
    <>
      <TopNav />

      {!userId && <LandingPage />}

      {userId && <DaySelectionProvider> <MainContainer /> </DaySelectionProvider>}
    </>
  );
}

export default App;
