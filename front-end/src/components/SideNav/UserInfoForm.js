import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import classNames from "classnames";
import "./../../styles/UserInfoForm.scss";
import 'react-toastify/dist/ReactToastify.css';

import Button from '../Common/Button';
import { appContext } from '../../providers/AppProvider';

function UserInfoForm(props) {

  const userInfoClass = classNames("formModal", "overlay");
  const buttonContainerClass = classNames("btn-container");
  const { updateUser, firstName, lastName, userCity, userPicture, setFirstName, setLastName, setUserCity, setUserPicture } = useContext(appContext);

  const [formFirstName, setFormFirstName] = useState(firstName);
  const [formLastName, setFormLastName] = useState(lastName);
  const [formCity, setFormCity] = useState(userCity);
  const [formPicture, setFormPicture] = useState(userPicture);

  const saveAlert = () => toast.success('Info saved!', {
    position: "top-center",
    autoClose: 2500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    zIndex: "100"
  });

  const handleSaveClick = function(event) {
    event.preventDefault();
    updateUser(formFirstName, formLastName, formCity, formPicture); // POST request is made in AppProvider via updateUser function
    props.toggle();

    // saveAlert()
    //   .then(props.toggle());
  };


  return (
    <>
      <div className="overlay">

        <h3>update your details</h3>
        <form id="updateInfoForm">
          <label htmlFor="formFirstName">first name:</label><br />
          <input type="text" name="formFirstName" value={formFirstName} onChange={(event) => setFormFirstName(event.target.value)}></input><br />

          <label htmlFor="formLastName">last name:</label><br />
          <input type="text" name="formLastName" value={formLastName} onChange={(event) => setFormLastName(event.target.value)}></input><br />

          <label htmlFor="formCity">city:</label><br />
          <input type="text" name="formCity" value={formCity} onChange={(event) => setFormCity(event.target.value)}></input><br />

          <label htmlFor="formPicture">picture (url):</label><br />
          <input type="text" name="formPicture" value={formPicture} onChange={(event) => setFormPicture(event.target.value)}></input><br /><br />

          <div className={buttonContainerClass}>
            <Button
              btnId='user-form'
              onClickHandler={handleSaveClick}
            >save</Button>
            <Button
              btnId='user-form'
              onClickHandler={props.toggle}
            >cancel</Button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default UserInfoForm;