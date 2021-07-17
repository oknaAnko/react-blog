import React from 'react';
import { useSelector } from 'react-redux';

import Post from '../../components/Post/Post';

const PostPage = ({ match }) => {
    const allPosts = useSelector(state => state.posts.posts);

    const postDetails = allPosts
        .filter(post => post.id === Number(match.params.id))
        .map(post => <Post key={post.id} {...post} />);


    return (
        <article>
            {postDetails}
        </article>
    );
}

export default PostPage;