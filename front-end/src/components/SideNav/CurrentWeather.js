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
  const selectedDate = '';
  const city = 'Calgary';

  useEffect(() => {

    //make getCurrentWeather API call to backend and pass userID and date with it

    //insert today weather to daySelection table if it is not there yet

    //use return from axios to set today weather state

  }, []);



  return (
    <div className={currentWeatherClass}>
      {/* <div>
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
      </div> */}
    </div>
  );
}

export default CurrentWeather;