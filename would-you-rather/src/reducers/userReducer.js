import { SET_ALL_USERS } from "../actions/userActions";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_ALL_USERS:
      return {
        ...state,
        ...action.users,
      };
    default:
      return state;
  }
};

export default userReducer;
