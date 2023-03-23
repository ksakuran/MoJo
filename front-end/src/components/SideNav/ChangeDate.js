import React, { useContext } from "react";
import classNames from "classnames";
import "../../styles/ChangeDate.scss";
import Button from "../Common/Button";
import { appContext } from '../../providers/AppProvider';
import Icon from './../Common/Icon';

function ChangeDate() {

  const changeDateClass = classNames("change-date");

  const { setViewMode } = useContext(appContext);

  return (
    <div className={changeDateClass}>
      <Icon imgUrl='images/icons/change_date.png' />
      <Button
        onClickHandler={() => setViewMode('CALENDAR')}
      >Change Date</Button>
    </div>
  );

}

export default ChangeDate;