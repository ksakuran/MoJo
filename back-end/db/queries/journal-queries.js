const db = require('../connection');

const getJournalBody = (daySelectionId) => {
  return db.query(`
  SELECT *
  FROM journals
  WHERE day_selection_id = $1
  ;`, [daySelectionId])
    .then(data => {
      return data.rows[0];
    })
    .catch(err => {
      return console.error(err);
    });
};

const saveJournalBody = (body) => {
  return db.query(`
  INSERT INTO journals (body, day_selection_id)
  VALUES ($1, $2)
  RETURNING *
  ;`, [body.body, body.daySelectionId])
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      return console.error(err);
    });
};

const updateJournalBody = (body) => {
  return db.query(`
  UPDATE journals
  SET body = $1
  WHERE day_selection_id = $2
  RETURNING *
  ;`, [body.body, body.daySelectionId])
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      return console.error(err);
    });
};


module.exports = { getJournalBody, saveJournalBody,updateJournalBody };