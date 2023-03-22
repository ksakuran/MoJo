import React, { useEffect, useState } from 'react';
import classNames from "classnames";
import "../../styles/CurrentWeather.scss";
import axios from 'axios';
import { getTodayDate } from '../../helpers/date_time';
import Icon from '../Common/Icon';


function CurrentWeather() {

  const currentWeatherClass = classNames("current-weather");

  const [todayWeather, setTodayWeather] = useState({});

  useEffect(() => {

    //make getCurrentWeather API call to backend and pass userID and date with it

    //insert today weather to daySelection table if it is not there yet

    //weather api
    let city = 'portland';
    let apiKey = 'a478a7aaf604410da1120203231503';
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
      <div>
        <Icon
          imgUrl={todayWeather.icon}
        />
        <p>{todayWeather.text}</p>
      </div>
      <div>
        <Icon
          imgUrl='images/icons/location.png'
          iconSize='medium'
        />
        {/* replace with data from actual user login */}
        <p>Portland </p>
      </div>
      <div>
        <Icon
          imgUrl='images/icons/selected_date.png'
          iconSize='medium'
        />
        <p>{todayWeather.date}</p>
      </div>
    </div>
  );
}

export default CurrentWeather;