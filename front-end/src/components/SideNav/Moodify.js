import React from "react";
import classNames from "classnames";
import "./../../styles/Moodify.scss";
import { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";

 const spotifyApi = new SpotifyWebApi();

 const client_id = 'daab3cd4c0964c93ba725710faa3cfb3'; // Your client id
const client_secret = 'c9eeed838956447893ee87ec4e925b7f'; // Your secret
const redirect_uri = 'http://localhost:3000/callback/'; // Your redirect uri

const authEndpoint = "http://accounts.spotify.com/authorize";

export const loginUrl = `${authEndpoint}?
client_id=${client_id}
&redirect_uri=${redirect_uri}
&response_type=token
&show_dialog=true`

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


                                    //  Atempt #1
    useEffect(() => {
      console.log("token from the URL: ", getTokenFromUrl());
      const spotifyToken = getTokenFromUrl().access_token;
      window.location.hash = "";
      console.log("Spotify token: ", spotifyToken);

      if (spotifyToken) {
        setSpotifyToken(spotifyToken);
        //use Spotify API
        spotifyApi.setAccessToken(spotifyToken);
        spotifyApi.getMe()
          .then((user) => {
            console.log('user', user);
          });
        setLoggedIn(true);
      };
    });


  return (
    <div>
        {!loggedIn && <a href={loginUrl}>Sign in to Spotify</a>}
        {loggedIn && (
          <iframe title="spotify-player" style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0UrRvztWcAU?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        )}
    </div>
  );
};

export default Moodify;