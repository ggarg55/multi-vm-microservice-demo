CREATE DATABASE microservice_db;

CREATE USER 'apiuser'@'%' IDENTIFIED BY 'password123';

GRANT ALL PRIVILEGES ON microservice_db.* TO 'apiuser'@'%';

FLUSH PRIVILEGES;
EXIT;

USE microservice_db;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50)
);

INSERT INTO users (name) VALUES ('Alice'), ('Bob');
