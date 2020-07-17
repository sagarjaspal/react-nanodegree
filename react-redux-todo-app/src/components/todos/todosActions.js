import API from "goals-todos-api";
import { ADD_TODO } from "./todosConstants";

const addTodo = (todo) => ({
  type: ADD_TODO,
  todo,
});

export const handleAddTodo = (name, cb) => (dispatch) =>
  API.saveTodo(name)
    .then((todo) => {
      dispatch(addTodo(todo));
      cb();
    })
    .catch(() => alert("An error occurred. Please try again"));
