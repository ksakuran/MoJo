import React, { useEffect, useState } from 'react';
import classNames from "classnames";
import "../../styles/CurrentWeather.scss";
import axios from 'axios';
import { getTodayDate } from '../../helpers/date_time';

function CurrentWeather() {

  const currentWeatherClass = classNames("current-weather");

  const [todayWeather, setTodayWeather] = useState({});

  useEffect(() => {
    //weather api
    let city = 'portland';
    let url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    axios
      .get(url)
      .then((response) => {

        var datetime = new Date().toLocaleString();
        const { current } = response.data;
        const data = {
          text: current.condition.text,
          icon: current.condition.icon,
          tempC: current.temp_c,
          tempF: current.temp_f,
          feelsLikeC: current.feelslike_c,
          feelsLikeF: current.feelslike_f,
          humidity: 40,
          datetime: datetime,
          date: getTodayDate()
        };
        setTodayWeather(data);

      })
      .catch((error) => {
        console.log("error: ", error);
      });

  }, []);



  return (
    <div className={currentWeatherClass}>
      <div className='testBox'>
        <div className='weather'>
          <img src={todayWeather.icon} />
          <p className='no-margin'>{todayWeather.text}</p>
        </div>
        <div>
          <p>📌Portland </p>
          <p>🗓️{todayWeather.date}</p>
        </div>
      </div>

    </div>
  );
}

export default CurrentWeather;