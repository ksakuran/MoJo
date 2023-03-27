import React from 'react';
import classNames from "classnames";
import "./../../styles/JournalChecklistItem.scss";

function JournalChecklistItem(props) {

  const checkboxClass = classNames("checkbox");
  const checklistItemClass = classNames("checklist-item");


  return (
    <li className={checklistItemClass}>
      <input className={checkboxClass} type="checkbox" value="" id="checklistItemBox"/>
      <label htmlFor="checklistItemBox">{props.description}</label>
    </li>
  );
}

export default JournalChecklistItem;