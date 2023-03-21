const express = require('express');
const router = express.Router();
const daySelectionQueries = require('../db/queries/daySelection-queries');
const date = require('../helper/date.js');


//returns an object of day selection details for selected date
router.get(`/:date`, (req, res) => {
  const date = req.params.date;
  daySelectionQueries.getDaySelectionByDate(date)
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
router.get(`/calendar/:month/:year`, (req, res) => {
  const month = req.params.month;
  const year = req.params.year;
  const { startDate, endDate } = date.getStartAndEndDayInMonth(year, month);

  const moodPromise = daySelectionQueries.getMoodSelectionByDay(startDate, endDate);
  const journalPromise = daySelectionQueries.getJournalDaySelectionByDay(startDate, endDate);

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

module.exports = router;
