import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import List from "../shared/List";
import { handleAddTodo } from "./todosActions";

class Todos extends Component {
  state = {};

  render() {
    const { todos, handleAddTodo } = this.props;

    return (
      <div>
        <h2>TODOS LIST</h2>
        <div>
          <input
            type="text"
            placeholder="Add Todo"
            name="todo"
            ref={(input) => (this.input = input)}
          />
          <button
            name="todoBtn"
            onClick={() =>
              handleAddTodo(this.input.value, () => (this.input.value = ""))
            }
          >
            Add Todo
          </button>
        </div>
        <List items={todos} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ handleAddTodo }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
