import React from "react";
import classNames from "classnames";
import "./../../styles/Moodify.scss";

import { useState, useEffect, useContext } from "react";
import { appContext } from './../../providers/AppProvider';
import { moodSelectionContext } from '../../providers/MoodSelectionProvider';
import { selectPlaylistUrl } from "../../helpers/selectPlaylistUrl";
import SpotifyWebApi from "spotify-web-api-js";


const moodifyClass = classNames("moodify");
const moodifyContainer = classNames("moodify-container");
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
          // console.log('user', user);
        });
    };
  }, []);

  //set playlist state
  useEffect(() => {
    setPlaylistUrl(selectPlaylistUrl(props.moods));
  }, [moodSelections]);

  if (moodSelections.selectedMoods[0].name === "none") {
    return (
      <div className={moodifyClass}>
        <div className={moodifyContainer}>
          <h3 id='moody'>
            select how you're feeling today <br></br>to get a playlist that matches your mood
          </h3>
        </div>
      </div>
    );
  }

  else {
    return (
      <div className={moodifyClass}>
        <iframe title="spotify-player" style={{ borderRadius: "12px" }} src={playlistUrl} width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <h3 id="listen" >moodify: listen to something that matches today's mood</h3>
      </div>
    );
  }
};

export default Moodify;