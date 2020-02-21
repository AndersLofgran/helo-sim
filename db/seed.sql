CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT,
  password VARCHAR(200),
  profile_pic TEXT
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(50),
    img TEXT,
    content TEXT,
    author_id INT REFERENCES users(id)
);

INSERT INTO users
(email, password, profile_pic)
VALUES
('helo@sim.com', 'helo', 'https://robohash.org/helo@sim.png'),
('dev@mountain.com', 'dev', 'https://robohash.org/dev@mountain.png');