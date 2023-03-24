import React, { useContext } from "react";
import classNames from "classnames";
import "../../styles/ChangeDate.scss";
import Button from "../Common/Button";
import { appContext } from '../../providers/AppProvider';
import Icon from './../Common/Icon';
import { daySelectionContext } from './../../providers/DaySelectionProvider';

function ChangeDate() {

  const changeDateClass = classNames("change-date");

  const { setViewMode } = useContext(appContext);
  const { setSelectedDate, setDaySelectionId } = useContext(daySelectionContext);

  const handleChangeDate = () => {
    setSelectedDate('');
    setDaySelectionId('');
    setViewMode('CALENDAR');
  };

  return (
    <div className={changeDateClass}>
      <Button
        onClickHandler={handleChangeDate}
      >
        <p>Change Date</p>
        <Icon imgUrl='images/icons/change_date_3.png' iconStyle="padding" />
      </Button>

    </div>
  );

}

export default ChangeDate;