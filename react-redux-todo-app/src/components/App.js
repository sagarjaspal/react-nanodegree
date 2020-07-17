import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { handleFetchData } from "./shared/sharedActions";
import Todos from "./todos";
import Goals from "./goals";

class App extends Component {
  componentDidMount() {
    this.props.handleFetchData();
  }

  render() {
    return (
      <div>
        <Todos />
        <Goals />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ handleFetchData }, dispatch);

export default connect(null, mapDispatchToProps)(App);
