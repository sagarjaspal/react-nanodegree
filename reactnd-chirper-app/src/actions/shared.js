import * as API from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";
import { setAuthedUser } from "../actions/authUser";

const AUTHED_USER = "tylermcginnis";
export const RECEIVE_DATA = "RECEIVE_DATA";

export const receiveData = (users, tweets) => ({
  type: RECEIVE_DATA,
  users,
  tweets,
});

export const handleInitialData = () => (dispatch) => {
  dispatch(showLoading());
  API.getInitialData()
    .then(({ users, tweets }) => {
      dispatch(receiveData(users, tweets));
      dispatch(setAuthedUser(AUTHED_USER));
      dispatch(hideLoading());
    })
    .catch((e) => alert("An error occured while fetching initial data." + e));
};
