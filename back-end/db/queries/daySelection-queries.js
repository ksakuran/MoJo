const db = require('../connection');

const getDaySelectionByDate = (date, userId) => {
  return db.query(`
    SELECT * 
    FROM day_selections 
    WHERE created_date = $1 AND user_id =$2;
  `, [date, userId])
    .then(data => {
      return data.rows[0];
    })
    .catch(err => {
      return console.error(err);
    });
};

const getMoodSelectionByDay = (startDate, endDate, userId) => {
  return db.query(`
    SELECT day_selections.id as day_selection_id, day_selections.created_date as day_selection_created_date,
            mood_selections.id as mood_selection_id, mood_selections.created_date as mood_selection_created_date, 
            mood_id, rating, moods.name, moods.color
    FROM day_selections  
      JOIN mood_selections ON day_selections.id = mood_selections.day_selection_id
      JOIN moods ON moods.id = mood_selections.mood_id
    WHERE day_selections.created_date BETWEEN $1 AND $2 and day_selections.user_id = $3;
    `, [startDate, endDate, userId])
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      return console.error(err);
    });
};

const getJournalDaySelectionByDay = (startDate, endDate, userId) => {
  return db.query(`
    SELECT day_selections.id as day_selection_id, weather_description, weather_icon, 
          day_selections.created_date as day_selection_created_date, user_id, 
	        journals.id as journal_id, body
    FROM day_selections  
      LEFT JOIN journals ON day_selections.id = journals.day_selection_id
    WHERE day_selections.created_date BETWEEN $1 AND $2 and day_selections.user_id = $3;
  `, [startDate, endDate, userId])
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      return console.error(err);
    });
};

const getChecklistSelectionByDay = (startDate, endDate, userId) => {
  return db.query(`
  SELECT checklist_selections.day_selection_id, day_selections.created_date
  FROM day_selections  
    JOIN checklist_selections ON day_selections.id = checklist_selections.day_selection_id
  WHERE day_selections.created_date BETWEEN $1 AND $2 and day_selections.user_id = $3
  GROUP BY checklist_selections.day_selection_id, day_selections.created_date
  ORDER BY checklist_selections.day_selection_id;
  `, [startDate, endDate, userId])
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      return console.error(err);
    });
};

const addDaySelection = (body) => {
  const query = `
  INSERT INTO day_selections
  ( weather_description, weather_icon, created_date, user_id)
  VALUES
  ($1,$2,$3,$4)
  RETURNING *;
  `;

  const param = [body.weather_description, body.weather_icon, body.created_date, body.user_id];

  return db.query(query, param)
    .then(data => {
      return data.rows[0];
    })
    .catch(err => {
      return err;
    });
};

const updateDaySelection = (body, daySelectionId) => {
  const query = `
  UPDATE day_selections
  SET weather_description = $1, weather_icon = $2
  WHERE id = $3
  RETURNING *;
  `;
  const param = [body.weather_description, body.weather_icon, daySelectionId];

  return db.query(query, param)
    .then(data => {
      return data.rows[0];
    })
    .catch(err => {
      return err;
    });
};

module.exports = {
  getDaySelectionByDate,
  getMoodSelectionByDay,
  getJournalDaySelectionByDay,
  getChecklistSelectionByDay,
  addDaySelection,
  updateDaySelection
};
