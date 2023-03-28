import React, { useEffect, useState, useContext } from 'react';
import classNames from "classnames";
import "../../styles/CurrentWeather.scss";
import axios from 'axios';
import Icon from '../Common/Icon';
import { format } from 'date-fns';
import { daySelectionContext } from './../../providers/DaySelectionProvider';
import { appContext } from './../../providers/AppProvider';


function CurrentWeather() {

  const currentWeatherClass = classNames("current-weather");
  const { daySelectionId, selectedDate } = useContext(daySelectionContext);
  const { userCity } = useContext(appContext);
  const [todayWeather, setTodayWeather] = useState({});

  useEffect(() => {
    if (userCity) {
      //make getCurrentWeather API call to backend and pass userID and date with it

      let needToFetchHistory = true;

      if (selectedDate) {
        //if selected date is same as today date, don't fetch history data
        const formattedSelectedDate = new Date(selectedDate).toISOString().slice(0, 10);
        const todayDate = new Date().toISOString().slice(0, 10);
        if (formattedSelectedDate === todayDate) {
          needToFetchHistory = false;
        }
      }

      const url = needToFetchHistory ? `/api/weather/${userCity.toLowerCase()}/${selectedDate}` : `api/weather/${userCity}`;
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
          // console.log("result: ", result);
        })
        .catch(err => console.error(err));
    }
  }, [daySelectionId, userCity]);

  return (
    <div className={currentWeatherClass}>
      <div className='second-box'>
        <img src={todayWeather.icon} alt="weather-icon" />
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
          <p>{userCity} </p>
        </div>
      </div>


    </div>
  );
}

export default CurrentWeather;