import React from "react";
import "./menu.styles.css";
import { Link } from "react-router-dom";
const Menu = ({ icon, name, link }) => {
  return (
    <div className="menu">
      <ul className="menu-item">
        <Link to={`${link}`}>
          <li className="item">
            {icon}&nbsp;&nbsp;
            {name}
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Menu;
