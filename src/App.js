import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import Dashboard from "./pages/homepage/Dashboard";
import AddTask from "./pages/AddTask/AddTask";

import FormInput from "./components/form-input/form-input";
import SignInSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import UpdateTask from "./pages/update/update-task";
import Features from "./components/features/features";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
      user: null,
    };
  }

  componentDidMount() {
    //axios.get
  }

  render() {
    return (
      <div>
        <Header user="liman" status={this.state.status} />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.state.user ? <Redirect to="/" /> : <SignInSignUp />
            }
          />
          <Route exact path="/features" component={Features} />
          <Route exact path="/addTask" component={AddTask} />
          <Route exact path="/update/:id" component={UpdateTask} />
        </Switch>
      </div>
    );
  }
}

export default App;
