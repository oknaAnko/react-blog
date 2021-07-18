import React from 'react';
import bemCssModules from 'bem-css-modules';

import { default as NotFoundPageStyles } from './NotFoundPagePage.module.scss';

const style = bemCssModules(NotFoundPageStyles);

const NotFoundPage = () => {
    return (
        <section className={style()}>
            <p className={style('text')}>Przepraszamy, ta strona nie istnieje :(</p>
        </section>
    );
}

export default NotFoundPage;