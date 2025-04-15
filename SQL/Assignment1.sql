create database assignments;
use assignments;
-- Create a table named employees with the following columns and constraints:
-- emp_id,first_name, last_name, email, phone_number, hire_date, job_title(CHECK (Allowed: 'Manager', 'Developer', 'HR', 'Analyst')),salary, department_id(FOREIGN KEY REFERENCES departments(dept_id)) status default ('Active')

create table departments(
	id int primary key auto_increment,
    department_name varchar(50) not null
);

create table employees(
	emp_id int primary key auto_increment,
    first_name varchar(50) not null,
    last_name varchar(50) not null,
    email varchar(50) not null unique,
    phone_number varchar(50),
    hire_date datetime not null,
    job_title varchar(10) not null check(job_title in ('Manager', 'Developer', 'HR', 'Analyst')),
    salary decimal,
    department_id int not null,
    status enum('active','inactive') not null default 'active',
    foreign key(department_id) references departments(id)
);
alter table employees modify status enum('Active', 'Inactive') default 'Active';
desc employees;

-- -- INSERT records for employees table
-- ('Alice', 'Walker', 'alice@example.com', '9876543210', '2021-05-15', 'Developer', 50000, 1, 'Active'),
-- ('Bob', 'Smith', 'bob@example.com', NULL, '2020-03-10', 'Manager', 70000, 2, 'Active'),
-- ('Charlie', 'Brown', 'charlie@example.com', '9123456789', '2022-01-20', 'HR', NULL, 3, 'Inactive'),
-- ('David', 'Lee', 'david@example.com', '9988776655', '2019-11-01', 'Analyst', 45000, 1, 'Active'),
-- ('Eva', 'Johnson', 'eva@example.com', '9001122334', '2023-02-14', 'Developer', 48000, 2, 'Active')
insert into departments values (1,'IT') , (2,'Manager'), (3,'HR');
insert into employees values 
(default,'Alice', 'Walker', 'alice@example.com', '9876543210', '2021-05-15', 'Developer', 50000, 1, 'Active'),
(default,'Bob', 'Smith', 'bob@example.com', NULL, '2020-03-10', 'Manager', 70000, 2, 'Active'),
(default,'Charlie', 'Brown', 'charlie@example.com', '9123456789', '2022-01-20', 'HR', NULL, 3, 'Inactive'),
(default,'David', 'Lee', 'david@example.com', '9988776655', '2019-11-01', 'Analyst', 45000, 1, 'Active'),
(default,'Eva', 'Johnson', 'eva@example.com', '9001122334', '2023-02-14', 'Developer', 48000, 2, 'Active');

select * from employees;
select * from employees where salary is null;

-- Constraints Testing
-- 1.Missing first_name or hire_date → What happens?
-- it will give us error bcz both are set to not null

-- 2.Duplicate email → What happens?
-- we apply unique constraints on email so it will give us error buplicate entry of email

-- 3.job_title set to 'Intern' → What happens?
update employees set job_title = 'Intern' where emp_id = 1;
-- error - check constraint is voileted 

-- Operators
-- 1.Write a query to list all employees who have a salary between 45000 and 70000.
select * from employees where salary between 45000 and 45000;
-- 2.List employees whose name starts with 'A'.
select * from employees where first_name like 'A%';
-- 3.Find employees who are in the HR or Manager job title.
select * from employees where job_title = 'Manager' or job_title = 'HR';
-- 4.Select employees who don’t have a phone number.
select * from employees where phone_number is null;
-- 5.List employees from department 1 or 2 whose salary is more than 48000.
select * from employees where salary > 48000 and department_id in (1,2);
select * from employees where salary > (select salary from employees where department_id in (1,2));

