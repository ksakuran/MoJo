import React, { useContext } from "react";
import classNames from "classnames";
import "../../styles/ChangeDate.scss";
import Button from "../Common/Button";
import { appContext } from '../../providers/AppProvider';
import Icon from './../Common/Icon';
import { daySelectionContext } from './../../providers/DaySelectionProvider';

function ChangeDate() {

  const changeDateClass = classNames("change-date");

  const { setViewMode, setIsDaySelected } = useContext(appContext);
  const { setSelectedDate, setDaySelectionId } = useContext(daySelectionContext);

  const handleChangeDate = () => {
    setSelectedDate('');
    setDaySelectionId('');
    setIsDaySelected(false);
    setViewMode('CALENDAR');
  };

  return (
    <Button
      btnId={changeDateClass}
      onClickHandler={handleChangeDate}
      btnType="border"
    >
      <Icon iconSize="medium" imgUrl='images/icons/change_date_3.png' iconStyle="padding" />
      <p id="change-date">change date</p>
    </Button>
  );

}

export default ChangeDate;