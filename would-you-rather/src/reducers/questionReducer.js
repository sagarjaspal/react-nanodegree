import { SET_ALL_QUESTIONS } from "../actions/questionActions";

const questionReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_ALL_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    default:
      return state;
  }
};

export default questionReducer;
