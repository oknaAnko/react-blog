import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import bemCssModules from 'bem-css-modules';

import Comment from '../../components/Comment/Comment';
import CommentForm from '../../components/CommentForm/CommentForm';
import Post from '../../components/Post/Post';

import { default as PostPageStyles } from './PostPage.module.scss';

const style = bemCssModules(PostPageStyles);


const PostPage = ({ match }) => {
    const allPosts = useSelector(state => state.posts.posts);
    const allComments = useSelector(state => state.comments.commentsList.comments);
    const isLoading = useSelector(state => state.comments.commentsList.isLoading);
    const isCommentListError = useSelector(state => state.comments.commentsList.error);
    const isNewCommentError = useSelector(state => state.comments.newComment.error);

    const postDetails = allPosts
        .filter(post => post.id === Number(match.params.id))
        .map(post => <Post key={post.id} {...post} />);

    const postCommentsTable = allComments
        .filter(comment => comment.postId === Number(match.params.id));

    const [currentComments, setCurrentComments] = useState(postCommentsTable);
    const [isVisible, setIsVisible] = useState(false);

    const postComments = currentComments
        .map(comment => <Comment key={comment.id} {...comment} />);

    const handleToggleVisibleClick = () => setIsVisible(prev => !prev);

    const setBtnLabel = isVisible ? "Nie, jednak rezygnuję" : "Napisz komentarz";


    return (
        <article className={style()}>
            {postDetails}
            <section>
                <h4 className={style('title')}>Komentarze</h4>
                {isLoading && <p className={style('text')}>Trwa ładowanie komentarzy...</p>}
                <ul>
                    {postComments}
                </ul>
                {isCommentListError && <p className={style('text')}>Przepraszamy, nie można wyświetlić komentarzy</p>}
                {isNewCommentError && <p className={style('text')}>Przepraszamy, nie można dodać komentarza</p>}

                <button className={style('btn')} onClick={handleToggleVisibleClick}>{setBtnLabel}</button>
                {isVisible && <CommentForm postId={match.params.id}
                    currentComments={currentComments}
                    setCurrentComments={setCurrentComments}
                    setIsVisible={setIsVisible} />}
            </section>
        </article>
    );
}

export default PostPage;