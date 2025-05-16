create database triggersDB;
use triggersDB;

-- Triggers 
-- it is a store procedure in a database that automatically executes when event occurs.
-- by using triggers we can automate tasks
-- trigger can executed when some record is inserted or updated or delated in table.
-- syntax - 
delimiter $
-- CREATE TRIGGER [trigger_name]
-- [before | after]
-- {insert | update | delete}
-- ON [table_name]
-- FOR EACH ROW 
-- BEGIN
--     trigger_body
-- END$
delimiter ;

delimiter :
create trigger my_trigger
before insert 
on account
for each row
begin
	-- statements
end :
delimier ;

-- - [before | after] : specifies trigger is fire before or after a event.
-- - {insert | update | delete} : specifies the operation that active trigger.
-- - for each row - it execute once for each affected row 
-- - trigger_body : statements that are executed when trigger occurs.

-- Drop Trigger
-- syntax - DROP TRIGGER trigger_name;

create table customer(
	acc_no int primary key, 
    name varchar(50),
    balance decimal
);
desc customer;

create table balance_logs(
	acc_no int, 
    balance decimal,
    foreign key(acc_no) references customer(acc_no)
);
desc balance_logs;
insert into customer values (1000, "vishal", 7000);
insert into customer values (1001, "rahul", 12000);
select * from customer;
select * from balance_logs;

-- Different Types of Triggers 
-- 1.Before Update trigger 
delimiter \\
create trigger track_acc_balance 
before update
on customer 
for each row
begin
insert into balance_logs values (old.acc_no, old.balance);
end \\
delimiter ;

update customer set balance = 8000 where acc_no = 1000;
update customer set balance = 15000 where acc_no = 1001;

-- 2.After update trigger 
create table balance_logs_updated(
    acc_no int, 
    balance decimal,
    foreign key(acc_no) references customer(acc_no)
);

select * from balance_logs_updated;
delimiter //
create trigger track_updated_balance
after update on customer 
for each row
begin
 insert into balance_logs_updated values (new.acc_no, new.balance);
end//
delimiter ;
update customer set balance = 9000 where acc_no = 1000;

-- 3.Before Insert Trigger 
-- if customer is inserted without balance instead of null set it to 0
delimiter //
create trigger set_balance 
before insert on customer
for each row 
begin
	if new.balance is null then
		set new.balance = 0;
	end if;
end //
delimiter ;
select * from customer;
insert into customer (acc_no, name) values (1002, 'ganesh');

-- 4.After Insert Trigger
-- after customer is inserted into customer insert customer logs into another table
create table customer_logs(
	log_id int primary key auto_increment,
    customer_id int,
    created_At datetime default current_timestamp
);

delimiter //
create trigger maintain_customer_logs 
after insert on customer
for each row 
begin 
 insert into customer_logs values (default, new.acc_no, default);
end //
delimiter ;

insert into customer values (1003, 'sanket', 5000);
select * from customer;
select * from customer_logs;

-- 5.Before delete
-- before deleting customer add customer to backup table
create table customer_backup(
	id int primary key auto_increment,
    acc_no int,
    name varchar(50),
    balance decimal
);

delimiter //
create trigger backup 
before delete on customer 
for each row 
begin
	insert into customer_backup values (default, old.acc_no, old.name, old.balance);
end // 
delimiter ;

delete from customer where acc_no = 1003;
select * from customer_backup;

-- 6.After delete trigger
-- after deleting customer add delation date in a table with customer details
create table cust_delation_details(
	id int primary key auto_increment,
    customer_id int, 
    delation_date timestamp default current_timestamp
);

delimiter //
create trigger customer_delation_date 
after delete on customer 
for each row 
begin
	insert into cust_delation_details values (default, old.acc_no, default);
end //
delimiter ;

delete from customer where acc_no = 1002;
select * from cust_delation_details;

-- we cannot alter triggers in mysql 
-- but we can in oracle and sql server
-- mysql dose not guarantee order of execution of multiple triggers on same event
-- every trigger is inside transaction automatically when some errors occurs it will rollback 

-- 1. Can a trigger modify the same table it is triggered on?
-- Example: A BEFORE UPDATE trigger on customer tries to UPDATE the same customer table.
delimiter //
create trigger modify_same_table 
before update on customer 
for each row
begin 
	update customer set balance = 0 where acc_no = old.acc_no;
end // 
delimiter ;
update customer set name = 'abc' where acc_no = 1000;
select * from customer;
-- Error Code: 1442. Can't update table 'customer' in stored function/trigger because it is already used by statement which invoked this stored function/trigger.	0.047 sec

-- 2. Can you create a trigger that calls a stored procedure?
-- Can a trigger CALL my_procedure() inside the BEGIN...END block?
-- ans : yes we can call store procedure inside begin...end, but if store procedure try to modify same table it gives error

-- 3. How does a trigger behave if an error occurs inside it?
-- What happens to the main SQL operation if the trigger fails?
-- Does the row still get updated or inserted?
-- ans : rollback all changes 

-- 4. Can you have multiple triggers of the same type on the same table?
-- Example: Two BEFORE INSERT triggers on orders.
-- Will MySQL allow it?
-- If not, how can you work around this limitation?
-- ans: no mysql allows only one trigger per event (only one before insert per table )

-- 5. Can a trigger be triggered by another trigger? (Chained triggers)
-- If trigger A modifies table B, and trigger B is on table B, does trigger B fire?
-- ans: YES
-- example : create backup for balance_logs table that contains balance logs when customer balance changes it stores acc_no and old balance from customer table 

create table balance_logs_backup (
 id int primary key auto_increment,
 acc_no int,
 balance decimal
);
delimiter //
create trigger balance_logs_backup_trigger 
before delete on balance_logs
for each row
begin 
	insert into balance_logs_backup values (default, old.acc_no, old.balance) ;
end //
delimiter ;
select * from balance_logs;
select * from balance_logs_backup;

delete from balance_logs where acc_no = 1000;

-- 6. Are triggers executed before or after constraints are checked (like NOT NULL, UNIQUE, FOREIGN KEY)?
-- What if a trigger sets a value that violates a constraint?
-- ans: BEFORE triggers run before constraints are checked.
-- 		AFTER triggers run after constraints are enforced.

-- 7. What happens if you use OLD in a BEFORE INSERT trigger?
-- Will it cause an error?
-- Why?
-- ans: it will throw error, bcz there is no old row yet

-- 8. Can a BEFORE DELETE trigger block a delete operation by raising an error?
-- How can you use SIGNAL SQLSTATE inside a trigger to prevent a delete?
-- ans: YES

-- 9. Can you use a trigger to log changes across multiple rows updated in a single query?
-- What if your UPDATE query affects 5 rows?
-- Does the trigger run once or 5 times?
-- ans: triggers runs once for each affected row, not once per statement

-- 10. If autocommit is ON, can you still roll back changes made inside a trigger?
-- Is it possible to rollback from inside the trigger if an exception occurs?
-- ans: no, we cannot manually rollback inside triggers, if error occurs it will automatically rollback

create table employee_logs(
	log_id int primary key auto_increment,
    employee_id int,
    created_At timestamp default current_timestamp
);
desc employee_logs;
delimiter //
create trigger employee_logs_trigger 
after insert on employee 
for each row 
begin
	insert into employee_logs values (default, new.employee_id, default);
end //
delimiter ;
drop trigger employee_logs_trigger;
insert into employee values(default, 'sanket','salunke','sanket@gamil.com','7744855070','2024-3-3','IT_PROG',30000,1,1);
insert into employee values(default, 'rahul','salunke','sanket@gamil.com','7744855070','2024-3-3','IT_PROG',30000,1,1);
select * from employee_logs;

-- When to use before vs after 
-- before :-
-- if You want to validate, modify or stop changes before it happens 
-- - modify data before it writtens (format names, set default values)
-- - Logs old values before overwitten
-- - prevent invalid changes using condition
desc employee;
create table logs(
	log_id int primary key auto_increment,
    created_At datetime,
    trigger_name varchar(50),
    trigger_action varchar(50)
);

delimiter //
create trigger validate_data 
before insert on employee
for each row
begin 
	if new.first_name is null then
		set new.first_name = 'guest';
	end if;
    insert into logs values(default, current_timestamp(),'validate_data','insert before');
end //
delimiter ;
insert into employee(last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) values('nimbalkar','vishal@gamil.com','7744855070','2024-3-3','IT_PROG',30000,1,1);
select * from employee;
select * from logs;

-- After :-
-- if we want to react to changes the successfully happens 
-- - Log final committed values
-- - insert records in another table 

delimiter //
create trigger log_data 
after insert on employee
for each row
begin
	insert into logs values (default, current_timestamp(),'log_data','insert after');
end //
delimiter ;