import React, { useState } from 'react';
import classNames from "classnames";
import "../styles/TopNav.scss";


function TopNav() {

  //pass to/from these mode somewhere?
  const [viewMode, setViewMode] = useState("CALENDAR");
  console.log("viewMode: ", viewMode);

  //potential styles
  const topNavClass = classNames("top-nav");

  return (
    <div className={topNavClass}>
      <h1>MOJO</h1>
      <div>
        <button onClick={() => setViewMode('HOME')}>home</button>
        <button onClick={() => setViewMode('JOURNAL')}>journal</button>
        <button onClick={() => setViewMode('MOODSCAPE')}>moodscape</button>
      </div>
    </div>
  );
}

export default TopNav;