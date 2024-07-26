INSERT INTO watchlist (type, poster_path, title, release_date, vote_average, runtime, overview)
VALUES ($1, $2, $3, $4, $5, $6, $7)
RETURNING *;