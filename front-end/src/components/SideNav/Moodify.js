import React from "react";
import classNames from "classnames";
import "./../../styles/Moodify.scss";

import { useState, useEffect, useContext } from "react";
import { appContext } from './../../providers/AppProvider';
import { moodSelectionContext } from '../../providers/MoodSelectionProvider';
import { selectPlaylistUrl } from "../../helpers/selectPlaylistUrl";
import SpotifyWebApi from "spotify-web-api-js";


const moodifyClass = classNames("moodify");
const spotifyApi = new SpotifyWebApi();

function Moodify(props) {
  const [playlistUrl, setPlaylistUrl] = useState("");
  const { spotifyToken } = useContext(appContext);
  const { moodSelections } = useContext(moodSelectionContext);

  //set Spotify token state
  useEffect(() => {
    if (spotifyToken) {
      //use Spotify API
      spotifyApi.setAccessToken(spotifyToken);
      spotifyApi.getMe()
        .then((user) => {
          console.log('user', user);
        });
    };
  }, []);
  
  //set playlist state
  useEffect(() => {
    setPlaylistUrl(selectPlaylistUrl(props.moods));
  }, [moodSelections]);

  return (
    <div className={moodifyClass}>
      <iframe title="spotify-player" style={{ borderRadius: "12px" }} src={selectPlaylistUrl(props.moods)} width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      <h4 id="listen" >listen to something that matches today's mood</h4>
    </div>
  );
};

export default Moodify;