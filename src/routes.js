import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

//pages
import App from './App';
import Home from './pages/home/home';
import Films from './pages/film/films';

export default (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/films' element={<Films />} />
        </Routes>
)