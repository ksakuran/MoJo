import React from "react";
import classNames from "classnames";
import './../../styles/MoodBoxItem.scss';



const MoodBoxItem = (props) => {
  const { name, selected, id, onClick } = props

  const MoodBoxItemClass = classNames("mood-box-item", {
    
    "button--selected": selected,
  });
  
  const icon = `./public/images/${name}.png`

  // const clickCheck = (name) => {
  //   console.log(`${name} has been clicked`)
  // }

  return(
    <button onClick={() => {onClick(id, selected)}} className={MoodBoxItemClass}>
      {/* <img src={icon}/> */}
      <small>{name}</small>
    </button>
  )
}

export default MoodBoxItem