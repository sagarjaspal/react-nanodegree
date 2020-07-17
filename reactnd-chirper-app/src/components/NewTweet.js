import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSaveTweet } from "../actions/tweets";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";

class NewTweet extends Component {
  state = {
    tweetText: "",
  };

  handleTextChange = (event) => {
    this.setState({
      tweetText: event.target.value,
    });
  };

  handleSubmit = () => {
    const { authedUser, id, handleSaveTweet } = this.props;
    handleSaveTweet({
      text: this.text.value,
      author: authedUser,
      replyingTo: id,
    });

    if (id == null) {
      this.setState({ toHome: true });
    }
  };

  render() {
    const { tweetText, toHome } = this.state;

    if (toHome) {
      return <Redirect to="/" />;
    }
    const MAX_TWEET_LENGTH = 280;
    let charLeft = MAX_TWEET_LENGTH - tweetText.length;

    return (
      <div className="new-tweet">
        <h3 className="center">Compose New Tweet</h3>
        <textarea
          name="newTweet"
          className="textarea"
          placeholder="What's happening?"
          value={tweetText}
          onChange={this.handleTextChange}
          maxLength={MAX_TWEET_LENGTH}
          ref={(text) => (this.text = text)}
        ></textarea>
        {charLeft < 100 && <div className="tweet-length">{charLeft}</div>}
        <button
          className="btn"
          disabled={tweetText === ""}
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ handleSaveTweet }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NewTweet);
