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
      <button onClick={handleDateChange}>Change Date</button>
    </div>
  );

}

export default ChangeDate;