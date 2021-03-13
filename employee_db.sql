DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE departments (
    id INTEGER(11) NOT NULL UNIQUE,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE roles (
    id INTEGER(11) NOT NULL UNIQUE,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(15,3) NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE employee (
    id INTEGER(11) NOT NULL UNIQUE,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NULL,
    PRIMARY KEY (id)
);