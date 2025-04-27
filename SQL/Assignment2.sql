create database assignment2;
use assignment2;
-- Create a table named employee with the following columns:
-- EMPLOYEE_ID | FIRST_NAME  | LAST_NAME   | EMAIL    | PHONE_NUMBER   | HIRE_DATE  | JOB_ID     | SALARY  | MANAGER_ID | DEPARTMENT_ID
create table departments(
	department_id int primary key auto_increment,
    department_name varchar(50)
);
create table managers(
	manager_id int primary key auto_increment,
    manager_name varchar(50)
);
create table employee(
	employee_id int primary key auto_increment,
    fist_name varchar(50),
    last_name varchar(50),
    email varchar(50),
    phone_number varchar(20),
    hire_date date,
    job_id varchar(50),
    salary decimal,
    manager_id int,
    department_id int,
    foreign key(manager_id) references managers(manager_id),
    foreign key(department_id) references departments(department_id)
);
alter table employee rename column fist_name to first_name;
INSERT INTO departments (department_name) VALUES 
('HR'), ('IT'), ('Sales'), ('Finance'), ('Logistics'), ('Marketing'), ('Support');

INSERT INTO managers (manager_name) VALUES 
('Alice Smith'), ('Bob Johnson'), ('Carol White'), ('David Brown');

INSERT INTO employee (first_name, last_name, email, phone_number, hire_date, job_id, salary, manager_id, department_id) VALUES 
('John', 'Doe', 'john.doe@example.com', '1234567890', '2023-12-20', 'IT_PROG', 60000, 1, 2),
('Jane', 'Smith', 'jane.smith@example.com', '1234567891', '2022-05-14', 'HR_REP', 45000, 1, 1),
('Mike', 'Johnson', 'mike.j@example.com', '1234567892', '2024-03-12', 'SA_REP', 30000, 2, 3),
('Anna', 'Williams', 'anna.w@example.com', '1234567893', '2023-11-25', 'IT_PROG', 52000, 2, 2),
('Sara', 'Davis', 'sara.d@example.com', '1234567894', '2022-08-10', 'AC_ACCOUNT', 40000, 3, 4),
('Tom', 'Brown', 'tom.b@example.com', '1234567895', '2025-01-01', 'SA_REP', 55000, 3, 3),
('Emily', 'Taylor', 'emily.t@example.com', '1234567896', '2021-07-15', 'MK_REP', 50000, 4, 6),
('Chris', 'Martin', 'chris.m@example.com', '1234567897', '2020-04-18', 'IT_PROG', 70000, 4, 2),
('Nina', 'Patel', 'nina.p@example.com', '1234567898', '2023-06-05', 'HR_REP', 48000, 1, 1),
('Robert', 'Lee', 'robert.l@example.com', '1234567899', '2023-09-01', 'AC_ACCOUNT', 41000, 2, 4),
('David', 'Clark', 'david.c@example.com', '1234567800', '2023-10-10', 'SA_REP', 47000, 3, 3),
('Sophia', 'Walker', 'sophia.w@example.com', '1234567801', '2022-12-05', 'MK_REP', 43000, 4, 6);

select * from employee;
select * from departments;
select * from managers;

-- Assignment Questions: -
-- 	Q1. Write a query to list employees whose salary is greater than 40000 and belong to department 6.
select e.* 
from employee e
join departments d
on e.department_id = d.department_id
where d.department_id = 6 and e.salary > 40000;
select * from employee where salary > 40000 and department_id = 6;

-- 	Q2. Write a query to find departments where more than 2 employees are working.
select e.department_id, count(e.department_id) emp_cnt
from departments d 
join employee e
on e.department_id = d.department_id
group by e.department_id
having emp_cnt > 2;

-- 	Q3. Write a query to sort employees by salary in descending order and show only top 3.
select * from employee order by salary desc limit 3;

-- 	Q4. Write a query to find employees whose job_id is not 'IT_PROG'.
select * from employee where job_id != 'IT_PROG';

-- 	Q5. Write a query to count the number of employees under each manager.
select manager_id, count(manager_id) as emp_under_manger from employee group by manager_id;

-- 	Q6. Write a query to list job roles having more than one employee.
select job_id, count(job_id) as emp_cnt from employee group by job_id having emp_cnt > 1;

-- 	Q7. Write a query to show the details of the most recently hired employee.
select * from employee order by hire_date desc limit 1;

select * from employee;
-- 	Q8. Write a query to find the number of employees hired in each year.
select year(hire_date) as yr, count(year(hire_date)) as yr_cnt from employee group by yr;

-- 	Q9. Write a query to get job_ids where the total salary exceeds 45000.
select job_id, sum(salary) as total from employee group by job_id having total > 45000;

-- 	Q10. Write a query to list employees in alphabetical order of their last name.
select * from employee order by last_name;

-- 	Q11. Write a query to display the average salary of employees in each job_id.
select job_id, avg(salary) from employee group by job_id;

-- 	Q12. Write a query to list the lowest-paid employee in each department.
select department_id, min(salary) as low from employee group by department_id;

-- 	Q13. Write a query to find all employees hired before '2024-01-01' and earning more than 40000. 
select * from employee where hire_date < '2024-01-01' and salary > 40000; 

-- 	Q.14  Write a query to display employee details where salary is between 40000 and 60000.
select * from employee where salary between 40000 and 60000;