import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import Login from "../Organisms/Login";
import Nav from "../Atoms/Nav";
import NotFound from "../Atoms/NotFound";
import Home from "../Organisms/Home";
import QuestionDetail from "../Organisms/QuestionDetail";
import NewQuestion from "../Organisms/NewQuestion";
import LeaderBoard from "../Organisms/LeaderBoard";

function App(props) {
  const { authedUser } = props;

  return (
    <div className="container-fluid">
      {authedUser && <Nav />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/questions/:id" component={QuestionDetail} />
        <Route exact path="/add" component={NewQuestion} />
        <Route exact path="/leaderboard" component={LeaderBoard} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps, null)(App);
