import { RECEIVE_DATA } from "../actions/shared";

const users = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DATA:
      return Object.assign({}, action.users);
    default:
      return state;
  }
};

export default users;
