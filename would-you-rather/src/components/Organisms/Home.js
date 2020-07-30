import React, { Component } from "react";
import { connect } from "react-redux";

import QuestionList from "../Molecules/QuestionList";
import { Redirect } from "react-router-dom";

class Home extends Component {
  state = {
    tabToRender: "unanswered",
  };

  setUnanswered = (e) => {
    e.preventDefault();
    this.setState({
      tabToRender: "unanswered",
    });
  };

  setAnswered = (e) => {
    e.preventDefault();
    this.setState({
      tabToRender: "answered",
    });
  };

  render() {
    const { answered, unanswered, users, authedUser, location } = this.props;
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

    const { tabToRender } = this.state;
    const questions =
      tabToRender && tabToRender === "unanswered" ? unanswered : answered;

    return (
      <div className="home-container mx-auto">
        <ul className="nav nav-tabs nav-justified">
          <li
            className={`nav-item pointer ${
              tabToRender === "unanswered" ? "tab-active" : ""
            }`}
            data="unanswered"
            onClick={this.setUnanswered}
          >
            Unanswered
          </li>
          <li
            className={`nav-item pointer ${
              tabToRender === "answered" ? "tab-active" : ""
            }`}
            name="answered"
            onClick={this.setAnswered}
          >
            Answered
          </li>
        </ul>
        <QuestionList questions={questions} users={users} />
      </div>
    );
  }
}

const mapStateToProps = ({ questions, users, authedUser }) => {
  let answered = {};
  let unanswered = {};

  if (
    Object.keys(questions).length !== 0 &&
    Object.keys(users).length !== 0 &&
    authedUser !== null
  ) {
    //insert Question objects for answered questions to 'answered' object
    const userAnswers = users[authedUser].answers;
    Object.keys(userAnswers).map((id) => (answered[id] = questions[id]));

    //insert remaining questions from 'questions' object to 'unanswered' obj
    let unansweredArray = [];
    unansweredArray = Object.keys(questions).filter(
      (question) => !Object.keys(answered).includes(question)
    );
    unansweredArray.map((id) => (unanswered[id] = questions[id]));
  }

  return {
    answered,
    unanswered,
    questions,
    authedUser,
    users,
  };
};

export default connect(mapStateToProps, null)(Home);
