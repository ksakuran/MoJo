const db = require("../connection");

const getAllMoods = () => {
  return db
    .query(
      `
    SELECT * FROM moods;
  `
    )
    .then((data) => {
      return data.rows;
    })
    .catch((err) => {
      return console.error(err);
    });
};

const getMoodSelectionByDayId = (dayId) => {
  return db
    .query(
      `
  SELECT moods.name as name, mood_id, created_date, rating FROM mood_selections
  JOIN moods ON mood_selections.mood_id = moods.id
  WHERE day_selection_id = $1
  ORDER BY created_date DESC;
  `,
      [dayId]
    )
    .then((data) => {
      return data.rows;
    })
    .catch((err) => {
      return console.error(err);
    });
};

const oldestMoodSelectionByDayId = (dayId) => {
  return db
    .query(
      `
  SELECT id FROM mood_selections
  WHERE day_selection_id = $1
  ORDER BY created_date ASC
  LIMIT 1;
  `,
      [dayId]
    )
    .then((data) => {
      return data.rows[0].id;
    })
    .catch((err) => {
      return console.error(err);
    });
};

const dailyMoodSelectionsCount = (dayId) => {
  return db
    .query(
      `
  SELECT COUNT(id) FROM mood_selections
  WHERE day_selection_id = $1;
  `,
      [dayId]
    )
    .then((data) => {
      return data.rows[0].count;
    })
    .catch((err) => {
      return console.error(err);
    });
};

const deleteMoodSelectionById = (moodSelectionId) => {
  return db
    .query(
      `DELETE FROM mood_selections
    WHERE id = $1
    RETURNING*;`,
      [moodSelectionId]
    )
    .then((data) => {
      return data.rows[0];
    })
    .catch((err) => {
      return console.error(err);
    });
};

const insertMoodSelection = (moodId, dayId) => {
  return db
    .query(
      `
    INSERT INTO mood_selections (mood_id, day_selection_id)
    VALUES ($1, $2)
    RETURNING*;`,
      [moodId, dayId]
    )
    .then((data) => {
      return data.rows[0];
    })
    .catch((err) => {
      return console.error(err);
    });
};


const getMoodSelectionId = ( moodId, dayId) => {

  return db
  .query(
    `SELECT id FROM mood_selections WHERE day_selection_id = $1
    AND mood_id = $2 LIMIT 1;`, 
    [dayId, moodId]
  )
  .then((data) => {
    return data.rows[0].id;
  })
  .catch((err) => {
    return console.error(err);
  });
}


module.exports = {
  getAllMoods,
  getMoodSelectionByDayId,
  dailyMoodSelectionsCount,
  deleteMoodSelectionById,
  insertMoodSelection,
  oldestMoodSelectionByDayId,
  getMoodSelectionId
};
