import React, {useContext} from "react";
import "../styles/Background.scss";
import classNames from 'classnames'
import { appContext } from "../providers/AppProvider";

const Background = () => {


  const { darkMode } = useContext(appContext)

  const backgroundClass = classNames("background", {
    'dark-mode': darkMode 
  });

  return (
    <section className={backgroundClass}>
      <section className={backgroundClass} id="middle"></section>
      <section className={backgroundClass} id="up"></section>
      <section className={backgroundClass} id="down"></section>
      <section className={backgroundClass} id="left"></section>
      <section className={backgroundClass} id="right"></section>
    </section>
  );
};

export default Background;