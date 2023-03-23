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
  const { setSelectedDate } = useContext(daySelectionContext);

  const handleChangeDate = () => {
    setSelectedDate('');
    setViewMode('CALENDAR');
  };

  return (
    <div className={changeDateClass}>
      <Icon imgUrl='images/icons/change_date.png' />
      <Button
        onClickHandler={handleChangeDate}
      >Change Date</Button>
    </div>
  );

}

export default ChangeDate;