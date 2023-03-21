import React from 'react';
import classNames from "classnames";
import "../styles/TopNav.scss";


function TopNav() {

  //potential styles
  const topNavClass = classNames("top-nav");

  return (
    <div className={topNavClass}>
      <h1>MOJO</h1>
      <ul>
        <li>home</li>
        <li>journal</li>
        <li>moodscape</li>
      </ul>
    </div>
  );
}

export default TopNav;