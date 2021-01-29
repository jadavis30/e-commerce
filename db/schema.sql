-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

--CREATE TABLE Category
CREATE TABLE category(
    id
    category_name
);

CREATE TABLE product(
    id
    product_name
    price
    stock
    category_id
);

CREATE TABLE tag(
    id
    tag_name
);

CREATE TABLE producttag(
    id
    product_id
    tag_id
);

