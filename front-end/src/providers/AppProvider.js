import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const appContext = createContext();

export default function AppProvider(props) {

  const [darkMode, setDarkMode] = useState(false);
  const [viewMode, setViewMode] = useState("CALENDAR");
  const [userId, setUserId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userPicture, setUserPicture] = useState("");
  const [needUpdate, setNeedUpdate] = useState(false);
  const [isDaySelected, setIsDaySelected] = useState(false);
  const [spotifyToken, setSpotifyToken] = useState("");

  const updateUser = (firstName, lastName, city, picture) => {
    setFirstName(firstName);
    setLastName(lastName);
    setUserCity(city);
    setUserPicture(picture);
    setNeedUpdate(true);
  };

  if (darkMode) {
    document.body.classList.add('dark-mode');
  }

  if (!darkMode) {
    document.body.classList.remove('dark-mode');
  }

  useEffect(() => {
    if (userId) {
      axios
        .get(`/api/user/${userId}`)
        .then(res => {
          const { data } = res;
          setFirstName(data.first_name);
          setLastName(data.last_name);
          setUserCity(data.city);
          setUserPicture(data.profile_image);
        });
    }
  }, [userId]);

  useEffect(() => {
    if (needUpdate) {
      console.log("here to update user!");
      let updateInfo = {
        first_name: firstName,
        last_name: lastName,
        city: userCity,
        profile_image: userPicture,
        email: "test@mail.com",
        password: "456"
      };

      axios
        .post(`/api/user/${userId}`, updateInfo, {
          headers: {
            'Content-Type': 'application/json'
          },
          data: JSON.stringify(updateInfo)
        })
        .then(response => {
          console.log("update user axios response:", response);
          setNeedUpdate(false);
        })
        .catch(err => {
          console.log("error:", err.message);
        });
    }
  }, [needUpdate]);


  const providerData = { spotifyToken, setSpotifyToken, viewMode, setViewMode, userId, setUserId, updateUser, firstName, lastName, userCity, userPicture, setFirstName, setLastName, setUserCity, setUserPicture, isDaySelected, setIsDaySelected, setDarkMode, darkMode };

  return (
    <appContext.Provider value={providerData}>
      {props.children}
    </appContext.Provider>
  );

}