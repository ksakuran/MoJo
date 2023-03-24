import React, { useContext } from 'react';
import classNames from "classnames";
import "./../../styles/CurrentMood.scss";

import Icon from '../Common/Icon';
import { appContext } from '../../providers/AppProvider';


function CurrentMood(props) {

  const moodContainerClass = classNames("current-mood-container");
  const moodListClass = classNames("current-mood-list");

  //const { daySelectionId } = useContext(appContext);
  
  let moods = props.moods;
  
  const moodList = moods.map(mood => {
  //Switch interpolations below to {mood.name} if mood_selections are objects
    return (
    <li className={moodListClass} key={mood.id}>
      <Icon imgUrl={`images/${mood}.png`} iconSize="small"></Icon><h2>{mood}</h2>
    </li>
    );
  });


  return (
    <div className={moodContainerClass}>
      <h3>current mood</h3>
      <ul>
        {moodList}
      </ul>
    </div>
  );
};

export default CurrentMood;
