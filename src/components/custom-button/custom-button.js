import React, { Component } from "react";
import "./custom-button.styles.css";
const CustomButton = ({ type, children }) => (
  <div>
    <button className="custom-button">{children}</button>
  </div>
);

export default CustomButton;
