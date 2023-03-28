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

  const [activeChecklist, setActiveChecklist] = useState([]);
  const [inactiveChecklist, setInactiveChecklist] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  console.log('selectedItems', selectedItems);
  const [newItem, setNewItem] = useState(false);

  const updateListItems = () => {
    setNewItem(true);
  };


  // const handleSelectItem = function (checklistItemId) {

  //   // if unselected, check off the item
  //     useEffect(() => {
  //       axios
  //         .post(`/api/checklist/selection/new`, {
  //           daySelectionId: daySelectionId,
  //           checklistItemId: activeChecklist.checklistItemId
  //         })
  //         .then(response => {
  //           console.log("checklist item selected!", response);
  //         })
  //         .catch(err => {
  //           console.log("error", err);
  //         });
  //     }, []);
  //   };

  //   const handleDeselectItem = function(checklistItemId){

  //   // if selected, deselect the item
  //     useEffect(() => {
  //       axios
  //         .post(`/api/checklist/selection/${activeChecklist.checklistItemId}/delete`, {
  //           daySelectionId: daySelectionId,
  //           checklistItemId: activeChecklist.checklistItemId
  //         })
  //         .then(response => {
  //           console.log("checklist item deselected", response);
  //         })
  //         .catch(err => {
  //           console.log("error", err);
  //         });
  //     }, []);
  //   };

  //   const toggleSelected = function(itemId){
  //     if (activeChecklist.includes(itemId)) {
  //       handleDeselectItem();
  //   }
  //   if (inactiveChecklist.includes(itemId)) {
  //     handleDeselectItem(itemId)
  //   };
  // };

    //get active and inactive list data, 
    useEffect(() => {
      axios
        .get(`/api/checklist/item/${userId}`)
        .then(res => {
          console.log('CHECKLIST ITEMS:', res);
          setActiveChecklist(res.data.checklistItems[0]);
          setInactiveChecklist(res.data.checklistItems[1]);
        })
        .catch(err => {
          console.log("error", err);
        });
    }, [newItem]);


    // get selected list items 
    useEffect(() => {
      axios
        .get(`/api/checklist/selection/${daySelectionId}`)
        .then(results => {
          console.log('results', results);
          setSelectedItems(results.data); //[0] because [1] is the inactive ones
        })
        .catch(err => {
          console.log("error", err);
        });
    }, [newItem]);



    // goes through checklist, returns true if item is selected, and false if not
    const determineIsSelected = () => {
      return activeChecklist.some(item => selectedItems.includes(item));
    };


    const checklistItems = activeChecklist.map((item) => {
      return <JournalChecklistItem
        key={item.id}
        id={item.id}
        description={item.checklist_item_description}
        user={item.user_id}
        isSelected={() => determineIsSelected()}
        isActive={true}
        newItem={updateListItems}
        // onClick={() => handleSelectItem(item.id)}
      />;
    });


    return (
      <section className='checklist'>
        <h3>how did you take care of yourself today?</h3>
      <article className={checklistClass}>
        <ul>
          {checklistItems}
        </ul>
      </article>
      </section>
    );
  };

export default JournalCheckist;
