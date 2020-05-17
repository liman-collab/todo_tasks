import React, { Component } from "react";
import Task from "../../components/task/task";
import CustomButton from "../../components/custom-button/custom-button";
import "./AddTask.styles.css";
import axios from "axios";
import FormInput from "../../components/form-input/form-input";
class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: "",
      description: "",
    };
  }

  onChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { taskName, description } = this.state;
    const obj = {
      taskName: taskName,
      description: description,
    };
    axios
      .post("http://localhost/reactJsCrud/insert.php", obj)
      .then((res) => console.log(res.data));

    this.setState({
      taskName: "",
      description: "",
    });
  };
  render() {
    return (
      <div className="addTask">
        <h2>Add New Task</h2>
        <Task
          name="title"
          type="text"
          handleChange={this.handleChange}
          label="title"
          value={this.state.email}
          required
        />
        <Task
          name="description"
          type="text"
          handleChange={this.handleChange}
          label="description"
          value={this.state.email}
          required
        />
        <CustomButton>Create New Task</CustomButton>
      </div>
    );
  }
}

export default AddTask;
