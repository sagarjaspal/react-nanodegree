import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import UserCard from "../Atoms/UserCard";

const getTotal = (user) => {
  return user.questions.length + Object.keys(user.answers).length;
};

const LeaderBoard = (props) => {
  const { users, authedUser, location } = props;

  if (!authedUser || authedUser === null) {
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: { from: location },
        }}
      />
    );
  }

  return (
    <div>
      <ul>
        {Object.values(users)
          .sort((a, b) => getTotal(b) - getTotal(a))
          .map((user) => (
            <li key={user.id}>
              <UserCard avatar={user.avatarURL}>
                <div className="row">
                  <div className="column-md-12 text-center">
                    <h5>{user.name}</h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8">
                    <p>Questions Asked: {user.questions.length}</p>
                    <p>Answers Given: {Object.keys(user.answers).length}</p>
                  </div>
                  <div className="col-md-3">
                    <p>
                      Total:
                      {getTotal(user)}
                    </p>
                  </div>
                </div>
              </UserCard>
            </li>
          ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ users, authedUser }) => ({
  users,
  authedUser,
});

export default connect(mapStateToProps, null)(LeaderBoard);
