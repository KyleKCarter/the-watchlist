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

let delete_film = (req, res) => {
    const db = req.app.get('database');
    const {film_id} = req.params;
    console.log('hit', req.params.film_id)
    const deletedFilm = db.delete_film(film_id);
    res.status(200).json(deletedFilm);
}

module.exports = {
    get_films,
    add_film,
    delete_film
}