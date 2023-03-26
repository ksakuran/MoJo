import React from "react";
import classNames from "classnames";
import "./../../styles/Moodify.scss";
import { useEffect, useContext } from "react";
import { selectPlaylistUrl } from "../../helpers/selectPlaylistUrl";
import SpotifyWebApi from "spotify-web-api-js";
import { appContext } from './../../providers/AppProvider';

const moodifyClass = classNames("moodify");
const spotifyApi = new SpotifyWebApi();

function Moodify(props) {

  const { spotifyToken } = useContext(appContext);

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

  // ** Dont forget to swap the selectPlaylistUrl call on line 64 to use props.moods  
  return (
    <div className={moodifyClass}>
      <h4>listen to something that matches today's mood</h4>
      <iframe title="spotify-player" style={{ borderRadius: "12px" }} src={selectPlaylistUrl(props.moods)} width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
  );
};

export default Moodify;