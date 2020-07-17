import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";

import todosReducer from "./components/todos/todosReducer";
import goalsReducer from "./components/goals/goalsReducer";
import "./index.css";
import App from "./components/App";

const store = createStore(
  combineReducers({
    todos: todosReducer,
    goals: goalsReducer,
  }),
  applyMiddleware(thunk, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
