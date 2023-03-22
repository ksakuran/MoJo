import React from "react";
import classNames from "classnames";
import BreatheCircle from "./BreatheCircle";
import MoodBox from "./MoodBox";
import '../../styles/HomePage.scss'

const HomePage = () => {

  const HomeClass = classNames("home-page")


  return(
    <section className={HomeClass}>
      <BreatheCircle></BreatheCircle>
      <p>take a deep breath</p>
      <MoodBox></MoodBox>
    </section>
  )
}


export default HomePage;