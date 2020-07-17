import * as API from "../utils/_DATA";

export const SET_ALL_QUESTIONS = "SET_ALL_QUESTIONS";

const setAllQuestions = (questions) => ({
  type: SET_ALL_QUESTIONS,
  questions,
});

export const handleGetAllQuestions = () => (dispatch) => {
  API._getQuestions()
    .then((questions) => dispatch(setAllQuestions(questions)))
    .catch((e) => alert("An error occurred while fetching questions."));
};
