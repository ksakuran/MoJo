import classNames from "classnames";
import "./../../styles/JournalChecklistItem.scss"; 

function JournalChecklistItem(props) {

  return(
      <li>
        <input type="checkbox" name="checklistItemBox" id="checklistItemBox"/> 
        <label htmlFor="checklistItemBox"> Checklist Item</label>
        {/* {props.name} to go in label */}
      </li>
  )
}

export default JournalChecklistItem;