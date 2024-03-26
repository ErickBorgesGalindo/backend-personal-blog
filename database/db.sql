CREATE DATABASE blog

/*------- CATEGORIES ------*/
CREATE TABLE categories(
	id_cat SERIAL PRIMARY KEY,
	cat_name VARCHAR(50) NOT NULL,
	articles INT ,
	image VARCHAR(100)
);

INSERT INTO categories(cat_name, articles, image)VALUES('Lifestyle', 0, '../src/assets/images/categories/lifestyle.jpeg');
INSERT INTO categories(cat_name, articles, image)VALUES('Courses', 0, '../src/assets/images/categories/courses.jpeg');
INSERT INTO categories(cat_name, articles, image)VALUES('TechNews', 0, '../src/assets/images/categories/technews.jpg');

SELECT * FROM categories

	
/*------- USERS ------*/
CREATE TABLE users(
	id_user SERIAL PRIMARY KEY,
	user_name VARCHAR(20),
	email VARCHAR(255),
	password varchar(20)
);

INSERT INTO users(user_name, email, password) VALUES ('Alecs', 'erick.borges@outlook.es','Pass123');
INSERT INTO users(user_name, email, password) VALUES ('Paquito', 'paquito@gmail.com','Pass456');

SELECT * FROM users;


/*------- WRITERS ------*/
CREATE TABLE writers(
	id_writer VARCHAR(20) PRIMARY KEY,
	writer_name VARCHAR(50) NOT NULL,
	writer_ln VARCHAR(50) NOT NULL ,
	sm_twitter VARCHAR(100),
	sm_instagram VARCHAR(100),
	sm_linkedinn VARCHAR(100)
);

INSERT INTO writers(id_writer, writer_name, wrirter_ln, twitter, instagram, linkedinn)VALUES('erbo05','Erick', 'Borges', '@Alecs510', '@erickbgalindo', 'erickborgesgalindo');
SELECT * FROM writers;


/*------- COMMENTARIES ------*/
CREATE TABLE commentaries(
	id_comment VARCHAR(20) PRIMARY KEY,
	user_name VARCHAR(20),
	comment_content VARCHAR(20),
	date_comment DATE,
	user_image VARCHAR(100)
);

INSERT INTO commentaries(id_comment, user_name, comment_content, date_comment, user_image)VALUES('albo12','Alecs','Esta bien hecho', '12/03/2024','../src/assets/images/technews.jpeg');
SELECT * FROM commentaries;


/*------- ARTICLES ------*/
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
SELECT * FROM articles;

