import React, { createContext, useState } from "react";


export const moodSelectionContext = createContext();

export default function MoodSelectionProvider(props) {

  const [ moodSelections, setMoodSelections ] = useState({
    selectedMoods: [
        {
            name: "none",
            mood_id: 0,
            created_date: "",
            rating: 1
        }
    ]
});

  const providerData = { moodSelections, setMoodSelections };


  return (
    <moodSelectionContext.Provider value={providerData}>
      {props.children}
    </moodSelectionContext.Provider>
  );
}
