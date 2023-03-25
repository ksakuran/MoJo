import './App.scss';
import React, { useContext, useState } from 'react';
import TopNav from './components/TopNav';
import LandingPage from './components/LandingPage';
import MainContainer from './components/MainContainer';
import { appContext } from './providers/AppProvider';
import DaySelectionProvider from './providers/DaySelectionProvider';
import Background from './components/Background';
import AboutPage from './components/AboutPage';


function App() {

  const { userId, setUserId, viewMode, setSpotifyToken } = useContext(appContext);

  const client_id = 'daab3cd4c0964c93ba725710faa3cfb3'; // Your client id
  const redirect_uri = `${window.location.protocol}//${window.location.hostname}:${window.location.port}/?loggedIn=true/`;
  const authEndpoint = "http://accounts.spotify.com/authorize";

  const loginUrl = `${authEndpoint}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=token&show_dialog=true`;

  const urlParam = window.location.search;

  if (urlParam) {
    //if user logged in by spotify, set default userId
    setUserId(1);

    //get spotify token from URL and save it in app context
    const tokenFromUrl = window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
      }, {});

    setSpotifyToken(tokenFromUrl.access_token);
    window.location.hash = "";
  }

  return (
    <>
      <TopNav />
      <Background />

      {!userId && viewMode !== 'ABOUT' && <LandingPage loginUrl={loginUrl} />}
      {viewMode === 'ABOUT' && <AboutPage />}
      {userId && <DaySelectionProvider> <MainContainer /> </DaySelectionProvider>}
    </>
  );
}

export default App;
