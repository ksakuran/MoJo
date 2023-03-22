import React from "react";
import classNames from "classnames";
import "../../styles/ChangeDate.scss";

function ChangeDate() {

  const changeDateClass = classNames("change-date");

  const handleDateChange = () => {
    const viewMode = 'CALENDAR';
    //pass viewMode value to MainContainer somehow
  };

  return (
    <div className={changeDateClass}>
      <img src='images/change_date_2.png' className="change-date-image" />
      <button onClick={handleDateChange}>Change Date</button>
    </div>
  );

}

export default ChangeDate;