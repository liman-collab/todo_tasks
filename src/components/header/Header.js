import React, { Component } from "react";
import "./Header.styles.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/user-solid.svg";
import Profile from "../profile-icon/profile";

// const Header = ({ user, status }) => (
class Header extends Component {
  signOut = () => {
    this.setState({
      status: !this.props.status,
    });
  };

  render() {
    const { status, user } = this.props;

    return (
      <div className="header">
        {status ? (
          <Link to="/" className="todo-div">
            logged: {user}
          </Link>
        ) : (
          <Link to="/" className="todo-div">
            todo
          </Link>
        )}

        <div className="options">
          <div className="logo-container">
            <Logo className="logo" />
          </div>
          {status ? (
            <Link className="option">SIGN OUT</Link>
          ) : (
            <Link className="option" to="/signin">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default Header;
