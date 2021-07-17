import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from './redux/actions';

import './App.scss';


const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    return (
        <div>This is a blog</div>
    );
}
export default App;