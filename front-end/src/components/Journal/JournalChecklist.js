import classNames from "classnames";
import "./../../styles/JournalChecklist.scss"; 
import JournalChecklistItem from "./JournalChecklistItem";

function JournalCheckist(props) {
  // const checklistItems = props.items.map((item) => {
  //   return <JournalChecklistItem/>
  // })

  return(
    <article>
      <ul>
      <JournalChecklistItem/>
      <JournalChecklistItem/>
      <JournalChecklistItem/>

        {/* {checklistItems} */}
      </ul>
    </article>
  )
}

export default JournalCheckist;
