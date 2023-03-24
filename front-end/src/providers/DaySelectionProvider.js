import React, { createContext, useState, useContext } from 'react';
import { appContext } from './AppProvider';

export const daySelectionContext = createContext();

export default function DaySelectionProvider(props) {


  const [daySelectionId, setDaySelectionId] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const providerData = { daySelectionId, setDaySelectionId, selectedDate, setSelectedDate };

  return (
    <daySelectionContext.Provider value={providerData}>
      {props.children}
    </daySelectionContext.Provider>
  );

}