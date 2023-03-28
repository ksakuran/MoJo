import React, { createContext, useState, useContext, useEffect } from "react";
import { daySelectionContext } from './DaySelectionProvider';
import axios from 'axios';
import { format } from 'date-fns';

export const moodSelectionContext = createContext();

export default function MoodSelectionProvider(props) {

  const { daySelectionId } = useContext(daySelectionContext);

  const [moodSelections, setMoodSelections] = useState({
    selectedMoods: [
      {
        name: "none",
        mood_id: 0,
        created_date: "",
        rating: 1
      }
    ]
  });

  useEffect(() => {
    if (!daySelectionId) {
      //on page load default current mood to today mood selections
      const todayDate = format(new Date(), 'yyyy-MM-dd');

      axios.get(`/api/mood/today/${todayDate}`)
        .then((results) => {
          if (results.data.selectedMoods.length) {
            setMoodSelections(results.data);
          } else {
            //default to empty mood if today moods are not selected yet
            setMoodSelections({
              selectedMoods: [
                {
                  name: "none",
                  mood_id: 0,
                  created_date: "",
                  rating: 1,
                },
              ],
            });
          }
        })
        .catch((err) => {
          console.log("error from axios call to get all moods", err);
        });
    }
  }, [daySelectionId]);

  const providerData = { moodSelections, setMoodSelections };


  return (
    <moodSelectionContext.Provider value={providerData}>
      {props.children}
    </moodSelectionContext.Provider>
  );
}
