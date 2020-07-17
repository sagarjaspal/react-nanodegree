import { showLoading, hideLoading } from "react-redux-loading";
import { saveLikeToggle, saveTweet } from "../utils/api";

export const SAVE_TWEET = "SAVE_TWEET";
export const TOGGLE_LIKE = "TOGGLE_LIKE";

const toggleLike = ({ id, authedUser, hasLiked }) => ({
  type: TOGGLE_LIKE,
  id,
  authedUser,
  hasLiked,
});

export const handleLike = (info) => (dispatch) => {
  dispatch(toggleLike(info));
  return saveLikeToggle(info).catch((error) => {
    console.warn(error);
    alert("An error occured. Please try again.");
  });
};

const saveTweetToState = (tweet) => ({
  type: SAVE_TWEET,
  tweet,
});

export const handleSaveTweet = (info) => (dispatch) => {
  dispatch(showLoading());
  saveTweet(info)
    .then((tweet) => {
      dispatch(saveTweetToState(tweet));
      dispatch(hideLoading());
    })
    .catch((e) => alert("An error occurred while saving tweet"));
};
