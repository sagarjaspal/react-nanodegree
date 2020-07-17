import { SET_USER, REMOVE_USER } from "../actions/authedUserActions";

const authedUser = (state = null, action) => {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, action.user);
    case REMOVE_USER:
      return {};
    default:
      return state;
  }
};

export default authedUser;
