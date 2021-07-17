import axios from 'axios';
import { types } from './constants';

const postsFetchedRequest = () => ({
    type: types.FETCH_POSTS_REQUEST
});

const postsFetchedSuccess = posts => ({
    type: types.FETCH_POSTS_SUCCESS,
    payload: posts
});

const postsFetchedFail = error => ({
    type: types.FETCH_POSTS_FAIL,
    payload: error
});

export const fetchPosts = () => dispatch => {
    dispatch(postsFetchedRequest());
    return axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.data)
        .then(posts => {
            dispatch(postsFetchedSuccess(posts))
        })
        .catch(error => {
            dispatch(postsFetchedFail(error))
        });
};