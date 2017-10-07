DROP DATABASE beersDb;
CREATE DATABASE beersDB;

USE beersDb;

CREATE TABLE fullBeer (

    `id` INT NOT NULL AUTO_INCREMENT,

    `description` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
);

USE beersDb;

CREATE TABLE mtBeer (

    `id` INT NOT NULL AUTO_INCREMENT,

    `description` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
);