import * as API from "../utils/_DATA";
import { setUserAnswer, setUserQuestion } from "./userActions";

export const SET_ALL_QUESTIONS = "SET_ALL_QUESTIONS";
export const SET_NEW_QUESTION = "SET_NEW_QUESTION";
export const SET_QUESTION_ANSWER = "SET_QUESTION_ANSWER";

const setAllQuestions = (questions) => ({
  type: SET_ALL_QUESTIONS,
  questions,
});

export const handleGetAllQuestions = () => (dispatch) => {
  API._getQuestions()
    .then((questions) => dispatch(setAllQuestions(questions)))
    .catch((e) => alert("An error occurred while fetching questions."));
};

const setNewQuestion = (question) => ({
  type: SET_NEW_QUESTION,
  question,
});

export const handleCreateNewQuestion = (question) => (dispatch) => {
  API._saveQuestion(question)
    .then((question) => {
      dispatch(setNewQuestion(question));
      dispatch(setUserQuestion(question));
    })
    .catch((e) => alert("An error occurred while saving new question" + e));
};

const setQuestionAnswer = (authedUser, qid, answer) => ({
  type: SET_QUESTION_ANSWER,
  qid,
  authedUser,
  answer,
});

export const handleSaveQuestionAnswer = ({ authedUser, qid, answer }) => (
  dispatch
) => {
  API._saveQuestionAnswer({
    authedUser,
    qid,
    answer,
  })
    .then(() => {
      dispatch(setQuestionAnswer(authedUser, qid, answer));
      dispatch(setUserAnswer(authedUser, qid, answer));
    })
    .catch((e) => alert("An error occurred while saving answer" + e));
};
