import * as API from "../utils/_DATA";

export const SET_ALL_USERS = "SET_ALL_USERS";
export const SET_USER_ANSWER = "SET_USER_ANSWER";
export const SET_USER_QUESTION = "SET_USER_QUESTION";

const setAllUsers = (users) => ({
  type: SET_ALL_USERS,
  users,
});

export const handleGetAllUsers = () => (dispatch) => {
  API._getUsers()
    .then((users) => dispatch(setAllUsers(users)))
    .catch((e) => alert("An error occurred while fetching users." + e));
};

export const setUserAnswer = (user, qid, answer) => ({
  type: SET_USER_ANSWER,
  user,
  qid,
  answer,
});

export const setUserQuestion = ({ author, id }) => ({
  type: SET_USER_QUESTION,
  author,
  id,
});
