import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { handleGetAllUsers } from "../../actions/userActions";

class Login extends Component {
  state = {};

  componentDidMount() {
    const { handleGetAllUsers } = this.props;
    handleGetAllUsers();
  }

  render() {
    return (
      <div>
        <h3>LOGIN</h3>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ handleGetAllUsers }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
