-- MYSQL Transaction 
-- transaction is group of statements that executed as single operation.
-- it works as all or nothing
-- all the operation inside transaction must be completed, otherwise it will roll back to previous state 
-- ex : transfering money from one account to another account, it debit money from one account and credit in another.
-- It ensures data integrity by following the ACID properties:
-- Atomicity - All or nothing.
-- Consistency - Data must be in a valid state before and after.
-- Isolation - Transactions don't interfere with each other(concurrent execution of transaction).
-- Durability - Once committed, changes are permanent.

create database transDB;
use transDB;
create table account(
 account_no int primary key,
 acc_holder_name varchar(50),
 balance decimal
);

insert into account values (1,'vishal',5000), (2,'rahul',5000);
select * from account;
-- covering the following aspects:
-- 1. BEGIN TRANSACTION (or START TRANSACTION)
--  start transaction statement use to start transaction, this shows begining of new transaction.
--  syntax - START/BEGIN TRANSACTION

-- 2. COMMIT
-- All changes saved into databases permanantly
-- Once we commit we cannot rollback.
-- syntax - COMMIT;
start transaction;
update account set balance = balance - 500 where account_no = 1;
update account set balance = balance + 500 where account_no = 2;
commit;
-- if we used above statements without commit what happens?
-- the changes are not saved permanatly on database 
-- the updates are visible only for current session.
-- if other users access account table, they will see old balcance
-- if we close the session, mysql automatically rollback the changes
select * from account;

-- 3. ROLLBACK
-- Cancel the transaction and reverts all changes made from the last transaction 
-- syntax - ROLLBACK;
begin;
update account set balance = balance - 500 where account_no = 1;
update account set balance = balance + 500 where account_n = 2; -- error
commit;
rollback;

select * from account;
-- 4. SAVEPOINT
-- we can create savepoints within transaction, which lets you rollback to that savepoint, without canceling entire transaction.
-- syntax - SAVEPOINT savepoint_name;
begin;
update account set balance = balance - 500 where account_no = 1;
update account set balance = balance + 500 where account_no = 2; 
savepoint money_transfered;
update account set acc_holder_name = 'ganesh';
rollback;
rollback to savepoint money_transfered;
commit;

-- 5. RELEASE SAVEPOINT
-- release delete savepoint created earlier.
-- after delete we cannot use that savepoints
-- syntax - RELEASE SAVEPOINT savepoint_name;
release savepoint money_transfered;

-- 6. SET TRANSACTION
-- set transcation is used to set characteristics of a transaction before it starts. 
-- syntax - SET [GLOBAL | SESSION] TRANSACTION
--     [ISOLATION LEVEL isolation_level]
--     [READ WRITE | READ ONLY];

-- we can set it just before starting transaction
-- SET TRANSACTION [ISOLATION LEVEL isolation_level] [READ WRITE | READ ONLY];
-- START TRANSACTION;
-- -- your SQL here
-- COMMIT;

-- Isolation levels :-
-- 1.READ UNCOMMITTED - can see uncommitted changes from other transaction (dirty read possible)
-- 2.READ COMMITTED - can only see committed data (no dirty reads)
-- 3.REPEATABLE READ - Default in mysql
-- 4.SERIALIZABLE - Strictest. Locks rows for reading (one at a time)

-- SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
-- START TRANSACTION;
-- -- safe reads without dirty data
-- COMMIT;

-- Access Modes :-
-- we can also defince wheather transaction is read-only or read-write
-- 1. READ ONLY - we can only runs selects, no insert, update, and delete
-- 2. READ WRITE -  default, all operations allowed 

-- SET TRANSACTION READ ONLY;
-- START TRANSACTION;
-- -- Only SELECTs allowed
-- COMMIT;

-- Example : -
-- ensures no dirty read when checking balance

begin;
update account set balance = balance - 500 where account_no = 1;
update account set balance = balance + 500 where account_no = 2; 

set transaction isolation level read committed;
start transaction;
select balance from account;
commit;
-- starting second transaction without commiting pervious one automatically commit the first one 

-- combine both isolation and access mode
-- SET TRANSACTION ISOLATION LEVEL REPEATABLE READ, READ ONLY;
-- START TRANSACTION;
-- -- safe and read-only
-- COMMIT;

-- Note : - set transaction must come before start transaction/begin
-- once transaction starts we cannot change isolation or access mode

-- set transaction 
-- scope - for next transaction only 
-- Just the next START TRANSACTION or BEGIN

-- set session transaction 
-- scope - session(single active connection)
-- all transaction in current session

-- set global transaction 
-- scope - global 
-- all future seesion(not current)

-- Additionally, please explore any new features or concepts related to transactions in MySQL.
 -- auto-commit
--  In mysql auto-commit is a mode where each command treated as transaction and it automatically committed 
--  DDL commands like insert, update and delete are always auto-committed, even if we off auto-commit

-- checks auto-commit 
 select @@autocommit;
-- Returns 1 → auto-commit is ON
-- Returns 0 → auto-commit is OFF

-- setting autocommit
 set autocommit = 1; -- for current session only
 -- -----------------------------------------------------------------------
 -- how to check which transaction is active
 SELECT * FROM information_schema.innodb_trx;-- get all transaction details
 
SHOW PROCESSLIST; -- shows which sessions are running
show engine InnoDB status;
--   TRANSACTIONS
--  ------------
--  Trx id counter 22034
--  Purge done for trx's n:o < 22033 undo n:o < 0 state: running but idle
--  History list length 1
--  LIST OF TRANSACTIONS FOR EACH SESSION:
--  ---TRANSACTION 283603287218176, not started
--  0 lock struct(s), heap size 1128, 0 row lock(s)
--  ---TRANSACTION 283603287217400, not started
--  0 lock struct(s), heap size 1128, 0 row lock(s)
--  ---TRANSACTION 283603287216624, not started
--  0 lock struct(s), heap size 1128, 0 row lock(s)
--  ---TRANSACTION 22033, ACTIVE 3 sec
--  2 lock struct(s), heap size 1128, 1 row lock(s), undo log entries 1
--  MySQL thread id 9, OS thread handle 9764, query id 68 localhost ::1 root starting
--  show engine InnoDB status
--  --------
 
 
select * from account;
update account set acc_holder_name = 'ganesh';
start transaction;
savepoint s1;
update account set balance = balance -500 where account_no = 1;
update account set balance = balance + 500 where account_no = 2;
savepoint s1;

rollback to savepoint s1;

rollback;
release savepoint s1;

-- after COMMIT AND ROLLBACK transaction is end

-- check autocommit after rollback

-- multiple savepoints with same name
-- when we create multiple savepoints with same name newly created savepoint overrite the old one

select @@autocommit;
set autocommit = 0;
-- set global transaction isolation level 
update account set balance = 5000;
select * from account;

start transaction;
savepoint s1;
update account set balance = balance - 500 where account_no = 1;
savepoint s2;
update account set balance = balance + 500 where account_no = 2;
commit;
rollback to savepoint s2;
rollback;