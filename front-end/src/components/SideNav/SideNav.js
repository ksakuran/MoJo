import React, { useEffect, useContext } from 'react';
//import axios from 'axios';
import classNames from "classnames";
import "./../../styles/SideNav.scss";

import UserInfo from "./UserInfo";
import ChangeDate from "./ChangeDate";
import CurrentWeather from "./CurrentWeather";
import CurrentMood from "./CurrentMood";
import Moodify from "./Moodify";

import { appContext } from '../../providers/AppProvider';
import { moodSelectionContext } from '../../providers/MoodSelectionProvider';



function SideNav() {

  const sideNavClass = classNames("side-nav");
  //const { daySelectionId } = useContext(appContext);
  const { moodSelections } = useContext(moodSelectionContext);
  
  let moods = [];
  console.log('moodSelectionsState', moodSelections)
  console.log('mood names array', moods)

  for (let moodSelection of moodSelections.selectedMoods){
    moods.push(moodSelection.name)
  }

  return (
    <section className={sideNavClass}>
      <UserInfo />
      <CurrentWeather />
      <ChangeDate />
      <CurrentMood moods={moods}/>
      <Moodify moods={moods}/>
    </section>
  );
};

export default SideNav;