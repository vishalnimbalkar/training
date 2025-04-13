show tables; -- gets all table from database;
-- #Understanding of DML (Data Manipulation Language) commands
--  DML commands use to manipulate data of database 
-- 1.INSERT
--  Insert data into table 
--  adds new rows in an table 
--  There are two way to insert data into table 

--  a) Inserting only values 
--   This method is used when you want to insert data into all columns, without specifying column names:
--   syntax - INSERT INTO table_name VALUES (value1, value2, ...valueN); 
insert into employee values ("vishal", "vishal@gmail.com",'2025-04-10',default,'pune', 12000);
select * from employee;

-- b) Inserting column name and value both 
--  syntax - insert into table_name (column1, column2,..., columnN) values (value1, value2, ..., valueN);
insert into employee (name, email, hired_date, salary, address) values ('rahul','rahul@gmail.com', '2025-05-01', 15000, 'pune');

-- inserting multiple rows 
insert into employee values ('ganesh','ganesh@gmail.com', '2025-05-01', default, 'pune', 14000),('sanket','sanket@gmail.com', '2025-05-01',default, 'pune', 17000),('rahul','rahul@gmail.com', '2025-05-01', default, 'pune', 20000);

insert into employee (name, email,salary) values ('amol','amol@gmail.com', 23234),('mahesh','mahesh@gmail.com',432222);
-- for above query other columns are set to default value (Null)

-- Insert from another table 
-- suppose we have another table name trainee_employee and we want to add employees from trainee_employee to employee table 

create table trainee_employee(
    id int auto_increment,
    name varchar(50),
    email varchar(50),
    primary key(id)
);
insert into trainee_employee (name, email) values ('rushi', 'rushi@gmail.com'),('aniket','anikey@gmail.com');
select * from trainee_employee;
insert into employee (name ,email) select name , email from trainee_employee;
select * from employee;
-- column count should be match other wise it will give error

-- 2.UPDATE
-- it is used to midify existing records from the table 
--  we can update one or multiple column at a time using SET cluase
--  syntax - UPDATE table_name SET column1 = value1, column2 = value2 WHERE condition;
update employee set salary = 10000 where id = 1; 

-- updating multiple column 
update employee set salary = 25000, address = 'mumbai' where salary > 25000;

-- update without where claues
-- if we are not use where is query all rows will get updated
update employee set address = 'pune';

-- 3.DELETE
-- it allows to remove one or more rows from table based on condition 
-- drop removes entire table, but delete removes data only
-- syntax - DELETE FROM table_name WHERE condition;
-- if we use delete without where it will delete all rows from table  
delete from employee where id = 8;

-- delete all the records from table 
delete from trainee_employee;
select * from trainee_employee;

-- difference between delete without where vs truncaate table 
-- Feature	                DELETE FROM table;	                TRUNCATE TABLE table;
-- What it does	           Deletes all rows (row by row)	    Deletes all rows (fast & bulk)
-- Execution Type          DML (Data Manipulation Language)	    DDL (Data Definition Language)
-- Can be Rolled Back	   Yes (if inside a transaction)	    No (in most DBs, not rollback-able)
-- Triggers Executed	   Yes	                                No
-- Speed	               Slower (checks each row)	            Much faster (deallocates data pages)
-- Auto-increment Reset    No (counter stays the same)	        Yes (resets to 1 in MySQL)
-- WHERE Clause            Allowed	        	                No (deletes everything)

-- when to use:
-- Use DELETE when: You may want to rollback	
-- Use TRUNCATE when: You want a fast, permanent wipe

-- #Explore and apply different data types
--  in mysql there are main three data types: numeric, string , date and time
-- numeric
-- 92.55
-- double(4,2)
-- Integer type 
-- 1.TINYINT 
    -- Storage: 1 byte 
    -- Range: -128 to 127(signed) and 0 to 256(unsigned)
-- 2.SMALLINT 
    -- Storage: 2 byte 
    -- Range: -32,768 to 32,767(signed) and 0 to 65535(unsigned)
-- 3.MEDIUMINT 
    -- Storage: 3 byte 
    -- Range:  -8388608 to 8388607(signed) and 0 to 16777215(unsigned)
-- 4.INT 
    -- Storage: 4 byte 
    -- Range:  -2147483648 to 2147483647(signed) and 0 to 4294967295(unsigned)
    -- INTEGER	Equal to INT
-- 5.BIGINT 
    -- Storage: 8 byte 
    -- Range:  -9223372036854775808 to 9223372036854775807(signed) and 0 to 18446744073709551615(insigned)

-- Floating point/Decimal
-- 1.FLOAT(p)
-- MySQL uses the p value to determine whether to use FLOAT or DOUBLE for the resulting data type. If p is from 0 to 24, the data type becomes FLOAT(). If p is from 25 to 53, the data type becomes DOUBLE()
alter table employee add rating float(36); -- this command create DOUBLE type column
alter table employee add rating float(12); -- this command create FLOAT type column
alter table employee add dd float;  -- this command create FLOAT type column
desc employee;

-- 2.DOUBLE(size, d)
-- A normal-size floating point number. The total number of digits is specified in size. The number of digits after the decimal point is specified in the d parameter
alter table trainee_employee add rating double(3,2);

-- DOUBLE(3,2) = Total digits: 3, with 2 digits after the decimal.
-- So max value = 9.99
-- Min (negative) value = -9.99
-- Example values: 3.14, 0.99, 9.50
-- Not allowed: 10.00, 123.45

alter table trainee_employee add rating2 double(12,0); -- total digit 12, decimal digit trucated
alter table trainee_employee add rating3 double; -- Flexible float values does not have any limit
desc trainee_employee;

-- 3.DECIMAL(size, d)
	-- An exact fixed-point number. The total number of digits is specified in size. The number of digits after the decimal point is specified in the d parameter. The maximum number for size is 65. The maximum number for d is 30. The default value for size is 10. The default value for d is 0.
    -- DEC(size, d)	Equal to DECIMAL(size,d)
alter table trainee_employee add price decimal(5,2);
update trainee_employee set rating = 1;



-- String Type 
-- 1.CHAR(size)
-- A FIXED length string (can contain letters, numbers, and special characters). The size parameter specifies the column length in characters - can be from 0 to 255. Default is 1
alter table trainee_employee add grade char;
update trainee_employee set grade = 'A';

-- 2.VARCHAR(size)
-- A VARIABLE length string (can contain letters, numbers, and special characters). The size parameter specifies the maximum column length in characters - can be from 0 to 65535
-- note: we can use '' or "" to write char and varchar and text

-- 3.TEXT(size)	
-- Holds a string with a maximum length of 65,535 bytes
alter table trainee_employee add description text;
update trainee_employee set description = 'Holds a string with a maximum length of 65,535 bytes';
select * from trainee_employee;

-- 4.ENUM(val1, val2, val3, ...)	
-- A string object that can have only one value, chosen from a list of possible values. You can list up to 65535 values in an ENUM list. If a value is inserted that is not in the list, a blank value will be inserted. The values are sorted in the order you enter them
alter table trainee_employee add status enum('pending','approved','rejected');
desc trainee_employee;

-- 5.SET(val1, val2, val3, ...)	
-- A string object that can have 0 or more values, chosen from a list of possible values. You can list up to 64 values in a SET list
alter table trainee_employee add prefrences set('sms','email','mobile');
update trainee_employee set prefrences = 'sms,email';
update trainee_employee set prefrences = 'sms';

-- difference between enum and set 
-- - enum stores single value, set stores multiple values 
-- - enum is single-choise option like status or gender, set have combo selection like hobbies, tags.

-- 6.BLOB (Binary Large Object)
-- It is used to store data like files, images(jpg,png), or multimedia(video, audio).
alter table trainee_employee add profile_picture blob;

-- Date and Time Data Types 
-- 1.DATE 
-- Format: YYYY-MM-DD. The supported range is from '1000-01-01' to '9999-12-31'
alter table trainee_employee add joining_date date;
update trainee_employee set joining_date = '2025-03-17';
select * from trainee_employee;

-- 2.TIME
-- A time. Format: hh:mm:ss. The supported range is from '-838:59:59' to '838:59:59'
alter table trainee_employee add joining_time time;
update trainee_employee set joining_time = '10:00:00';
desc trainee_employee;

-- 3.DATETIME	
-- A date and time combination. Format: YYYY-MM-DD hh:mm:ss. The supported range is from '1000-01-01 00:00:00' to '9999-12-31 23:59:59'. Adding DEFAULT and ON UPDATE in the column definition to get automatic initialization and updating to the current date and time
alter table trainee_employee add joining_date_time datetime default current_timestamp;
alter table trainee_employee drop joining_date_time;

-- 4.TIMESTAMP	
-- A timestamp. TIMESTAMP values are stored as the number of seconds since the Unix epoch ('1970-01-01 00:00:00' UTC). Format: YYYY-MM-DD hh:mm:ss. The supported range is from '1970-01-01 00:00:01' UTC to '2038-01-09 03:14:07' UTC. Automatic initialization and updating to the current date and time can be specified using DEFAULT CURRENT_TIMESTAMP and ON UPDATE CURRENT_TIMESTAMP in the column definition
ALTER table trainee_employee add created_At timestamp default current_timestamp;
ALTER table trainee_employee add updated_At timestamp default current_timestamp on update current_timestamp;


-- 5.YEAR	
-- A year in four-digit format. Values allowed in four-digit format: 1901 to 2155, and 0000.
-- MySQL 8.0 does not support year in two-digit format.
alter table trainee_employee add birth_year year;
update trainee_employee set birth_year = '333' where id = 3;
select * from trainee_employee;

-- add 10 in all rows price 
update trainee_employee set price = ifnull(price,0)+10
--  if price is null it returns 0

-- IFNULL()
-- it is function in mysql to handle null values 
-- syntax - ifnull(expression, replacement_value);
--  if expression is not null, it returns expresion 
--  if expresion is null, it returns replacement_value