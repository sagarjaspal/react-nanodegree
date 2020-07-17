import React, { Component } from "react";
import { connect } from "react-redux";

import Tweet from "./Tweet";
import NewTweet from "./NewTweet";

class TweetPage extends Component {
  state = {};
  render() {
    const { id, replies } = this.props;
    return (
      <div>
        <Tweet tweetId={id} />
        <NewTweet id={id} />
        {replies.length > 0 && (
          <div>
            <h3 className="center">Replies</h3>
            <ul>
              {replies.map((tweetId) => (
                <li key={tweetId}>
                  <Tweet tweetId={tweetId} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ tweets, authedUser }, { match }) => {
  const { id } = match.params;

  return {
    replies: tweets[id]
      ? tweets[id].replies.sort(
          (a, b) => tweets[b].timestamp - tweets[a].timestamp
        )
      : [],
    id,
    authedUser,
  };
};

export default connect(mapStateToProps, null)(TweetPage);
