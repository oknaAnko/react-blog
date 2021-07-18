import React from 'react';
import { useSelector } from 'react-redux';
import bemCssModules from 'bem-css-modules';

import Post from '../../components/Post/Post';
import Comment from '../../components/Comment/Comment';
import { default as PostPageStyles } from './PostPage.module.scss';

const style = bemCssModules(PostPageStyles);


const PostPage = ({ match }) => {
    const allPosts = useSelector(state => state.posts.posts);
    const allComments = useSelector(state => state.comments.comments);

    const postDetails = allPosts
        .filter(post => post.id === Number(match.params.id))
        .map(post => <Post key={post.id} {...post} />);

    const postComments = allComments
        .filter(comment => comment.postId === Number(match.params.id))
        .map(comment => <Comment key={comment.id} {...comment} />)

    console.log(postComments);


    return (
        <article className={style()}>
            {postDetails}
            <section>
                <h4 className={style('title')}>Komentarze</h4>
                <ul>
                    {postComments}
                </ul>
            </section>
        </article>
    );
}

export default PostPage;