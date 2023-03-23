import React, { useEffect, useState } from "react";
import "./../../styles/MoodBox.scss";
import classNames from "classnames";
import MoodBoxItem from "./MoodBoxItem";
import axios from "axios";
const { moodInfoFormatter } = require("../../helpers/mood_formatter");

const MoodBox = (props) => {
  const MoodBoxClass = classNames("mood-box");

  const [moods, setMoods] = useState([]);
  const [moodSelections, setMoodSelections] = useState([]);
  const [updateMoods, setUpdateMoods] = useState(false);
  const [newMoodSelectionId, setNewMoodSelectionId] = useState(null);
  const [updateSelections, setUpdateSelections] = useState(false);
  const [ removeMoodId , setRemoveMoodId ] = useState(null);
  const [ removeSelection, setRemoveSelecion ] = useState(false);


  //on click handler for the mood box items
  const onSelect = (id, selected) => {
    console.log(`clicked mood ${id} selected = ${selected} `);
    if (selected === false) {
      setNewMoodSelectionId(id);
      setUpdateSelections(!updateSelections);
    } else {
      setRemoveMoodId(id);
      setRemoveSelecion(!removeSelection);
    }
  };


  //gets all the moods to display the moodbox items
  useEffect(() => {
    const dayId = 1;
    //need to get dayId from state

    Promise.all([axios.get("/api/mood/"), axios.get(`/api/mood/${dayId}`)])
      .then((results) => {
        // console.log("results from axios call to get all moods", results[0].data.moods);
        // console.log("results from axios to get selected moods", results[1].data.selectedMoods);
        const all = results[0].data;
        const selected = results[1].data;

        setMoodSelections(selected);
        // mood info formatter adds the selection boolean to each mood object
        // after comparing the current selections
        setMoods(moodInfoFormatter(all, selected));
      })
      .catch((err) => {
        console.log("error from axios call to get all moods", err);
      });
  }, [updateMoods]);

  // sets a mood to be selected on click, 
  // sends request to remove the least recent selection and add the new one
  useEffect(() => {
    const moodId = newMoodSelectionId;

    // need to get day id from provider
    const dayId = 1;

    if (moodId === null) {
      return;
    }
    console.log("new mood id for post req", moodId);
    axios
      .post(`/api/mood/selection`, {
        dayId,
        moodId,
      })
      .then((results) => {
        console.log("results from axios post to update selection", results);
        setUpdateMoods(!updateMoods);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [updateSelections]);



  // removes mood from mood_selections if it is currently selected when clicked by on click handler
  useEffect(() => {
    const moodId = removeMoodId;
    // need to get day id from provider
    const dayId = 1;

    if (moodId === null) {
      return;
    }
    console.log("new mood id for post req", moodId);
    axios
      .post(`/api/mood/selection/delete`, {
        dayId,
        moodId,
      })
      .then((results) => {
        console.log("results from axios post to remove selection", results);
        setUpdateMoods(!updateMoods);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [removeSelection]);


  // transforms mood into mood box items
  const moodItems = moods.map((mood) => {
    return (
      <MoodBoxItem
        key={mood.id}
        name={mood.name}
        selected={mood.selected}
        id={mood.id}
        onClick={onSelect}
      />
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
