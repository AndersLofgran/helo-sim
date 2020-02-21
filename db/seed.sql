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

INSERT INTO posts
(title, img, content, author_id)
VALUES
('test1', 'https://robohash.org/YZ6.png?set=set1', 'THis iS a rOboT', 1),
('test2', 'https://robohash.org/PC4.png?set=set2&size=150x150', 'THis iS a aLIen', 2);