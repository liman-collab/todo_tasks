import React, { Component } from "react";
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";
import "./sign-in-and-sign-up.styles.css";
class SignInSignUp extends Component {
  render() {
    return (
      <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
      </div>
    );
  }
}

export default SignInSignUp;
