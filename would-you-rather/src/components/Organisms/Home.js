import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { handleGetAllQuestions } from "../../actions/questionActions";

class Home extends Component {
  state = {};

  componentDidMount() {
    const { handleGetAllQuestions } = this.props;
    handleGetAllQuestions();
  }
  render() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
}

const mapStateToProps = ({ questions }) => ({
  questions,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ handleGetAllQuestions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
