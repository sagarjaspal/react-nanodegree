import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { handleGetAllUsers } from "../../actions/userActions";
import { setUser } from "../../actions/authedUserActions";

class Login extends Component {
  state = {
    authedUser: "",
  };

  componentDidMount() {
    const { handleGetAllUsers } = this.props;
    handleGetAllUsers();
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ authedUser: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { authedUser } = this.state;
    const { setUser } = this.props;
    setUser(authedUser);
  };

  render() {
    const { authedUser } = this.state;
    const { users } = this.props;

    return (
      <div className="center">
        <h3>LOGIN</h3>
        <form className="form-group" onSubmit={this.handleSubmit}>
          <label>
            Username
            <select
              className="form-control"
              value={authedUser}
              onChange={this.handleChange}
            >
              <option value=""></option>
              {Object.values(users).map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
            <button
              className="btn btn-outline-light"
              type="submit"
              disabled={authedUser === ""}
            >
              LOGIN
            </button>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ handleGetAllUsers, setUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
