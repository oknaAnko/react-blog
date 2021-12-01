import { types } from "./constants";

const initialState = {
  isLoading: false,
  post: [],
  error: null,
};

export const onePostReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ONE_POST_REQUEST:
      return { ...state, isLoading: true };
    case types.FETCH_ONE_POST_SUCCESS:
      return { ...state, isLoading: false, post: action.payload };
    case types.FETCH_ONE_POST_FAIL:
      return { ...state, isLoading: false, error: action.payload };
    case types.STORE_POST_RESET:
      return initialState;
    default:
      return state;
  }
};
