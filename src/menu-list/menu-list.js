import React from "react";
import Menu from "../components/menu/menu";
import {
  FaBeer,
  FaAccusoft,
  FaPen,
  FaUpload,
  FaAd,
  FaAddressCard,
} from "react-icons/fa";
const MenuList = () => {
  return (
    <div className="dashboard">
      <Menu icon={<FaAccusoft />} name="AddTask" link="/addTask" />

      <Menu icon={<FaPen />} name="Features" link="/features" />
    </div>
  );
};

export default MenuList;
