-- write a function to calculate product price after applying discount
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);
INSERT INTO products (name, price) VALUES 
('Laptop', 75000.00),
('Smartphone', 30000.00),
('Headphones', 2500.00),
('Keyboard', 1200.00),
('Mouse', 800.00),
('Monitor', 15000.00),
('USB Cable', 300.00);
select * from products;

delimiter //
create function apply_discount(price decimal(10,2), discount decimal(10,2)) returns decimal(10,2)
deterministic 
begin
	return price - (price * discount / 100);
end//
delimiter ;
select *,apply_discount(price, 10) as original_price from products;

-- can we update table details in function
-- ans: NO, we cannot perform insert, update and delete operations inside function.
-- also we cannot use transaction inside function

-- can we return multiple values in mysql
-- ans: function cannot return multiple values in mysql, we can use store procedure to return multiple values.

#Numeric Functions 
-- 1.ABS()
-- function returns absolute(positive) value of a number.
-- syntax - ABS(number);
select abs(-41);-- 41
select abs('-41');-- 41
select abs('-41abc');-- 41
select abs('abc41');-- 0
select abs('abc');-- 0

-- 2.CEIL() or CEILING()
-- function returns smallesst interger value that is bigger than or equal to number
-- syntax CEIL(number) or CEILING(number);
select CEIL(25.21);-- 26
select CEIL(25.91);-- 26
select CEIL(-25.21);-- 25
select CEIL('25.21');-- 26
select CEIL('25.21abc');-- 26
select CEIL('abc25.21');-- 0

-- 3.FLOOR()
-- function returns largest value that is smaller than or equal to number 
-- syntax - FLOOR(number);
select FLOOR(25.21);-- 25
select FLOOR(25.91);-- 25
select FLOOR(-25.21);-- -26
select FLOOR('25.21');-- 25
select FLOOR('25.21abc');-- 25
select FLOOR('abc25.21');-- 0
select FLOOR(null);-- null

-- 4.MOD()
-- function returns remainder of a number divided by another number
-- syntax - MOD(x, y); or x MOD y or x % y
select mod(10,3);-- 1
select mod(10,2);-- 0
select mod('10',3);-- 1
select mod(10,'3');-- 1
select mod('10','3');-- 1
select mod('10',null);-- null
select mod(null,3);-- null
 
-- 5.POW() or POWER()
-- function returns the value of number raised by another number 
-- syntax - POW(x,y) or POWER(x,y)
-- x - required, base
-- y - required, exponent
select pow(2,4); -- 16
select pow('2',2); -- 4
select pow(2,'4abc'); -- 16
select pow(2,null); -- null

-- 6.RAND()
-- function returns random number between 0 and 1. 0 to < 1;
-- syntax - RAND(seed);
-- seed - optional, if seed is specified it returns repeatable squance of random number.
select rand(1);-- 0.40540353712197724
select rand();
select floor(rand()*10);-- 

select ceil('24.5');-- 25
select floor(24.5);-- 25
select round(24.2);

-- Round()
-- 7.GREATEST()
-- function returns greatest value from a given list of arguments
-- syntax - greatest(arg1,arg2,...argN);
select greatest(12,1,3423,413,142); -- 3423
select greatest('12',1,3423,413,142); -- 413 - returns greatest as string
select greatest('12',1,3423,413,142,'5'); -- 5 
select greatest(salary,id) from employee; -- returns greater from id and salary from every row
select max(salary) from employee; -- returns max salary from all rows


-- 8.LEAST()
-- function returns smallest value from a given list of agruments
-- syntax - LEAST(arg1,arg2,...argN);
select least(12,1,3423,413,142); -- 1
select least('12',1,3423,413,142); -- 1
select least('12',3423,413,142,5); -- 12
select least(salary,id) from employee; -- returns least from id and salary from every row
select min(salary) from employee; -- returns min salary from all rows

-- 9.TRUNCATE()
-- function truncates a number to the specified number of decimal places.
-- syntax - truncate(number, decimals)

select truncate(12.2222, 2);-- 12.22
select truncate(12.2222, 6);-- 12.2222
select format(12.2222, 6);-- 12.222200

-- 10.FORMAT()
-- function rounds specified number into a specified decimals.
-- syntax - format(number, decimal_places);
select format(1333332.233324, 10);-- 1,333,332.2333240000

-- SUM() / AVG() / MAX() / MIN() / COUNT() – Aggregates. 

#Date Functions
-- 1.NOW()
-- function returns current date and time
-- Note: The date and time is returned as "YYYY-MM-DD HH:MM:SS" (string) or as YYYYMMDDHHMMSS.uuuuuu (numeric).
-- syntax - NOW();
select now(); 

-- 2.CURRENT_TIMESTAMP()
-- function returns current date and time
-- Note: The date and time is returned as "YYYY-MM-DD HH:MM:SS" (string) or as YYYYMMDDHHMMSS.uuuuuu (numeric).
-- syntax - CURRENT_TIMESTAMP();
select current_timestamp();
-- both now() and current_timestamp() works same 

-- 3.CURDATE()
-- function returns the current date.
-- The date is returned as "YYYY-MM-DD" (string) or as YYYYMMDD (numeric).
-- This function equals the CURRENT_DATE() function.
-- syntax - CURDATE();
select curdate();

-- 4.CURTIME()
-- function returns current time.
-- The time is returned as "HH-MM-SS" (string) or as HHMMSS.uuuuuu (numeric).
-- This function equals the CURRENT_TIME() function.
-- syntax - CURTIME();
select curtime();

-- 5.DATE_ADD()
-- functions add time/date interval to a date and returns date.
-- syntax - DATE_ADD(date, interval value addUnit);
-- date - required, a date to be modify
-- value - required, value of time/date interval to be add. both positive and negative values are allowed 
-- addUnit - required, the type of addUnit to add.
			-- MICROSECOND SECOND MINUTE HOUR DAY WEEK MONTH QUARTER YEAR SECOND_MICROSECOND MINUTE_MICROSECOND MINUTE_SECOND 
			-- HOUR_MICROSECOND HOUR_SECOND HOUR_MINUTE DAY_MICROSECOND DAY_SECOND DAY_MINUTE DAY_HOUR YEAR_MONTH
select date_add('2025-04-24', interval 10 day);;
select date_add('2025-04-24', interval 10 year);
select date_add('2025-04-24', interval 10 month);
select date_add(now(), interval 10 month);
select date_add(now(), interval 10 minute);
select date_add(now(), interval 10 hour);
select date_add(now(), interval -20 hour); -- substract 20 hours

select date_add(current_timestamp(), interval 45 minute);
select date_sub(current_timestamp(), interval 45 minute);

-- 5.DATE_SUB()
-- functions substract time/date interval to a date and returns date.
-- syntax - DATE_SUB(date, interval value addUnit);
-- date - required, a date to be modify
-- value - required, value of time/date interval to be substract. both positive and negative values are allowed 
-- addUnit - required, the type of addUnit to substract.
			-- MICROSECOND SECOND MINUTE HOUR DAY WEEK MONTH QUARTER YEAR SECOND_MICROSECOND MINUTE_MICROSECOND MINUTE_SECOND 
			-- HOUR_MICROSECOND HOUR_SECOND HOUR_MINUTE DAY_MICROSECOND DAY_SECOND DAY_MINUTE DAY_HOUR YEAR_MONTH
select date_sub('2025-04-24', interval 10 day);
select date_sub('2025-04-24', interval 10 year);
select date_sub('2025-04-24', interval 10 month);
select date_sub(now(), interval 10 month);
select date_sub(now(), interval 10 minute);
select date_sub(now(), interval 10 hour);
select date_sub(now(), interval -20 hour); -- add 20 hours

-- 6.DATEDIFF()
-- function returns number of days between two date values.
-- syntax - datediff(date1, date2);
-- date1 and date2 are requireds.
select datediff('2025-04-24','2025-04-1'); -- 23
select datediff('2025-04-24','2024-04-24 17:57:02');-- 365
select datediff('2024-04-24','2025-04-24');-- -365
select datediff('2025-04-26','2025-04-25 17:57:02');-- 1

DELIMITER //

CREATE FUNCTION delete_employee(emp_id INT)
RETURNS INT
DETERMINISTIC
BEGIN
    DELETE FROM employee WHERE id = emp_id;
    RETURN ROW_COUNT();  -- Return the number of rows affected
END //

DELIMITER ;
drop function delete_employee;
select delete_employee(2);
select * from employee;

-- 7.DATE_FORMAT()
-- function formats date as specified 
-- syntax - date_format(date, format);
-- date - required, A date to be formated
-- format - required, it can be one of the following:
			-- %a	Abbreviated weekday name (Sun to Sat)
			-- %b	Abbreviated month name (Jan to Dec)
			-- %c	Numeric month name (0 to 12)
			-- %D	Day of the month as a numeric value, followed by suffix (1st, 2nd, 3rd, ...)
			-- %d	Day of the month as a numeric value (01 to 31)
			-- %e	Day of the month as a numeric value (0 to 31)
			-- %f	Microseconds (000000 to 999999)
			-- %H	Hour (00 to 23)
			-- %h	Hour (00 to 12)
			-- %I	Hour (00 to 12)
			-- %i	Minutes (00 to 59)
			-- %j	Day of the year (001 to 366)
			-- %k	Hour (0 to 23)
			-- %l	Hour (1 to 12)
			-- %M	Month name in full (January to December)
			-- %m	Month name as a numeric value (00 to 12)
			-- %p	AM or PM
			-- %r	Time in 12 hour AM or PM format (hh:mm:ss AM/PM)
			-- %S	Seconds (00 to 59)
			-- %s	Seconds (00 to 59)
			-- %T	Time in 24 hour format (hh:mm:ss)
			-- %U	Week where Sunday is the first day of the week (00 to 53)
			-- %u	Week where Monday is the first day of the week (00 to 53)
			-- %V	Week where Sunday is the first day of the week (01 to 53). Used with %X
			-- %v	Week where Monday is the first day of the week (01 to 53). Used with %x
			-- %W	Weekday name in full (Sunday to Saturday)
			-- %w	Day of the week where Sunday=0 and Saturday=6
			-- %X	Year for the week where Sunday is the first day of the week. Used with %V
			-- %x	Year for the week where Monday is the first day of the week. Used with %v
			-- %Y	Year as a numeric, 4-digit value
			-- %y	Year as a numeric, 2-digit value
select date_format(now(), '%Y');-- 2025
select date_format(now(), '%a');-- Thu
select date_format(now(), '%h');-- 05
select date_format(now(), '%h/%i/%s');-- 05 30 12
select date_format(now(), '%d %m %Y');
select time(now());
select curtime();
select current_time();
select date_format(now(), '%W, %m %Y');

-- 8.YEAR()
-- function extract year from given date 
-- syntax - year(date);
select year(now());-- 2025

-- 9.MONTH()
-- function extract month from given date
-- syntax - month(date)
select month(now()); -- 4

-- 10.DAY()
-- function extract day from given date
-- syntax - day(date)
select day(now()); -- 24

-- 11.WEEK()
-- function returns week number for a given date.(0 to 53)
-- syntax - week(date,firstdayofweek);
-- firstdayofweek - 	
		-- Optional. Specifies what day the week starts on. Can be one of the following:
		-- 0 - First day of week is Sunday
		-- 1 - First day of week is Monday and the first week of the year has more than 3 days
		-- 2 - First day of week is Sunday
		-- 3 - First day of week is Monday and the first week of the year has more than 3 days
		-- 4 - First day of week is Sunday and the first week of the year has more than 3 days
		-- 5 - First day of week is Monday
		-- 6 - First day of week is Sunday and the first week of the year has more than 3 days
		-- 7 - First day of week is Monday
select week(now());-- 
select week('2025-12-31'); -- 2

-- 12.DAYNAME()
-- function returns weekday name for a given date.
-- syntax - dayname(date);
select dayname(now()); -- Thursday
select dayname('2025-12-31'); -- Wednesday

-- 13.MONTHNAME()
-- function returns month name for a given date.
-- syntax - monthname(date);
select monthname(now()); -- April
select monthname('2025-12-31'); -- December

-- 14.TIMEDIFF()
-- function returns the difference between two time/datetime expressions.
-- syntax - timediff(time1,time2);
-- note: time1 and time2 should be in same format.
select timediff("13:10:11", "13:10:10");-- 00:00:01
select timediff("13:10:11", "12:10:10");-- 01:00:01
select timediff(now(), "2025-4-24 13:10:10");-- 05:29:14
select timediff(now(), "13:10:10");-- null - bcz date is in different format

#Advance functions
-- 1.IF()
-- function returns value if a conditonis true, otherwise return another value if condition is false.
-- syntax - if(condition, value_if_true, value_if_false);
select if(10<8, 'Yes','No');-- No
select name, if(salary < 50000, "jr", "sr") from employee;

-- 2.IFNULL()
-- function returns specified value if expression is null
-- if expression is not null then returns expression
-- syntax - ifnull(expression, alt_value);
select ifnull(null,0);
select ifnull(1,0);

-- 3.ISNULL()
-- function returns 0 or 1 based on wheather exression is null.
-- if expression is null, function returns 1, otherwise 0.
-- syntax - isnull(expression);
select isnull('vishal');-- 0
select isnull(true);-- 0
select isnull(13);-- 0
select isnull(null);-- 1

-- 4.COALESCE()
-- function returns first not null value from a list.
-- syntax - coalesce(val1, val2, ... valN);
select coalesce(null, 'vishal',2333, true, null);
select coalesce(null, null, null); -- null
select * from products;
select coalesce(salary) from employee;

-- 5.CASE
-- The CASE statement goes through conditions and return a value when the first condition is met (like an IF-THEN-ELSE statement).
--  So, once a condition is true, it will stop reading and return the result.
-- If no conditions are true, it will return the value in the ELSE clause.
-- If there is no ELSE part and no conditions are true, it returns NULL.
-- Syntax - 
-- case
-- 	when condition then result1
--     when condition then result2
--     when condition then resultN
--     else result
-- end;
select salary,case
when salary < 50000 then 'jr dev'
when salary > 50000 then 'sr dev'
else 'manager'
end
from employee;

select salary, 
case
	when salary < 50000 then 'jr dev'
    when salary < 70000 then 'sr dev'
    else 'manager'
end
from employee;

select * from employee order by 
case 
	when desig is null then name
    else desig
end;

-- 6.CAST()
-- function converts given value into specified data types
-- syntax - cast(value as datatype);
select cast('2025-4-12' as date);
select cast('10:06:40' as time);
select cast(65 as char);
select cast(12 as decimal(10,3));-- 12.000
select cast('23' as unsigned); 
-- instead of int use unsigned or signed 

-- 7.CONVERT()
-- function converts given value into specified datatype or character set.
-- syntax - convert(value, type); OR convert(value using charset);
select convert(150, char);
select convert('10:06:40', time);

-- 8.VERSION()
-- function returns the current version of mysql database as string
-- syntax - version();
select version(); -- 8.0.41

-- 9.LAST_INSERT_ID()
-- function returns the AUTO_INCREMENT id of the last row that has been inserted or updated in a table.
-- syntax - last_insert_id(expression);
-- expression - optional
select last_insert_id();
select * from products;
insert into products values (default, 'tv',12333.33);

-- 10.DATABASE()
-- function return the name of the current database.
-- syntax - database();
select database();

-- 11.USER() 
-- function returns the current user name and host name for the MySQL connection.
-- syntax - user();
select user(); -- root@localhost

-- String Functions
-- ASCII, CHAR_LENGTH, CHARACTER_LENGTH, CONCAT, CONCAT_WS, FIELD, FIND_IN_SET,
-- FORMAT, INSERT, INSTR, LCASE, LEFT, LENGTH, LOCATE, LOWER, LPAD, LTRIM,
-- MID, POSITION, REPEAT, REPLACE, REVERSE, RIGHT, RTRIM,
-- SUBSTR, SUBSTRING, TRIM, UCASE, UPPER

-- Numeric Functions
-- ABS, AVG, CEIL, CEILING,COUNT, 
-- FLOOR, GREATEST, LEAST, MAX, MIN, MOD,
--  POW, POWER, RAND, ROUND, SQRT, SUM,TRUNCATE

--  Date Functions
-- ADDDATE, ADDTIME, CURDATE, CURRENT_DATE, CURRENT_TIME, CURRENT_TIMESTAMP,
-- CURTIME, DATE, DATEDIFF, DATE_ADD, DATE_FORMAT, DATE_SUB, DAY, DAYNAME, HOUR, MINUTE,
-- MONTH, MONTHNAME, NOW, SECOND,TIME, TIMEDIFF, TIMESTAMP, WEEK, YEAR

--  Advanced Functions
-- CASE, CAST, COALESCE, CONNECTION_ID, CONVERT,
-- CURRENT_USER, DATABASE, IF, IFNULL, ISNULL, LAST_INSERT_ID,
-- SESSION_USER, SYSTEM_USER, USER, VERSION
