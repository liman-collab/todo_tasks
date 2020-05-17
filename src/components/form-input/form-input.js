import React from "react";

import "./form-input.styles.css";

const FormInput = ({ name, label, type, handleChange }) => (
  <div className="group">
    <input
      className="form-input"
      onChange={handleChange}
      name={name}
      type={type}
      placeholder={label}
    />
  </div>
);

export default FormInput;
