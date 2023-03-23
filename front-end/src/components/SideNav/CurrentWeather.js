import React, { useEffect, useState, useContext } from 'react';
import classNames from "classnames";
import "../../styles/CurrentWeather.scss";
import axios from 'axios';
import Icon from '../Common/Icon';
import { format } from 'date-fns';
import { daySelectionContext } from './../../providers/DaySelectionProvider';


function CurrentWeather() {

  const currentWeatherClass = classNames("current-weather");
  const { daySelectionId, selectedDate } = useContext(daySelectionContext);
  const [todayWeather, setTodayWeather] = useState({});

  //get these values from somwhere
  const city = 'Calgary';

  useEffect(() => {
    //make getCurrentWeather API call to backend and pass userID and date with it
    const url = selectedDate ? `/api/weather/${city.toLowerCase()}/${selectedDate}` : `api/weather/${city}`;
    axios
      .get(url)
      .then(res => {
        const { text, icon, date } = res.data.weather;
        setTodayWeather({
          icon,
          text,
          date: date ? date : format(new Date(), 'dd-MM-yyyy')
        });

        if (selectedDate) {
          //insert today weather to daySelection table if it is not there yet
          const body = {
            weather_description: text,
            weather_icon: icon
          };
          return axios.post(`/api/daySelection/update/${daySelectionId}`, body);
        }
      })
      .then(result => {
        console.log("result: ", result);
      })
      .catch(err => console.error(err));
  }, [daySelectionId]);

  return (
    <div className={currentWeatherClass}>
      <div className='second-box'>
        <Icon
          imgUrl={todayWeather.icon}
          iconSize='x-large'
          iconStyle="padding"
        />
        <p>{todayWeather.text}</p>
      </div>

      <div className='first-box'>
        <div>
          <Icon
            imgUrl='images/icons/selected_date_1.png'
            iconSize='medium'
            iconStyle="padding"
          />
          <p>{todayWeather.date}</p>
        </div>
        <div>
          <Icon
            imgUrl='images/icons/location_1.png'
            iconSize='medium'
            iconStyle="padding"
          />
          <p>{city} </p>
        </div>
      </div>


    </div>
  );
}

export default CurrentWeather;