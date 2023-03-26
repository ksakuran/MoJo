import React, { useContext, useState } from 'react';
import classNames from "classnames";
import "./../../styles/UserInfo.scss";

import UserInfoForm from "./UserInfoForm";
import Button from "../Common/Button";
import Icon from "../Common/Icon";
import { appContext } from '../../providers/AppProvider';

function UserInfo() {

  const nameDisplayClass = classNames("name-edit");
  const editButtonClass = classNames("edit-btn");
  const modalContainerClass = classNames("modal-container");

  const { firstName, lastName } = useContext(appContext);
  console.log('firstName', firstName);

  const [formModal, setFormModal] = useState(false);

  const toggleFormModal = () => {
    setFormModal(!formModal);
  };

  return (
    <div>
      <Icon imgUrl="images/profile_user.png" alt="profile" iconSize={"large"}/>
      <div className={nameDisplayClass}>
        <h2>{firstName}</h2>
        <Button onClickHandler={toggleFormModal}>
        <Icon className={editButtonClass} imgUrl="images/pencil.png" />
        </Button>
        <div className={modalContainerClass}>
          {formModal && (<UserInfoForm toggle={toggleFormModal}></UserInfoForm>)}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
