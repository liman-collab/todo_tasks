import React, { Component } from "react";
import "./Dashboard.styles.css";

import Menu from "../../components/menu/menu";
import MenuList from "../../menu-list/menu-list";
import CustomButton from "../../components/custom-button/custom-button";
import axios from "axios";
import Task from "../../components/task/task";
import TaskItem from "../../components/task-item/task-item";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 4,
          emri: "Liman",
        },
        {
          id: 5,
          emri: "Filan",
        },
        {
          id: 7,
          emri: "Liman",
        },
        {
          id: 8,
          emri: "Filan",
        },
        {
          id: 7,
          emri: "Liman",
        },
        {
          id: 8,
          emri: "Filan",
        },
        {
          id: 7,
          emri: "Liman",
        },
        {
          id: 8,
          emri: "Filan",
        },
        {
          id: 7,
          emri: "Liman",
        },
        {
          id: 8,
          emri: "Filan",
        },
      ],
    };
  }

  componentDidMount() {
    // axios.get()
    //this.setState({
    //tasks:this.state.tasks
    // })
  }

  render() {
    const { tasks } = this.state;

    return (
      <div className="main-d">
        <div className="dashboard">
          <MenuList />
        </div>
        <div className="task">
          {tasks.map((task) => (
            <TaskItem emri={task.emri} key={task.id} id={task.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Dashboard;
