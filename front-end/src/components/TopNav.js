import React, { useContext, useState } from 'react';
import classNames from "classnames";
import "../styles/TopNav.scss";
import Button from './Common/Button';
import { appContext } from '../providers/AppProvider';

function TopNav() {

  const { setViewMode, userId, setUserId } = useContext(appContext);

  const handleLogOut = () => {
    setUserId('');
    setViewMode('CALENDAR');
  };

  //potential styles
  const topNavClass = classNames("top-nav");

  return (
    <div className={topNavClass}>
      <h1>mojo</h1>
      <div>
        <Button btnType="nav" onClickHandler={() => setViewMode('HOME')}>home</Button>
        <Button btnType="nav" onClickHandler={() => setViewMode('JOURNAL')}>journal</Button>
        <Button btnType="nav" onClickHandler={() => setViewMode('MOODSCAPE')}>moodscape</Button>
        {userId && (<Button btnType="nav" onClickHandler={handleLogOut}>logout</Button>)}

      </div>
    </div >
  );
}

export default TopNav;