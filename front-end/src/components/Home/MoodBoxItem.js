import React from "react";
import classNames from "classnames";
import './../../styles/MoodBoxItem.scss';
import Icon from "../Common/Icon";


const MoodBoxItem = (props) => {
  const { name, selected, id, onClick } = props

  const MoodBoxItemClass = classNames("mood-box-item", {
    
    "button--selected": selected,
  });
  
  const icon = `images/${name}.png`

  // const clickCheck = (name) => {
  //   console.log(`${name} has been clicked`)
  // }

  return(
    <button onClick={() => {onClick(id, selected, name)}} className={MoodBoxItemClass}>
      {/* <img src={icon}/> */}
      <Icon imgUrl={icon} iconSize={"medium"}/>
      <small>&nbsp;{name}</small>
    </button>
  )
}

export default MoodBoxItem