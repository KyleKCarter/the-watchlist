const {Client} = require('pg');

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "$T@rw00d2!",
    database: "TheWatchList"
})
// app.get("/films", (req, res) => {
//     const getSTMT = 'SELECT * FROM films;'
//     client.query(getSTMT).then((res) => {
//         console.log('Data Received');
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err)
//     })
//     console.log(req.body);
//     res.send("Resopnse Received: " + req.body);
// })

// app.post("/addFilm", (req, res) => {
//     // const db = req.app.get('database')
//     const name = req.body['name'];
//     const img = req.body['img'];
//     const year = req.body['year'];
//     const rating = req.body['rating']

//     console.log("name: ", name);
//     console.log("img: ", img);
//     console.log("year: ", year);
//     console.log("rating: ", rating);

//     const insertSTMT = `INSERT INTO films (name, film_img, year_released, rating) VALUES ('${name}', '${img}', '${year}', '${rating}');`

//     client
//         .query(insertSTMT)
//         .then((response) => {
//             console.log("Data Saved")
//             console.log(response)
//         })
//         .catch((err) => {
//             console.log(err)
//         });
    
//     console.log("hit")
//     console.log(req.body);
//     res.send("Resopnse Received: " + req.body);
// })

client.connect();

module.exports = client;