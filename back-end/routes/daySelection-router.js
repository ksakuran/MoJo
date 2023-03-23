const express = require('express');
const router = express.Router();
const daySelectionQueries = require('../db/queries/daySelection-queries');
const date = require('../helper/date.js');


//returns an object of day selection details for selected date
router.get(`/:date/:userId`, (req, res) => {
  const date = req.params.date;
  const userId = req.params.userId;
  daySelectionQueries.getDaySelectionByDate(date, userId)
    .then(daySelection => {
      return res.json({ daySelection });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

//returns
//an object of day selection details and journal data for selected date
//an array of mood data for selected date
router.get(`/calendar/:month/:year/:userId`, (req, res) => {
  const month = req.params.month;
  const year = req.params.year;
  const userId = req.params.userId;
  const { startDate, endDate } = date.getStartAndEndDayInMonth(year, month);

  const moodPromise = daySelectionQueries.getMoodSelectionByDay(startDate, endDate, userId);
  const journalPromise = daySelectionQueries.getJournalDaySelectionByDay(startDate, endDate, userId);

  Promise.all([moodPromise, journalPromise])
    .then(calendarData => {
      res.json({ calendarData });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

//create new day selection object and return current selected day_selections_id
router.post('/new', (req, res) => {
  const body = req.body;
  daySelectionQueries.addDaySelection(body)
    .then(daySelection => {
      res.json({ daySelection });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

//create new day selection object and return current selected day_selections_id
router.post('/update/:daySelectionId', (req, res) => {
  const daySelectionId = req.params.daySelectionId;
  const body = req.body;
  daySelectionQueries.updateDaySelection(body, daySelectionId)
    .then(daySelection => {
      res.json({ daySelection });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
