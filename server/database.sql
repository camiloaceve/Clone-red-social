Create Table users (
id SERIAL PRIMARY KEY,
username VARCHAR(255) NOT NULL,
img VARCHAR(255) NOT NULL,
goole_id INT NOT NULL UNIQUE
)

Create Table posts (
id SERIAL PRIMARY KEY,
body VARCHAR(255) NOT NULL,
author_id INT references users(id) NOT NULL
)