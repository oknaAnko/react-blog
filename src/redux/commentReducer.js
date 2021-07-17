import { types } from './constants';

const initialState = {
    isLoading: false,
    comments: [],
    error: null
};

export const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_COMMENTS_REQUEST:
            return { ...state, isLoading: true };
        case types.FETCH_COMMENTS_SUCCESS:
            return { ...state, isLoading: false, comments: action.payload };
        case types.FETCH_COMMENTS_FAIL:
            return { ...state, isLoading: false, error: action.payload };
        default:
            return state
    }
};