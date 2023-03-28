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
        <h5>our mission</h5>
        <p>to create a safe space for you to deepen your emotional awareness and connect to your thoughts, without the pressures of social media</p>
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
            <div class="feature-desc">
              <h3>checking in</h3>
              <img src="images/mood-selection.png"></img>
              <p>Check in with yourself by selecting your daily moods, and keep track of how you are practicing self care.</p>
            </div>
            <div class="feature-desc">
              <h3>journaling</h3>
              <img src="images/journal.png"></img>
              <p>Build a daily journaling practice, or just come to this space whenever you need it. Get your thoughts out.</p>
            </div>
            <div class="feature-desc">
              <h3>moodscape</h3>
              <img src="images/moodscape.png"></img>
              <p>View the data. See how often you are experiencing specific emotions to deepen your emotional awareness.</p>
            </div>
            <div class="feature-desc">
              <h3>moodify</h3>
              <img src="images/moodify.png"></img>
              <p>Listen to one of our recommended playlists based on your daily mood selection and connect with yourself.</p>
            </div>
            <div class="feature-desc">
              <h3>navigation calendar</h3>
              <img src="images/calendar.png"></img>
              <p>See an overview of your activity, mood selections, and navigate through past days entries.</p>
            </div>
          </div>
          
        )}

        {showTeam && (
          <div id="team">
            <div class="team-desc">
              <img src="images/kat-headshot.jpg"></img>
              <h3>Katherine Nishimura</h3>
              <p>
                Katherine is a full-stack web developer based in Vancouver.
                During the project, her focus was building the daily mood
                selection features and displaying the corresponding data for the
                moodscape. Her favorite part of this project was using her fine
                arts education and creativity to bring the user interface design
                to life. When she isn't programming, she is making jewelry,
                birdwatching, or spending time at the beach.
              </p>
            </div>
            <div class="team-desc">
              <img src="images/mo-headshot.jpg"></img>
              <h3>Khin Mo Mo Zin</h3>
              <p>
                Mo Mo is a Calgary-based software engineer with prior experience
                in software development. Her focus on the mojo project was to
                provide users with the monthly calendar view, journal entry,
                and, checklist customization features. When she’s not busy
                challenging herself with new coding techniques, she can be found
                hiking in the Canadian Rockies or knitting at home with her cat,
                Chia.
              </p>
            </div>
            <div class="team-desc">
              <img src="images/charlie-headshot.png"></img>
              <h3>Charlie Chandler</h3>
              <p>
                Originally from the UK, Charlie is a full-stack developer based
                in Vancouver. He has a background in psychology so creating an
                app related to emotional awareness was of particular interest to
                him. His favourite part of this project was working with the
                Spotify API to develop the Moodify feature, and diving deeper
                into coding with React.{" "}
              </p>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default AboutPage;
