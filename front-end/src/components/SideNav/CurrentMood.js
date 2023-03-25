import React, { useContext } from 'react';
import classNames from "classnames";
import "./../../styles/CurrentMood.scss";

import Icon from '../Common/Icon';
import { appContext } from '../../providers/AppProvider';
import { moodSelectionContext } from '../../providers/MoodSelectionProvider';

function CurrentMood(props) {

  const { moodSelections } = useContext(moodSelectionContext);


  const moodContainerClass = classNames("current-mood-container");
  const moodListClass = classNames("current-mood-list");

  //const { daySelectionId } = useContext(appContext);

  let moods = moodSelections.selectedMoods;

  const moodList = moods.map(mood => {
    console.log('moods-url:', `images/${mood.name}.png`); //Switch interpolations below to {mood.name} if mood_selections are objects
    return (
      <li className={moodListClass} key={mood.mood_id}>
        <Icon imgUrl={`images/${mood.name}.png`} iconSize="medium"></Icon><h4 className={moodListClass}>{mood.name}</h4>
      </li>
    );
  });


  return (
    <div className={moodContainerClass}>
      <h3 className={moodListClass}>current mood</h3>
      <ul className={moodListClass}>
        {moodList}
      </ul>
    </div>
  );
};

export default CurrentMood;
