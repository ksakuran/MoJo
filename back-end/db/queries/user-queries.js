const db = require('../connection');

const getUserInfo = (userId) => {
  return db.query(`
  SELECT first_name, last_name, city, profile_image
  FROM users
  WHERE id = $1
  ;`, [userId])
    .then(data => {
      return data.rows[0];
    })
    .catch(err => {
      return console.error(err);
    });
};

const updateUserInfo = (body) => {
  return db.query(`
  UPDATE users 
  SET first_name = $1,
  last_name = $2,
  city = $3,
  profile_image = $4,
  password = $5,
  email = $6
  WHERE users.id = $7
  RETURNING *
  ;`, [
    body.first_name,
    body.last_name,
    body.city,
    body.profile_image,
    body.password,
    body.email,
    body.id
  ])
  .then(data => {
    return data.rows[0];
  })
  .catch(err => {
    return console.error(err);
  });
};

module.exports = { getUserInfo, updateUserInfo };
