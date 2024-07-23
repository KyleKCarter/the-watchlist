INSERT INTO films (name, film_img, year_released, rating)
VALUES ($1, $2, $3, $4)
RETURNING *;