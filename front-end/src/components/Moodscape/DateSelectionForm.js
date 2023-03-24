import React, { useContext } from "react";
import classNames from "classnames";
import '../../styles/DateSelectionForm.scss';
import { summaryContext } from "../../providers/SummaryProvider";



const DateSelectionForm = (props) => {

  // const [ start , setStart] = useState();
  // const [end, setEnd] = useState();

  const { submitDates } = useContext(summaryContext);

  const onSubmit = (event) => {
    // const form = document.getElementById("date-selector");
    event.preventDefault();

    const s = event.target[0].value;
    const e = event.target[1].value;

    console.log('start date from on submit', s);
    console.log('end date from on submit', e);

    submitDates(s, e);
  };

  const DateSelectionFormClass = classNames("date-selector-form");
  return (
    <form id="date-selector" className={DateSelectionFormClass} onSubmit={onSubmit}>

      <label htmlFor="start-date">start date  </label>
      <input type="date" id="start-date" name="start-date" />&nbsp;&nbsp;
      <br></br>

      <label htmlFor="end-date">end date  </label>
      <input type="date" id="end-date" name="end-date" />
      <br></br>
      <button id={DateSelectionFormClass} onSubmit={onSubmit} type="submit" >submit</button>
    </form>
  );
};


export default DateSelectionForm;