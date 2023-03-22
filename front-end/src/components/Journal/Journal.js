import { useState } from "react";
import classNames from "classnames";

import JournalPrompt from "./JournalPrompt"
import JournalTextBox from "./JournalTextBox"
import "./../../styles/Journal.scss";



function Journal(props){
  const saveButtonClass = classNames("button", "save-journal");
  const promptButtonClass = classNames("button", "prompt-journal");

  
  const generateNewPrompt = function() {
    const prompts = ["What is something you are grateful for today?", "Tell me about your morning.", "What is one thing you can do today to make you feel good?", "When do you feel most in tune with yourself?", "What can wait until next week?"];
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    return randomPrompt;
  };

  const [prompt, setPrompt] = useState(generateNewPrompt());
  const [showPrompt, setShowPrompt] = useState(false);

  const togglePrompt = () => {
    if(!showPrompt){
      setShowPrompt(true);
    };
    setPrompt(generateNewPrompt());
  }

  return (
    <article>
      <header>
        {showPrompt && (<JournalPrompt prompt={prompt}/>)}
        <button
          className={promptButtonClass}
          onClick={togglePrompt}>
            give me a prompt
        </button>
      </header>
      <br/>

      <JournalTextBox daySelectionId={props.daySelectionId}/>

      <footer>
        <button className={saveButtonClass}>Save</button>
      </footer>
    </article>
  )
};

export default Journal;