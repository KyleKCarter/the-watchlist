require('dotenv').config();
const axios = require('axios')

const { API_ACCESS_TOKEN } = process.env

let get_shows = async(req, res) => {
    const {name} = req.params;
        await axios.get(`https://api.themoviedb.org/3/search/tv?query=${name}`, {headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${API_ACCESS_TOKEN}`
        }})
            .then((shows => {
                res.status(200).json(shows.data)
            })
        ).catch((err => {
            console.log(err)
        }))
}

module.exports = {
    get_shows
}