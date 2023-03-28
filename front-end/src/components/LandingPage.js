import React from "react";
import "../styles/LandingPage.scss";

import Button from './Common/Button';

const LandingPage = (props) => {

  const { loginUrl } = props;

  // const [showForm, setShowForm] = useState(false);

  // const clickShowForm = () => {
  //   setShowForm(!showForm);
  // };

  return (
    <>
      <section id="landing">

        <small>a better way to connect with yourself</small>
        <h1>find your mojo</h1>
        <p>a daily mood journaling app built for self exploration and self care</p>
        {/* <Button
          onClickHandler={() => clickShowForm()}
          btnType="" btnId="get-started">
          get started
        </Button> */}

        <Button
          btnType="" btnId="get-started">
          <img id='spotify' src='images/spotify.png' alt="spotify-logo" />
          <a href={loginUrl}>sign in with spotify</a>
        </Button>


        {/* {showForm && <LoginForm />} */}

      </section>
    </>
  );
};

export default LandingPage;
