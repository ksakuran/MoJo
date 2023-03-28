import React, { createContext, useState } from "react";


export const summaryContext = createContext();

export default function SummaryProvider(props) {
  const [selectedEndDate, setSelectedEndDate] = useState("");
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [updateDates, setUpdateDates] = useState(false);

  const submitDates = (start, end) => {
    // console.log("BUBBLE TEA");
    setSelectedStartDate(start);
    setSelectedEndDate(end);
    setUpdateDates(!updateDates);
  };

  const providerData = {
    submitDates,
    selectedEndDate,
    setSelectedEndDate,
    selectedStartDate,
    setSelectedStartDate,
    updateDates,
    setUpdateDates,
  };





  return (
    <summaryContext.Provider value={providerData}>
      {props.children}
    </summaryContext.Provider>
  );
}
