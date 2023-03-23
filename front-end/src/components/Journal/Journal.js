import React, { useState, useEffect, useContext } from "react";
import classNames from "classnames";
import "./../../styles/Journal.scss";
import axios from "axios";

import JournalPrompt from "./JournalPrompt";
import JournalTextBox from "./JournalTextBox";
import Button from "../Common/Button";
import { daySelectionContext } from '../../providers/DaySelectionProvider';



function Journal() {

  const journalClass = classNames("journal");
  const promptButtonClass = classNames("btn-prompt")

  const generateNewPrompt = function () {
    const prompts = ["What is something you are grateful for today?", "Tell me about your morning.", "What is one thing you can do today to make you feel good?", "When do you feel most in tune with yourself?", "What can wait until next week?"];
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    return randomPrompt;
  };

  const [prompt, setPrompt] = useState(generateNewPrompt());
  const [showPrompt, setShowPrompt] = useState(false);
  const [journalEntry, setJournalEntry] = useState(false);

  const { daySelectionId } = useContext(daySelectionContext);


  const togglePrompt = () => {
    if (!showPrompt) {
      setShowPrompt(true);
    };
    setPrompt(generateNewPrompt());
  };


  useEffect(() => {
    axios
      .post(`/api/journal/`, {
        daySelectionId: daySelectionId,
        body: "Example body" // {journal entry text}
      })
      .then(response => {
        console.log("entry saved: ", response);
      })
      .catch(err => {
        console.log("error", err);
      });
  }, [journalEntry]);


  return (
    <article className={journalClass}>
      <header className={promptButtonClass}>
        {showPrompt && (<JournalPrompt prompt={prompt} />)}
        <Button
          onClickHandler={togglePrompt}>
          give me a prompt
        </Button>
      </header>
      <br />

      <JournalTextBox />

      <footer>
        <Button onClick={() => setJournalEntry(true)}>Save</Button>
      </footer>
    </article>
  );
};

export default Journal;