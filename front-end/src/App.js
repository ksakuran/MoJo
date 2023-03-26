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

  const { userId, setUserId, viewMode, setSpotifyToken } = useContext(appContext);

  const client_id = 'daab3cd4c0964c93ba725710faa3cfb3'; // Your client id
  const redirect_uri = `${window.location.protocol}//${window.location.hostname}:${window.location.port}/`;
  const authEndpoint = "http://accounts.spotify.com/authorize";

  const loginUrl = `${authEndpoint}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=token&show_dialog=true`;

  const urlHash = window.location.hash;

  if (urlHash.length > 1) {
    //get spotify token from URL and save it in app context
    const tokenFromUrl = urlHash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
      }, {});

    setSpotifyToken(tokenFromUrl.access_token);
  }

  //check if there is an existing cookies and set login value
  let login = false;
  const cookie = document.cookie;
  if (cookie) {
    const currentCookie = cookie.split("=");
    if (currentCookie[0] === "isLoggedIn" && currentCookie[1] === "true") {
      login = true;
    }
  }

  //set cookie and default user
  if ((urlHash.length > 1 && !login) || login) {
    //set cookie for the first time log in
    document.cookie = "isLoggedIn=true";

    //set default user
    setUserId(1);

    //clean up url link
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
