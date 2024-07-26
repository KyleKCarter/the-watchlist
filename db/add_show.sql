INSERT INTO watchlist (type, poster_path, name, first_air_date, last_air_date, vote_average, number_of_episodes, overview)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
RETURNING *;