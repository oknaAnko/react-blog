import React from 'react';
import { Link } from 'react-router-dom';
import bemCssModules from 'bem-css-modules';
import { default as PostTitleLinkStyles } from './PostTitleLink.module.scss';

const style = bemCssModules(PostTitleLinkStyles);

const PostTitleLink = ({ userId, id, title }) => {

    return (
        <li className={style()}>
            <Link to={`/posty/${id}`} className={style('link')}>{title}</Link>
            <p className={style('text')}>Dodany przez: User {userId}</p>
        </li>
    );
}

export default PostTitleLink;