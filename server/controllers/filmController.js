let get_films = (req, res) => {
    const db = req.app.get('database');
    db.get_films().then(films => {
        res.status(200).json(films)
    }).catch((err) => {
        console.log(err)
        res.status(500).json('Cannot process your request at this time.')
    })
}

let add_film = (req, res) => {
    const db = req.app.get('database');
    const {name, img, year, rating} = req.body;
    const newFilm = db.add_film([name, img, year, rating])
    res.status(200).json({...newFilm})
}

module.exports = {
    get_films,
    add_film
}