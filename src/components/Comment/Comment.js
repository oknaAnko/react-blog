import React from 'react';
import bemCssModules from 'bem-css-modules';
import { default as CommentStyles } from './Comment.module.scss';

const style = bemCssModules(CommentStyles);

const Comment = ({ email, name, body }) => {
    return (
        <li className={style()}>
            <p className={style('email')}>{email}</p>
            <h5 className={style('title')}>{name}</h5>
            <p className={style('comment-body')}>{body}</p>
        </li>
    );
}

export default Comment;