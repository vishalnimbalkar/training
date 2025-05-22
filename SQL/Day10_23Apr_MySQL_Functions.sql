-- MySQL Functions
-- Function in mysql is reusable code that returns singel value 
-- functions accepts parameters, perform operations and return result
-- Syntax - 
    -- DELIMITER //
    -- CREATE FUNCTION function_name(param1 datatype, param2 datatype,....paramN datatype) RETURNS return_type
    -- DETERMINISTIC
    -- BEGIN
    --     -logic
    --     RETURNS value;
    -- END //
    -- DELIMITER ;

DETERMINISTIC :-
-- - function always returns same output when given the same input 

delimiter //
create function square(num int) returns int
deterministic 
BEGIN
    return num * num;
end //
delimiter ;

select square(4) as square;
-- - square(4) always returns 16

NOT DETERMINISTIC :-
-- function returns different output for same input 

delimiter //

create function random_number(num int) returns int
not deterministic 
BEGIN
    return num * rand();
end //
delimiter ;

select random_number(10);

-- randome_number(10) generate different output for same input

-- when to use DETERMINISTIC vs NOT DETERMINISTIC
-- when we skip deterministic or not deterministic then by default set to not deterministic

-- DETERMINISTIC :- 
-- - function does not depends on system values like time and randomness
-- output is predictable and consistent

-- NOT DETERMINISTIC :-
-- if function depends on time , random values or changing data.
-- output changes for same input 

-- SELECT my_function(x) FROM my_table;
-- If the function is DETERMINISTIC, MySQL might optimize and reuse the result for every x, especially if you're using it in an index or a stored view.

-- But if your function uses something like NOW() or RAND(), and you mark it as DETERMINISTIC, MySQL might reuse an outdated result — causing incorrect or unexpected behavior.

-- So marking it as NOT DETERMINISTIC tells MySQL:

-- “Hey, don’t cache this! Recalculate the result every time the function runs!”

-- Example :- add two numbers
delimiter //
create function add_numbers(number1 int, number2 int) returns int
deterministic 
begin 
	if number1 is null then 
		set number1 = 0;
	end if;
    if number2 is null then 
		set number2 = 0;
	end if;
    return number1 + number2;
end //

delimiter ;
drop function add_numbers;
select add_numbers(10,10);

-- view all user defined functoins
SHOW FUNCTION STATUS ;
-- view all fuctions for specific database
SHOW FUNCTION STATUS WHERE Db = 'company';


-- Questions
-- where we can use user defined functions
-- select , where and order by clause - can use both deterministic and not deterministic function
-- update and insert - can use both 
-- stored procedure - can use both 
-- view - deterministic is recommended for predictibility
show create table customer;
show create function square;

-- 	Function	sql_mode	Create Function	character_set_client	collation_connection	Database Collation
-- 	square	ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION	CREATE DEFINER=`root`@`localhost` FUNCTION `square`(num int) RETURNS int
--      DETERMINISTIC
--  BEGIN
--      return num * num;
--  end	utf8mb4	utf8mb4_0900_ai_ci	utf8mb4_0900_ai_ci

-- how to modify function
-- 1.drop function
-- 2.recreate it with updated logic

INSERT INTO employee (id, name, salary, desig, department) VALUES
(1, 'Alice', 55000.00, 'Developer', 'IT'),
(2, 'Bob', 62000.00, 'Analyst', 'Finance'),
(3, 'Charlie', 48000.00, 'HR Executive', 'HR'),
(4, 'David', 70000.00, 'Team Lead', 'IT'),
(5, 'Eva', 53000.00, 'Accountant', 'Finance'),
(6, 'Frank', 45000.00, 'Support', 'Customer Service'),
(7, 'Grace', 60000.00, 'Manager', 'Operations'),
(8, 'Hannah', 52000.00, 'Designer', 'Marketing'),
(9, 'Ian', 58000.00, 'QA Engineer', 'IT'),
(10, 'Jack', 49000.00, 'Recruiter', 'HR');
select * from employee;
delimiter //
create function increment_salary(salary decimal, increment int) returns decimal
deterministic
begin 
	return salary + increment;
end //
delimiter ;
-- < 50 = 0%
-- 50 -60 = 5%
-- > 60 = 7%
select *, increment_salary(salary, 5000) as new_salary from employee;

delimiter //
create function calculate_tax(salary decimal(10,2)) returns decimal(10,2)
deterministic
begin
	declare result decimal(10,2);
	if salary < 50000 then 
		set result = 0;
	elseif salary > 50000 then
		set result = (5/100)*salary;
    else
		set result = (7/100)*salary;
	end if;
    return result;
end //
delimiter ;

select *, calculate_tax(salary) from employee;

-- MySQL in-built functions
# String functions 
-- 1. ASCII() 
-- - returns the ascii value of first character
-- syntax - ASCII(character);
-- if more than one character is passed then only the first character ascii value is return
select ascii(name), desig from employee order by ascii(desig) desc;
select ascii(name) from users;

-- 2.CHAR_LENGTH() and CHARACTER_LENGTH() - both are equal
-- returns length of characters from string
select char_length('vishal  @&^%*^@%');

-- 3.CONCAT()
-- it adds two or more expressions together.
-- syntax - concat(exp1,exp2...expN);
-- if any of the expression is null returns null
select concat('hello ','everyone');-- 
select concat('hello', null); -- null-
select concat(name," sir") from employee;
select concat(name, email) from users;

-- 4.CONCAT_WS()
-- this function adds two or more expressions together with separator
-- syntax - concat_ws(separator, exp1,... expN);
-- if separator is null function returns null, separator is required
-- expression is also required if exp is null it will skipped.
select id,concat_ws('-',name,desig) from employee;
select group_concat(name order by name desc separator '-') from users;

-- 5.FIELD()
-- returns index position of a value in a list of values
-- function perform case-insensitive search
-- return 1 if value is present in list
-- if value is not present in list or it is null function returns 0.
-- syntax - field(value, val1,val2,... valN);
-- value - required, it is value that search in a list
select field('arjun', name) from users;
select field('a', 'a','b','c',null) ;	-- 


-- 6.INSERT()
-- The INSERT() function inserts a string within a string at the specified position and for a certain number of characters.
-- syntax - insert(string, position, number, string2);
-- string - A string that we modify
-- position - A position where we insert string2
-- number - number of characters we replace
-- string2 - a string that we insert.

select insert(name,5,10,' Hello') from employee;

select insert('hello world', 7, 6,'vishal'); -- index is start with 1 not 0
-- if any of the parameter is null it returns null 
-- if position is outside the length of string it returns string

-- 7.INSTR()
-- function returns the position of first occurence of string in another string
-- case-insensitive
-- syntax - instr(string1, string2);
select instr(name, 'l') from users;

select instr("vishal","i");
-- if string is not present returns 0
select instr(name, 'a') from employee;

-- 8.LCASE() and LOWER()
-- function converts given string into lower case 
-- syntax - lcase(text);
select lcase(name) from employee;
select lower(name) from employee;
select lcase(null); -- null

-- 9.UCASE() and UPPER()
-- function converts given string into upper case 
-- syntax - ucase(text);
select ucase(name) from employee;
select upper(name) from employee;
select ucase(null); -- null

-- 10.LEFT()
-- function extracts number of characters from a string(starting from left)
-- syntax - left(string, number_of_chars);
-- if number_of_chars is greater than length of string then returns whole string
select left(name, 2) from users;
select left(name, 12) from employee;

-- 10.RIGHT()
-- function extracts number of characters from a string(starting from right)
-- syntax - right(string, number_of_chars);
-- if number_of_chars is greater than length of string then returns whole string
select right(name, 2) from employee;
select right(name, 12) from employee;
-- if we pass number_of_chars null right() and left() returns null

-- 11.LENGTH()
-- It returns length of given string in bytes.
-- syntax - length(string);
select length('vishal');
select length(name) from employee;
select length('');-- 0
select length(null);-- null
select length(123);-- 3
select length(true);-- 1
select length(false);-- 1
select char_length(true);-- 1
select length(saafjsk);-- error - unknown column

-- 12.LOCATE()
-- function returns position of first occurence of a substring in a string
-- if substring is not found, it returns 0
-- case-insensitive search
-- this function equal to POSITION() function
-- POSITION(substring IN string)
-- syntax - locate(substring, string, start);
	-- substring - required, the substring to search in string
	-- string - required, the string that we searched
	-- start - optional, the starting position to start search, by default 1
select locate('a','vishal');
select position("a" in "vishal");
select locate('is', 'what is your name?');
select locate('is', 'what is your name?',8); 
select position('is' in 'what is your name');
-- if we pass null to any parameter it will return null 

select substr('my name is vishal', 4,1);
-- 13.SUBSTR()
-- function extract substring from a string (starting at any position)
-- note: SUBSTR() and  MID() are equal to SUBSTRING() function.
-- all three methods supports negative indexing
-- syntax - 
-- SUBSTR(string, start, length)  or SUBSTR(string from start for length);
-- string and start is required, length is oprional
select substr('My name is vishal', 4); -- name is vishal
select substr('My name is vishal', 4,7); -- name is
select substr('vishal', 2,null) ;
select substr('vishal', -4,3) ;

-- if any of the parameter is null then it will return null
select substring("My name is vishal",4);
select substring("My name is vishal",4,7);
select substring("My name is vishal",4,null);
select substring("My name is vishal",-4,2);
select mid("vishal", 4);

select mid("My name is vishal",4);
select mid("My name is vishal",4,7);
select mid("My name is vishal",4,null);
select mid("My name is vishal",-4);

-- 14.REPLACE()
-- function replace all occurences of a substring from string, with new substring  
-- case-sensitive replacement 
-- syntax - REPLACE(string, substring, new_string);
-- string - required, original string
-- substring - required, the substring to be replaced
-- new_string -  required, new replacement substring
select replace('My name is vishal', 'a','A'); -- My nAme is vishAl

-- 15.TRIM()
-- function remove leading and trailing spaces from string
-- syntax - TRIM(string);
select trim('   vishal  ');-- vishal
select trim(null); -- null
select trim(34   );

-- 16.LTRIM() and RTRIM()
-- LTRIM() remove leading spaces from string
-- RTRIM() reomve trailing spaces from string
-- syntax - LTRIM(string)  and RTRIM(string);
select ltrim('   vishal  ');-- vishal 
select rtrim('   vishal  ');--    vishal 


-- 17.FIND_IN_SET()
-- function returns position of a string within a list of strings
-- syntax - FIND_IN_SET(string, string_list);
-- string_list - required, the list of values to be searched(separated by commas)
-- return values - 
-- if string is not found in string_list then it returns 0
select find_in_set('vishal','hello,my,name,is,rahul,vishal');
select find_in_set('vishal',group_concat(name)) from employee;

-- if string or string_list is null function returns null
select find_in_set('vishal',null);
select find_in_set(null,'hello,my,name,is,rahul');
-- if string_list is '' empty then function returns 0
select find_in_set('jai',name) from employee;

-- 18.REVERSE()
-- function reverse given string 
-- syntax - reverse(string);
select reverse(name) from employee;
select reverse(null); -- null

-- 19.LPAD()
-- function left pads a string with another string
-- syntax - LPAD(string, length, lpad_string)
select lpad('vishal', 10, '*');
select rpad('vishal', 10, '*');