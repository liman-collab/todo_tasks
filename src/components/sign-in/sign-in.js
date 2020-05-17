import React, { Component } from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import "./sign-in.styles.css";
import axios from "axios";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: "",
    };
  }

  componentWillMount() {
    axios
      .get("http://localhost//php_rest_myblog/validation.php/")
      .then((res) => console.log(res.data));
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { user, password } = this.state;

    const obj = {
      user: user,
      password: password,
    };

    axios
      .get("http://localhost//php_rest_myblog/login.php/")
      .then((res) => console.log(res.data));

    this.setState({
      user: "",
      password: "",
    });
    console.log(obj);
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your user and password </span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="user"
            type="user"
            handleChange={this.handleChange}
            label="user"
            value={this.state.user}
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            label="password"
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
