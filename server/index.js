require('dotenv').config();
const express = require('express');
const cors = require('cors');
const massive = require('massive');
// const client = require('./database');
const session = require('express-session');

const app = express();

const {
    SERVER_PORT,
    CONNECTION_STRING
} = process.env

//controllers
const films = require('./controllers/filmController');

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
app.get('/films', films.get_films)
app.post('/addfilm', films.add_film)

app.listen(SERVER_PORT, () => console.log(`Running on ${SERVER_PORT}`));