import React from 'react';
import { useSelector } from 'react-redux';
import bemCssModules from 'bem-css-modules';

import PostTitleLink from '../../components/PostTitleLink/PostTitleLink';
import { default as HomePageStyles } from './HomePage.module.scss';

const style = bemCssModules(HomePageStyles);

const HomePage = () => {
    const isLoading = useSelector(state => state.posts.isLoading);
    const allPosts = useSelector(state => state.posts.posts);
    const isError = useSelector(state => state.posts.error);

    const postsList = allPosts.map(post => <PostTitleLink key={post.id} {...post} />);


    return (
        <section className={style()}>
            <h2 className={style('title')}>Zobacz nasze posty!</h2>
            {isLoading && <p className={style('text')}>Trwa ładowanie postów...</p>}
            <ul className={style('list')}>
                {postsList}
            </ul>
            {isError && <p className={style('text')}>Przepraszamy, nie można wyświetlić aktualności</p>}
        </section>
    );
}

export default HomePage;