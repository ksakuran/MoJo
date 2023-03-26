import classNames from "classnames";
import React, { useState } from "react";
import '../styles/AboutPage.scss';
import Button from "./Common/Button";

const AboutPage = () => {

  const [ showFeatures, setShowFeatures ] = useState(true)
  const [ showTeam, setShowTeam] = useState(false)

  const clickShowFeatures = () => {
    setShowFeatures(true);
    setShowTeam(false);
  };

  const clickShowTeam = () => {
    setShowTeam(true);
    setShowFeatures(false);
  };

  const featureButton = classNames('ft', {
    'on': showFeatures === true
  })

  const teamButton = classNames('tm', {
    'on': showTeam === true
  })

  return (
    <>
      <section id="about">
        <h3 class="about-page">about mojo</h3>
        <p>our mission</p>
        <span id="change-desc">
        <button className={featureButton} onClick={()=> clickShowFeatures()} id='about-button'>features</button>
        <button className={teamButton} onClick={()=> clickShowTeam()} id='about-button'>the team</button>
        </span>
      </section>

      <section id="mojo-features">
      { showFeatures &&(<div id="features">
      <div class='feature-desc'>journal</div>
      <div class='feature-desc'>check in with your emotions</div>
      <div class='feature-desc'>moodscape</div>
      <div class='feature-desc'>moodify</div>
      </div>)}

      { showTeam && (<div id="team">
      <div class='team-desc'>Charlie</div>
      <div class='team-desc'>Kat</div>
      <div class='team-desc'>MoMo</div>
      </div>)}


      </section>
    </>
  );
};

export default AboutPage;
