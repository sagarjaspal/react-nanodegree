import { SET_USER, REMOVE_USER } from "../actions/authedUserActions";

const authedUser = (state = null, action) => {
  switch (action.type) {
    case SET_USER:
      return action.user;
    case REMOVE_USER:
      return null;
    default:
      return state;
  }
};

export default authedUser;
