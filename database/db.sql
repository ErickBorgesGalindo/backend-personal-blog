CREATE DATABASE blog

CREATE TABLE categories(
	id_cat SERIAL PRIMARY KEY,
	nombre VARCHAR(50) NOT NULL,
	articles INT ,
	image VARCHAR(100)
);

INSERT INTO categories(nombre, articles, image)VALUES('Lifestyle', 0, '../src/assets/images/categories/lifestyle.jpeg');
INSERT INTO categories(nombre, articles, image)VALUES('Courses', 0, '../src/assets/images/categories/courses.jpeg');
INSERT INTO categories(nombre, articles, image)VALUES('TechNews', 0, '../src/assets/images/technews.jpeg');

CREATE TABLE writers(
	id_writer VARCHAR(20) PRIMARY KEY,
	nombre VARCHAR(50) NOT NULL,
	apellidos VARCHAR(50) NOT NULL ,
	twitter VARCHAR(100),
	instagram VARCHAR(100),
	linkedinn VARCHAR(100)
);

INSERT INTO writers(id_writer, nombre, apellidos, twitter, instagram, linkedinn)VALUES('erbo05','Erick', 'Borges', '@Alecs510', '@erickbgalindo', 'erickborgesgalindo');


CREATE TABLE commentaries(
	id_comment VARCHAR(20) PRIMARY KEY,
	user_name VARCHAR(20),
	comment_content VARCHAR(20),
	date_comment DATE,
	user_image VARCHAR(100)
);

INSERT INTO commentaries(id_comment, user_name, comment_content, date_comment, user_image)VALUES('albo12','Alecs','Esta bien hecho', '12/03/2024','../src/assets/images/technews.jpeg');

CREATE TABLE articles(
	id_art VARCHAR(20) PRIMARY KEY,
	id_writer VARCHAR (20),
	id_cat SERIAL,
	id_comment VARCHAR(20),
	views_count INT,
	publication_date DATE,
	main_image VARCHAR(100),
	quote VARCHAR(900),
	article_content VARCHAR(900),
	tags VARCHAR(255)
);



