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

  const { firstName, lastName, userPicture } = useContext(appContext);

  const [formModal, setFormModal] = useState(false);

  const toggleFormModal = () => {
    setFormModal(!formModal);
  };

  return (
    <div className='user-info'>
      <img id="profile-image" src={userPicture} alt="profile" />
      <h2>{firstName} {lastName}</h2>
      <div className={nameDisplayClass}>
        <Button onClickHandler={toggleFormModal}>
          <Icon imgUrl="images/pencil.png" iconSize="small" />
        </Button>
        <div className={modalContainerClass}>
          {formModal && (<UserInfoForm toggle={toggleFormModal}></UserInfoForm>)}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
