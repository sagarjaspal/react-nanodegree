import { RECEIVE_DATA } from "../actions/shared";
import { TOGGLE_LIKE, SAVE_TWEET } from "../actions/tweets";

const tweets = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DATA:
      return Object.assign({}, action.tweets);
    case TOGGLE_LIKE:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          likes:
            action.hasLiked === true
              ? state[action.id].likes.filter(
                  (uid) => uid !== action.authedUser
                )
              : state[action.id].likes.concat([action.authedUser]),
        },
      };
    case SAVE_TWEET: {
      const { tweet } = action;
      let modifiedParent = {};

      if (tweet.replyingTo !== null) {
        const parent = tweet.replyingTo;
        modifiedParent = {
          [parent]: {
            ...state[parent],
            replies: state[parent].replies.concat(tweet.id),
          },
        };
      }

      return {
        ...state,
        [tweet.id]: tweet,
        ...modifiedParent,
      };
    }
    default:
      return state;
  }
};

export default tweets;
