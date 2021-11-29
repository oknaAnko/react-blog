import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./postReducer";
import { onePostReducer } from "./onePostReducer";
import { commentReducer } from "./commentReducer";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    onePost: onePostReducer,
    comments: commentReducer,
  },
});
