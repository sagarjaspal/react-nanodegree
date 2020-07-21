import {
  SET_ALL_QUESTIONS,
  SET_NEW_QUESTION,
  SET_QUESTION_ANSWER,
} from "../actions/questionActions";

const questionReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_ALL_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case SET_NEW_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case SET_QUESTION_ANSWER:
      const id = action.qid;
      const question = state[action.qid];
      return {
        ...state,
        [id]: {
          ...question,
          [action.answer]: {
            ...question[action.answer],
            votes: question[action.answer].votes.concat(action.authedUser),
          },
        },
      };
    default:
      return state;
  }
};

export default questionReducer;
