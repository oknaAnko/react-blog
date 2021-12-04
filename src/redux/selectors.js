export const selectors = {
  getOnePost: (state) => state.onePost.post,

  getAllPosts: (state) => state.posts.posts,
  postsLoading: (state) => state.posts.isLoading,
  getPostsError: (state) => state.posts.error,

  getAllComments: (state) => state.comments.commentsList.comments,
  commentsLoading: (state) => state.comments.commentsList.isLoading,
  getCommentsError: (state) => state.comments.commentsList.error,

  getNewCommentError: (state) => state.comments.newComment.error,
};
