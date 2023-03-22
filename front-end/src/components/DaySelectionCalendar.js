import React, { useEffect, useState } from 'react';
import classNames from "classnames";
import "../styles/DaySelectionCalendar.scss";

import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import Icon from './Common/Icon';

function DaySelectionCalendar() {

  //potential styles
  const calendarClass = classNames("day-selection-calendar");

  const [daySelectionId, setDaySelectionId] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    //make axios call to create or retrieve selected date info

    //set daySelectionId with result from axios

    //save daySelectionId to session?
    if (selectedDate) alert(`you clicked ${selectedDate}!`);

  }, [selectedDate]);


  const renderEventContent = (eventInfo) => {
    const mood = eventInfo.event.title;
    return (
      <Icon
        imgUrl={`images/${mood}.png`}
      />
    );
  };

  return (
    <section className={calendarClass}>
      <h1>select a date to checkin with yourself </h1>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        dateClick={(arg) => setSelectedDate(arg.dateStr)}
        initialView="dayGridMonth"
        eventContent={renderEventContent}
        events={[
          { title: "1.sun", date: '2023-03-20' },
          { title: "2.journal", date: '2023-03-20' },
          { title: "3.checklist", date: '2023-03-20' },
          { title: "happy", date: '2023-03-20' },
          { title: "relax", date: '2023-03-20' },
          { title: "tired", date: '2023-03-20' }
        ]}
        eventDisplay="list-item"
      />
    </section>
  );
}

export default DaySelectionCalendar;