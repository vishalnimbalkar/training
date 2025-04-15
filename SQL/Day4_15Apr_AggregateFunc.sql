-- store null on default  
insert into departments values (null,'abc',null);
-- if we insert null for default column it stores null instead of default 
-- and for primary key if we pass null it will auto increamented by 1 
alter table departments add department_head varchar(50)  default 'vishal';
select * from departments;

-- in vs or
-- Use IN when you are comparing one column against multiple values.
select * from departments where department_name in ('IT','rahul','ganesh');
-- Use OR when comparing different columns or more complex logic.
select * from departments where department_name = 'vishal' or department_name = 'IT' or department_name = 'ganesh';

select * from departments where department_name = 'IT' or department_head = 'vishal';

-- MySQL Aggregate Functions
use demo;
-- 1.MIN()
-- returns the smallest value from selected column 
-- syntax - select min(column_name) where from table_name condition;
select min(marks) from students ;
SELECT name, roll_no, marks FROM students WHERE marks = (SELECT MIN(marks) FROM students);-- returns student with minimum marks

select min(marks) from students where marks > (select min(marks) from students); -- returns second smallest marks

-- 2.MAX()
-- returns the largest value from selected column 
-- syntax - select max(column_name) where from table_name condition;
select max(marks) from students;
select name, roll_no, marks from students where marks = (select max(marks) from students); -- returns student with maximum marks

select max(marks) from students where marks < (select max(marks) from students); -- returns second largest marks;
select * from students;

alter table students modify name varchar(50) null;
insert into students values (default, 'vishal', 777, 88);

-- 3.COUNT()
-- returns the number of rows that satisfied given condition.
select count(*) from students; -- find the total number of rows from the table 
select count(name) from students; -- it ignores the null values 
-- distinct - ignores duplicate from row or table, same value are treated as one 
select count(distinct name) from students; -- return how many different names in students table 
select count(distinct marks) from students; -- return how many different marks in students table 
select count(distinct name, marks) from students; -- return how many different names and marks combinations in students table 

select distinct name from students;

select count(department_id) from employees;
select sum(first_name) from employees;

-- 4.SUM()
-- returns total sum of numeric column 
select sum(marks) from students;
select sum(class_no) from students;
-- '100' -> 100
-- 'a' -> 0
-- '100c' -> 100
-- '1002' -> 100
-- sum() ignores null values 
-- for boolean false(0) and true(1)
-- date, time , datetime and blob gives error 

alter table students add class_no varchar(10);
select * from students;

-- 5.AVG()
-- returns average value of numeric column 
select avg(marks) from students;
select avg(class_no) from students;

select max(hire_date) from employees;
-- more aggregate func
select * from employees;
select first_name, last_name, email from employees where salary > (select avg(salary) from employees);
delete from employees where department_id = 3;
delete from employees where salary = (select max(salary) from employees);
select max(salary) from employees;

