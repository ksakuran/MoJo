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
  const { daySelectionId, selectedDate } = useContext(daySelectionContext);

  const [activeChecklist, setActiveChecklist] = useState([]);
  const [inactiveChecklist, setInactiveChecklist] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentItem, setCurrentItemState] = useState({});
  const [newItem, setNewItem] = useState(false);
  const [newSelection, setNewSelection] = useState(false);
  const [removedSelection, setRemovedSelection] = useState(false);


  const updateListItems = () => {
    setNewItem(true);
  };

  //find the index of checklist item that was clicked
  const findIndexById = (activeChecklist, itemId) => {
    return activeChecklist.findIndex((item) => item.id === itemId)
  }


  const handleSelectItem = function(itemId) {
    //set current item
    let index = findIndexById(activeChecklist, itemId);
    setCurrentItemState(activeChecklist[index].id)

    //checks if item is in the selectedItems state
    const hasItemId = selectedItems.filter(selection => selection.user_checklist_item_id === itemId);
    hasItemId.length ? setRemovedSelection(true) : setNewSelection(true);
  };

  
    // if unselected, check off the item
    useEffect(() => {
      if (newSelection){
        const body = {
          daySelectionId: daySelectionId,
          checklistItemId: currentItem,
          createdDate: selectedDate,
        };
        axios
          .post(`/api/checklist/selection/new`, body ) 
          .then(response => {
            setNewItem(true);
            setNewSelection(false);
            fetchSelections();
          })
          .catch(err => {
            console.log("error", err);
          });
        };
    }, [newSelection]);
  


    // if selected, deselect the item
    useEffect(() => {
      if (removedSelection){
        axios
          .post(`/api/checklist/selection/${currentItem}/delete`, {
            daySelectionId: daySelectionId,
            checklistItemId: currentItem
          })
          .then(response => {
            setNewItem(true);
            setRemovedSelection(false);
            fetchSelections();
          })
          .catch(err => {
            console.log("error", err);
          });
        };
    }, [removedSelection]);



  //get active and inactive list data, 
  useEffect(() => {
    axios
      .get(`/api/checklist/item/${userId}`)
      .then(res => {
        setActiveChecklist(res.data.checklistItems[0]);
        setInactiveChecklist(res.data.checklistItems[1]);
      })
      .catch(err => {
        console.log("error", err);
      });
  }, [newItem]);


  // get selected list items 
  useEffect(() => {
    fetchSelections();
  }, []);

  const fetchSelections = () => {
    axios
    .get(`/api/checklist/selection/${daySelectionId}`)
    .then(results => {
      setSelectedItems(results.data.checklistSelections);
    })
    .catch(err => {
      console.log("error", err);
    });
}

  // goes through selectedItems, returns true if item is present, and false if not
  const determineIsSelected = (itemId) => {
    let result = false;
    for (let item of selectedItems){
      if (item.user_checklist_item_id === itemId){
        result = true
      }
    }
    return result;
  };


  const checklistItems = activeChecklist.map((item) => {
    return <JournalChecklistItem
      key={item.id}
      id={item.id}
      description={item.checklist_item_description}
      user={item.user_id}
      isSelected={determineIsSelected(item.id)}
      isActive={true}
      newItem={() => updateListItems()}
      handleSelectItem={handleSelectItem}
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
