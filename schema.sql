### Schema

CREATE DATABASE Oh_Snap_User_db;
USE Oh_Snap_User_db;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	user_name varchar(50) NOT NULL,
	password varchar(25) NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO users (user_name, password) VALUES ('User1','1Password');

CREATE DATABASE Oh_Snap_Pantry_db;
USE Oh_Snap_Pantry_db;

CREATE TABLE pantry
(
    -- for each item you would enter in a new row.
    id int NOT NULL AUTO_INCREMENT,
    user_id int NOT NULL,
    item varchar(255)
)

CREATE DATABASE Oh_Snap_Recipes_db;
USE Oh_Snap_Recipes_db;
CREATE TABLE recipes
(
    -- for each item you would enter in a new row.
    id int NOT NULL AUTO_INCREMENT,
    user_id int NOT NULL,
    recipe varchar(255)
)


