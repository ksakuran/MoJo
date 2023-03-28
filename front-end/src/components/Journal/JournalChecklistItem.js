import React from 'react';
import classNames from "classnames";
import "./../../styles/JournalChecklistItem.scss";

function JournalChecklistItem(props) {

  const checkboxClass = classNames("checkbox", {
    "selected": props.isSelected,
  });

  const checklistItemClass = classNames("checklist-item");


  return (
    <li className={checklistItemClass}>
      <input className={checkboxClass} type="checkbox" value="" id="checklistItemBox" onClick={() => props.handleSelectItem(props.id)}/>
      <label htmlFor="checklistItemBox">{props.description}</label>
    </li>
  );
}

export default JournalChecklistItem;