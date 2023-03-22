import classNames from "classnames";
import "./../../styles/CurrentMood.scss"; 

function CurrentMood() {

  const moods = ['happy', 'motivated', 'grateful']; 
   // mood_selections

  const currentMood = moods.map(mood => {
    return (
      <li><i></i>{mood}</li>
      )
  })

  return (
    <div>
      <h4>current mood</h4>
      <ul>
        {currentMood}
      </ul>
    </div>
  )
};

export default CurrentMood;
