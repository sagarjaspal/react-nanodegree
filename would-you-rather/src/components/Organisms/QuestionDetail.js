import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import UserCard from "../Atoms/UserCard";
import { handleSaveQuestionAnswer } from "../../actions/questionActions";
import { Redirect } from "react-router-dom";

class QuestionDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: null,
    };
  }

  componentDidMount() {
    const { user, answer } = this.props;
    if (user === null) {
      const { history } = this.props;
      return history.push("/login");
    }

    if (answer !== null) {
      this.setState({ answer });
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    const { answer } = this.state;
    if (!answer || answer === null) {
      this.setState({ option: e.target.id });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { option } = this.state;
    const { question, authedUser, handleSaveQuestionAnswer } = this.props;
    handleSaveQuestionAnswer({
      authedUser,
      qid: question.id,
      answer: option,
    });
    this.setState({ answer: option });
  };

  getVotingCount = (question) => {
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes;
    const optionOnePerc = (optionOneVotes / totalVotes) * 100;
    const optionTwoPerc = 100 - optionOnePerc;

    return {
      optionOneVotes,
      optionOnePerc,
      optionTwoVotes,
      optionTwoPerc,
      totalVotes,
    };
  };

  createCountString = (
    option,
    optionCount,
    totalCount,
    optionOnePerc,
    answer
  ) => {
    return `${optionOnePerc.toFixed(
      2
    )}% votes. ${optionCount} out of ${totalCount} voted ${
      option === answer ? "including you" : ""
    }`;
  };

  render() {
    const { author, question, authedUser, location } = this.props;

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

    if (!question || question === null) {
      return <Redirect to="/*" />;
    }

    const { option, answer } = this.state;
    const {
      optionOneVotes,
      optionOnePerc,
      optionTwoVotes,
      optionTwoPerc,
      totalVotes,
    } = this.getVotingCount(question);

    return (
      <div className="home-container">
        <UserCard avatar={author.avatarURL}>
          <div className="column text-center" style={{ marginRight: 24 }}>
            <h3 style={{ marginBottom: 16 }}>Would You Rather</h3>
            <div className="row">
              <div
                className={`option-card col-md-12 ${
                  option === "optionOne" || answer === "optionOne"
                    ? "option-active"
                    : ""
                }`}
                id="optionOne"
                onClick={this.handleClick}
              >
                {question.optionOne.text}
              </div>
            </div>
            {answer && answer !== null && (
              <div className="row">
                <div className="col-md-12">
                  {this.createCountString(
                    "optionOne",
                    optionOneVotes,
                    totalVotes,
                    optionOnePerc,
                    answer
                  )}
                </div>
              </div>
            )}
            <div className="row">
              <div className="col-md-12 py-2">
                <h6>OR</h6>
              </div>
            </div>
            <div className="row">
              <div
                className={`option-card col-md-12 ${
                  option === "optionTwo" || answer === "optionTwo"
                    ? "option-active"
                    : ""
                }`}
                id="optionTwo"
                onClick={this.handleClick}
              >
                {question.optionTwo.text}
              </div>
            </div>
            {answer && answer !== null && (
              <div className="row">
                <div className="col-md-12">
                  {this.createCountString(
                    "optionTwo",
                    optionTwoVotes,
                    totalVotes,
                    optionTwoPerc,
                    answer
                  )}
                </div>
              </div>
            )}
            <button
              className="btn btn-info col-md-12"
              style={{ marginTop: 20, borderRadius: 12.5 }}
              onClick={this.handleSubmit}
              disabled={option === null || (answer && answer !== null)}
            >
              SUBMIT
            </button>
          </div>
        </UserCard>
      </div>
    );
  }
}

const mapStateToProps = ({ users, questions, authedUser }, { match }) => {
  const id = match.params.id;
  const user = authedUser !== null ? users[authedUser] : null;
  const answer =
    user !== null && Object.keys(user.answers).includes(id)
      ? user.answers[id]
      : null;
  const authorId = Object.keys(questions).length > 0 && questions[id].author;

  return {
    author: users[authorId],
    question: questions[id],
    answer,
    authedUser,
    id,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ handleSaveQuestionAnswer }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetail);
