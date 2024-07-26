let get_films_list = (req, res) => {
    const db = req.app.get('database');
    db.get_films_list().then(list => {
        res.status(200).json(list)
    }).catch((err) => {
        console.log(err)
        res.status(500).json('Cannot process your request at this time.')
    })
}

let get_shows_list = (req, res) => {
    const db = req.app.get('database');
    db.get_shows_list().then(list => {
        res.status(200).json(list)
    }).catch((err) => {
        console.log(err)
        res.status(500).json('Cannot process your request at this time.')
    })
}

let add_film = (req, res) => {
    const db = req.app.get('database');
    const {poster_path, title, release_date, vote_average, runtime, overview} = req.body;
    const updatedWatchList = db.add_film(['film', poster_path, title, release_date, vote_average, runtime, overview])
    res.status(200).json({...updatedWatchList})
    console.log('film added');
}

let add_tv_show = (req, res) => {
    const db = req.app.get('database');
    const {poster_path, name, first_air_date, last_air_date, vote_average, number_of_episodes, overview} = req.body;
    const updatedWatchList = db.add_show(['tv', poster_path, name, first_air_date, last_air_date, vote_average, number_of_episodes, overview])
    res.status(200).json({...updatedWatchList})
    console.log('show added');
}

let remove_from_list = (req, res) => {
    const db = req.app.get('database');
    const {id} = req.params;
    console.log('hit', req.params.id)
    const removedFromList = db.remove_from_list(id);
    res.status(200).json(removedFromList);
}

module.exports = {
    get_films_list,
    get_shows_list,
    add_film,
    add_tv_show,
    remove_from_list
}