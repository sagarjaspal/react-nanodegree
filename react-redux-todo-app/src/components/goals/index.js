import React, { Component } from "react";
import List from "../shared/List";
import { connect } from "react-redux";

class Goals extends Component {
  state = {};
  render() {
    const { goals } = this.props;

    return (
      <div>
        <h2>GOALS LIST</h2>
        <div>
          <input type="text" placeholder="Add Goal" name="goal" />
          <button name="goalBtn">Add Todo</button>
        </div>
        <List items={goals} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  goals: state.goals,
});

export default connect(mapStateToProps)(Goals);
