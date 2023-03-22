import classNames from "classnames";
import "./../../styles/JournalPrompt.scss";

function JournalPrompt(props){
  
  const promptClass = classNames("prompt", { "prompt-displayed": false });

  return (
    <header>
      {/* <div className={promptClass}>{props.prompt}</div> */}
      <div className={promptClass}>{props.prompt}</div>
    </header>
  )
};

export default JournalPrompt;