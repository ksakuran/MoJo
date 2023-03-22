import classNames from "classnames";
import "./../../styles/CurrentMood.scss"; 

function CurrentMood() {

  const moods = ['happy', 'motivated', 'grateful']; 
   // mood_selections
  
  const iconSelection = function() {
     for (let mood of moods) {
      // mood === moods.name ? return moods.icon
     }
  } 

  const currentMood = moods.map(mood => {
    return (
      <li><i>{iconSelection}</i>{mood}</li>
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
