// const data = {
//   moods: [
//     {
//       id: 1,
//       name: "happy",
//       color: null,
//     },
//     {
//       id: 2,
//       name: "grateful",
//       color: null,
//     },
//     {
//       id: 3,
//       name: "excited",
//       color: null,
//     },
//     {
//       id: 4,
//       name: "confident",
//       color: null,
//     },
//     {
//       id: 5,
//       name: "motivated",
//       color: null,
//     },
//     {
//       id: 6,
//       name: "neutral",
//       color: null,
//     },
//     {
//       id: 7,
//       name: "relaxed",
//       color: null,
//     },
//     {
//       id: 8,
//       name: "tired",
//       color: null,
//     },
//     {
//       id: 9,
//       name: "uncertain",
//       color: null,
//     },
//     {
//       id: 10,
//       name: "bored",
//       color: null,
//     },
//     {
//       id: 11,
//       name: "sad",
//       color: null,
//     },
//     {
//       id: 12,
//       name: "stressed",
//       color: null,
//     },
//     {
//       id: 13,
//       name: "anxious",
//       color: null,
//     },
//     {
//       id: 14,
//       name: "angry",
//       color: null,
//     },
//     {
//       id: 15,
//       name: "depressed",
//       color: null,
//     },
//   ],
// };

// const dailySelection = {
//   selectedMoods: [
//     {
//       name: "confident",
//       mood_id: 4,
//       created_date: "2023-03-20T23:36:41.268Z",
//       rating: 1,
//     },
//     {
//       name: "neutral",
//       mood_id: 6,
//       created_date: "2023-03-20T23:36:41.268Z",
//       rating: 1,
//     },
//     {
//       name: "relaxed",
//       mood_id: 7,
//       created_date: "2023-03-20T23:36:41.268Z",
//       rating: 1,
//     },
//   ],
// };

// update this fn to handle no data from selection

const moodInfoFormatter = (all, selection) => {

  const selectedMoodIds = selection.selectedMoods.map((mood) => mood.mood_id)
  //console.log(selectedMoodIds)

  const data = all.moods.map((mood) => {
    if(selectedMoodIds.includes(mood.id)) {
      mood.selected = true;
    } else {
      mood.selected = false;
    }

    return mood;

  })

  return data;
  
};

module.exports = { moodInfoFormatter };
