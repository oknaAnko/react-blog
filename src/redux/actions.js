import axios from "axios";
import { types } from "./constants";

//fetch all posts
const postsFetchedRequest = () => ({
  type: types.FETCH_POSTS_REQUEST,
});

const postsFetchedSuccess = (posts) => ({
  type: types.FETCH_POSTS_SUCCESS,
  payload: posts,
});

const postsFetchedFail = (error) => ({
  type: types.FETCH_POSTS_FAIL,
  payload: error,
});

export const fetchPosts = () => (dispatch) => {
  dispatch(postsFetchedRequest());
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.data)
    .then((posts) => {
      dispatch(postsFetchedSuccess(posts));
    })
    .catch((error) => {
      dispatch(postsFetchedFail(error));
    });
};

//fetch one post
const onePostFetchedRequest = () => ({
  type: types.FETCH_ONE_POST_REQUEST,
});

const onePostFetchedSuccess = (post) => ({
  type: types.FETCH_ONE_POST_SUCCESS,
  payload: post,
});

const onePostFetchedFail = (error) => ({
  type: types.FETCH_ONE_POST_FAIL,
  payload: error,
});

export const fetchOnePost = (postId) => (dispatch) => {
  dispatch(onePostFetchedRequest());
  return axios
    .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => response.data)
    .then((post) => {
      dispatch(onePostFetchedSuccess(post));
    })
    .catch((error) => {
      dispatch(onePostFetchedFail(error));
    });
};

//reset store
export const resetStore = () => ({
  type: types.STORE_POST_RESET,
});

//fetch comments
const commentsFetchedRequest = () => ({
  type: types.FETCH_COMMENTS_REQUEST,
});

const commentsFetchedSuccess = (comments) => ({
  type: types.FETCH_COMMENTS_SUCCESS,
  payload: comments,
});

const commentsFetchedFail = (error) => ({
  type: types.FETCH_COMMENTS_FAIL,
  payload: error,
});

export const fetchComments = (postId) => (dispatch) => {
  dispatch(commentsFetchedRequest());
  return axios
    .get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then((response) => response.data)
    .then((comments) => {
      dispatch(commentsFetchedSuccess(comments));
    })
    .catch((error) => {
      dispatch(commentsFetchedFail(error));
    });
};

//add comment
const commentAddedSuccess = (comment) => ({
  type: types.ADD_COMMENT_SUCCESS,
  payload: comment,
});

const commentAddedFail = (error) => ({
  type: types.ADD_COMMENT_FAIL,
  payload: error,
});

const createCommentObj = (postId, id, name, email, body) => {
  const newComment = {
    postId,
    id,
    name,
    email,
    body,
  };
  return newComment;
};

export const addComment =
  (postId, id, formName, formEmail, formBody) => (dispatch) => {
    const newComment = createCommentObj(
      postId,
      id,
      formName,
      formEmail,
      formBody
    );

    return axios
      .post(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
        newComment
      )
      .then((response) => response.data)
      .then((comment) => {
        dispatch(commentAddedSuccess(comment));
      })
      .catch((error) => {
        dispatch(commentAddedFail(error));
      });
  };
