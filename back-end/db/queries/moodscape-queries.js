const db = require("../connection");

const donutChartData = {
  labels: ["Happy", "Tired", "Sad", "Anxious", "Relaxed"],
  datasets: [
    {
      label: [],
      data: [6, 7, 3, 4, 2],
      borderColor: ["green", "purple", "blue", "red", "lightblue"],
      backgroundColor: ["green", "purple", "blue", "red", "lightblue"],
      borderWidth: 3,
    },
  ],
};

//labels = mood name
//data mood count for each individual mood_id

const getMoodNameId = () => {
  return db
    .query(
      `
    SELECT id, name FROM moods
    ORDER BY id;
  `
    )
    .then((data) => {
      return data.rows;
    })
    .catch((err) => {
      return console.error(err);
    });
};

const getOccurenceOfMood = (moodId, start, end, userId) => {
  return db
    .query(
      `
    SELECT COUNT(*) as count FROM mood_selections
    JOIN day_selections ON day_selections.id = mood_selections.day_selection_id
    WHERE mood_id = $1
    AND day_selections.user_id = $4
    AND day_selections.created_date BETWEEN $2 AND $3;
  `,
      [moodId, start, end, userId]
    )
    .then((data) => {
      return data.rows[0].count;
    })
    .catch((err) => {
      return console.error(err);
    });
};

const getMoodSelectionSummarybyUser = (userId) => {};

module.exports = {

  getMoodNameId,
  getOccurenceOfMood

};
