const db = require("../connection");

const getTimeCapsule = (userId, sendDate) => {
  return db
    .query(
      `
    SELECT * FROM time_capsules
    WHERE user_id = $1
    AND send_date = $2
    LIMIT 1;
  `,
    [userId, sendDate])
    .then((data) => {
      return data.rows[0];
    })
    .catch((err) => {
      return console.error(err);
    });
};

const newTimeCapsule = (userId, body, sendDate) => {

  return db
  .query(
    ` INSERT INTO time_capsules (user_id, body, send_date)
    VALUES ($1, $2, $3)
    RETURNING *
    ;`, [userId, body, sendDate]
  ).then((data) => {
    console.log(data.rows[0])
    return data.rows[0];
  })
  .catch((err) => {
    return console.error(err);
  });
}



module.exports = {
  getTimeCapsule,
  newTimeCapsule
};