import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { removeUser } from "../../actions/authedUserActions";
import { bindActionCreators } from "redux";

const handleLogOut = (e, removeUser) => {
  e.preventDefault();
  removeUser();
  return <Redirect to="/" />;
};

const Nav = ({ user, removeUser }) => {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-items">
        <NavLink className="nav-link" to="/" exact activeClassName="active">
          Home
        </NavLink>
      </li>
      <li className="nav-items">
        <NavLink className="nav-link" to="/add" activeClassName="active">
          New Question
        </NavLink>
      </li>
      <li className="nav-items">
        <NavLink
          className="nav-link"
          to="/leaderboard"
          activeClassName="active"
        >
          Leader Board
        </NavLink>
      </li>
      <li className="nav-items disabled">{`Hello ${user.name}!`}</li>
      <li
        className="nav-items nav-link"
        onClick={(e) => handleLogOut(e, removeUser)}
      >
        Logout
      </li>
    </ul>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  user: users[authedUser],
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ removeUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
