import React, { useEffect, useState } from "react";
import "./../../styles/MoodBox.scss";
import classNames from "classnames";
import MoodBoxItem from "./MoodBoxItem";
import axios from "axios";
const { moodInfoFormatter } = require('../../helpers/mood_formatter')

const MoodBox = (props) => {
  const MoodBoxClass = classNames("mood-box");

  const [moods, setMoods] = useState([]);
  const [ moodSelections, setMoodSelections] = useState([]);
  const [ updateMoods, setUpdateMoods ] = useState(false)
  const [ newMoodSelectionId, setNewMoodSelectionId ] = useState(null)

  useEffect(() => {
    const dayId = 1;
    //need to get dayId from state

    Promise.all([
      axios.get("/api/mood/"), 
      axios.get(`/api/mood/${dayId}`)
    ]).then((results) => {
        console.log("results from axios call to get all moods", results[0].data.moods);
        console.log("results from axios to get selected moods", results[1].data.selectedMoods);
        
        const all = results[0].data;
        const selected = results[1].data
        
        //setMoodSelections(selected);
        setMoods(moodInfoFormatter(all, selected));


      })
      .catch((err) => {
        console.log("error from axios call to get all moods", err);
      });
  }, [updateMoods]);

  console.log("moods outside axios", moods);


  const onSelect = (id) => {
    console.log(`clicked mood ${id}`)
    setNewMoodSelectionId(id);
    
  }


  useEffect(() => {
    const moodId = newMoodSelectionId
    const dayId = 1
    console.log("new mood id for post req", moodId)
    axios.post(`/api/mood/selection`, {
      dayId,
      moodId,
    })
    .then((results) => {
      console.log("results from axios post to update selection",results)
      setUpdateMoods(!updateMoods);
    })
    .catch((err) => {
      console.log("error", err)
    })
  },[newMoodSelectionId])


  const moodItems = moods.map((mood) => {
    return (
      <MoodBoxItem key={mood.id} name={mood.name} selected={mood.selected} id={mood.id} onClick={onSelect}/>
    );
  });



  return (
    <article className={MoodBoxClass}>
      <header>how are you feeling today? select 3</header>
      <div>{moodItems}</div>
    </article>
  );
};

export default MoodBox;
