const db = require('../connection');

const getContributorByUserAndMap = (userId, mapId) => {
  // return db.query(`SELECT *
  // FROM contributors
  // WHERE user_id = $1
  // AND map_id = $2;
  // `, [userId, mapId])
  //   .then(data => {
  //     return data.rows;
  //   })
  //   .catch(err => {
  //     return console.error(err);
  //   });
};

module.exports = {
  getContributorByUserAndMap
};
