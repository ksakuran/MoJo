import { useState } from "react";
import classNames from "classnames";
import "./../../styles/UserInfoForm.scss";

function UserInfoForm() {

  const userInfoClass = classNames("update-info-form");

  return(
    <form classNames={userInfoClass}>
        <label htmlFor="formFirstName">First name:</label><br/>
        <input type="text"name="formFirstName"></input><br/>

        <label htmlFor="formLastName">Last name:</label><br/>
        <input type="text" name="formLastName"></input><br/>

        <label htmlFor="formCity">City:</label><br/>
        <input type="text" name="formCity"></input><br/>

        <label htmlFor="formEmail">Email:</label><br/>
        <input type="text" name="formEmail"></input><br/>

        <label htmlFor="formPassword">Password:</label><br/>
        <input type="text" name="formPassword"></input><br/>

        <label htmlFor="formPicture">Profile Picture (url):</label><br/>
        <input type="text" name="formPicture"></input><br/><br/>

        <button>Save</button> 
        {/* Save button goes to POST /api/user/:userId */}
    </form>
  )
};

export default UserInfoForm;