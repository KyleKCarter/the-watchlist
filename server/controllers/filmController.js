require('dotenv').config();
const axios = require('axios');

const { API_ACCESS_TOKEN } = process.env

let get_films = async(req, res) => {
    const {name} = req.params;
        await axios.get(`https://api.themoviedb.org/3/search/movie?query=${name}`, {headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${API_ACCESS_TOKEN}`
        }})
            .then((films => {
                res.status(200).json(films.data)
            })
        ).catch((err => {
            console.log(err)
        }))
}

let search_film_details = async(req, res) => {
    const {id} = req.params;
    await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${API_ACCESS_TOKEN}`
    }})
        .then((details => {
            res.status(200).json(details.data)
        })
    ).catch((err => {
        console.log(err)
    }))
}

module.exports = {
    get_films,
    search_film_details
}