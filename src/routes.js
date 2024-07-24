import React from 'react';
import {Routes, Route} from 'react-router-dom';

//pages
import App from './App';
import Home from './pages/home/home';

export default (
    <Routes>
        <Route component={App} exact path='/asdfasdf'/>
        <Route component={Home} exact path='/' />
    </Routes>
)