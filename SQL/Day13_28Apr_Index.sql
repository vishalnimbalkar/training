-- MySQL Index 
Indexes are used to retrive data from database more quickly.
Users cannot see indexes they are just used it to speed up searches and queries.
it is similar to an index in a book.
without indexes mysql scan the entire table row by row(called full table scan).

why use indexes 
faster select queries.
enforce uniqueness using unique indexes.
help optimize search operations in large tables.
but,
it slow down insert, update, and delete operations
They consume extra disc space.

-- CREATE INDEX
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    department_id INT,
    INDEX idx_department (department_id)
);

-- Normal index
CREATE INDEX idx_department ON employees(department_id);

-- Unique index
CREATE UNIQUE INDEX idx_email ON employees(email);

-- index on multiple columns
CREATE INDEX idx_name_dept ON employees(name, department_id);

-- view indexes 
SHOW INDEX FROM table_name;

-- drop indexes 
DROP INDEX index_name ON table_name;
