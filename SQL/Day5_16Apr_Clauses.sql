create database practice;
create table employees(
	emp_id int primary key,
    name varchar(50) not null,
    salary decimal not null,
    phone_number varchar(50),
    status enum('Active','Inactive') default 'Active',
    job_title varchar(10) check (job_title in ('HR','Manager','Developer','tester')),
    department_id int not null,
    foreign key(department_id) references departments(id)
);
INSERT INTO employees (emp_id, name, salary, phone_number, status, job_title, department_id)
VALUES
(1, 'Alice Johnson', 60000.00, '123-456-7890', 'Active', 'HR', 1),
(2, 'Bob Smith', 75000.00, '234-567-8901', 'Active', 'Manager', 2),
(3, 'Charlie Brown', 50000.00, '345-678-9012', 'Inactive', 'Developer', 1),
(4, 'Diana Prince', 55000.00, '456-789-0123', 'Active', 'tester', 3),
(5, 'Ethan Hunt', 70000.00, '567-890-1234', 'Active', 'Developer', 2);

create table departments(
	id int primary key unique not null,
    department_name varchar(10) not null,
    department_head varchar(10) not null
);

-- Insert sample data into departments table
INSERT INTO departments (id, department_name, department_head)
VALUES
(1, 'HR', 'Alice'),
(2, 'IT', 'Bob'),
(3, 'QA', 'Diana'),
(4, 'Sales', 'Eve'),
(5, 'Finance', 'Frank'),
(6, 'Support', 'Grace');

alter table employees modify emp_id int auto_increment;
desc departments;
desc employees;
select * from departments;
select * from employees;

select group_concat(name separator '-') from employees;
select json_arrayagg(name) from employees;
select json_objectagg(emp_id, name) from employees; -- {"1": "Alice Johnson", "2": "Bob Smith", "3": "Charlie Brown", "4": "Diana Prince", "5": "Ethan Hunt"}
select std(salary) from employees;
select var_pop(salary) from employees;

-- clauses in sql
-- clauses are use to filter, group, limit and sort data 

-- Types of SQL Clause 
-- 1. where clause 
-- it is used to filter data based on condition
-- mainly used with select, update and delete statements
-- ex : get all employees with salary greater than 50000;
select * from employees where salary > 50000;

-- 2.order by clause
-- it is used to sort result in ascending or descending order
-- mainly used with numeric, dates and text data 
-- ex : sorting data by employee thier salary 
select * from employees order by salary asc;
select * from employees order by salary desc;

insert into employees values (default, 'vishal nimbalkar', 85000, null, default, 'Developer', 2);
-- null values in order by clause
select * from employees order by phone_number;
-- null values are treated as lower than any non-null values

-- order by on multiple column
select * from employees order by salary, status;
-- it gives higher priority to column next to order by clasue

-- 3.Group by clause 
-- group by is use to organizing and summarizing data based on same values from columns
-- we use aggregate functions along with group by clause 
-- key points about group by :
-- - it is used with select statements 
-- - it is placed after where clause in query
-- - it is placed before order by clause in query 
-- - in the query having clause is used after group by to apply condition 
-- - we always use select with where and group by with having clause to place condition
-- syntax - 
    -- select column_name1, function_name(column_name2) from table_name 
    -- where condition 
    -- group by column_name 
    -- having condition 
    -- order by column_name asc/desc;
-- get sum of salary by job_title 
select job_title, sum(salary) from employees group by job_title;
-- get sum of salary by department
select department_id, sum(salary) from employees group by department_id;
-- get count of each job title 
select job_title, count(job_title) from employees group by job_title;

select *, count(job_title) from employees group by job_title; -- error 

-- 4.Having clause 
-- it is used to filter records based on aggregate functions.
-- unlike where clause filters records based on rows before grouping, having filters group of data after aggregation.
-- it is used with group by clause to filter records
-- ex : get sum of salary id > 100000
select job_title, sum(salary) from employees group by job_title having sum(salary) > 100000;
select * from employees having salary > 80000;
-- cannot used without group by unless an aggregate function is present
 -- placed after group by and before order by  
 
-- having with multiple conditions
select job_title, sum(salary), avg(salary) from employees group by job_title having sum(salary) > 65000 and sum(salary) < 100000;

-- 5.Limit clause 
-- by using limit clause we can set how many rows returns in the query results
-- useful when we want to filter top records 
select * from employees limit 3;

-- limit with order by clause 
-- we will filterd employees with top three salary
select * from employees order by salary desc limit 3;
-- we will filtered employees with bottom three salary
select * from employees order by salary limit 3;

-- limit offset parameter 
-- SELECT * FROM table_name ORDER BY column_name LIMIT Y,X; 
-- X → Number of rows to return.
-- Y → Number of rows to skip.
-- if we pass X and Y negative value it will throw error
-- returns second largest salary 
select * from employees order by salary desc limit 1,1;

-- other clause - select , from , distinct, etc.

-- # Execution order of clauses 
-- 1.FROM - Identifies the source tables and performs joins if needed
-- 2.WHERE - Filters rows before grouping. No aggregates allowed here
-- 3.GROUP BY - Groups rows by specified columns
-- 4.HAVING - Filters groups after aggregation
-- 5.SELECT - Selects and computes final columns, including aggregate functions
-- 6.DISTINCT - Removes duplicate rows
-- 7.ORDER BY - Sorts the final result set
-- 8.LIMIT - Returns only a subset of rows

select job_title, sum(salary) as total 
from employees 
where status = 'Active' 
group by job_title 
having total > 60000 
order by total desc 
limit 2;

select * from employees;
delete from employees where salary = (select max(salary) from employees);
-- mysql does not allow modification at the time of reading data from the subquery 
-- solution - we wrap subquery inside another select 

delete from employees where salary = ( select max_salary from (select max(salary) as max_salary from employees) as temp );

-- another solution -
delete from employees order by salary desc limit 1;

-- Get the number of active employees in each department. Show only departments that have more than 1 active employees.
select department_id, count(status) as active_emp from employees where status = 'Active' group by department_id having active_emp > 1;

-- Find the top 2 job titles with the highest total salary, considering only active employees.
select job_title, sum(salary) as total from employees where status = 'Active' group by job_title order by total desc limit 2; 

-- Return the department_id and total salary of employees for the single department that has the highest combined salary.
select department_id, sum(salary) as total from employees group by department_id order by total desc limit 1;

-- List all phone numbers that are used by more than one employee.
select phone_number, count(phone_number) as used_count from employees group by phone_number having used_count > 1;

-- Return all employees who are in departments where no one has the job title 'Manager'.
select department_id from employees group by department_id having sum(job_title = 'Manager') = 0;

-- For each job title, show the name of the employee with the highest salary.
select name,job_title, max(salary) as maxSal from employees group by name, job_title having maxSal;

-- 7. Job Titles with Average Salary Below 40000
-- List job titles where the average salary is below 40,000.

-- 8. Departments With No Employees
-- Show all departments that do not have any employees assigned to them.

-- 9. Employees with Salary Above Department Average
-- Get the list of employees whose salary is above the average salary of their department.

-- 10. Latest 3 Employees Joined
-- If you had a hire_date column (assume it's there), return the 3 most recently joined employees.
