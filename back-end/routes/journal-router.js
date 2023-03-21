const express = require('express');
const router = express.Router();
const journalQueries = require('../db/queries/journal-queries');

// Returns body of journal entry from journals table
router.get(`/:daySelectionId`, (req, res) => {

  const daySelectionId = req.params.daySelectionId;
  journalQueries.getJournalBody(daySelectionId)
    .then(results => {
      return res.json(results);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});


// Checks if journal entry exists already, then updates or creates accordingly
router.post(`/`, (req, res) => {

  const journalBody = req.body;

  journalQueries.getJournalBody(journalBody.daySelectionId)
    .then(results => {
      let journalPromise;
      
      results ? journalPromise = journalQueries.updateJournalBody(journalBody) : journalPromise = journalQueries.saveJournalBody(journalBody)
      
      journalPromise
        .then(results => {
          return res.json(results);
        })
        .catch(err => {
          res
            .status(500)
            .json({ error: err.message });
        });
    });

});

module.exports = router;
