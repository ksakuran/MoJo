import React from "react";
import classNames from "classnames";

const DateSelectionForm = () => {

  const onSubmit = () => {
    //make api call to get mood summary info
    console.log("submit dates");
  }

  const DateSelectionFormClass = classNames("date-selector-form")
  return (
    <form className={DateSelectionFormClass}>
      <label for="start-date">start date:</label>
      <input type="date" id="start-date" name="start-date" />&nbsp;&nbsp;
      <label for="end-date">end date:</label>
      <input type="date" id="end-date" name="end-date" />
      <button onClick={()=> {onSubmit()}} type="submit">select</button>
    </form>
  );
};


export default DateSelectionForm;