import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const appContext = createContext();

export default function AppProvider(props) {

  const [darkMode, setDarkMode] = useState(false)
  const [viewMode, setViewMode] = useState("CALENDAR");
  const [userId, setUserId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userPicture, setUserPicture] = useState("");
  const [needUpdate, setNeedUpdate] = useState(false);
  const [isDaySelected, setIsDaySelected] = useState(false);

  const updateUser = (firstName, lastName, city, picture) => {
    setFirstName(firstName);
    setLastName(lastName);
    setUserCity(city);
    setUserPicture(picture);
    setNeedUpdate(true);
  };

  if(darkMode) {
    document.body.classList.add('dark-mode');
  }

  if(!darkMode) {
    document.body.classList.remove('dark-mode');
  }

  useEffect(() => {

    let searchParams = {
      first_name: firstName,
      last_name: lastName,
      city: userCity,
      profile_picture: userPicture,
      email: "test@mail.com",
      password: "456"
    };

    axios
      .post(`/api/user/${userId}`, searchParams, {
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify(searchParams)
      })
      .then(response => {
        console.log("update user axios response:", response);
      })
      .catch(err => {
        console.log("error:", err.message);
      });

  }, [needUpdate]);

  const providerData = { viewMode, setViewMode, userId, setUserId, updateUser, firstName, lastName, userCity, userPicture, isDaySelected, setIsDaySelected, setDarkMode, darkMode };

  return (
    <appContext.Provider value={providerData}>
      {props.children}
    </appContext.Provider>
  );

}