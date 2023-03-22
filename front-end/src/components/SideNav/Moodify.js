import classNames from "classnames";
import "./../../styles/Moodify.scss"; 
import { useState, useEffect } from "react"
// import SpotifyWebApi from "spotify-web-api-js";

// const spotifyApi = new SpotifyWebApi();

const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

function Moodify() {

  //Authentication
  const [spotifyToken, setSpotifyToken] = useState("");
  const [nowPlaying, setNowPlaying] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    console.log("token from the URL: ", getTokenFromUrl());
    const spotifyToken = getTokenFromUrl().access_token;
    window.location.hash = "";
    console.log("Spotify token: ", spotifyToken);

    if (spotifyToken) {
      setSpotifyToken(spotifyToken);
      //use Spotify API
      spotifyApi.setAccesToken(spotifyToken)
      spotifyAPi.getMe()
        .then((user) => {
        console.log('user', user)
      })
      setLoggedIn(true);
    };
  });

  const getNowPlaying = () => {
    spotifyAPi.getMyCurrentPlaybackState()
      .then((response) => {
        setNowPlaying({
          name: response.item.name,
          albumArt: response.item.album.images[0].url
        });
      });
  }

  return (
    <div>
      {/* I think this localhost needs to be unqiue from our front-end or back-end server as it's where the Spotify authentication goes. It will redirect back to our front-end */}
      {!loggedIn && <a href="http://localhost:5005">Sign in to Spotify</a>}
      {loggedIn && (
        <>
          <div>Now Playing: {nowPlaying.name}</div>
            <img src={nowPlaying.albumArt} style={{height: 25}}/>
        </>
      )}
      {loggedIn && (
        <button onClick={() => getNowPlaying()}>Check Now Playing</button>
      )}
    </div>
  )
};

export default Moodify;