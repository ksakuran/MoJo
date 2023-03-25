const express = require('express');
const router = express.Router();
const timeCapQueries = require('../db/queries/timecapsule-queries')

router.get(`/:userId/:sendDate`, (req, res) => {
  //get the time capsule messages for a user and day
  const userId = req.params.userId;
  const sendDate = req.params.sendDate;
  

  console.log("userId:", userId)
  console.log("sendDate:", sendDate)

  timeCapQueries
    .getTimeCapsule(userId, sendDate)
    .then((capsule) => {
      console.log("capsule results:",capsule)
      return res.json({ capsule });
    })
    .catch((err) => {
      res.status(418).json({ error: err.message });
    });
});


router.post('/new', (req, res) => {

  const entry = req.body.entry;
  const userId = req.body.userId;
  const date = req.body.sendDate;


  timeCapQueries
  .newTimeCapsule(userId, entry, date)
  .then((capsule) => {
    console.log("capsule results:",capsule)
    return res.json({ capsule });
  })
  .catch((err) => {
    res.status(418).json({ error: err.message });
  });
  

})


module.exports = router;