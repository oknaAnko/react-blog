import { types } from './constants';

const initialState = {
    isLoading: false,
    posts: [],
    error: null
};

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_POSTS_REQUEST:
            return { ...state, isLoading: true };
        case types.FETCH_POSTS_SUCCESS:
            return { ...state, isLoading: false, posts: action.payload };
        case types.FETCH_POSTS_FAIL:
            return { ...state, isLoading: false, error: action.payload };
        default:
            return state
    }
};