import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import classNames from "classnames";
import "./../../styles/CurrentMood.scss";

import Icon from '../Common/Icon';
import { appContext } from '../../providers/AppProvider';


function CurrentMood() {

  const { daySelectionId } = useContext(appContext);
  let moods = [];

  // ------- Can uncomment once I have pulled completed mood selection feature
  // useEffect(() => {
  //   axios
  //     .get(`/api/mood/${daySelectionId}`)
  //       .then(response => {
  //         console.log("user's moods today: ", response);
  //         moods.push(response);
  //       })
  //       .catch(err => {
  //         console.log("error:", err.message);
  //       });
  // }, [daySelectionId, moods]);


  // const moodList = moods[0].map(mood => {
  //   return (
  //   <li>
  //     <Icon imgUrl={`images/${mood.name}.png`} iconSize="small">{mood.name}</Icon>/
  //   </li>
  //   );
  // });


  return (
    <div>
      <h4>current mood</h4>
      <ul>
        <li>Happy</li>
        <li>Motivated</li>
        <li>Grateful</li>
        {/* {moodList} */}
      </ul>
    </div>
  );
};

export default CurrentMood;
