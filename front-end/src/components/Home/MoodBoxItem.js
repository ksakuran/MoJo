import React from "react";
import classNames from "classnames";
import './../../styles/MoodBoxItem.scss';



const MoodBoxItem = (props) => {


  const MoodBoxItemClass = classNames("mood-box-item", {
    
    "button--selected": props.selected,
  });
  
  const icon = `./public/images/${props.name}.png`

  const clickCheck = (name) => {
    console.log(`${name} has been clicked`)
  }

  return(
    <button onClick={() => {clickCheck(props.name)}} className={MoodBoxItemClass}>
      {/* <img src={icon}/> */}
      <small>{props.name}</small>
    </button>
  )
}

export default MoodBoxItem