use assignment2;
-- make view read only without using group by, joins, aggregate functions. with check option
-- create new view using view
create view new_view as 
select employee_id, first_name from employee;
select * from new_view;
select * from employee_details;
drop view new_view;
-- when we drop base view in mysql all dependent view are deleted, they are not remove automatically but we cannot access those views

-- types of view in sql which are supported in mysql

-- 1.Simple view 
-- A view created using single table, without using any joins, aggregation functions or expressions
-- we can update, insert or delete data from simple view 
-- supported in mysql 
create view simple_view as select employee_id, first_name, last_name from employee;
select * from simple_view;
update simple_view set first_name = 'john' where employee_id = 1;

-- 2.Complex view 
-- A view created using multiple tables, joins, and aggregate functions or Subqueries.
-- it is a read-only view we cannot update , delete or insert data 
-- supported in mysql 
create view complex_view as 
select e.employee_id, e.first_name, e.last_name, d.department_name
from employee e 
join departments d 
on e.department_id = d.department_id;
select * from complex_view;

-- 3. Materialized View
-- A view that store data physically like a table 
-- it store result physically and when we try to access it again it not search in base table.
-- not supported in mysql 
-- we can create Materialized view using regular tables 
create table Materialize_view as 
select department_id, count(department_id) from employee group by department_id;
select * from Materialize_view;

-- 4.Updatable view 
-- A view where insert, update and delete can be applied.
-- rules for updatable view :
--  - must be used one table 
--  - no aggregation functions, joins, distinct, group by.
--  - All selected columns must be map directly to table columns.

-- 5.read only view 
-- A view that cannot be updated 
--  rules for read only view :
--  - use multiple tables 
--  - Use aggregation functions, joins, distinct, group by.

-- can we create index on view 
-- we cannot create index on view, bcz view don't store data physically 

-- Good! Now focus on todays topic: MYSQL View, covering the following aspects:
-- 1. Introduction to Views  
-- Views in mysql are virtual tables that are used to view data from one or more tables.
-- views are very helpful for secure data, by restricting access of important data to third party users.
-- Views in mysql can be created by selecting some/all columns and rows of table by filtering data based on condition.
--  just like normal tables, we can perform operations like create, update, drop, and delete on the views.

create view emp_view as
select * from employee;
select * from emp_view;
desc emp_view;

delete from emp_view where id = 4;

select * from employee;
create view employee_details as
select employee_id, first_name, last_name, job_id
from employee 
where job_id = 'HR_REP';

create view sort_by_salary as
select employee_id, first_name, last_name, salary
from employee
order by salary;
select * from sort_by_salary;

select * from employee_details;

create view avg_salary_department as 
select department_id, avg(salary) 
from employee 
group by department_id;

select * from avg_salary_department;
-- 2. Creating Views  
-- CREATE VIEW statements is used to create a view in mysql.
-- syntax -
-- create view view_name as 
-- select column_names 
-- from table_name
-- where condition;
use assignment2;
create view employee_view as
select employee_id, first_name , salary
from employee;

-- Create a View Based On Multiple Tables With JOIN Clause
create view emp_dep as
select e.first_name, e.last_name , d.department_name 
from employee e 
join departments d
on e.department_id = d.department_id;


update emp_dep set department_name = 'IT' where first_name = 'john';

create or replace view agg_emp as
select e.department_id, sum(e.salary) as sum_salary
from employee e
join departments d 
on e.department_id = d.department_id
group by e.department_id;
select * from agg_emp;

update agg_emp set sum_salary = 12999999 where department_id = 1; -- error

-- 3. Querying Data from Views  
select * from employee_view;
select * from emp_dep;
select first_name, department_name from emp_dep;

-- 4. Updating Views 
-- Thier are some conditions that need to be satisfied to update view
-- - view should be created using single table. if view is created using multiple tables then we will not allowed to update the view.
-- - view should not be created using nested or complex queries.
-- - view should have all not null values.
-- - The select statements should not have distinct keyword.
-- - the select statement which is used to create view should not have include group by and order by clause.

-- # update view stucture
-- to update view by adding or removing columns and rows by changing where clause condition. 
-- we can use create or replace view statement
-- syntax -
-- create or replace view view_name as
-- select column_names from table_name where condition;
create or replace view employee_view as
select employee_id, first_name, last_name, salary
from employee;

-- # insert into view 
-- we can insert records in view by similar way we are inserting in normal tables.
insert into employee_view values (13, 'vishal','nimbalkar',55500);
-- above query add this records in original table also 
-- if missing column from employee tables does not have default value and set to not null then it gives error
select * from employee_view;
select * from employee;

-- # delete rows from view 
-- syntax - DELETE FROM <view_name> WHERE [condition];
-- use same syntax as deleting normal table records 
delete from employee_view where employee_id = 13;
-- data deleted from both original and view table

-- 5. drop Views  
-- syntax - drop view view_name;
drop view employee_view;

-- 6. Read-Only Views
-- A read only view is a view that cannot be updated, inserted, and deleted. its only use to select data 
-- A view becomes read-only if it contains:
-- Joins that are too complex (outer joins or self joins)
-- Aggregate functions
-- DISTINCT
-- GROUP BY
-- UNION / UNION ALL
-- Subqueries
-- LIMIT clause

create view read_only_view as
select e.department_id, count(e.employee_id) as emp_cnt
from employee as e
join departments as d
on e.department_id = d.department_id
group by e.department_id;

select * from read_only_view;
update read_only_view set emp_cnt = 5 where department_id = 1; -- error- view is not updatable 

select * from orders;
select * from customers;

create view order_details as
select c.name,c.customer_id, sum(o.amount) as sum_order, avg(o.amount) as avg_order
from orders o 
join customers c 
on o.customer_id = c.customer_id
group by o.customer_id;

select * from order_details;
alter table customers rename column name to customer_name;


-- WITH CHECK OPTION
-- When we create view with condition, with check option ensures that any insert or update operation must satisfy the condition of the view. 
-- syntax -
-- CREATE VIEW view_name AS
-- SELECT columns
-- FROM table
-- WHERE condition
-- WITH CHECK OPTION;

-- without with check option
create view emp1 as 
select employee_id, first_name,salary from employee where salary > 50000;

select * from employee;
insert into emp1 values (100, 'vishal',45000);-- not inserted into emp1, instead inserted into employee which is base table
drop view emp2;

-- with check option
create view emp2 as
select employee_id, first_name, salary from employee where salary > 50000 with check option;
insert into emp2 values (101, 'tom',45000);-- error check option failed
select * from emp2;
select * from employee;