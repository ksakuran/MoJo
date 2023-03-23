import React from 'react';
import classNames from "classnames";
import "./../../styles/SideNav.scss";

import UserInfo from "./UserInfo";
import ChangeDate from "./ChangeDate";
import CurrentWeather from "./CurrentWeather";
import CurrentMood from "./CurrentMood";
import Moodify from "./Moodify";

function SideNav() {

  const sideNavClass = classNames("side-nav");


  return (
    <section className={sideNavClass}>
      <UserInfo />
      <ChangeDate />
      <CurrentWeather />
      <CurrentMood />
      <Moodify />
    </section>
  );
};

export default SideNav;