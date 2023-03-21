const express = require('express');
const router = express.Router();
const { getJournalBody, saveJournalBody, updateJournalBody } = require('../db/queries/journal-queries')

// returns body of journal entry from journals table
router.get(`/:daySelectionId`, (req, res) => {

  const daySelectionId = req.params.daySelectionId;
  getJournalBody(daySelectionId)
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


//checks if journal entry exists already, then updates or creates accordingly
router.post(`/`, (req, res) => {

  const journalBody = req.body;

  getJournalBody(journalBody.daySelectionId)
  .then(results => {
    //if entry already exists
    console.log('results', results)
    let journalPromise
    if (!results) {
      journalPromise = saveJournalBody(journalBody)
    }
    //if entry does not already exist
    else {
     journalPromise = updateJournalBody(journalBody)
    }
    journalPromise
      .then(results => {
        console.log('results', results);
        return res.json(results);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  })
  
})

module.exports = router;
