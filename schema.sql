DROP DATABASE IF EXISTS Oh_Snap_db;
CREATE DATABASE IF NOT EXISTS Oh_Snap_db;

USE Oh_Snap_db;

CREATE TABLE users
(
	id INT NOT NULL AUTO_INCREMENT,
	user_name VARCHAR(50) NOT NULL,
	PASSWORD VARCHAR(25) NOT NULL,
	createdat DATE,
	updatedat DATE,
	PRIMARY KEY (id)
);

INSERT INTO users (user_name, PASSWORD) VALUES ('User1','1Password');


CREATE TABLE pantry
(
    -- for each item you would enter in a new row.
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    item VARCHAR(255),
    PRIMARY KEY (id)

);


CREATE TABLE recipes
(
    -- for each item you would enter in a new row.
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    recipe VARCHAR(255),
    PRIMARY KEY (id)

);