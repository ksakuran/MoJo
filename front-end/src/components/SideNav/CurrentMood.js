import React, { useEffect, useContext } from 'react';
import classNames from "classnames";
import "./../../styles/CurrentMood.scss";

import Icon from '../Common/Icon';
import { appContext } from '../../providers/AppProvider';


function CurrentMood(props) {

  const moodListClass = classNames("current-mood-list");
  const { daySelectionId } = useContext(appContext);
  
  let moods = props.moods;
  
  const moodList = moods.map(mood => {
  console.log('moods-url:', `images/${mood}.png`); //Removing the .name causes an error
    return (
    <li className={moodListClass}>
      <Icon imgUrl={`images/${mood}.png`} iconSize="small"></Icon><p>{mood}</p>
    </li>
    );
  });


  return (
    <div>
      <h4>current mood</h4>
      <ul>
        {/* <li>Happy</li>
        <li>Motivated</li>
        <li>Grateful</li> */}
        {moodList}
      </ul>
    </div>
  );
};

export default CurrentMood;
