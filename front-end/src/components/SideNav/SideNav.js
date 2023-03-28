import React, { useContext } from 'react';
//import axios from 'axios';
import classNames from "classnames";
import "./../../styles/SideNav.scss";

import UserInfo from "./UserInfo";
import ChangeDate from "./ChangeDate";
import CurrentWeather from "./CurrentWeather";
import CurrentMood from "./CurrentMood";
import Moodify from "./Moodify";

import { moodSelectionContext } from '../../providers/MoodSelectionProvider';



function SideNav() {

  const sideNavClass = classNames("side-nav");
  const { moodSelections } = useContext(moodSelectionContext);

  let moods = [];

  for (let moodSelection of moodSelections.selectedMoods) {
    moods.push(moodSelection.name);
  }

  return (
    <section className={sideNavClass}>
      <UserInfo />
      <CurrentWeather />
      <ChangeDate />
      <CurrentMood moods={moods} />
      <Moodify moods={moods} />
    </section>
  );
};

export default SideNav;