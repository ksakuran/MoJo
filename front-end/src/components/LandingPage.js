import React from "react";
import classNames from "classnames";

import "../styles/LandingPage.scss";
import Background from "./Background";

const LandingPage = () => {

  const onClickTest = () => {
    console.log("clicked")
  }

  return (<>
    <Background/>
    <section id="landing">
      <small>a better way to connect with yourself</small>
      <h1>find your mojo</h1>
      <p>a daily mood journaling app built for self exploration and self care</p>
      <button onClick={onClickTest}id="get-started">get started</button>
    </section>
    </>
  );
};

export default LandingPage;
