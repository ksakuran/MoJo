import React from 'react';
import classNames from "classnames";
import "./../../styles/JournalChecklistItem.scss";

function JournalChecklistItem(props) {

  const checkboxClass = classNames("checkbox");
  const checklistItemClass = classNames("checklist-item");


  return (
    <li className={checklistItemClass}>
      <input className={checkboxClass} type="checkbox" value="" id="checklistItemBox"/>
      <label htmlFor="checklistItemBox">checklist item</label>
      {/* {props.name} to go in label */}
    </li>
  );
}

export default JournalChecklistItem;