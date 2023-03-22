import classNames from "classnames";
import "./../../styles/UserInfo.scss"; 

function UserInfo(props) {

  return (
    <div>
      <img src="https://bit.ly/3FCF2Sj"/>
      <div className="name-display">
        <h4>Andy</h4>
        {/* Andy will be replaced with {props.first_name} */}
        <input className="btn" type="image" src="images/pencil_icon.png" width="20" height="20"></input>
      </div>
    </div>
  )
};

export default UserInfo
