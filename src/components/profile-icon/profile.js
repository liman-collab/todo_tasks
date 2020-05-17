import React from "react";
import { Link } from "react-router-dom";
import "./profile.styles.css";
const Profile = ({ props }) => {
  return (
    <div className="dropdown">
      <button className="dropbtn">Dropdown</button>
      <div className="dropdown-content">
        <Link to="#">{props}</Link>
      </div>
    </div>
  );
};

export default Profile;
