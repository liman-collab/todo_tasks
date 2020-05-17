import React from "react";
import FormInput from "../form-input/form-input";

const Task = ({ name, label, type, handleChange, taskName }) => {
  return (
    <div>
      {" "}
      <FormInput
        onChange={handleChange}
        name={name}
        label={label}
        type={type}
        placeholder={label}
      />
    </div>
  );
};

export default Task;
