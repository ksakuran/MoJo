import React, { useContext, useState } from 'react';
import classNames from "classnames";
import "./../../styles/UserInfo.scss";

import UserInfoForm from "./UserInfoForm";
import Button from "../Common/Button";
// import Icon from "../Common/Icon";
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
    <div className='user-info'>
      <img src="http://localhost:3002/images/profile_user.png" alt="profile" width="40" height="40" />
        <h4>{firstName} {lastName}</h4>
      <div className={nameDisplayClass}>
        <Button onClickHandler={toggleFormModal}>
          <img className={editButtonClass} src="http://localhost:3002/images/pencil.png" alt="info-edit"
            width="30" />
        </Button>
        <div classNames={modalContainerClass}>
          {formModal && (<UserInfoForm toggle={toggleFormModal}></UserInfoForm>)}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
