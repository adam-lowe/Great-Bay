DROP DATABASE IF EXISTS auctions_db

CREATE DATABASE auctions_db;

USE auctions_db;

CREATE TABLE auctions (
  id INT NOT NULL AUTO_INCREMENT,
  item VARCHAR(45) NULL,
  min_price DECIMAL(10,2) NULL,
  quantity INT NULL,
  PRIMARY KEY (id)
);