DROP DATABASE IF EXISTS vinylecommerce;
CHARSET 'utf8';
CREATE DATABASE IF NOT EXISTS vinylecommerce DEFAULT CHARACTER SET utf8;
USE vinylecommerce;

CREATE TABLE category (
category_id		INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
name			VARCHAR(25) BINARY NOT NULL,
CONSTRAINT check_category_name_uc CHECK (name = UPPER(name)),
CONSTRAINT check_category_name_unique UNIQUE(name)
);

CREATE TABLE color (
color_id		INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
value			VARCHAR(25) BINARY NOT NULL,
name			VARCHAR(25) BINARY NOT NULL,
CONSTRAINT check_color_name_unique UNIQUE(name),
CONSTRAINT check_color_value_unique UNIQUE(value)
);

CREATE TABLE vinyl_type (
type_id				INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
RPM					VARCHAR(6) NOT NULL,
diameter			INTEGER NOT NULL,
avg_min_perSide		VARCHAR(6) NOT NULL,
avg_file_size_MP3	VARCHAR(25) NOT NULL,
avg_file_size_WAV	VARCHAR(25) NOT NULL
);

CREATE TABLE song (
song_id			INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
name			VARCHAR(50) BINARY NOT NULL,
lengthInMinutes	INTEGER NOT NULL,
year			INTEGER NOT NULL,
CONSTRAINT check_song_name_up CHECK (name = UPPER(name)),
CONSTRAINT check_song_name_unique UNIQUE(name)
);

CREATE TABLE genre (
genre_id		INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
name			VARCHAR(25) BINARY NOT NULL,
CONSTRAINT check_genre_name_up CHECK (name = UPPER(name)),
CONSTRAINT check_genre_name_unique UNIQUE(name)
);

CREATE TABLE coupon_rank (
rank_id			INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
name			VARCHAR(20) BINARY NOT NULL,
CONSTRAINT check_rank_name_up CHECK (name = UPPER(name)),
CONSTRAINT check_rank_name_unique UNIQUE(name)
);

CREATE TABLE artist (
artist_id			INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
color_id_2			INTEGER NOT NULL,
country_2			VARCHAR(50) NOT NULL,
fullName 			VARCHAR(50) BINARY NOT NULL,
title				VARCHAR(25) NOT NULL,
description			VARCHAR(140) NOT NULL,
sex					CHAR(1) NOT NULL,
image				VARCHAR(30) NOT NULL,
birthday			DATE NOT NULL,
distinctiveMessage 	VARCHAR(20) NOT NULL,
FOREIGN KEY(color_id_2) REFERENCES color(color_id) ON DELETE CASCADE,
CONSTRAINT check_artist_name_up CHECK (fullName = UPPER(fullName)),
CONSTRAINT check_artist_name_unique UNIQUE(fullName)
);

CREATE TABLE user (
user_id				INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
category_id_1		INTEGER NOT NULL,
firstName			VARCHAR(40) NOT NULL,
lastName			VARCHAR(40) NOT NULL,
email				VARCHAR(40) NOT NULL,
password			VARCHAR(60) NOT NULL,
image				VARCHAR(30) NOT NULL,
birthday			DATE NOT NULL,
address				VARCHAR(50) NOT NULL,
zip					INTEGER,
city				VARCHAR(50) NOT NULL,
state_1 			VARCHAR(50),
country_1 			VARCHAR(50) NOT NULL,
createdAt			DATETIME NOT NULL,
updatedAt			DATETIME NOT NULL,
FOREIGN KEY(category_id_1) REFERENCES category(category_id) ON DELETE CASCADE,
CONSTRAINT check_user_firtName_up CHECK (firstName = UPPER(firstName)),
CONSTRAINT check_user_lastName_up CHECK (lastName = UPPER(lastName)),
CONSTRAINT check_user_email_unique UNIQUE(email)
);

CREATE TABLE recordLabel (
recordLabel_id 				INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
color_id_3					INTEGER NOT NULL,
country_4					VARCHAR(50) NOT NULL,
name						VARCHAR(40) BINARY NOT NULL,
title						VARCHAR(25) NOT NULL,
founder						VARCHAR(40) NOT NULL,
distinctiveMessage 			VARCHAR(20) NOT NULL,
image						VARCHAR(30) NOT NULL,
description					VARCHAR(140) NOT NULL,
foundationYear 				INTEGER NOT NULL,
FOREIGN KEY(color_id_3) REFERENCES color(color_id) ON DELETE CASCADE,
CONSTRAINT check_recordLabel_name_up CHECK (name = UPPER(name)),
CONSTRAINT check_recordLabel_name_unique UNIQUE(name),
CONSTRAINT check_recordLabel_founder_name_up CHECK (founder = UPPER(founder)),
CONSTRAINT check_recordLabel_founder_name_unique UNIQUE(founder)
);

CREATE TABLE vinyl (
vinyl_id			INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
user_id_2			INTEGER NOT NULL,
color_id_1			INTEGER NOT NULL,
type_id_1			INTEGER NOT NULL,
recordLabel_id_1	INTEGER NOT NULL,
name				VARCHAR(50) NOT NULL,
title				VARCHAR(25) NOT NULL,
year				INTEGER NOT NULL,
description			VARCHAR(140) NOT NULL,
price				FLOAT NOT NULL,
pieces				INTEGER NOT NULL,
image				VARCHAR(30) NOT NULL,
distinctiveMessage 	VARCHAR(20) NOT NULL,
createdAt			DATETIME NOT NULL,
updatedAt			DATETIME NOT NULL,
FOREIGN KEY(color_id_1) REFERENCES color(color_id) ON DELETE CASCADE,
FOREIGN KEY(type_id_1) REFERENCES vinyl_type(type_id) ON DELETE CASCADE,
FOREIGN KEY(user_id_2) REFERENCES user(user_id) ON DELETE CASCADE,
FOREIGN KEY(recordLabel_id_1) REFERENCES recordLabel(recordLabel_id) ON DELETE CASCADE,
CONSTRAINT check_vinyl_name_up CHECK (name = UPPER(name))
);

CREATE TABLE playlist (
playlist_id 		INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
genre_id_1			INTEGER NOT NULL,
color_id_4			INTEGER NOT NULL,
name				VARCHAR(25) NOT NULL,
title 				VARCHAR(25) NOT NULL,
description			VARCHAR(140) NOT NULL,
year				INTEGER NOT NULL,
distinctiveMessage 	VARCHAR(20) NOT NULL,
image				VARCHAR(30) NOT NULL,
createdAt			DATETIME NOT NULL,
updatedAt			DATETIME NOT NULL,
FOREIGN KEY(genre_id_1) REFERENCES genre(genre_id) ON DELETE CASCADE,
FOREIGN KEY(color_id_4) REFERENCES color(color_id)
);

CREATE TABLE coupon (
coupon_id			INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
rank_id_1 			INTEGER NOT NULL,
name				VARCHAR(20) BINARY NOT NULL,
value				INTEGER NOT NULL,
active				TINYINT NOT NULL,
createdAt			DATETIME NOT NULL,
updatedAt			DATETIME NOT NULL,
FOREIGN KEY(rank_id_1) REFERENCES coupon_rank(rank_id) ON DELETE CASCADE,
CONSTRAINT check_coupon_name_up CHECK(name = UPPER(name))
);

CREATE TABLE bill (
bill_id				INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
user_id_1			INTEGER NOT NULL,
coupon_id_1			INTEGER NOT NULL,
state_2				VARCHAR(50) NOT NULL,
country_3			VARCHAR(50) NOT NULL,
date				DATETIME NOT NULL,
total				FLOAT NOT NULL,
totalWithDiscount	FLOAT NOT NULL,
address				VARCHAR(50) NOT NULL,
zip					INTEGER NOT NULL,
city 				VARCHAR(50) NOT NULL,
createdAt			DATETIME NOT NULL,
updatedAt			DATETIME NOT NULL,
FOREIGN KEY(user_id_1) REFERENCES user(user_id) ON DELETE CASCADE,
FOREIGN KEY(coupon_id_1) REFERENCES coupon(coupon_id) ON DELETE CASCADE
);

CREATE TABLE recordLabel_artists (
recordLabel_id_3	INTEGER NOT NULL,
artist_id_3			INTEGER NOT NULL,
FOREIGN KEY(recordLabel_id_3) REFERENCES recordLabel(recordLabel_id) ON DELETE CASCADE,
FOREIGN KEY(artist_id_3) REFERENCES artist(artist_id) ON DELETE CASCADE
);

CREATE TABLE vinyl_artists (
vinyl_id_2			INTEGER NOT NULL,
artist_id_2			INTEGER NOT NULL,
FOREIGN KEY(vinyl_id_2) REFERENCES vinyl(vinyl_id) ON DELETE CASCADE,
FOREIGN KEY(artist_id_2) REFERENCES artist(artist_id) ON DELETE CASCADE
);

CREATE TABLE artist_songs (
artist_id_1			INTEGER NOT NULL,
song_id_2			INTEGER NOT NULL,
FOREIGN KEY(artist_id_1) REFERENCES artist(artist_id) ON DELETE CASCADE,
FOREIGN KEY(song_id_2) REFERENCES song(song_id) ON DELETE CASCADE
);

CREATE TABLE playlist_songs (
playlist_id_1		INTEGER NOT NULL,
song_id_3			INTEGER NOT NULL,
FOREIGN KEY(playlist_id_1) REFERENCES playlist(playlist_id) ON DELETE CASCADE,
FOREIGN KEY(song_id_3) REFERENCES song(song_id) ON DELETE CASCADE
);

CREATE TABLE vinyl_songs (
vinyl_id_1			INTEGER NOT NULL,
song_id_1			INTEGER NOT NULL,
FOREIGN KEY(vinyl_id_1) REFERENCES vinyl(vinyl_id) ON DELETE CASCADE,
FOREIGN KEY(song_id_1) REFERENCES song(song_id) ON DELETE CASCADE
);

CREATE TABLE vinyls_bill (
bill_id_1		INTEGER NOT NULL,
vinyl_id_3			INTEGER NOT NULL,
FOREIGN KEY(bill_id_1) REFERENCES bill(bill_id) ON DELETE CASCADE,
FOREIGN KEY(vinyl_id_3) REFERENCES vinyl(vinyl_id) ON DELETE CASCADE
);

CREATE TABLE recordLabel_genre (
recordLabel_id_2		INTEGER NOT NULL,
genre_id_2				INTEGER NOT NULL,
FOREIGN KEY(recordLabel_id_2) REFERENCES recordLabel(recordLabel_id) ON DELETE CASCADE,
FOREIGN KEY(genre_id_2) REFERENCES genre(genre_id) ON DELETE CASCADE
);

CREATE TABLE cart (
user_id_2			INTEGER NOT NULL,
vinyl_id_4			INTEGER NOT NULL,
pieces				INTEGER NOT NULL,
FOREIGN KEY(user_id_2) REFERENCES user(user_id) ON DELETE CASCADE,
FOREIGN KEY(vinyl_id_4) REFERENCES vinyl(vinyl_id) ON DELETE CASCADE
);