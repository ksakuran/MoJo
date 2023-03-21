
import React from 'react';
import classNames from "classnames";
import "../styles/DaySelectionCalendar.scss";

function DaySelectionCalendar() {

  //potential styles
  const calendarClass = classNames("day-selection-calendar");

  return (
    <section className={calendarClass}>
      <h1>Test Day Selection Calendar Container</h1>
    </section>
  );
}

export default DaySelectionCalendar;