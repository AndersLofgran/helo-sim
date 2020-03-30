ALTER TABLE users
ALTER COLUMN email TYPE VARCHAR(100);

CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES user(id),
  post_id INT REFERENCES posts(id)
);


SELECT (id, profile_pic)
FROM users
WHERE
  email > (
    SELECT email = $1;
    FROM users
  );