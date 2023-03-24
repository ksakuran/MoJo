import React, { useEffect, useContext } from 'react';
import classNames from "classnames";
import "./../../styles/SideNav.scss";

import UserInfo from "./UserInfo";
import ChangeDate from "./ChangeDate";
import CurrentWeather from "./CurrentWeather";
import CurrentMood from "./CurrentMood";
import Moodify from "./Moodify";
import { appContext } from '../../providers/AppProvider';


function SideNav() {

  const sideNavClass = classNames("side-nav");
  const { daySelectionId } = useContext(appContext);
  
  let moods = ['happy', 'tired', 'bored'];

  // ------- Once I have pulled completed mood selection feature, uncomment useEffect below and remove hard-coded moods above
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