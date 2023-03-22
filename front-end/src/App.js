import './App.scss';
import React from 'react';
import TopNav from './components/TopNav';
// import LandingPage from './components/LandingPage';
import MainContainer from './components/MainContainer';

function App() {
  return (
    <>
      <TopNav />

      {/* if no userid in session */}
      {/* <LandingPage /> */}

      {/* if userid exists in session */}
      <MainContainer />
    </>
  );
}

export default App;
