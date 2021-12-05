import { types } from "./constants";

const initialState = {
  commentsList: {
    isLoading: false,
    comments: [],
    error: null,
  },
};

export const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_COMMENTS_REQUEST:
      return {
        ...state,
        commentsList: { isLoading: true, comments: [], error: null },
      };
    case types.FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        commentsList: {
          isLoading: false,
          comments: action.payload,
          error: null,
        },
      };
    case types.FETCH_COMMENTS_FAIL:
      return {
        ...state,
        commentsList: { isLoading: false, comments: [], error: action.payload },
      };
    case types.ADD_COMMENT_SUCCESS:
      console.log(...state.commentsList.comments);
      return {
        ...state,
        commentsList: {
          isLoading: false,
          comments: [...state.commentsList.comments, action.payload],
          error: null,
        },
      };
    case types.ADD_COMMENT_FAIL:
      return {
        ...state,
        commentsList: { isLoading: false, comments: [], error: action.payload },
      };
    default:
      return state;
  }
};
