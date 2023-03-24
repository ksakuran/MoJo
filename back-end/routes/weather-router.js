const express = require('express');
const router = express.Router();
const fns = require('date-fns');
const axios = require('axios');
const df = require('../helper/date.js');

router.get('/:city/:date', (req, res) => {
  const city = req.params.city;
  const date = req.params.date;
  const apiKey = process.env.WEATHER_API_KEY;
  const url = `http://api.weatherapi.com/v1/history.json?key=${apiKey}&q=${city}&dt=${date}`;

  axios
    .get(url)
    .then((response) => {
      const responseData = response.data.forecast.forecastday[0].day;
      const weather = {
        text: responseData.condition.text,
        icon: responseData.condition.icon,
        date: df.formatDate(fns.addDays(new Date(date), 1))
      };
      return res.json({ weather });
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});


router.get('/:city', (req, res) => {
  const city = req.params.city;
  const apiKey = process.env.WEATHER_API_KEY;
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

  axios
    .get(url)
    .then((response) => {
      const responseData = response.data.current;
      const weather = {
        text: responseData.condition.text,
        icon: responseData.condition.icon,
        date: df.formatDate()
      };
      return res.json({ weather });
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

module.exports = router;
