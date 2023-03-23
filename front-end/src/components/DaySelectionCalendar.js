import React, { useContext, useEffect, useState } from 'react';
import classNames from "classnames";
import "../styles/DaySelectionCalendar.scss";

import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import Icon from './Common/Icon';
import { daySelectionContext } from '../providers/DaySelectionProvider';
import { appContext } from '../providers/AppProvider';
import axios from 'axios';

function DaySelectionCalendar() {

  //potential styles
  const calendarClass = classNames("day-selection-calendar");

  const { daySelectionId, setDaySelectionId, selectedDate, setSelectedDate } = useContext(daySelectionContext);
  const { userId, setViewMode } = useContext(appContext);


  useEffect(() => {
    if (userId && selectedDate) {
      //make axios call to check if selected date and user_id exists in day_selection table
      axios.
        get(`/api/dayselection/${selectedDate}/${userId}`)
        .then(res => {
          const { data } = res;

          if (Object.keys(data).length > 0) {
            //if exists then set daySelectionId with that value
            setDaySelectionId(data.daySelection.id);
          } else {
            //if not exists then create new daySelectionId 
            return axios.post(`/api/dayselection/new`, {
              created_date: selectedDate,
              user_id: userId
            });
          }
        })
        .then(res => {
          if (res) {
            //set state with newly created value
            setDaySelectionId(res.data.daySelection.id);
          }
          setViewMode('HOME');
        })
        .catch(err => console.error(err));
    }
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