INSERT INTO category(name) VALUES("USER"), ('ADMIN');

INSERT INTO color(value, name) VALUES('black', 'negro'), ('yellow','amarillo'), ('strongGreen','verde fuerte'), ('red', 'rojo'), ('brown', 'café'), ('blue', 'azul');

INSERT INTO vinyl_type(RPM, diameter, avg_min_perSide, avg_file_size_MP3, avg_file_size_WAV) VALUES
('78', 7, '2', '4.8 MB', '21.2 MB'), 
('78', 10, '3.5', '8.4 MB', '37 MB'), 
('78', 12, '4.5', '10.8 MB', '47.6 MB'), 
('33 1/3', 7, '7', '16.8 MB', '74.1 MB'), 
('33 1/3', 10, '12.5', '30 MB', '132.3 MB'), 
('33 1/3', 12, '22', '52.8 MB', '232.8 MB'),
('45', 7, '4.5', '10.8 MB', '47.6 MB'), 
('45', 10, '13.5', '32.4 MB', '142.9 MB'), 
('45', 12, '15', '36 MB', '281 MB');

INSERT INTO artist(fullName, title, description, sex, image, birthday, distinctiveMessage, color_id_2, country_2) VALUES
('PURPLE DISCO MACHINE', 'PURPLE DISCO MACHINE', 'Tino Piontek grew up in the German Democratic Republic. Through his father he got to know western rock music at a young age.', 'M', 'purplediscomachine.jpg', '1980-01-01', 'MY HOUSE ->', 1, 'GERMANY'), 
('DAVID PENN', 'DAVID PENN','David Penn is one of Spain’s best-known DJs and producers of house music. In the 2000s, he collaborated often with DJ Chus.', 'M', 'davidpenn.jpg', '1972-04-17', 'THE HEAT ->', 2, 'SPAIN'),
('BABERT', 'BABERT','Babert cuenta con grandes éxitos en el mundo del house como disco lives, dance a little bit closer, entre otros.', 'M', 'babert.jpg', '1980-01-01', 'DISCO LIVES ->', 3, 'EUA'),
('SHAPESHIFTERS', 'SHAPESHIFTERS','The Shapeshifters is the current alias of English house producer Simon Marlin and a former duo comprising Marlin.', 'M', 'shapeshifters.jpg', '1980-01-01', 'I FEEL IT ->', 4, 'EUA'),
('ANGELO FERRERI', 'ANGELO FERRERI','Angelo Ferreri was born in Sicily in 1984. Since his early age, he was fascinated by the world of music.', 'M', 'angeloferreri.jpg', '1984-01-01', 'FUNK PIANO ->', 5, 'ITALY');
insert into artist (fullName, title, description, sex, image, birthday, distinctiveMessage, color_id_2, country_2) values ('AYLIN', 'house artist', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'F', 'variousArtists.jpg', '2020-12-04', 'Ir a la colección ->', 1, 'Kuwait');
insert into artist (fullName, title, description, sex, image, birthday, distinctiveMessage, color_id_2, country_2) values ('JULIETA', 'rock artist', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'F', 'variousArtists.jpg', '2020-11-06', 'Complaceme ->', 2, 'China');
insert into artist (fullName, title, description, sex, image, birthday, distinctiveMessage, color_id_2, country_2) values ('CORNELL', 'underground artist', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'F', 'variousArtists.jpg', '2021-04-04', 'Cámaras listas? ->', 3, 'Indonesia');
insert into artist (fullName, title, description, sex, image, birthday, distinctiveMessage, color_id_2, country_2) values ('LOUELLA', 'trance artist', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'M', 'variousArtists.jpg', '2021-01-03', 'vamos! ->', 4, 'China');
insert into artist (fullName, title, description, sex, image, birthday, distinctiveMessage, color_id_2, country_2) values ('LILLY', 'pop artist', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'F', 'variousArtists.jpg', '2021-06-01', 'let''s inside ->', 5, 'Poland');


INSERT INTO recordLabel(name, title, founder, distinctiveMessage, image, description, foundationYear, country_4, color_id_3) VALUES
('DEFECTED RECORDS', 'DEFECTED', 'SIMONS DUNMORE', 'We are defected ->', 'defectedrecords.jpg', 'Defected Records is a British independent record label specialising in house music recordings, compilation albums and more.', 1999, 'UK', 1),
('NERVOUS RECORDS', 'NERVOUS', 'SAM WEISS', '___ ->', 'nervousrecords.jpg', 'Nervous Records is an American record label specializing in underground house and hip hop, founded in 1990.', 1990, 'USA', 2),
('SPINNIN\' RECORDS', 'SPINNIN', 'EELKO VAN KOOTEN', 'SPIN ->', 'spinninrecords.jpg', 'Spinnin\' Records is a Dutch electronic music record label founded in 1999 by Eelko van Kooten and Roger de Graaf.', 1999, 'NETHERLANDS', 3);

INSERT INTO user(firstName, lastName, email, password, image, birthday, address, zip, city, createdAt, updatedAt, state_1, country_1, category_id_1) VALUES
('MIGUEL ANGEL', 'MOLINA BALLEZA', 'miguelballeza53@aragon.unam.mx', '$2a$12$m23cBYOmrWXrMSTtuOGVHuNfirSO4B1OTWNIwlDc6xAeDjZ9S7b.K', '1628014524733_img_.jpg', '1999-01-25', 'CALLE MIRASOLES', '57210', 'NEZAHUALCÓYOTL', NOW(), NOW(), 'ESTADO DE MÉXICO', 'MÉXICO', 1),
('ALEJANDRO', 'TRAPERO', 'alejandrotrapero@gmail.com', '$2a$12$m23cBYOmrWXrMSTtuOGVHuNfirSO4B1OTWNIwlDc6xAeDjZ9S7b.K', 'defaultUser_img_.jpg', '1998-01-01', 'CALLE ESTRELLA', '19010', 'MONTERREY', NOW(), NOW(), 'NUEVO LEÓN', 'MÉXICO', 1),
('JON', 'SNOW', 'jonsnow@gmail.com', '$2a$12$m23cBYOmrWXrMSTtuOGVHuNfirSO4B1OTWNIwlDc6xAeDjZ9S7b.K', 'defaultUser_img_.jpg', '1997-01-01', 'CALLE NOCTURNA', '10000', 'WALL', NOW(), NOW(), 'THE NORTH', 'WESTEROS', 1);
insert into user (firstName, lastName, email, password, image, birthday, address, zip, city, createdAt, updatedAt, state_1, country_1, category_id_1) values ('Noam', 'Asee', 'nasee0@deviantart.com', '$2a$12$m23cBYOmrWXrMSTtuOGVHuNfirSO4B1OTWNIwlDc6xAeDjZ9S7b.K', 'defaultUser_img_.jpg', '2021-07-22', '99245 Tony Terrace', '07505', 'Paterson', '2021-03-17 18:45:43', '2020-09-14 18:31:57', 'New Jersey', 'United States', 1);
insert into user (firstName, lastName, email, password, image, birthday, address, zip, city, createdAt, updatedAt, state_1, country_1, category_id_1) values ('Oona', 'Casserley', 'ocasserley1@netscape.com', '$2a$12$m23cBYOmrWXrMSTtuOGVHuNfirSO4B1OTWNIwlDc6xAeDjZ9S7b.K', 'defaultUser_img_.jpg', '2021-05-03', '28224 Talisman Avenue', '43231', 'Columbus', '2021-08-03 16:54:16', '2021-08-14 21:49:03', 'Ohio', 'United States', 1);
insert into user (firstName, lastName, email, password, image, birthday, address, zip, city, createdAt, updatedAt, state_1, country_1, category_id_1) values ('Erich', 'Soffe', 'esoffe2@oracle.com', '$2a$12$m23cBYOmrWXrMSTtuOGVHuNfirSO4B1OTWNIwlDc6xAeDjZ9S7b.K', 'defaultUser_img_.jpg', '2020-10-02', '14 Ryan Place', '83206', 'Pocatello', '2021-02-15 23:14:06', '2021-06-04 08:29:17', 'Idaho', 'United States', 1);
insert into user (firstName, lastName, email, password, image, birthday, address, zip, city, createdAt, updatedAt, state_1, country_1, category_id_1) values ('Ardra', 'Du Barry', 'adubarry3@miitbeian.gov.cn', '$2a$12$m23cBYOmrWXrMSTtuOGVHuNfirSO4B1OTWNIwlDc6xAeDjZ9S7b.K', 'defaultUser_img_.jpg', '2021-02-02', '8 Golden Leaf Crossing', '35242', 'Birmingham', '2020-09-05 00:03:36', '2021-05-11 22:07:16', 'Alabama', 'United States', 1);
insert into user (firstName, lastName, email, password, image, birthday, address, zip, city, createdAt, updatedAt, state_1, country_1, category_id_1) values ('Nilson', 'Cayle', 'ncayle4@cnet.com', '$2a$12$m23cBYOmrWXrMSTtuOGVHuNfirSO4B1OTWNIwlDc6xAeDjZ9S7b.K', 'defaultUser_img_.jpg', '2021-07-08', '99 Chive Circle', '24034', 'Roanoke', '2021-02-19 20:41:30', '2020-08-30 16:18:58', 'Virginia', 'United States', 1);
insert into user (firstName, lastName, email, password, image, birthday, address, zip, city, createdAt, updatedAt, state_1, country_1, category_id_1) values ('Linnell', 'Crucitti', 'lcrucitti5@google.de', '$2a$12$m23cBYOmrWXrMSTtuOGVHuNfirSO4B1OTWNIwlDc6xAeDjZ9S7b.K', 'defaultUser_img_.jpg', '2020-12-05', '2 Shelley Circle', '46867', 'Fort Wayne', '2020-09-22 01:17:10', '2020-09-15 14:52:34', 'Indiana', 'United States', 1);
insert into user (firstName, lastName, email, password, image, birthday, address, zip, city, createdAt, updatedAt, state_1, country_1, category_id_1) values ('Ashlee', 'Hackleton', 'ahackleton6@psu.edu', '$2a$12$m23cBYOmrWXrMSTtuOGVHuNfirSO4B1OTWNIwlDc6xAeDjZ9S7b.K', 'defaultUser_img_.jpg', '2021-02-10', '11453 Eastwood Court', '95194', 'San Jose', '2021-08-05 12:46:56', '2021-01-09 03:46:33', 'California', 'United States', 1);
insert into user (firstName, lastName, email, password, image, birthday, address, zip, city, createdAt, updatedAt, state_1, country_1, category_id_1) values ('Melody', 'Cordey', 'mcordey7@webmd.com', '$2a$12$m23cBYOmrWXrMSTtuOGVHuNfirSO4B1OTWNIwlDc6xAeDjZ9S7b.K', 'defaultUser_img_.jpg', '2020-11-20', '68 Merchant Road', '66606', 'Topeka', '2021-03-28 16:10:04', '2020-11-05 02:04:47', 'Kansas', 'United States', 1);
insert into user (firstName, lastName, email, password, image, birthday, address, zip, city, createdAt, updatedAt, state_1, country_1, category_id_1) values ('Markus', 'Tift', 'mtift8@tumblr.com', '$2a$12$m23cBYOmrWXrMSTtuOGVHuNfirSO4B1OTWNIwlDc6xAeDjZ9S7b.K', 'defaultUser_img_.jpg', '2021-02-20', '2814 Dayton Avenue', '40581', 'Lexington', '2020-12-29 15:41:06', '2021-02-10 07:52:41', 'Kentucky', 'United States', 1);
insert into user (firstName, lastName, email, password, image, birthday, address, zip, city, createdAt, updatedAt, state_1, country_1, category_id_1) values ('Cornie', 'Adacot', 'cadacot9@vkontakte.ru', '$2a$12$m23cBYOmrWXrMSTtuOGVHuNfirSO4B1OTWNIwlDc6xAeDjZ9S7b.K', 'defaultUser_img_.jpg', '2021-03-08', '91 Tennyson Lane', '33763', 'Clearwater', '2021-02-16 11:12:33', '2020-10-11 10:00:52', 'Florida', 'United States', 1);
insert into user (firstName, lastName, email, password, image, birthday, address, zip, city, createdAt, updatedAt, state_1, country_1, category_id_1) values ('Gertrude', 'Meharry', 'gmeharrya@bizjournals.com', '$2a$12$m23cBYOmrWXrMSTtuOGVHuNfirSO4B1OTWNIwlDc6xAeDjZ9S7b.K', 'defaultUser_img_.jpg', '2021-01-29', '9710 Ludington Court', '77223', 'Houston', '2021-05-16 20:02:53', '2020-09-02 11:00:31', 'Texas', 'United States', 1);
insert into user (firstName, lastName, email, password, image, birthday, address, zip, city, createdAt, updatedAt, state_1, country_1, category_id_1) values ('Vincents', 'MacAnelley', 'vmacanelleyb@geocities.com', '$2a$12$m23cBYOmrWXrMSTtuOGVHuNfirSO4B1OTWNIwlDc6xAeDjZ9S7b.K', 'defaultUser_img_.jpg', '2020-09-30', '45 Kensington Place', '35895', 'Huntsville', '2021-01-23 21:32:40', '2021-05-18 23:51:23', 'Alabama', 'United States', 1);
insert into user (firstName, lastName, email, password, image, birthday, address, zip, city, createdAt, updatedAt, state_1, country_1, category_id_1) values ('Regina', 'Crossland', 'rcrosslandc@etsy.com', '$2a$12$m23cBYOmrWXrMSTtuOGVHuNfirSO4B1OTWNIwlDc6xAeDjZ9S7b.K', 'defaultUser_img_.jpg', '2020-09-08', '828 Redwing Circle', '46207', 'Indianapolis', '2021-08-04 05:15:36', '2021-06-29 18:11:44', 'Indiana', 'United States', 1);
insert into user (firstName, lastName, email, password, image, birthday, address, zip, city, createdAt, updatedAt, state_1, country_1, category_id_1) values ('Dasya', 'Rentenbeck', 'drentenbeckd@artisteer.com', '$2a$12$m23cBYOmrWXrMSTtuOGVHuNfirSO4B1OTWNIwlDc6xAeDjZ9S7b.K', 'defaultUser_img_.jpg', '2020-11-23', '852 Fordem Point', '92145', 'San Diego', '2020-11-21 07:42:02', '2021-06-10 05:08:10', 'California', 'United States', 1);
insert into user (firstName, lastName, email, password, image, birthday, address, zip, city, createdAt, updatedAt, state_1, country_1, category_id_1) values ('Ardis', 'Heskins', 'aheskinse@lulu.com', '$2a$12$m23cBYOmrWXrMSTtuOGVHuNfirSO4B1OTWNIwlDc6xAeDjZ9S7b.K', 'defaultUser_img_.jpg', '2020-11-11', '329 Welch Place', '94126', 'San Francisco', '2020-12-19 09:12:11', '2020-08-20 07:35:59', 'California', 'United States', 1);
insert into user (firstName, lastName, email, password, image, birthday, address, zip, city, createdAt, updatedAt, state_1, country_1, category_id_1) values ('Bonnee', 'Sappell', 'bsappellf@blog.com', '$2a$12$m23cBYOmrWXrMSTtuOGVHuNfirSO4B1OTWNIwlDc6xAeDjZ9S7b.K', 'defaultUser_img_.jpg', '2021-03-05', '082 Mariners Cove Center', '16565', 'Erie', '2021-02-27 23:58:02', '2020-11-27 09:13:40', 'Pennsylvania', 'United States', 1);
insert into user (firstName, lastName, email, password, image, birthday, address, zip, city, createdAt, updatedAt, state_1, country_1, category_id_1) values ('Robinett', 'Wibrew', 'rwibrewg@army.mil', '$2a$12$m23cBYOmrWXrMSTtuOGVHuNfirSO4B1OTWNIwlDc6xAeDjZ9S7b.K', 'defaultUser_img_.jpg', '2020-11-29', '0427 Buena Vista Park', '38197', 'Memphis', '2020-10-16 06:18:12', '2021-07-19 09:57:26', 'Tennessee', 'United States', 1);

insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Krystal', 'house title', 2002, 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 74.93, 1, 'strictlyrhythm.jpg', 'Ir a la colección ->', '2021-05-29 06:01:40', '2021-05-15 11:09:06', 1, 1, 1, 1);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Arielle', 'rock title', 2009, 'vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis.', 37.1, 5, 'pleasepleaseme.jpg', 'Complaceme ->', '2021-07-11 19:31:22', '2021-05-29 13:15:22', 2, 2, 2, 2);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Emmi', 'underground title', 2008, 'dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.', 95.01, 1, 'greenvelvet.jpg', 'Cámaras listas? ->', '2021-08-13 14:41:28', '2021-06-04 20:16:53', 3, 3, 3, 3);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Aura', 'trance title', 2010, 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 21.69, 2, 'rhcpRedBlood.jpg', 'vamos! ->', '2021-05-07 21:22:04', '2021-06-23 03:51:52', 4, 4, 1, 4);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Pete', 'pop title', 2009, 'consectetuer adipiscing elit. Proin risus. Praesent lectus.', 38.07, 1, 'michaelJacksonOffTheWall.jpg', 'let''s inside ->', '2021-07-31 02:08:21', '2021-05-05 12:00:25', 5, 5, 2, 5);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Tommy', 'spanish rock title', 2007, 'nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 42.41, 4, 'nirvanaNevermind.jpg', 'we go! ->', '2021-06-06 09:16:54', '2021-07-29 07:48:18', 6, 6, 3, 6);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Symon', 'house title', 2007, 'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 26.89, 1, 'michaelJacksonThriller.jpg', 'let''s go ->', '2021-05-04 21:26:17', '2021-05-16 07:04:12', 1, 7, 1, 7);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Chev', 'rock title', 2003, 'nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 62.01, 5, 'beatlesYellowSubmarine.jpg', 'Ir a la colección ->', '2021-06-05 13:31:35', '2021-06-10 21:41:46', 2, 8, 2, 8);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Robbie', 'underground title', 2010, 'nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 44.75, 4, 'weezerGreen.jpg', 'Complaceme ->', '2021-06-07 11:05:55', '2021-07-18 01:01:55', 3, 9, 3, 9);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Jodie', 'trance title', 2011, 'Vivamus in felis eu sapien cursus vestibulum.', 92.9, 5, 'ledZeppelinMothership.jpg', 'Cámaras listas? ->', '2021-07-20 14:17:15', '2021-05-23 08:52:13', 4, 1, 1, 10);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Teodor', 'pop title', 1999, 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 37.01, 5, 'creedenceClearWater.jpg', 'vamos! ->', '2021-08-08 13:21:19', '2021-06-12 02:23:18', 5, 2, 2, 11);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Thatcher', 'spanish rock title', 2006, 'In congue. Etiam justo. Etiam pretium iaculis justo.', 58.08, 2, 'wisdomeOffTheWall.jpg', 'let''s inside ->', '2021-07-24 06:41:17', '2021-07-23 01:25:41', 6, 3, 3, 12);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Issiah', 'house title', 1992, 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.', 33.26, 5, 'strictlyrhythm.jpg', 'we go! ->', '2021-05-02 03:07:44', '2021-06-10 18:28:33', 1, 4, 1, 13);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Alonzo', 'rock title', 2011, 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 53.83, 1, 'pleasepleaseme.jpg', 'let''s go ->', '2021-06-04 11:27:18', '2021-08-12 03:21:29', 2, 5, 2, 14);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Simonette', 'underground title', 2011, 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 83.07, 2, 'greenvelvet.jpg', 'Ir a la colección ->', '2021-07-17 02:40:23', '2021-07-14 10:42:07', 3, 6, 3, 15);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Bekki', 'trance title', 1967, 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus', 94.53, 4, 'rhcpRedBlood.jpg', 'Complaceme ->', '2021-05-04 22:06:34', '2021-08-07 22:50:15', 4, 7, 1, 16);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Cosimo', 'pop title', 2004, 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis', 85.95, 2, 'michaelJacksonOffTheWall.jpg', 'Cámaras listas? ->', '2021-06-15 13:11:18', '2021-05-15 08:48:30', 5, 8, 2, 17);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Catharine', 'spanish rock title', 1986, 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.', 9.54, 1, 'nirvanaNevermind.jpg', 'vamos! ->', '2021-06-16 22:30:39', '2021-07-04 03:46:37', 6, 9, 3, 18);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Laurens', 'house title', 2003, 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque,', 60.61, 5, 'michaelJacksonThriller.jpg', 'let''s inside ->', '2021-05-12 00:11:43', '2021-06-21 13:00:45', 1, 1, 1, 19);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Nataniel', 'rock title', 1996, 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu', 60.42, 2, 'beatlesYellowSubmarine.jpg', 'we go! ->', '2021-06-30 18:37:38', '2021-07-27 22:08:59', 2, 2, 2, 20);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Heinrik', 'underground title', 1996, 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 20.41, 4, 'weezerGreen.jpg', 'let''s go ->', '2021-07-20 07:46:35', '2021-05-16 15:31:57', 3, 3, 3, 1);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Opal', 'trance title', 1995, 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet', 1.87, 5, 'ledZeppelinMothership.jpg', 'Ir a la colección ->', '2021-06-25 03:03:22', '2021-07-29 01:37:40', 4, 4, 1, 2);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Bambie', 'pop title', 1999, 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 7.05, 4, 'creedenceClearWater.jpg', 'Complaceme ->', '2021-06-06 17:58:15', '2021-05-21 03:58:47', 5, 5, 2, 3);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Goddard', 'spanish rock title', 1984, 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula', 86.06, 2, 'wisdomeOffTheWall.jpg', 'Cámaras listas? ->', '2021-05-13 07:17:00', '2021-07-09 08:33:22', 6, 6, 3, 4);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Bord', 'house title', 2003, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 4.41, 4, 'strictlyrhythm.jpg', 'vamos! ->', '2021-07-05 17:13:27', '2021-07-07 16:03:32', 1, 7, 1, 5);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Lilas', 'rock title', 2010, 'primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.', 48.33, 1, 'pleasepleaseme.jpg', 'let''s inside ->', '2021-06-01 06:02:39', '2021-05-18 17:32:14', 2, 8, 2, 6);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Joannes', 'underground title', 1985, 'Aenean fermentum. Donec ut mauris eget massa tempor convallis.', 86.04, 5, 'greenvelvet.jpg', 'we go! ->', '2021-05-15 01:52:51', '2021-05-29 10:53:38', 3, 9, 3, 7);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Kanya', 'trance title', 2010, 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi,', 87.84, 5, 'rhcpRedBlood.jpg', 'let''s go ->', '2021-07-30 10:42:05', '2021-05-03 14:13:03', 4, 1, 1, 8);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Raviv', 'pop title', 1999, 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 88.01, 2, 'michaelJacksonOffTheWall.jpg', 'Ir a la colección ->', '2021-08-04 22:23:18', '2021-07-19 12:32:41', 5, 2, 2, 9);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Gisele', 'spanish rock title', 2004, 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi', 91.96, 2, 'nirvanaNevermind.jpg', 'Complaceme ->', '2021-06-24 14:30:13', '2021-06-19 00:35:09', 6, 3, 3, 10);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Lonnard', 'house title', 1986, 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 16.6, 4, 'michaelJacksonThriller.jpg', 'Cámaras listas? ->', '2021-07-25 07:05:46', '2021-07-16 07:43:12', 1, 4, 1, 11);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Giselle', 'rock title', 1996, 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien', 63.98, 4, 'beatlesYellowSubmarine.jpg', 'vamos! ->', '2021-06-29 12:18:08', '2021-08-15 09:37:58', 2, 5, 2, 12);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Arty', 'underground title', 1990, 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.', 4.63, 5, 'weezerGreen.jpg', 'let''s inside ->', '2021-05-18 10:08:02', '2021-07-10 14:23:07', 3, 6, 3, 13);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Ema', 'trance title', 2005, 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis', 47.44, 4, 'ledZeppelinMothership.jpg', 'we go! ->', '2021-08-12 06:46:17', '2021-05-08 06:36:06', 4, 7, 1, 14);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Ezri', 'pop title', 2001, 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.', 57.73, 5, 'creedenceClearWater.jpg', 'let''s go ->', '2021-06-24 12:36:04', '2021-05-09 05:14:11', 5, 8, 2, 15);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Chris', 'spanish rock title', 1999, 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 66.09, 3, 'wisdomeOffTheWall.jpg', 'Ir a la colección ->', '2021-07-26 20:42:43', '2021-07-07 23:38:43', 6, 9, 3, 16);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Jeffie', 'house title', 1986, 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio', 20.87, 3, 'strictlyrhythm.jpg', 'Complaceme ->', '2021-06-13 22:20:05', '2021-07-28 19:03:37', 1, 1, 1, 17);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Teresita', 'rock title', 1988, 'Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi', 29.28, 1, 'pleasepleaseme.jpg', 'Cámaras listas? ->', '2021-05-01 13:38:16', '2021-08-08 21:53:45', 2, 2, 2, 18);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Salvatore', 'underground title', 2011, 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. ', 10.26, 2, 'greenvelvet.jpg', 'vamos! ->', '2021-05-14 07:34:27', '2021-06-25 22:38:56', 3, 3, 3, 19);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Esther', 'trance title', 1993, 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.', 37.01, 1, 'rhcpRedBlood.jpg', 'let''s inside ->', '2021-08-15 10:18:37', '2021-08-02 05:03:37', 4, 4, 1, 20);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Arri', 'pop title', 1986, 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis', 2.54, 1, 'michaelJacksonOffTheWall.jpg', 'we go! ->', '2021-05-26 03:14:03', '2021-05-10 14:40:42', 5, 5, 2, 1);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Rudolph', 'spanish rock title', 1987, 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 5.03, 1, 'nirvanaNevermind.jpg', 'let''s go ->', '2021-08-14 03:18:16', '2021-07-16 02:37:19', 6, 6, 3, 2);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Chelsae', 'house title', 1998, 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.', 38.74, 5, 'michaelJacksonThriller.jpg', 'Ir a la colección ->', '2021-07-10 16:24:43', '2021-06-02 13:01:01', 1, 7, 1, 3);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Nicolina', 'rock title', 2004, 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.', 38.71, 1, 'beatlesYellowSubmarine.jpg', 'Complaceme ->', '2021-07-25 21:32:01', '2021-07-27 16:22:02', 2, 8, 2, 4);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Emmanuel', 'underground title', 2004, 'Fusce consequat. Nulla nisl. Nunc nisl.', 84.14, 5, 'weezerGreen.jpg', 'Cámaras listas? ->', '2021-07-08 16:13:39', '2021-05-11 11:57:11', 3, 9, 3, 5);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Minnie', 'trance title', 2007, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 49.94, 3, 'ledZeppelinMothership.jpg', 'vamos! ->', '2021-05-21 10:58:42', '2021-06-13 21:05:38', 4, 1, 1, 6);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Shay', 'pop title', 2006, 'consectetuer eget, rutrum at, lorem.', 72.43, 3, 'creedenceClearWater.jpg', 'let''s inside ->', '2021-06-14 00:59:17', '2021-07-23 19:11:34', 5, 2, 2, 7);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Elisha', 'spanish rock title', 2002, 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 86.81, 4, 'wisdomeOffTheWall.jpg', 'we go! ->', '2021-07-26 02:45:25', '2021-08-03 18:22:31', 6, 3, 3, 8);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Aristotle', 'house title', 2011, 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 80.52, 1, 'strictlyrhythm.jpg', 'let''s go ->', '2021-05-24 20:22:20', '2021-08-11 22:02:51', 1, 4, 1, 9);
insert into vinyl (name, title, year, description, price, pieces, image, distinctiveMessage, createdAt, updatedAt, color_id_1, type_id_1, recordLabel_id_1, user_id_2) values ('Savina', 'rock title', 2004, 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 49.09, 3, 'pleasepleaseme.jpg', 'Ir a la colección ->', '2021-05-29 06:16:34', '2021-08-09 17:13:17', 2, 5, 2, 10);

insert into recordLabel_artists (recordLabel_id_3, artist_id_3) values (1, 1);
insert into recordLabel_artists (recordLabel_id_3, artist_id_3) values (2, 2);
insert into recordLabel_artists (recordLabel_id_3, artist_id_3) values (3, 3);
insert into recordLabel_artists (recordLabel_id_3, artist_id_3) values (1, 4);
insert into recordLabel_artists (recordLabel_id_3, artist_id_3) values (2, 5);
insert into recordLabel_artists (recordLabel_id_3, artist_id_3) values (3, 6);
insert into recordLabel_artists (recordLabel_id_3, artist_id_3) values (1, 7);
insert into recordLabel_artists (recordLabel_id_3, artist_id_3) values (2, 8);
insert into recordLabel_artists (recordLabel_id_3, artist_id_3) values (3, 9);
insert into recordLabel_artists (recordLabel_id_3, artist_id_3) values (1, 10);

insert into vinyl_artists (vinyl_id_2, artist_id_2) values (1, 1);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (2, 2);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (3, 3);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (4, 4);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (5, 5);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (6, 6);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (7, 7);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (8, 8);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (9, 9);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (10, 10);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (11, 1);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (12, 2);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (13, 3);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (14, 4);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (15, 5);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (16, 6);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (17, 7);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (18, 8);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (19, 9);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (20, 10);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (21, 1);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (22, 2);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (23, 3);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (24, 4);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (25, 5);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (26, 6);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (27, 7);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (28, 8);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (29, 9);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (30, 10);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (31, 1);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (32, 2);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (33, 3);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (34, 4);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (35, 5);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (36, 6);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (37, 7);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (38, 8);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (39, 9);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (40, 10);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (41, 1);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (42, 2);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (43, 3);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (44, 4);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (45, 5);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (46, 6);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (47, 7);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (48, 8);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (49, 9);
insert into vinyl_artists (vinyl_id_2, artist_id_2) values (50, 10);

insert into song (name, lengthInMinutes, year) values ('CHRISTIANE DORET', 14, 1987);
insert into song (name, lengthInMinutes, year) values ('TRUDEY KLEMKE', 11, 2004);
insert into song (name, lengthInMinutes, year) values ('DINO PUDSALL', 17, 2011);
insert into song (name, lengthInMinutes, year) values ('WINNIFRED PUFFETT', 5, 1993);
insert into song (name, lengthInMinutes, year) values ('ANNABELL ROBBINS', 11, 2003);
insert into song (name, lengthInMinutes, year) values ('ABRAHAN CARDUS', 7, 1996);
insert into song (name, lengthInMinutes, year) values ('SALLYANN ODDY', 17, 2004);
insert into song (name, lengthInMinutes, year) values ('GUINNA WOODINGTON', 11, 2001);
insert into song (name, lengthInMinutes, year) values ('DAYLE LOWMASS', 4, 1988);
insert into song (name, lengthInMinutes, year) values ('GUGLIELMA ACEDO', 12, 2003);
insert into song (name, lengthInMinutes, year) values ('ODELE BOAR', 9, 2001);
insert into song (name, lengthInMinutes, year) values ('FRANCESCA COOLEY', 8, 2011);
insert into song (name, lengthInMinutes, year) values ('BENNY JOSEPHOFF', 4, 2006);
insert into song (name, lengthInMinutes, year) values ('ENRIQUETA DIETZLER', 4, 1987);
insert into song (name, lengthInMinutes, year) values ('GOLDINA VAN DER HOVEN', 12, 1989);
insert into song (name, lengthInMinutes, year) values ('HUBERT ENDERLE', 3, 1998);
insert into song (name, lengthInMinutes, year) values ('OLIVIE RIDDLER', 9, 2004);
insert into song (name, lengthInMinutes, year) values ('RUDDIE DILS', 8, 2006);
insert into song (name, lengthInMinutes, year) values ('MATTI PEPYE', 10, 2010);
insert into song (name, lengthInMinutes, year) values ('UMBERTO COBB', 17, 1993);
insert into song (name, lengthInMinutes, year) values ('ARIEL HADWEN', 7, 1992);
insert into song (name, lengthInMinutes, year) values ('EM BOWSHIRE', 13, 1965);
insert into song (name, lengthInMinutes, year) values ('RANDENE BINYON', 3, 2002);
insert into song (name, lengthInMinutes, year) values ('GLADI CUTTLE', 5, 2012);
insert into song (name, lengthInMinutes, year) values ('AL BAREFOOT', 15, 2007);
insert into song (name, lengthInMinutes, year) values ('RONA GODSIL', 2, 1992);
insert into song (name, lengthInMinutes, year) values ('KAROLY MCNAY', 5, 1996);
insert into song (name, lengthInMinutes, year) values ('SIG ERTEL', 8, 2004);
insert into song (name, lengthInMinutes, year) values ('BERTY GARLAND', 11, 2012);
insert into song (name, lengthInMinutes, year) values ('RONA BASILE', 11, 1996);
insert into song (name, lengthInMinutes, year) values ('CAMMY EYE', 11, 1998);
insert into song (name, lengthInMinutes, year) values ('ESTEL CUPPLEDITCH', 6, 1990);
insert into song (name, lengthInMinutes, year) values ('BIRK MCGAHERN', 4, 1998);
insert into song (name, lengthInMinutes, year) values ('TADIO CORSON', 9, 1997);
insert into song (name, lengthInMinutes, year) values ('DEMETRIS LYON', 5, 2012);
insert into song (name, lengthInMinutes, year) values ('GARRET DANELET', 3, 1999);
insert into song (name, lengthInMinutes, year) values ('TRIPP TAFFS', 17, 2009);
insert into song (name, lengthInMinutes, year) values ('WILBERT PLOUGHWRIGHT', 15, 1992);
insert into song (name, lengthInMinutes, year) values ('ELLADINE GEORGINS', 15, 1985);
insert into song (name, lengthInMinutes, year) values ('BETTE GATCHEL', 7, 2006);
insert into song (name, lengthInMinutes, year) values ('DMITRI MONTROSE', 3, 2000);
insert into song (name, lengthInMinutes, year) values ('DALIA GRIX', 17, 1995);
insert into song (name, lengthInMinutes, year) values ('EMILE JOSELIN', 16, 2010);
insert into song (name, lengthInMinutes, year) values ('KALLY HANBURY', 11, 1990);
insert into song (name, lengthInMinutes, year) values ('FEDERICO BROKENSHAW', 12, 1992);
insert into song (name, lengthInMinutes, year) values ('CORRINA COLLINGWORTH', 15, 2006);
insert into song (name, lengthInMinutes, year) values ('JAZMIN FREDDI', 8, 1965);
insert into song (name, lengthInMinutes, year) values ('DULCINEA YERRALL', 13, 2000);
insert into song (name, lengthInMinutes, year) values ('RONDA MAPLEDOORE', 5, 2002);
insert into song (name, lengthInMinutes, year) values ('CHIQUIA HADDLESTON', 7, 2000);

insert into artist_songs (artist_id_1, song_id_2) values (1, 1);
insert into artist_songs (artist_id_1, song_id_2) values (2, 2);
insert into artist_songs (artist_id_1, song_id_2) values (3, 3);
insert into artist_songs (artist_id_1, song_id_2) values (4, 4);
insert into artist_songs (artist_id_1, song_id_2) values (5, 5);
insert into artist_songs (artist_id_1, song_id_2) values (6, 6);
insert into artist_songs (artist_id_1, song_id_2) values (7, 7);
insert into artist_songs (artist_id_1, song_id_2) values (8, 8);
insert into artist_songs (artist_id_1, song_id_2) values (9, 9);
insert into artist_songs (artist_id_1, song_id_2) values (10, 10);
insert into artist_songs (artist_id_1, song_id_2) values (1, 11);
insert into artist_songs (artist_id_1, song_id_2) values (2, 12);
insert into artist_songs (artist_id_1, song_id_2) values (3, 13);
insert into artist_songs (artist_id_1, song_id_2) values (4, 14);
insert into artist_songs (artist_id_1, song_id_2) values (5, 15);
insert into artist_songs (artist_id_1, song_id_2) values (6, 16);
insert into artist_songs (artist_id_1, song_id_2) values (7, 17);
insert into artist_songs (artist_id_1, song_id_2) values (8, 18);
insert into artist_songs (artist_id_1, song_id_2) values (9, 19);
insert into artist_songs (artist_id_1, song_id_2) values (10, 20);
insert into artist_songs (artist_id_1, song_id_2) values (1, 21);
insert into artist_songs (artist_id_1, song_id_2) values (2, 22);
insert into artist_songs (artist_id_1, song_id_2) values (3, 23);
insert into artist_songs (artist_id_1, song_id_2) values (4, 24);
insert into artist_songs (artist_id_1, song_id_2) values (5, 25);
insert into artist_songs (artist_id_1, song_id_2) values (6, 26);
insert into artist_songs (artist_id_1, song_id_2) values (7, 27);
insert into artist_songs (artist_id_1, song_id_2) values (8, 28);
insert into artist_songs (artist_id_1, song_id_2) values (9, 29);
insert into artist_songs (artist_id_1, song_id_2) values (10, 30);
insert into artist_songs (artist_id_1, song_id_2) values (1, 31);
insert into artist_songs (artist_id_1, song_id_2) values (2, 32);
insert into artist_songs (artist_id_1, song_id_2) values (3, 33);
insert into artist_songs (artist_id_1, song_id_2) values (4, 34);
insert into artist_songs (artist_id_1, song_id_2) values (5, 35);
insert into artist_songs (artist_id_1, song_id_2) values (6, 36);
insert into artist_songs (artist_id_1, song_id_2) values (7, 37);
insert into artist_songs (artist_id_1, song_id_2) values (8, 38);
insert into artist_songs (artist_id_1, song_id_2) values (9, 39);
insert into artist_songs (artist_id_1, song_id_2) values (10, 40);
insert into artist_songs (artist_id_1, song_id_2) values (1, 41);
insert into artist_songs (artist_id_1, song_id_2) values (2, 42);
insert into artist_songs (artist_id_1, song_id_2) values (3, 43);
insert into artist_songs (artist_id_1, song_id_2) values (4, 44);
insert into artist_songs (artist_id_1, song_id_2) values (5, 45);
insert into artist_songs (artist_id_1, song_id_2) values (6, 46);
insert into artist_songs (artist_id_1, song_id_2) values (7, 47);
insert into artist_songs (artist_id_1, song_id_2) values (8, 48);
insert into artist_songs (artist_id_1, song_id_2) values (9, 49);
insert into artist_songs (artist_id_1, song_id_2) values (10, 50);

insert into genre(name) values('HOUSE'), 
('ROCK EN ESPAÑOL'), 
('UNDERGROUND'), 
('DANCE'), 
('LATIN'), 
('REGGAE'), 
('ROCK EN INGLÉS'), 
('METAL'), 
('TRANCE'), 
('BALADA');

insert into playlist (name, title, description, year, distinctiveMessage, image, createdAt, updatedAt, genre_id_1, color_id_4) values ('BYTECARD', 'house playlist', 'vestibulum sit amet. cursus id. turpis. Integer aliquet. massa id lobortis convallis.', 2007, 'Ir a la playlist ->', 'playlist1.jpg', '2021-08-08 00:00:11', '2021-08-07 08:00:19', 1, 1);
insert into playlist (name, title, description, year, distinctiveMessage, image, createdAt, updatedAt, genre_id_1, color_id_4) values ('QUO LUX', 'rock playlist', 'vestibulum sit amet. cursus id. turpis. Integer aliquet. massa id lobortis convallis.', 2002, 'Playlist ¬¬ ->', 'playlist2.jpg', '2021-05-20 20:34:32', '2021-08-14 00:00:54', 2, 2);
insert into playlist (name, title, description, year, distinctiveMessage, image, createdAt, updatedAt, genre_id_1, color_id_4) values ('PANNIER', 'underground playlist', 'vestibulum sit amet. cursus id. turpis. Integer aliquet. massa id lobortis convallis.', 1993, 'Let''s see ->', 'playlist3.jpg', '2021-05-21 02:52:10', '2021-08-05 10:12:14', 3, 3);
insert into playlist (name, title, description, year, distinctiveMessage, image, createdAt, updatedAt, genre_id_1, color_id_4) values ('KONKLUX', 'trance playlist', 'vestibulum sit amet. cursus id. turpis. Integer aliquet. massa id lobortis convallis.', 2008, 'vamos! ->', 'playlist4.jpg', '2021-07-06 09:02:03', '2021-07-26 08:39:16', 4, 4);
insert into playlist (name, title, description, year, distinctiveMessage, image, createdAt, updatedAt, genre_id_1, color_id_4) values ('LOTLUX', 'pop playlist', 'vestibulum sit amet. cursus id. turpis. Integer aliquet. massa id lobortis convallis.', 2002, 'let''s inside ->', 'playlist5.jpg', '2021-08-07 23:16:07', '2021-05-16 18:54:42', 5, 5);
insert into playlist (name, title, description, year, distinctiveMessage, image, createdAt, updatedAt, genre_id_1, color_id_4) values ('HOLDLAMIS', 'spanish rock playlist', 'vestibulum sit amet. cursus id. turpis. Integer aliquet. massa id lobortis convallis.', 2011, 'we go! ->', 'playlist6.jpg', '2021-07-14 14:29:44', '2021-08-06 14:47:00', 6, 6);
insert into playlist (name, title, description, year, distinctiveMessage, image, createdAt, updatedAt, genre_id_1, color_id_4) values ('REDHOLD', 'house playlist', 'vestibulum sit amet. cursus id. turpis. Integer aliquet. massa id lobortis convallis.', 2000, 'let''s go ->', 'playlist7.jpg', '2021-07-20 14:18:32', '2021-08-09 16:19:08', 7, 1);
insert into playlist (name, title, description, year, distinctiveMessage, image, createdAt, updatedAt, genre_id_1, color_id_4) values ('HATITY', 'rock playlist', 'vestibulum sit amet. cursus id. turpis. Integer aliquet. massa id lobortis convallis.', 2005, 'Ir a la playlist ->', 'playlist8.jpg', '2021-08-13 21:38:00', '2021-06-03 00:43:02', 8, 2);
insert into playlist (name, title, description, year, distinctiveMessage, image, createdAt, updatedAt, genre_id_1, color_id_4) values ('TAMPFLEX', 'underground playlist', 'vestibulum sit amet. cursus id. turpis. Integer aliquet. massa id lobortis convallis.', 1998, 'Playlist ¬¬ ->', 'playlist9.jpg', '2021-07-01 13:51:57', '2021-05-14 19:56:53', 9, 3);
insert into playlist (name, title, description, year, distinctiveMessage, image, createdAt, updatedAt, genre_id_1, color_id_4) values ('TRIPPLEDEX', 'trance playlist', 'vestibulum sit amet. cursus id. turpis. Integer aliquet. massa id lobortis convallis.', 2000, 'Let''s see ->', 'playlist10.jpg', '2021-05-16 09:09:58', '2021-05-08 18:51:47', 10, 4);
insert into playlist (name, title, description, year, distinctiveMessage, image, createdAt, updatedAt, genre_id_1, color_id_4) values ('TIN', 'pop playlist', 'vestibulum sit amet. cursus id. turpis. Integer aliquet. massa id lobortis convallis.', 2000, 'vamos! ->', 'playlist11.jpg', '2021-07-28 09:44:11', '2021-06-26 14:23:11', 1, 5);
insert into playlist (name, title, description, year, distinctiveMessage, image, createdAt, updatedAt, genre_id_1, color_id_4) values ('STIM', 'spanish rock playlist', 'vestibulum sit amet. cursus id. turpis. Integer aliquet. massa id lobortis convallis.', 2010, 'let''s inside ->', 'playlist12.jpg', '2021-05-17 23:36:24', '2021-05-11 13:34:28', 2, 6);
insert into playlist (name, title, description, year, distinctiveMessage, image, createdAt, updatedAt, genre_id_1, color_id_4) values ('VERIBET', 'house playlist', 'vestibulum sit amet. cursus id. turpis. Integer aliquet. massa id lobortis convallis.', 1997, 'we go! ->', 'playlist1.jpg', '2021-05-22 02:49:35', '2021-06-11 00:28:35', 3, 1);
insert into playlist (name, title, description, year, distinctiveMessage, image, createdAt, updatedAt, genre_id_1, color_id_4) values ('OTCOM', 'rock playlist', 'vestibulum sit amet. cursus id. turpis. Integer aliquet. massa id lobortis convallis.', 1999, 'let''s go ->', 'playlist2.jpg', '2021-07-14 01:29:43', '2021-06-05 11:57:17', 4, 2);
insert into playlist (name, title, description, year, distinctiveMessage, image, createdAt, updatedAt, genre_id_1, color_id_4) values ('LOTLUX', 'underground playlist', 'vestibulum sit amet. cursus id. turpis. Integer aliquet. massa id lobortis convallis.', 2006, 'Ir a la playlist ->', 'playlist3.jpg', '2021-06-14 22:46:38', '2021-05-21 17:45:59', 5, 3);
insert into playlist (name, title, description, year, distinctiveMessage, image, createdAt, updatedAt, genre_id_1, color_id_4) values ('TRESOM', 'trance playlist', 'vestibulum sit amet. cursus id. turpis. Integer aliquet. massa id lobortis convallis.', 2001, 'Playlist ¬¬ ->', 'playlist4.jpg', '2021-06-13 13:01:37', '2021-07-15 12:28:59', 6, 4);
insert into playlist (name, title, description, year, distinctiveMessage, image, createdAt, updatedAt, genre_id_1, color_id_4) values ('Y-SOLOWARM', 'pop playlist', 'vestibulum sit amet. cursus id. turpis. Integer aliquet. massa id lobortis convallis.', 1994, 'Let''s see ->', 'playlist5.jpg', '2021-06-21 16:35:05', '2021-05-05 21:18:50', 7, 5);
insert into playlist (name, title, description, year, distinctiveMessage, image, createdAt, updatedAt, genre_id_1, color_id_4) values ('TREEFLEX', 'spanish rock playlist', 'vestibulum sit amet. cursus id. turpis. Integer aliquet. massa id lobortis convallis.', 2011, 'vamos! ->', 'playlist6.jpg', '2021-05-13 02:33:59', '2021-05-23 08:03:00', 8, 6);
insert into playlist (name, title, description, year, distinctiveMessage, image, createdAt, updatedAt, genre_id_1, color_id_4) values ('TRIPPLEDEX', 'house playlist', 'vestibulum sit amet. cursus id. turpis. Integer aliquet. massa id lobortis convallis.', 2003, 'let''s inside ->', 'playlist7.jpg', '2021-06-03 00:30:39', '2021-07-04 21:22:50', 9, 1);
insert into playlist (name, title, description, year, distinctiveMessage, image, createdAt, updatedAt, genre_id_1, color_id_4) values ('OPELA', 'rock playlist', 'vestibulum sit amet. cursus id. turpis. Integer aliquet. massa id lobortis convallis.', 1992, 'we go! ->', 'playlist8.jpg', '2021-07-29 17:32:18', '2021-07-07 04:51:56', 10, 2);
insert into playlist (name, title, description, year, distinctiveMessage, image, createdAt, updatedAt, genre_id_1, color_id_4) values ('ZAAM-DOX', 'underground playlist', 'vestibulum sit amet. cursus id. turpis. Integer aliquet. massa id lobortis convallis.', 2005, 'let''s go ->', 'playlist9.jpg', '2021-05-17 10:18:31', '2021-06-11 04:22:46', 1, 3);
insert into playlist (name, title, description, year, distinctiveMessage, image, createdAt, updatedAt, genre_id_1, color_id_4) values ('ALPHA', 'trance playlist', 'vestibulum sit amet. cursus id. turpis. Integer aliquet. massa id lobortis convallis.', 2011, 'Ir a la playlist ->', 'playlist10.jpg', '2021-05-25 04:45:59', '2021-05-16 12:43:53', 2, 4);
insert into playlist (name, title, description, year, distinctiveMessage, image, createdAt, updatedAt, genre_id_1, color_id_4) values ('VOYATOUCH', 'pop playlist', 'vestibulum sit amet. cursus id. turpis. Integer aliquet. massa id lobortis convallis.', 1996, 'Playlist ¬¬ ->', 'playlist11.jpg', '2021-06-25 19:35:48', '2021-07-12 04:14:00', 3, 5);
insert into playlist (name, title, description, year, distinctiveMessage, image, createdAt, updatedAt, genre_id_1, color_id_4) values ('ANDALAX', 'spanish rock playlist', 'vestibulum sit amet. cursus id. turpis. Integer aliquet. massa id lobortis convallis.', 1994, 'Let''s see ->', 'playlist12.jpg', '2021-07-10 15:51:12', '2021-08-03 01:36:58', 4, 6);
insert into playlist (name, title, description, year, distinctiveMessage, image, createdAt, updatedAt, genre_id_1, color_id_4) values ('FLOWDESK', 'house playlist', 'vestibulum sit amet. cursus id. turpis. Integer aliquet. massa id lobortis convallis.', 1993, 'vamos! ->', 'playlist1.jpg', '2021-05-24 15:38:45', '2021-06-08 00:09:15', 5, 1);

insert into playlist_songs (playlist_id_1, song_id_3) values (1, 1);
insert into playlist_songs (playlist_id_1, song_id_3) values (2, 2);
insert into playlist_songs (playlist_id_1, song_id_3) values (3, 3);
insert into playlist_songs (playlist_id_1, song_id_3) values (4, 4);
insert into playlist_songs (playlist_id_1, song_id_3) values (5, 5);
insert into playlist_songs (playlist_id_1, song_id_3) values (6, 6);
insert into playlist_songs (playlist_id_1, song_id_3) values (7, 7);
insert into playlist_songs (playlist_id_1, song_id_3) values (8, 8);
insert into playlist_songs (playlist_id_1, song_id_3) values (9, 9);
insert into playlist_songs (playlist_id_1, song_id_3) values (10, 10);
insert into playlist_songs (playlist_id_1, song_id_3) values (11, 11);
insert into playlist_songs (playlist_id_1, song_id_3) values (12, 12);
insert into playlist_songs (playlist_id_1, song_id_3) values (13, 13);
insert into playlist_songs (playlist_id_1, song_id_3) values (14, 14);
insert into playlist_songs (playlist_id_1, song_id_3) values (15, 15);
insert into playlist_songs (playlist_id_1, song_id_3) values (16, 16);
insert into playlist_songs (playlist_id_1, song_id_3) values (17, 17);
insert into playlist_songs (playlist_id_1, song_id_3) values (18, 18);
insert into playlist_songs (playlist_id_1, song_id_3) values (19, 19);
insert into playlist_songs (playlist_id_1, song_id_3) values (20, 20);
insert into playlist_songs (playlist_id_1, song_id_3) values (21, 21);
insert into playlist_songs (playlist_id_1, song_id_3) values (22, 22);
insert into playlist_songs (playlist_id_1, song_id_3) values (23, 23);
insert into playlist_songs (playlist_id_1, song_id_3) values (24, 24);
insert into playlist_songs (playlist_id_1, song_id_3) values (25, 25);
insert into playlist_songs (playlist_id_1, song_id_3) values (1, 26);
insert into playlist_songs (playlist_id_1, song_id_3) values (2, 27);
insert into playlist_songs (playlist_id_1, song_id_3) values (3, 28);
insert into playlist_songs (playlist_id_1, song_id_3) values (4, 29);
insert into playlist_songs (playlist_id_1, song_id_3) values (5, 30);
insert into playlist_songs (playlist_id_1, song_id_3) values (6, 31);
insert into playlist_songs (playlist_id_1, song_id_3) values (7, 32);
insert into playlist_songs (playlist_id_1, song_id_3) values (8, 33);
insert into playlist_songs (playlist_id_1, song_id_3) values (9, 34);
insert into playlist_songs (playlist_id_1, song_id_3) values (10, 35);
insert into playlist_songs (playlist_id_1, song_id_3) values (11, 36);
insert into playlist_songs (playlist_id_1, song_id_3) values (12, 37);
insert into playlist_songs (playlist_id_1, song_id_3) values (13, 38);
insert into playlist_songs (playlist_id_1, song_id_3) values (14, 39);
insert into playlist_songs (playlist_id_1, song_id_3) values (15, 40);
insert into playlist_songs (playlist_id_1, song_id_3) values (16, 41);
insert into playlist_songs (playlist_id_1, song_id_3) values (17, 42);
insert into playlist_songs (playlist_id_1, song_id_3) values (18, 43);
insert into playlist_songs (playlist_id_1, song_id_3) values (19, 44);
insert into playlist_songs (playlist_id_1, song_id_3) values (20, 45);
insert into playlist_songs (playlist_id_1, song_id_3) values (21, 46);
insert into playlist_songs (playlist_id_1, song_id_3) values (22, 47);
insert into playlist_songs (playlist_id_1, song_id_3) values (23, 48);
insert into playlist_songs (playlist_id_1, song_id_3) values (24, 49);
insert into playlist_songs (playlist_id_1, song_id_3) values (25, 50);

insert into coupon_rank(name) values('PORCENTUAL'), ('CREDITO');

insert into coupon (name, value, createdAt, updatedAt, active, rank_id_1) values ('ALLNIGHTLONG', '300', '2021-01-11 09:28:26', '2021-06-30 05:14:27', true, 1);
insert into coupon (name, value, createdAt, updatedAt, active, rank_id_1) values ('WEAREDEFECTED', '15', '2020-10-12 07:23:28', '2021-02-17 10:03:42', true, 2);
insert into coupon (name, value, createdAt, updatedAt, active, rank_id_1) values ('EXPRESSYOUSELF', '200', '2021-02-13 17:14:36', '2020-10-27 05:14:16', true, 1);
insert into coupon (name, value, createdAt, updatedAt, active, rank_id_1) values ('VIVELATINO2021', '20', '2020-09-20 22:51:57', '2021-07-16 10:59:48', true, 2);
insert into coupon (name, value, createdAt, updatedAt, active, rank_id_1) values ('ASOT999', '100', '2020-09-24 00:46:22', '2021-06-29 07:58:39', true, 1);

insert into vinyl_songs (vinyl_id_1, song_id_1) values (1, 34);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (2, 23);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (3, 12);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (4, 37);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (5, 28);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (6, 44);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (7, 40);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (8, 20);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (9, 25);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (10, 48);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (11, 7);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (12, 6);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (13, 10);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (14, 7);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (15, 6);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (16, 16);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (17, 7);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (18, 41);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (19, 1);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (20, 5);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (21, 35);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (22, 11);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (23, 32);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (24, 40);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (25, 32);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (26, 1);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (27, 42);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (28, 38);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (29, 29);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (30, 19);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (31, 48);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (32, 17);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (33, 3);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (34, 43);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (35, 25);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (36, 7);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (37, 20);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (38, 36);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (39, 39);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (40, 32);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (41, 3);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (42, 24);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (43, 13);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (44, 22);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (45, 41);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (46, 33);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (47, 26);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (48, 1);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (49, 18);
insert into vinyl_songs (vinyl_id_1, song_id_1) values (50, 30);

insert into recordLabel_genre (recordLabel_id_2, genre_id_2) values (1, 1);
insert into recordLabel_genre (recordLabel_id_2, genre_id_2) values (2, 2);
insert into recordLabel_genre (recordLabel_id_2, genre_id_2) values (3, 3);
insert into recordLabel_genre (recordLabel_id_2, genre_id_2) values (1, 4);
insert into recordLabel_genre (recordLabel_id_2, genre_id_2) values (2, 5);
insert into recordLabel_genre (recordLabel_id_2, genre_id_2) values (3, 6);
insert into recordLabel_genre (recordLabel_id_2, genre_id_2) values (1, 7);
insert into recordLabel_genre (recordLabel_id_2, genre_id_2) values (2, 8);
insert into recordLabel_genre (recordLabel_id_2, genre_id_2) values (3, 9);