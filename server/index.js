require('dotenv').config();
const express = require('express');
const cors = require('cors');
const massive = require('massive');
// const client = require('./database');
const session = require('express-session');

const app = express();

const {
    SERVER_PORT,
    CONNECTION_STRING,
    API_KEY
} = process.env

//controllers
const films = require('./controllers/filmController');
const shows = require('./controllers/showController');
const watchlist = require('./controllers/watchlistController');

//massive
massive(CONNECTION_STRING)
    .then(database => {
        app.set('database', database);
        console.log("Database Connected")
    })
    .catch(error => console.log(error));

app.use(express.json());
app.use(cors());

// ENDPOINTS
//films
app.get('/films/:name', films.get_films)
app.get('/films/search/:id', films.search_film_details)

//shows
app.get('/shows/:name', shows.get_shows)
app.get('/shows/search/:id', shows.search_show_details)

//watchlist
app.get('/watchlist/films', watchlist.get_films_list)
app.get('/watchlist/shows', watchlist.get_shows_list)
app.post('/watchlist/add_film', watchlist.add_film)
app.post('/watchlist/add_tv_show', watchlist.add_tv_show)
app.delete('/watchlist/remove/:id', watchlist.remove_from_list)

app.listen(SERVER_PORT, () => console.log(`Running on ${SERVER_PORT}`));