import React, { useContext } from 'react';
import classNames from "classnames";
import "../styles/TopNav.scss";
import Button from './Common/Button';
import { appContext } from '../providers/AppProvider';
import Icon from './Common/Icon';

function TopNav() {

  const { setViewMode, userId, setUserId, isDaySelected, darkMode, setDarkMode, setIsDaySelected } = useContext(appContext);

  const handleSetView = (view) => {
    if (userId && isDaySelected) {
      setViewMode(view);
    }
  };


  const handleLogOut = () => {
    setUserId('');
    setViewMode('CALENDAR');
    setIsDaySelected(false)
  };

  //potential styles
  const topNavClass = classNames("top-nav");

  return (
    <nav className={topNavClass}>
      <h1>mojo</h1>
      <ul className={topNavClass}>
        { userId && (<li><Button disabled={!isDaySelected} btnType="nav" onClickHandler={() => handleSetView('HOME')}>home</Button></li>)}
        { userId && (<li><Button disabled={!isDaySelected} btnType="nav" onClickHandler={() => handleSetView('JOURNAL')}>journal</Button></li>)}
        { userId && (<li><Button disabled={!isDaySelected} btnType="nav" onClickHandler={() => handleSetView('MOODSCAPE')}>moodscape</Button></li>)}
        {!isDaySelected && !userId  && ((<li><Button btnType="nav" onClickHandler={() => setViewMode('LANDING')} >welcome</Button></li>))}
        {!isDaySelected && !userId && ((<li><Button btnType="nav" onClickHandler={() => setViewMode('ABOUT')} >about</Button></li>))}
        {userId && ((<li><Button btnType="nav" onClickHandler={handleLogOut}>logout</Button></li>))}
        <li><Button btnType="nav" onClickHandler={() => setDarkMode(!darkMode)}><Icon imgUrl="images/day-and-night.png" iconSize={"large"}/></Button></li>
      </ul>
    </nav >
  );
}

export default TopNav;