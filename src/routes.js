import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

//pages
import App from './App';
import Home from './pages/home/home';
import Films from './pages/film/films';
import Shows from './pages/shows/shows';
import Watchlist from './pages/watchlist/watchlist';

export default (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/films' element={<Films />} />
            <Route path='/shows' element={<Shows />} />
            <Route path='/watchlist' element={<Watchlist />} />
        </Routes>
)