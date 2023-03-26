import React, { useState, useEffect, useContext } from 'react';
import classNames from "classnames";
import "./../../styles/JournalChecklist.scss";
import axios from 'axios';

import JournalChecklistItem from "./JournalChecklistItem";
import { appContext } from './../../providers/AppProvider';
import { daySelectionContext } from '../../providers/DaySelectionProvider';


function JournalCheckist(props) {
  const checklistClass = classNames("checklist-container");

  const { userId } = useContext(appContext);
  const { daySelectionId } = useContext(daySelectionContext);

  const [checklist, setChecklist] = useState("");
  const [selectedItems, setSelectedItems] = useState("");
  const [newItem, setNewItem] = useState(false);

  const updateListItems = () => {
    setNewItem(true);
  };

  //get active and inactive list data, 
  useEffect(() => {
    axios
      .get(`/api/item/${userId}`)
      .then(res => {
        console.log('res', res);
        setChecklist(res.data);
      })
      .catch(err => {
        console.log("error", err);
      });
  }, [newItem]);


  // get selected list items 
  useEffect(() => {
    axios
      .get(`/api/selection/${daySelectionId}`)
      .then(results => {
        console.log('results', results);
        setSelectedItems(results.data); //[0] because [1] is the inactive ones
      })
      .catch(err => {
        console.log("error", err);
      });
  }, [newItem]);


  // check off an item
  useEffect(() => {
    axios
      .put(`/api/selection/new`, {
        daySelectionId: daySelectionId,
        checklistItemId: checklist.checklistItemId
      })
      .then(response => {
        console.log("checklist item selected!", response);
      })
      .catch(err => {
        console.log("error", err);
      });
  }, [newItem]);

  
  // deselect a selected item
  useEffect(() => {
    axios
      .post(`/selection/${checklist.checklistItemId}/delete`, {
        daySelectionId: daySelectionId,
        checklistItemId: checklist.checklistItemId
      })
      .then(response => {
        console.log("checklist item deselected", response);
      })
      .catch(err => {
        console.log("error", err);
      });
  }, [newItem]);


  // goes through checklist, returns true if item is selected, and false if not
  const determineIsSelected = () => {
    return checklist.some(item => selectedItems.includes(item));
  };


  // const checklistItems = checklist.map((item) => {
  //     return <JournalChecklistItem
  //
  // What are the value in the checklist object that's returned from the DB?
  //       id={checklist.item_id}
  //       description={checklist.description}
  //       user={checklist.user_id}
  //       isSelected={() => determineIsSelected()}
  //       isActive={checklist.active}
  //       newItem={updateListItems}
  //     />
  //   }
  // })


  return (

    <article className={checklistClass}>
      <h3>take note of what you did today</h3>
      <ul>
        <JournalChecklistItem />
        <JournalChecklistItem />
        <JournalChecklistItem />
        {/* {checklistItems} */}
      </ul>
    </article>
  );
}

export default JournalCheckist;
