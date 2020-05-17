import React from "react";
import "./task-item.styles.css";
import { Link } from "react-router-dom";
const TaskItem = ({ emri, id }) => {
  return (
    <div className="task-item">
      <h1>{emri}</h1>
      <h1>{id}</h1>
      <div className="buttons-task-item">
        <Link to={`update/${id}`} className="btn-edit">
          Update
        </Link>
        <button className="btn-delete">Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
