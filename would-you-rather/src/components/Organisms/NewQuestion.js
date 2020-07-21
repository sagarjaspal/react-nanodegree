import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import UserCard from "../Atoms/UserCard";
import { handleCreateNewQuestion } from "../../actions/questionActions";
import { Redirect } from "react-router-dom";

class NewQuestion extends Component {
  state = {
    optionOneText: "",
    optionTwoText: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { optionOneText, optionTwoText } = this.state;
    const { handleCreateNewQuestion, authedUser, history } = this.props;
    handleCreateNewQuestion({
      author: authedUser,
      optionOneText,
      optionTwoText,
    });
    history.push("/");
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  disableSubmit = () => {
    const { optionOneText, optionTwoText } = this.state;
    return optionOneText.trim() === "" || optionTwoText.trim() === "";
  };

  render() {
    const { authedUser, users, location } = this.props;
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
        <UserCard avatar={users[authedUser].avatarURL}>
          <h3>Would You Rather</h3>
          <form className="form-group" onSubmit={this.handleSubmit}>
            <input
              id="optionOneText"
              className="form-control option-card"
              onChange={this.handleChange}
            />
            <p>OR</p>
            <input
              id="optionTwoText"
              className="form-control option-card"
              onChange={this.handleChange}
            />
            <input
              type="submit"
              className="btn btn-info"
              disabled={this.disableSubmit()}
            />
          </form>
        </UserCard>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser, users }) => ({ authedUser, users });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ handleCreateNewQuestion }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion);
