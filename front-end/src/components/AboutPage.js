import classNames from "classnames";
import React, { useState } from "react";
import "../styles/AboutPage.scss";
import Button from "./Common/Button";

const AboutPage = () => {
  const [showFeatures, setShowFeatures] = useState(true);
  const [showTeam, setShowTeam] = useState(false);

  const clickShowFeatures = () => {
    setShowFeatures(true);
    setShowTeam(false);
  };

  const clickShowTeam = () => {
    setShowTeam(true);
    setShowFeatures(false);
  };

  const featureButton = classNames("ft", {
    on: showFeatures === true,
  });

  const teamButton = classNames("tm", {
    on: showTeam === true,
  });

  return (
    <>
      <section id="about">
        <h3 class="about-page">about mojo</h3>
        <p>our mission</p>
        <span id="change-desc">
          <button
            className={featureButton}
            onClick={() => clickShowFeatures()}
            id="feature-button"
          >
            features
          </button>
          <button
            className={teamButton}
            onClick={() => clickShowTeam()}
            id="team-button"
          >
            the team
          </button>
        </span>
      </section>

      <section id="mojo-features">
        {showFeatures && (
          <div id="features">
            <div class="feature-desc"><h3>journal</h3>journal</div>
            <div class="feature-desc"><h3>checking in</h3>check in with your emotions</div>
            <div class="feature-desc"><h3>moodscape</h3>moodscape</div>
            <div class="feature-desc"><h3>moodify</h3>moodify</div>
          </div>
        )}

        {showTeam && (
          <div id="team">
            <div class="team-desc">
              <img src="images/charlie-headshot.png"></img>
              <h3>Charlie Chandler</h3>
              <p>Originally from the UK, Charlie is a full-stack developer based in Vancouver. He has a background in psychology so creating an app related to emotional awareness was of particular interest to him. His favourite part of this project was working with the Spotify API to develop the Moodify feature, and diving deeper into coding with React. </p>
            </div>
            <div class="team-desc">
              <img src="images/kat-headshot.jpg"></img>
              <h3>Katherine Nishimura</h3>
              <p></p>
            </div>
            <div class="team-desc">
              <img src="images/mo-headshot.jpg"></img>
              <h3>Khin Mo Mo Zin</h3>
              <p>Mo Mo is a Calgary-based software engineer with prior experience in software development. Her focus on the mojo project was to provide users with the monthly calendar view, journal entry, and, checklist customization features. When she’s not busy challenging herself with new coding techniques, she can be found hiking in the Canadian Rockies or knitting at home with her cat, Chia.</p>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default AboutPage;
