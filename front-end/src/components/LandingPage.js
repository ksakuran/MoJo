import React , {useState} from "react";
import "../styles/LandingPage.scss";

import Button from './Common/Button';
import LoginForm from "./LoginForm";

const LandingPage = () => {

  
  const [showForm, setShowForm] = useState(false);

  const clickShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <section id="landing">
        
        <small>a better way to connect with yourself</small>
        <h1>find your mojo</h1>
        <p>a daily mood journaling app built for self exploration and self care</p>
        <Button
          onClickHandler={() => clickShowForm()}
          btnType="" btnId="get-started">
          get started
        </Button>

        {showForm && <LoginForm />}

      </section>
    </>
  );
};

export default LandingPage;
