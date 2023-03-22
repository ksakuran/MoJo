import React, { useState } from 'react';
import classNames from "classnames";
import "../styles/TopNav.scss";
import Button from './Common/Button';


function TopNav() {

  //pass to/from these mode somewhere?
  //move to context provider - together with userId, setUserId
  const [viewMode, setViewMode] = useState("CALENDAR");
  console.log("viewMode: ", viewMode);

  //potential styles
  const topNavClass = classNames("top-nav");

  return (
    <div className={topNavClass}>
      <h1>mojo</h1>
      <div>
        <Button btnType="nav" onClickHandler={() => setViewMode('HOME')}>home</Button>
        <Button btnType="nav" onClickHandler={() => setViewMode('JOURNAL')}>journal</Button>
        <Button btnType="nav" onClickHandler={() => setViewMode('MOODSCAPE')}>moodscape</Button>
        <Button btnType="nav" onClickHandler={() => setUserId('')}>logout</Button>
      </div>
    </div>
  );
}

export default TopNav;