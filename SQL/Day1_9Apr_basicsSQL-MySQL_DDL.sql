-- Basics of SQL and MySQL 
-- SQL
-- sql is structured query language.
-- it is used to manage relational databases.
-- sql us used in various RDBMS like MySQL, oracle, postgresql.

-- MySQL
-- MySQL is a open source relational database management system (RDBMS) that uses sql to manage data.
-- Developed by MySQL AB and now owned by oracle.
-- on Linux and macos mysql case-sensitive by default 
-- Users, users, and USERS  are three different tables
-- on windows it is case-insensitive
-- Users, users, and USERS  are treated as same tables
-- column names are case-insensitive name, Name, and NAME are same.

-- create database demo;
 -- use demo;

-- DDL (Data Definition Language)
-- DDL use to defining, altering, and deleting database structure like database, tables.

-- 1.CREATE 
-- CREATE DATABASE
-- syntax - create database db_name;
-- blank spaces are not allowed in the database names 
-- we can only use (_) underscore
create database company;

-- After creating database we need to select database to perform operation on it for that we use 'use'
use company;

-- CREATE TABLE 
-- to create new table in mysql we use create table command, it includes column name, data type, and constraints like not null, primary and foreign key and checks.
-- syntax - 
-- create table table_name(
--     column1 dataType (size),
--     column2 dataType (size),
--     .
--     .
--     .
--     columnN dataType (size),
-- )

create table employee(
    id int primary key,
    name varchar(50),
    salary float(10),
    desiganation varchar(50)
);

-- DROP
--  it is used to delete database or table permanantly
-- DROP DATABASE
--  above statement delete database permanantly along with all tables and other data of database.
--  syntax - drop database db_name;
 drop database demo;

--  DROP DATABASE IF EXISTS
--  To avoid error while running DROP DATABASE command use IF EXISTS claues, which will delete database if exists 
--  syntax - drop database if exists db_name;
drop database if exists demo;

-- DROP TABLE
--  it delete table permanantly from database along with all its data.
--  syntax - drop table table_name;
drop table employee;

-- ALTER TABLE 
-- it allows to modify the structure of table 
--  we can add new columns, modify existing columns, deleting tables or rename them.
--  we can add constraints, modify data types 
--  syntax - ALTER TABLE table_name [add/drop/modify] colunm_name datatype;

--  1.ADD 
--   it is used to add new column in existing table 
--   syntax - alter table table_name add column_name datatype;
alter table employee add age int;
select * from employee;

--  2.MODIFY 
--   To change the data type of an existing column
--   syntax - alter table table_name modify column_name datatype;
alter table employee modify age varchar(10);

--  3.DROP 
--  To delete an existing column from the table
--   syntax - alter table table_name drop column_name;
alter table employee drop age;

--  4.RENAME 
--   To rename an existing column
--   syntax - alter table table_name rename column column_name old_name to new_name;
alter table employee rename column desiganation to desig;

--  5.RENAME TO
-- To rename table name itself 
-- syntax - alter table table_name rename to new_table_name; 
alter table employee rename to emp;

-- TRUNCATE
-- it removes all rows from table but preserve table structure.
-- it is same as DELETE command without where claues
-- syntax - TRUNCATE table table_name;
-- if table have foreign key constraints we cannot truncate table 
TRUNCATE table employee;

-- RENAME
-- rename table name in database 
rename table emp to employee;
 
 -- meeting discussion
 create table employee(
 name varchar(50),
 email varchar(50),
 hired_date date
 );
 
 alter table emp add (address varchar(50), salary int);
 select * from employee;
 alter table employee rename emp;   

-- make email column unique 
alter table employee modify email varchar(50) unique;

-- how to get structure of table 
-- syntax - DESCRIBE table_name;
-- syntax - DESC table_name;
describe employee;
desc employee;

-- tricky questions
-- 1.What’s the difference between SQL and MySQL?
-- Answer:
-- SQL is the language.
-- MySQL is a database management system (DBMS) that uses SQL.
-- Explanation:
-- Think of SQL as the rules/grammar, and MySQL as the tool that follows those rules.

-- 2.How does MySQL handle case sensitivity in table and column names across OSes?
-- Answer:
-- On Linux, table names are case-sensitive.
-- On Windows, table names are case-insensitive.
-- Column names are always case-insensitive.
-- Explanation:
-- This is due to the OS file system. Linux is case-sensitive; Windows is not.

-- 3. Can we have two columns with the same name in a table?
-- Answer:
-- No. Column names must be unique within a table.

-- 4. What’s the difference between DELETE, DROP, and TRUNCATE?
-- Answer:
-- DELETE removes rows one-by-one and fires triggers.
-- TRUNCATE is faster but cannot be rolled back in MySQL.
-- DROP removes the entire table structure.

-- 5.Can you DROP a table that is referenced by a foreign key?
-- Answer:
-- No — not unless you drop the foreign key constraint first, or disable foreign key checks.

-- 6.Can you create a table without any columns?
-- Answer:
-- No. A table must have at least one column.
-- Explanation:
-- MySQL requires at least one column to store data, even if it's a dummy column