import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { removeUser } from "../../actions/authedUserActions";
import { bindActionCreators } from "redux";

const handleLogOut = (e, removeUser, history) => {
  e.preventDefault();
  removeUser();
  console.log("history", history);
  return history.push("/");
};

const Nav = ({ user, removeUser, history }) => {
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
        onClick={(e) => handleLogOut(e, removeUser, history)}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));
