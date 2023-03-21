const express = require('express');
const router = express.Router();
const userQueries = require('../db/queries/user-queries');

// Returns user's information
router.get(`/:userId`, (req, res) => {
  const userId = req.params.userId;
  userQueries.getUserInfo(userId)
    .then(results => {
      console.log('body: ', results);
      return res.json(results);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});


// Updates user's information
router.post(`/:userId`, (req, res) => {
  const body = req.body

  userQueries.updateUserInfo(body)
    .then(results => {
      console.log('results', results);
      return res.json(results);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  });


module.exports = router;
