import React, { useContext } from "react";
import "../styles/LandingPage.scss";
import { appContext } from '../providers/AppProvider';
import Button from './Common/Button';


const LandingPage = () => {

  const { setUserId } = useContext(appContext);

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
