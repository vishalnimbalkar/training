-- #MySQL data constraints and  SQL operators
use demo;
-- Constraints
-- sql constraints are used to specified rules for the data in table.

-- 1.NOT NULL 
-- by default column can hold null values 
-- not null constraint enforces column to not accept null values 

-- not null on create table 
create table persons(
    id int not null,
    name varchar(49) not null,
    email varchar(50),
    age int check(age >= 18),
    primary key(id)
) ;
-- above query ensures that id and name column not accepts null value 

drop table persons;
use demo;

-- not null on alter table 
-- to create not null constraint on any column when table is already created we can use following command 
-- add not null on age column in persons table 
alter table persons modify age int not null;
desc persons;
-- how to remove not null 
alter table persons modify age int null;

-- 2.UNIQUE 
-- unique constraint ensures all values in column are different.
-- we can set unique constraint to multiple column in a table.

-- UNIQUE on create table 
create table persons(
    id int not null,
    name varchar(49) not null,
    email varchar(50),
    age int,
    primary key(id),
    unique(email)
) ;

create table persons(
    id int not null,
    name varchar(49) not null,
    email varchar(50),
    age int,
    primary key(id),
    unique(email, age)
) ;
-- email and age can have duplicates individually, but the pair (email, age) must be unique.
desc persons;

-- UNIQUE on alter table
alter table persons add unique(age);

-- 3.Primary key
-- The PRIMARY KEY constraint uniquely identifies each record in a table.
-- Primary keys must contain UNIQUE values, and cannot contain NULL values.
-- A table can have only ONE primary key; and in the table, this primary key can consist of single or multiple columns.

-- primary key on create table 
create table persons(
    id int primary key,
    name varchar(23)
);

create table persons(
    id int,
    name varchar(23),
    primary key(id)
);

-- To allow naming of a PRIMARY KEY constraint, and for defining a PRIMARY KEY constraint on multiple columns, use the following SQL syntax:

create table persons(
    id int not null,
    name varchar(40),
    email varchar(40) not null,
    constraint primary_key_person primary key (id, email)
);
-- id and email should be not null to make primary key of id and email 
select * from persons;
desc persons;
insert into persons values(1,'rahul','vishalnimbalkar@gmail.com');

-- Note: In the example above there is only ONE PRIMARY KEY (primary_key_person). However, the VALUE of the primary key is made up of TWO COLUMNS (id + email).

-- primary key on alter table 
drop table persons;
create table persons(
	id int,
    name varchar(59)
);
-- adding primary key (id column must not contain null values)
alter table persons modify id int primary key;

-- removing primary key 
alter table persons drop primary key;

-- another way to add primary key 
alter table persons add primary key(id);

-- 4.Foreign Key 
-- it is a column in one table, that refers to primary key in another table
-- foreign key can be duplicate 

-- foreign key on create table 
create table orders(
    id int,
    personId int,
    qnt int not null,
    total double not null,
    primary key(id),
    constraint const_key foreign key (personId) REFERENCES  persons(id)
);
desc orders;
select * from persons;
select * from orders;
insert into persons values(1, 'vishal'),(2, 'ganesh'),(3, 'rahul');
insert into orders values(2, 12,50,600.0);-- error bcz 12 is not present in the parent table

-- foreign key on alter table 
-- to create a foreign key constraint on already created coloum use following syntax 
alter table orders add foreign key(personId) REFERENCES persons(id);

-- drop foreign key 
show create table orders;
-- above command provide a constraint name 
-- like orders_ibfk_1
-- we can use this to delete foreign key constraint
alter table orders drop foreign key orders_ibfk_1;

-- 5.CHECK
-- it will apply specified condition on value if value satisfied given condition it will store value otherwise give error

-- check on create table
drop table persons;
create table persons(
    id int,
    email varchar(50),
    age int ,
    primary key(id),
    check(age >= 18),
    unique(email)
);
desc persons;

insert into persons values(1,'vishal',24);
insert into persons values(1,'vishal',14);-- error bcz of check is voileted

-- to define check on multiple columns and provide naming use following syntax 
create table persons(
    id int,
    email varchar(50),
    age int,
    primary key(id),
    constraint check(age >= 18 AND email is not null),
    unique(email)
);

-- check on alter table 
create table persons(
    id int,
    email varchar(50),
    age int,
    primary key(id),
    unique(email)
);
alter table persons add check(age >= 18);

alter table persons add constraint check_constraints check(age >= 18 and email = 'vishal@gmail.com');

-- drop check constraint
alter table persons drop check check_constraints;
alter table trainee_employee add is_active boolean;

-- 6.Default 
-- it is used to set default value to a coloumn
-- default value is added to all columns if no other value is specified 

-- default on create table 
create table persons(
    id int primary key,
    email varchar(49),
    is_active boolean default false,
    created_At datetime default current_timestamp
);
desc persons;
-- check for null on default 

-- default on alter table 
alter table persons alter email set default 'vishal@gamil.com';

-- drop default constraint
alter table persons alter email drop default;

-- 7.auto_increment
-- it increment unique column value automatically when new record inserted 
-- by default starting value is 1, and it is increment by 1 for each new record 
create table persons(
    id int primary key auto_increment,
    name varchar(50)
);
drop table persons;

-- to change the start of auto_increment use following syntax 
alter table persons auto_increment = 100;
insert into persons(name) values('vishal');
insert into persons(name) values ('sanket');
select * from persons;
insert into persons values (400, 'abc'); -- set auto_increament = 400;
insert into persons values (default, 'xyz'); -- id = 401
----------------------------------------------------------------------------------
-- #SQL operators
use demo;
create table students(
    id int primary key auto_increment,
    name varchar(50) not null,
    rollNO int not null unique,
    marks double(4,2) not null 
);
desc students;

INSERT INTO students (name, rollNO, marks) VALUES
('Alice', 101, 87.50),
('Bob', 102, 92.75),
('Charlie', 103, 76.00),
('David', 104, 88.25),
('Eva', 105, 69.50);
alter table students rename column rollNO to roll_no;

select * from students;
-- 1.Arithmatic operators
-- add(+)
-- add extra 5 marks in each row
update students set marks = ifnull(marks, 0) + 5;

-- substract(-)
-- remove 5 marks from each row 
update students set marks = ifnull(marks, 0) -5;

-- multiply(*)
-- multiply roll_no by 2 
update students set roll_no = roll_no * 2;

-- divide(/)
-- modulo(%)

-- 2.Comparision Operators 
    -- =	Equal to
    select * from students where name = 'alice';	
    select * from students where name like '%ce';
    -- >	Greater than	
    select * from students where marks > 80 and name like '%ce';
    -- <	Less than	
    select * from students where marks < 80;
    -- >=	Greater than or equal to
    select * from students where marks >= 92.75;
    -- <=	Less than or equal to
    select * from students where marks <= 92.75;
    -- != or <>	Not equal to
    select * from students where marks != 92.75;
    select * from students where marks <> 92.75;

-- 3.Logical Operators 
-- AND	
-- TRUE if all the conditions separated by AND is TRUE	
select * from students where marks > 90 and name = 'bob';
	
-- BETWEEN	
-- TRUE if the operand is within the range of comparisons	
select * from students where marks between 80 and 90;

-- IN	
-- TRUE if the operand is equal to one of a list of expressions	
select * from students where name in ('alice', 'David');

-- NOT	
-- Displays a record if the condition(s) is NOT TRUE	
select * from students where not marks > 80;-- gets all students with marks less than 80

-- OR	
-- TRUE if any of the conditions separated by OR is TRUE	
select * from students where name = 'alice' or marks >90; -- select all students with name alice and marks greater than 90

-- LIKE	
-- TRUE if the operand matches a pattern
select * from students;
select * from students where name like 'A%'; -- names start with A	
select * from students where name like 'b%'; -- like is case-insensitive
select * from students where binary name like 'b%'; -- use binary for case sensitive;
select * from students where name like '%e';-- names ends with e
select * from students where name like '%i%'; -- names that contains i

select * from students where name like '_o_';


-- Is 
-- it used to comparing null or boolean expression 
select * from students where marks is null; -- this returns rows with marks null
select * from students where marks = null; -- this is not working null=null is false, bcz null is 'unknown' 
select * from students where marks is not null; -- this returns rows with values

-- suppose students have boolean column isPresent
select * from students where isPresent is true;
select * from students where isPresent is false;
-- using = works same 
select * from students where isPresent = true;
select * from students where isPresent = false;

-- Expression	      Meaning
-- IS NULL	        Value is NULL
-- IS NOT NULL	    Value is not NULL
-- IS TRUE	        Boolean value is TRUE
-- IS FALSE	    Boolean value is FALSE
-- IS UNKNOWN	    Value is NULL (in logic)

-- which one is use is or =
-- when dealing with null use 'is'
-- when dealing with values use '='
-- when dealing with true/false use both 

-- ANY	
-- returns TRUE if any of the subquery values meet the condition
use assignments;
select * from employees;
select * from departments where id = any (select department_id from employees); 
-- above query is equal to 
select * from departments where id in (1,2,3);

-- ALL	
-- returns TRUE if all of the subquery values meet the condition	
select max(salary) from employees where job_title = all(select job_title from employees where job_title = 'developer');

-- EXISTS	
-- returns TRUE if the subquery returns one or more records	
select * from departments;
-- get departments those are present in employees table 
select * from departments where exists (select department_id from employees where departments.id = employees.department_id);

-- get departments those are not present in employees table 
select * from departments where not exists (select department_id from employees where departments.id = employees.department_id);
