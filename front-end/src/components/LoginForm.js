import React, { useContext } from "react";
import { appContext } from '../providers/AppProvider';
import Button from "./Common/Button";
import "../styles/LoginForm.scss";

const LoginForm = () => {

  const { setUserId, setViewMode } = useContext(appContext);
  
  const handleSetView = (view) => {
      setViewMode(view);
      setUserId("1")
  };
  
  return (
    <form id="login">

      <input type="email" id="email" name="email" placeholder="email" />


  
      <input type="password" id="password" name="password" placeholder="password"/>

      <Button btnId="login" onClickHandler={() => handleSetView('CALENDAR')} type="submit">login</Button>
    </form>
  );
};

export default LoginForm;
