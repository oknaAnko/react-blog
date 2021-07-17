import { configureStore } from '@reduxjs/toolkit';
import { postReducer } from './postReducer';
import { commentReducer } from './commentReducer';

export const store = configureStore({
    reducer: {
        posts: postReducer,
        comments: commentReducer,
    },
});