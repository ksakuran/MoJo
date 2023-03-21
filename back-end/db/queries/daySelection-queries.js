const db = require('../connection');

const getDaySelectionByDate = (date) => {
  return db.query(`
    SELECT * 
    FROM day_selections 
    WHERE created_date = $1;
  `, [date])
    .then(data => {
      return data.rows[0];
    })
    .catch(err => {
      return console.error(err);
    });
};

const getMoodSelectionByDay = (startDate, endDate) => {
  return db.query(`
    SELECT day_selections.id as day_selection_id, mood_selections.id as mood_selection_id, 
            mood_selections.created_date as mood_selection_created_date, mood_id, rating,
            moods.name, moods.color
    FROM day_selections  
      JOIN mood_selections ON day_selections.id = mood_selections.day_selection_id
      JOIN moods ON moods.id = mood_selections.mood_id
    WHERE day_selections.created_date BETWEEN $1 AND $2;
  `, [startDate, endDate])
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      return console.error(err);
    });
};

const getJournalDaySelectionByDay = (startDate, endDate) => {
  return db.query(`
    SELECT day_selections.id as day_selection_id, weather_description, weather_icon, 
          day_selections.created_date as day_selection_created_date, user_id, 
	        journals.id as journal_id, body
    FROM day_selections  
      LEFT JOIN journals ON day_selections.id = journals.day_selection_id
    WHERE day_selections.created_date BETWEEN $1 AND $2;
  `, [startDate, endDate])
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
  ($1,$2,$3, $4)
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

module.exports = {
  getDaySelectionByDate,
  getMoodSelectionByDay,
  getJournalDaySelectionByDay,
  addDaySelection
};
