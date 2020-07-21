import {
  SET_ALL_USERS,
  SET_USER_ANSWER,
  SET_USER_QUESTION,
} from "../actions/userActions";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_ALL_USERS:
      return {
        ...state,
        ...action.users,
      };
    case SET_USER_ANSWER:
      return {
        ...state,
        [action.user]: {
          ...state[action.user],
          answers: {
            ...state[action.user].answers,
            [action.qid]: action.answer,
          },
        },
      };
    case SET_USER_QUESTION:
      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          questions: state[action.author].questions.concat(action.id),
        },
      };
    default:
      return state;
  }
};

export default userReducer;
