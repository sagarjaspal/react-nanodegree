import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Loader from "react-redux-loading";
import { Switch, Route } from "react-router-dom";

import { handleInitialData } from "../actions/shared";
import Nav from "./Nav";
import Dashboard from "./Dashboard";
import NewTweet from "./NewTweet";
import TweetPage from "./TweetPage";

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }
  render() {
    return (
      <div>
        <Loader />
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/new" component={NewTweet} />
            <Route exact path="/tweet/:id" component={TweetPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ handleInitialData }, dispatch);

export default connect(null, mapDispatchToProps)(App);
