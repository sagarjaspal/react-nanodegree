import * as API from "../utils/_DATA";

export const SET_ALL_USERS = "SET_ALL_USERS";

const setAllUsers = (users) => ({
  type: SET_ALL_USERS,
  users,
});

export const handleGetAllUsers = () => (dispatch) => {
  API._getUsers()
    .then((users) => dispatch(setAllUsers(users)))
    .catch((e) => alert("An error occurred while fetching users." + e));
};
