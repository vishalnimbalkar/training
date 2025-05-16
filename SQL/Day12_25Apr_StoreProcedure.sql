show create procedure get_max_salary;
-- Store Proceduce
-- It is named group of statements that are store in database and can be reused when we call it.
-- syntax -
    -- DELIMITER // 
    -- CREATE PROCEDURE procedure_name([IN|OUT|INOUT] param_name datatype, ...)
    -- BEGIN
    --     -- statements...
    -- END//
    -- DELIMITER ;

    -- example :-
    delimiter //
    create procedure show_details ()
    begin 
        select * from employee;
    end //
    delimiter ;

-- calling store procedure
call show_details();

-- store proceduce with in parameters
delimiter //
create procedure get_by_desig(in emp_desig varchar(40))
begin 
	select * from employee where desig = emp_desig;
end //
delimiter ;
call get_by_desig('Developer');

-- update employee name by id 
delimiter //
create procedure update_name(in emp_name varchar(40),in emp_id int)
begin 
	update employee set name = emp_name where id = emp_id;
end //
delimiter ;
call update_name('vishal',1);

-- delete employee by id 
delimiter //
create procedure delete_emp(in emp_id int)
begin 
	delete from employee where id = emp_id;
end //
delimiter ;
call delete_emp(10);

-- store procedure with out parameter
-- get max salary
delimiter //
create procedure get_max_salary(out max_salary decimal(10,2))
begin 
	select max(salary) into max_salary from employee;
end //
delimiter ;
call get_max_salary(@max_salary);
select @max_salary;

-- get employee name by department
delimiter //
create procedure get_name_by_depart(inout emp_name varchar(50))
begin 
	select group_concat(name) into emp_name from employee where department = emp_name;
end //
delimiter ;
drop procedure calculate_price;
SET @department = 'IT';
call get_name_by_depart(@department);
select @department;

-- calcualte product price by applying discount
delimiter //
create procedure calculate_price(in product_id int, inout discount decimal(10,2))
begin 
	declare old_price decimal(10,2);
    select price into old_price from products where id = product_id;
    set discount = old_price - (old_price * discount /100);
end //
delimiter ;

set @disc = 10;
call calculate_price(1,@disc);
select @disc;
select * from products;

-- delete store procedure 
drop procedure show_details;

#store procedure vs function
-- function returns exactly one value , procedure returns 0, 1 or more values using in/out/inout.
-- function supports in/out/inout , procedure supports only in by default.
-- function used in select, where etc, procedure cannot directly used in select.
-- use of DML in function not recommended, can use DML.
-- function not allowed DDL, use of DDL possible using dynamic sql(prepare, execute).
-- function called using select , procedure called using call procedure_name().

-- function cannot call store procedure, but store procedure can call functions inside it
-- we can set default value to procedure parameters and function parameters
-- CREATE PROCEDURE add_employee(
--     IN emp_name VARCHAR(100), 
--     IN emp_salary DECIMAL(10,2) DEFAULT 30000.00
-- )
-- BEGIN
--     INSERT INTO employees(name, salary) VALUES (emp_name, emp_salary);
-- END;
-- CREATE FUNCTION calculate_discount(price DECIMAL(10,2), discount_rate DECIMAL(5,2) DEFAULT 10)
-- RETURNS DECIMAL(10,2)
-- DETERMINISTIC
-- BEGIN
--     DECLARE discounted_price DECIMAL(10,2);
--     
--     SET discounted_price = price - (price * discount_rate / 100);
--     
--     RETURN discounted_price;
-- END;


select field('vishal', name) from employee;
select round(123.53,3);