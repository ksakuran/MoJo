import React, { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import classNames from "classnames";
import "./../../styles/UserInfoForm.scss";
import 'react-toastify/dist/ReactToastify.css';

import Button from '../Common/Button';
import { appContext } from '../../providers/AppProvider';

function UserInfoForm(props) {

  const userInfoClass = classNames("formModal", "overlay");
  const buttonContainerClass = classNames("btn-container")
  const { updateUser } = useContext(appContext);

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

    const form = document.getElementById("updateInfoForm");
    const firstName = form.elements["formFirstName"].value;
    const lastName = form.elements["formLastName"].value;
    const city = form.elements["formCity"].value;
    const picture = form.elements["formPicture"].value;

    updateUser(firstName, lastName, city, picture);
    // POST request is made in AppProvider via updateUser function

    saveAlert()
    .then(props.toggle())
  };
  

  return (
    <>
    <div onClickHandler={props.toggle} className="overlay">

    <h3>Update your details</h3>
    <form classNames={userInfoClass} id="updateInfoForm">
      <label htmlFor="formFirstName">First name:</label><br />
      <input type="text" name="formFirstName"></input><br />

      <label htmlFor="formLastName">Last name:</label><br />
      <input type="text" name="formLastName"></input><br />

      <label htmlFor="formCity">City:</label><br />
      <input type="text" name="formCity"></input><br />

      <label htmlFor="formPicture">Picture (url):</label><br />
      <input type="text" name="formPicture"></input><br /><br />

      <div className={buttonContainerClass}>
      <Button
        onClickHandler={handleSaveClick}
      >Save</Button>
      <Button
        onClickHandler={props.toggle}
      >Cancel</Button>
      </div>
    </form>
    </div>
    <ToastContainer />
    </>
  );
};

export default UserInfoForm;