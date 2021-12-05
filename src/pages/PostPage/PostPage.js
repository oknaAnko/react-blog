import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import bemCssModules from "bem-css-modules";

import { fetchComments, fetchOnePost, resetStore } from "../../redux/actions";
import CommentForm from "../../components/CommentForm/CommentForm";
import Comment from "../../components/Comment/Comment";
import Post from "../../components/Post/Post";

import { default as PostPageStyles } from "./PostPage.module.scss";
import { selectors } from "../../redux/selectors";

const style = bemCssModules(PostPageStyles);

const PostPage = ({ match }) => {
  const allPosts = useSelector(selectors.getAllPosts);
  const onePost = useSelector(selectors.getOnePost);
  const allComments = useSelector(selectors.getAllComments);
  const isLoading = useSelector(selectors.commentsLoading);
  const isCommentListError = useSelector(selectors.getCommentsError);

  const [isVisible, setIsVisible] = useState(false);

  const allPostsFetched = Array.isArray(allPosts) && allPosts.length;

  const dispatch = useDispatch();

  useEffect(() => {
    if (onePost) {
      dispatch(resetStore());
    }
  }, []);

  useEffect(() => {
    if (!allPostsFetched) {
      dispatch(fetchOnePost(match.params.id));
    }
  }, [allPostsFetched]);

  useEffect(() => {
    dispatch(fetchComments(match.params.id));
  }, []);

  const postDetailsObject = allPosts.find(
    (post) => post.id === Number(match.params.id)
  );
  const postDetails = [postDetailsObject].map((post) => <Post {...post} />);

  const onePostDetails = [onePost].map((post) => <Post {...post} />);

  const postComments = allComments.map((comment) => (
    <Comment key={comment.id} {...comment} />
  ));

  const handleToggleVisibleClick = () => setIsVisible((prev) => !prev);

  const setBtnLabel = isVisible ? "Nie, jednak rezygnuję" : "Napisz komentarz";

  return (
    <article className={style()}>
      {allPostsFetched ? postDetails : onePostDetails}
      <section>
        <h4 className={style("title")}>Komentarze</h4>
        {isLoading && (
          <p className={style("text")}>Trwa ładowanie komentarzy...</p>
        )}
        <ul>{postComments}</ul>
        {isCommentListError && (
          <p className={style("text")}>
            Przepraszamy, nie można wyświetlić komentarzy
          </p>
        )}
        <button className={style("btn")} onClick={handleToggleVisibleClick}>
          {setBtnLabel}
        </button>
        {isVisible && (
          <CommentForm postId={match.params.id} setIsVisible={setIsVisible} />
        )}
      </section>
    </article>
  );
};

export default PostPage;
