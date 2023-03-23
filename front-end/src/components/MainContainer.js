
import React, { useContext } from 'react';
import SideNav from "./SideNav/SideNav";
import DaySelectionCalendar from "./DaySelectionCalendar";
import HomePage from "./Home/HomePage";
import JournalPage from "./Journal/JournalPage";
import Moodscape from "./Moodscape/Moodscape";
import classNames from "classnames";
import '../styles/MainContainer.scss';
import { appContext } from '../providers/AppProvider';

function MainContainer() {

  //get viewMode from appConext
  const { viewMode } = useContext(appContext);

  //potential styles
  const mainContainerClass = classNames("main-container");

  return (
    <main className={mainContainerClass}>
      {/* Always display on the left */}
      <SideNav />

      {/* if no daySelectionId in session or default viewMode */}
      {
        viewMode === 'CALENDAR' && (
          <DaySelectionCalendar />
        )
      }

      {
        viewMode === 'HOME' && (
          <HomePage />
        )
      }

      {
        viewMode === 'JOURNAL' && (
          <JournalPage />
        )
      }

      {
        viewMode === 'MOODSCAPE' && (
          <Moodscape />
        )
      }

    </main>
  );
}

export default MainContainer;