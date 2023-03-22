import React, { useEffect, useState } from 'react';
import classNames from "classnames";
import "../../styles/CurrentWeather.scss";
import axios from 'axios';
import { formatDate } from '../../helpers/date_time';
import Icon from '../Common/Icon';


function CurrentWeather() {

  const currentWeatherClass = classNames("current-weather");

  const [todayWeather, setTodayWeather] = useState({});

  //get these values from somwhere
  const selectedDate = '2023-03-11';
  const city = 'Calgary';

  useEffect(() => {

    //make getCurrentWeather API call to backend and pass userID and date with it

    //insert today weather to daySelection table if it is not there yet

    //weather api;
    const currentURL = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
    const historyURL = `http://api.weatherapi.com/v1/history.json?key=${apiKey}&q=${city}&dt=${selectedDate}`;
    let url = selectedDate ? historyURL : currentURL;

    axios
      .get(url)
      .then((response) => {
        const responseData = selectedDate ? response.data.forecast.forecastday[0].day : response.data.current;
        const data = {
          text: responseData.condition.text,
          icon: responseData.condition.icon,
          date: selectedDate ? formatDate(selectedDate) : formatDate()
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
        <p>{city} </p>
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