//const url = `https://open.spotify.com/embed/playlist/MOOD?utm_source=generator`;

const happy = { name: 'happy', url: "37i9dQZF1DXdPec7aLTmlC" };
const grateful = { name: 'grateful', url: "58bDiQI2UuQiZZ6LkJjxhg" };
const excited = { name: 'excited', url: "37i9dQZF1DX8a1tdzq5tbM" };
const confident = { name: 'confident', url: "37i9dQZF1DX4fpCWaHOned" };
const motivated = { name: 'motivated', url: "2n8DQM3uPZT2dtrytRY4Mw" };

const neutral = { name: 'neutral', url: "37i9dQZF1DX3Ogo9pFvBkY" };
const relaxed = { name: 'relaxed', url: "37i9dQZF1DWU0ScTcjJBdj" };
const tired = { name: 'tired', url: "7DeldkqFR6CsSkzvYJRGQc" };
const uncertain = { name: 'uncertain', url: "3BH9HNgKSh6E1gVHAWRegN" };
const bored = { name: 'bored', url: "1h0CEZCm6IbFTbxThn6Xcs" };

const sad = { name: 'sad', url: "37i9dQZF1DX7qK8ma5wgG1" };
const stressed = { name: 'stressed', url: "3Kf68NF7xK7nIpccgrE0k0" };
const anxious = { name: 'anxious', url: "0uCjaUdAss2kM3gHIOBrY8" };
const angry = { name: 'angry', url: "7LYPJDo1dDuw79MHJ4B25z" };
const depressed = { name: 'depressed', url: "6O1ZnUG2mtmeEqxxPa5OWn" };

const none = {name: 'none', url: "37i9dQZF1DXcBWIGoYBM5M"};

const allMoods = [happy, grateful, excited, confident, motivated, neutral, relaxed, tired, uncertain, bored, sad, stressed, anxious, angry, depressed, none];

const selectPlaylistUrl = function (moodSelections) {
  let todayMoods = allMoods.filter(mood => moodSelections.includes(mood.name)); // array of today's moods
  let randomIndex = Math.floor(Math.random() * moodSelections.length); // randomize an index
  let url = `https://open.spotify.com/embed/playlist/${todayMoods[randomIndex].url}?utm_source=generator`;
  return url; //plug mood playlist into spotify call
};


export { selectPlaylistUrl };