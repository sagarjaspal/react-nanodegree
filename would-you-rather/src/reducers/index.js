import { combineReducers } from "redux";

import authedUserReducer from "./authedUserReducer";
import userReducer from "./userReducer";
import questionReducer from "./questionReducer";

const rootReducer = combineReducers({
  authedUser: authedUserReducer,
  users: userReducer,
  questions: questionReducer,
});

export default rootReducer;
