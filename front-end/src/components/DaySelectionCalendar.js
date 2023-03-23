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
import { format, addDays } from 'date-fns';
import { title } from 'process';

function DaySelectionCalendar() {

  //potential styles
  const calendarClass = classNames("day-selection-calendar");

  const { setDaySelectionId, selectedDate, setSelectedDate } = useContext(daySelectionContext);
  const { userId, setViewMode } = useContext(appContext);
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [currentMonth, setCurrentMonth] = useState({
    month: format(new Date(), 'MM'),
    year: format(new Date(), 'yyyy')
  });

  const calendarRef = React.createRef();

  //for calendar event list
  useEffect(() => {
    //retrieve monthly data and load to calendar
    const { month, year } = currentMonth;
    axios
      .get(`/api/dayselection/calendar/${month}/${year}/${userId}`)
      .then(res => {
        const { calendarData } = res.data;
        const moodList = calendarData[0];
        const journalList = calendarData[1];
        setCalendarEvents([]);
        journalList.forEach(journal => {
          if (journal.weather_icon) {
            const event = { title: `weather:${journal.weather_icon}`, date: format(new Date(journal.day_selection_created_date), 'yyyy-MM-dd') };
            setCalendarEvents(prev => [...prev, event]);
          }
          if (journal.journal_id) {
            const event = { title: '2.journal', date: format(new Date(journal.day_selection_created_date), 'yyyy-MM-dd') };
            setCalendarEvents(prev => [...prev, event]);
          }
        });
        moodList.forEach(mood => {
          const event = { title: mood.name, date: format(new Date(mood.day_selection_created_date), 'yyyy-MM-dd') };
          setCalendarEvents(prev => [...prev, event]);
        });
      })
      .catch(err => console.error(err));
  }, [currentMonth]);

  //for setting daySelectionId
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
    const name = eventInfo.event.title;

    let imageUrl = `images/${name}.png`;

    if (name.startsWith('weather:')) {
      imageUrl = name.slice(8);
    }

    return (
      <Icon
        imgUrl={imageUrl}
        iconSize="large"
      />
    );
  };

  const getRef = () => {
    if (calendarRef.current) {
      //get current view first date
      let calendarApi = calendarRef.current.getApi();
      const startOfTheMonth = calendarApi.currentData.dateProfile.currentRange.start;
      const addedDay = addDays(new Date(startOfTheMonth), 1);

      //format to get month and year
      const calendarMonth = format(new Date(addedDay), 'MM');
      const calendarYear = format(new Date(addedDay), 'yyyy');

      //udpate state if selected month is different
      if (currentMonth.month !== calendarMonth || currentMonth.year !== calendarYear) {
        setCurrentMonth({
          month: calendarMonth,
          year: calendarYear
        });
      }
    }
  };

  return (
    <section className={calendarClass}>
      <h1>select a date to checkin with yourself </h1>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        dateClick={(arg) => setSelectedDate(arg.dateStr)}
        initialView="dayGridMonth"
        eventContent={renderEventContent}
        events={calendarEvents}
        eventDisplay="list-item"
        ref={calendarRef}
        datesSet={getRef}
      />
    </section>
  );
}

export default DaySelectionCalendar;