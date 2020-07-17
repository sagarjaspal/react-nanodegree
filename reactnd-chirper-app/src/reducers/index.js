import { combineReducers } from "redux";
import tweetsReducer from "./tweets";
import usersReducer from "./users";
import authedUserReducer from "./authUser";
import { loadingBarReducer } from "react-redux-loading";

export const rootReducer = combineReducers({
  tweets: tweetsReducer,
  users: usersReducer,
  authedUser: authedUserReducer,
  loadingBar: loadingBarReducer,
});
