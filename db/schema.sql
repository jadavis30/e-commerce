-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

--CREATE TABLE Category
CREATE TABLE category(
    id INTEGER AUTO_INCREMENT NOT NULL,
    category_name "STRING" NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE product(
    id INTEGER AUTO_INCREMENT NOT NULL,
    product_name "STRING" NOT NULL,
    price DECIMAL NOT NULL --validates that value is a decimal
    stock INTEGER NOT NULL --default is 10, validates value as numeric
    category_id INTEGER REFERENCES category_id,
    PRIMARY KEY (id)
);

CREATE TABLE tag(
    id INTEGER NOT NULL AUTO_INCREMENT,
    tag_name "STRING",
    PRIMARY KEY (id)
);

CREATE TABLE producttag(
    id INTEGER NOT NULL AUTO_INCREMENT,
    product_id INTEGER REFERENCES product_id,
    tag_id INTEGER REFERENCES tag_id,
    PRIMARY KEY (id)
);

