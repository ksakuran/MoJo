import React, { useContext } from "react";
import classNames from "classnames";
import "../styles/LandingPage.scss";
import { appContext } from '../providers/AppProvider';
import Button from './Common/Button';


const LandingPage = () => {

  const { setUserId } = useContext(appContext);

  const onClickTest = () => {
    console.log("clicked");
  };

  return (
    <>
      <section id="landing">
        <small>a better way to connect with yourself</small>
        <h1>find your mojo</h1>
        <p>a daily mood journaling app built for self exploration and self care</p>
        <Button
          onClickHandler={() => setUserId("1")}
          btnType="" btnId="get-started">
          get started
        </Button>
      </section>
    </>
  );
};

export default LandingPage;
