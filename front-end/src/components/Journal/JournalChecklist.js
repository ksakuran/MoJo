import React from 'react';
import classNames from "classnames";
import "./../../styles/JournalChecklist.scss";
import JournalChecklistItem from "./JournalChecklistItem";

function JournalCheckist(props) {
  // const checklistItems = props.items.map((item) => {
  //   return <JournalChecklistItem
  //       id={props.item_id}
  //       description={props.description}
  //       user={props.user_id}
  //       isSelected={props.selected}
  //       isActive={props.active}
  //       />
  // })

  return (
    <article>
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
