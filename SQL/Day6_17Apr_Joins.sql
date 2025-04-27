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
-- it returns every combination of row from table1 with every row from table2
-- suppose:
-- table A has 3 rows
-- table B has 4 rows 
-- result : 3 * 4 = 12 rows 

select users.id, users.name, bookings.booking_status 
from users
cross join bookings;

select  users.id, users.name, bookings.booking_status  from users, bookings;
-- this query also returns same records 

-- using where clause
select users.id, users.name, bookings.booking_status 
from users
cross join bookings 
where users.id = bookings.customer_id; 

-- using on 
select users.id, users.name, bookings.booking_status 
from users
cross join bookings 
on users.id = bookings.customer_id; 
-- above query work same as inner join 

-- 6.SELF JOIN 
-- In this join table is joined with itself
-- syntax - 
-- select column_names
-- from table1 t1, table1 t2
-- where condition;

-- UNION Operator 
-- it is used to combine results of tow or more select statements
-- every select statements within UNION must have same numbers of columns 
-- columns must have similar data types 
-- the order of columns is also have to same 
-- syntax - 
-- select columns from table1
-- union 
-- select columns from table2;

-- UNION ALL 
-- union select distinct values by default. to allow duplicate values use UNION ALL.
-- syntax - 
-- select columns from table1
-- UNION ALL
-- select columns from table2;
select users.id, users.name, bookings.booking_status
from users
left join bookings 
on users.id = bookings.customer_id
union all 
select users.id, users.name, bookings.booking_status
from users
right join bookings 
on users.id = bookings.customer_id;

select * from bookings;
select * from users;
-- Basic JOIN Questions
-- 1.List all bookings with the customer’s name.
select users.name, bookings.* 
from users 
right join bookings
on users.id = bookings.customer_id;

-- 2.Show each booking with both customer and driver names.
select a.name customer_name, c.name driver_name, b.* 
from bookings b
join users a
on a.id = b.customer_id
left join users c on c.id = b.driver_id;

-- 3.List the names and phone numbers of all drivers who have completed at least one booking.
select users.name, users.phone 
from users
join bookings 
on users.id = bookings.driver_id
where bookings.booking_status = 'Completed';

-- 4.Get all customer names who have made a booking with a fare above ₹300.
select users.name, b.fare 
from users
join bookings b 
on users.id = b.customer_id
where b.fare > 300;

-- 5.Find the pickup and dropoff locations for each booking along with the customer’s and driver’s email.
select a.email as customer_email, c.email as driver_emial, b.pickup_location, b.dropoff_location 
from bookings b
join users a 
on a.id = b.customer_id
join users c on c.id = b.driver_id;

select * from bookings;
select * from users;

-- Aggregated JOIN Questions
-- 1.Show the total number of bookings made by each customer.
select c.name, count(b.customer_id) as no_of_bookings
from bookings b 
join users c 
on c.id = b.customer_id
group by b.customer_id;

-- 2.List drivers and the total fare they earned from completed bookings.
select d.name, b.driver_id,sum(fare) 
from bookings b 
join users d
on b.driver_id = d.id
where booking_status = 'Completed'
group by b.driver_id;

-- 3.Find the average fare per driver.
select b.driver_id, avg(b.fare) 
from bookings b 
join users d 
on b.driver_id = d.id
group by b.driver_id;

-- 4.List customers who made more than 3 bookings.
select c.name, count(b.customer_id) 
from bookings b 
join users c 
on b.customer_id = c.id
group by b.customer_id;

-- 5.Get the total fare paid by each customer.

create table customers(
 customer_id int primary key auto_increment,
 name varchar(50) not null,
 city varchar(50) not null
);
desc customers;
INSERT INTO customers (customer_id, name, city) VALUES
(1, 'Alice', 'New York'),
(2, 'Bob', 'Chicago'),
(3, 'Charlie', 'Boston'),
(4, 'Diana', 'Seattle'),
(5, 'Edward', 'Miami');
drop table orders;
create table orders(
	order_id int primary key auto_increment,
    customer_id int not null,
    order_date date not null,
    amount decimal not null,
    foreign key(customer_id) references customers(customer_id)
);
desc orders;
alter table orders modify customer_id int null;
INSERT INTO orders (order_id, customer_id, order_date, amount) VALUES
(101, 1, '2024-11-01', 250),
(102, 3, '2024-11-05', 450),
(103, 1, '2024-11-07', 300),
(104, 2, '2024-11-10', 150),
(105, NULL, '2024-11-15', 500);
 
 select * from customers;
 select * from orders;
 
 select c.*, o.* 
 from customers c
 left join orders o
 on o.customer_id = c.customer_id
 union
 select c.*, o.* 
 from customers c
 right join orders o
 on o.customer_id = c.customer_id;
 
 select c.name, o.order_id, o.amount 
 from orders o
 left join customers c 
 on o.customer_id = c.customer_id;
 
 
 select c.*, o.*
 from customers c
 left join orders o
 on c.customer_id = o.customer_id;
 
 select c.name as customer_name, o.order_id, o.order_date, o.amount
 from orders o
 join customers c 
 on o.customer_id = c.customer_id;

-- apply joins on more than two tables
    -- syntax - 
    -- SELECT columns
    -- FROM table1
    -- JOIN table2 ON table1.col = table2.col
    -- JOIN table3 ON table2.col = table3.col
    -- ...and so on
    

 select e.first_name, e.last_name , d.department_name, m.manager_name
 from employee e
 join departments d on d.department_id = e.department_id
 join managers m on m.manager_id = e.manager_id;
 

