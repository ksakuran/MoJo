import classNames from "classnames";
import "./../../styles/SideNav.scss"; 
import UserInfo from "./UserInfo";
// import ChangeDate from "./ChangeDate";
//import CurrentWeather from "./CurrentWeather"
import CurrentMood from "./CurrentMood";
import Moodify from "./Moodify";

function SideNav() {

  return (
    <section className="sideNav">
      <UserInfo/>
      {/* <ChangeDate/> */}
      {/* <CurrentWeather/> */}
      <CurrentMood/>
      <Moodify/>
    </section>
  )
};

export default SideNav;