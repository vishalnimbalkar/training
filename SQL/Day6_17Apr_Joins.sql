show create table users;
select * from bookings;
select * from users;
-- cascade in SQL
-- cascade referes to a actions triggerd automatically when changes occurs in a parent table, automatically performs updation and delation in childs table, by using ON DELETE CASCADE AND ON UPDATE CASCADE   

-- Key Features of CASCADE
-- Simplifies Data Management: Automates cascading changes across tables.
-- Ensures Referential Integrity: Maintains consistent relationships between parent and child tables.
-- Optimizes Database Design: Reduces manual interventions for managing dependent records.

-- Types of CASCADE 
-- 1.ON DELETE CASCADE
-- It ensurse that when records deleted from parent table, the corresponding records from child table is also deleted.
-- in the below query we are deleting cutomer with id 15, the related rows from booking table is also deleted 
delete from users where id = 15;

-- 2.ON UPDATE CASCADE
-- we will use this type of cascade when primary key of parent table is updated. then all foreign keys are also updated from child tables 
update users set id = 1 where id = 7;

-- CASCADE	- Automatically propagates changes or deletions
-- SET NULL - Sets foreign key to NULL when parent is updated/deleted
-- SET DEFAULT - Sets foreign key to its default (not commonly used in MySQL)
-- RESTRICT - Prevents the action if child rows exist(gives error)
-- NO ACTION - Same as RESTRICT in most MySQL setups(gives error)

-- Joins in SQL
-- join clause is used to combine rows from two or more tables based on same columns

-- Different types of joins in sql 
-- 1. INNER JOIN
-- select records that have matching values in both tables 
-- syntax - select column_names from table1 inner join table2 on table1.column_name = table2.column_name; 
select name, fare, booking_status 
from bookings 
inner join users 
on users.id = bookings.customer_id;

-- naming the column
--  always use table name with column name when we are selecting common columns from tables 
select users.id, users.name, bookings.booking_status
from users
inner join bookings
on users.id = bookings.customer_id;

-- 2.LEFT JOIN 
-- returns all records from left table(table1) and the matching records from the right table(table2)
-- syntax - 
-- select column_names 
-- from table1 
-- left join table2 
-- on table1.column_name = table2.column_name; 

select users.id, users.name, bookings.booking_status 
from users 
left join bookings
on users.id = bookings.customer_id;
-- left join returns all records from users table, if there is not matches in the right table(bookings)

-- 3.RIGHT JOIN 
-- returns all records from right table(table2) and the matching records from the left table(table1)
-- syntax - 
-- select column_names 
-- from table1
-- right join table2
-- on table1.column_name = table2.column_name;

select users.id, users.name, bookings.booking_status 
from users 
right join bookings 
on users.id = bookings.customer_id;

-- 4.FULL JOIN 
-- It returns all rows from both tables 
-- syntax - 
-- select column_names 
-- from table1 
-- full join table2 
-- on table1.column_name = table2.column_name;

-- MySQL doesn't have full join, but we can perform it using UNION.
-- syntax -
-- select column_names 
-- from table1 
-- left join table2 
-- on table1.column_name = table2.column_name
-- UNION
-- select column_names 
-- from table1 
-- right join table2 
-- on table1.column_name = table2.column_name;

select users.id, users.name, bookings.booking_status 
from users
left join bookings
on users.id = bookings.customer_id
UNION
select users.id, users.name, bookings.booking_status 
from users
right join bookings
on users.id = bookings.customer_id;

-- 5.CROSS JOIN
select users.id, users.name, bookings.booking_status 
from users
cross join bookings
on users.id = bookings.customer_id;