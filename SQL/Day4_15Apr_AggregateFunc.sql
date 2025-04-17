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

-- 6. GROUP_CONCATE(expression)
-- returns concatenaed string of values 
select * from students;
select group_concat(name) from students; -- Alice,Bob,Charlie,David,Eva,bob,vishal,vishal
select group_concat(class_no) from students; -- 100,101,102,a,null,100c,102b,c100 - it works on null values 
select group_concat(name separator '-') from students; -- by default it uses ',' as separator but we can spcify separator using 'separator' keyword 
-- output - Alice-Bob-Charlie-David-Eva-bob-vishal-vishal
select group_concat(isPresent) from students; -- if column contains all null values it will return null
-- if column contains singal value it returns that value without separator

-- 7.JSON_ARRAYAGG(expression)
-- Aggregates values into json array 
select json_arrayagg(name) from students; 
-- ["Alice", "Bob", "Charlie", "David", "Eva", "bob", "vishal", "vishal"]
select json_arrayagg(class_no) from students; -- ["100", "101", "102", "a", "null", "100c", "102b", "c100"] - works on null
select json_arrayagg(isPresent) from students; -- [null, null, null, null, null, null, null, null]


-- 8.JSON_OBJECTAGG(KEY, VALUE)
-- Aggregates rows into json object, where each key maped with value
-- returns null if result contains no row
-- error occurs when value of key column is null or number or arguments is not 
select json_objectagg(id, class_no) from students;-- {"1": "100", "2": "101", "3": "102", "4": "a", "5": "null", "6": "100c", "7": "102b", "10": "c100"}
select json_objectagg( id, isPresent) from students; -- {"1": null, "2": null, "3": null, "4": null, "5": null, "6": null, "7": null, "10": null}
select json_objectagg( class_no, id) from students; -- error bcz class_no contains null values
select json_objectagg(isPresent, name ) from students;-- {"1": "vishal"} - if all values of key column are same then last value of value column is assign to single key
update students set isPresent = true where id = 10;
update students set class_no = null where id = 5;
select * from students;
