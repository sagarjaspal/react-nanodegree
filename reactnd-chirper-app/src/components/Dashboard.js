import React, { Component } from "react";
import { connect } from "react-redux";

import Tweet from "./Tweet";

class Dashboard extends Component {
  state = {};

  renderTweets = (tweet) => (
    <p>
      <Tweet tweet={tweet} />
    </p>
  );
  render() {
    return (
      <div>
        <h2 className="center">Your Timeline</h2>
        <ul>
          {this.props.tweetsIdList.map((tweetId) => (
            <li key={tweetId}>
              <Tweet tweetId={tweetId} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ tweets }) => ({
  tweetsIdList: Object.keys(tweets).sort(
    (a, b) => tweets[b].timestamp - tweets[a].timestamp
  ),
});

export default connect(mapStateToProps, null)(Dashboard);
