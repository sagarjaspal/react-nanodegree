import { ADD_TODO } from "./todosConstants";
import { RECEIVE_DATA } from "../shared/sharedActions";

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case RECEIVE_DATA:
      return state.concat(action.todos);
    default:
      return state;
  }
};

export default todosReducer;
