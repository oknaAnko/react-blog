import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { fetchPosts } from './redux/actions';

import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import NotFoundPage from './pages/NotFoundPage';

import './App.scss';


const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/posty/:id" component={PostPage} />
                    <Route path="" component={NotFoundPage} />
                </Switch>
            </div>
        </Router>
    );
}
export default App;