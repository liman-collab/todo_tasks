import React, { Component } from "react";
import FormInput from "../../components/form-input/form-input";
import Task from "../../components/task/task";
import "./update-task.styles.css";
import CustomButton from "../../components/custom-button/custom-button";
import { Redirect } from "react-router-dom";
import axios from "axios";
class UpdateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: "",
      description: "",
      redirect: false,
    };
  }
  onChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  componentDidMount() {
    axios
      .get(
        "http://localhost/ReactPHPCRUD/getById.php?id=" +
          this.props.match.params.id
      )
      .then((response) => {
        this.setState({
          first_name: response.data.fName,
          last_name: response.data.lName,
          email: response.data.email,
        }).catch(function (error) {
          console.log(error);
        });
      });
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { first_name, last_name, email } = this.state;
    const obj = {
      //id :id,
      first_name: first_name,
      last_name: last_name,
      email: email,
    };
    axios
      .post(
        "http://localhost/ReactPHPCRUD/update.php?id=" +
          this.props.match.params.id,
        obj
      )
      .then((res) => console.log(res.data), this.setState({ redirect: true }));
  };

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="update-form">
        <h2>Update Task</h2>
        <form onSubmit={this.onSubmit}>
          <Task
            name="title"
            type="text"
            label="title"
            value={this.state.taskName}
            required
            handleChange={this.onChange}
          />
          <Task
            name="description"
            type="text"
            label="description"
            value={this.state.description}
            required
            handleChange={this.onChange}
          />
          <CustomButton>Update Task</CustomButton>
        </form>
      </div>
    );
  }
}

export default UpdateTask;
