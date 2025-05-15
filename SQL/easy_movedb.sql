create database easy_moveDB;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    role ENUM('customer', 'driver', 'admin') NOT NULL DEFAULT 'customer',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
desc bookings;
ALTER TABLE users MODIFY COLUMN role ENUM('customer', 'driver') NOT NULL DEFAULT 'customer';

CREATE TABLE vehicles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    driver_id INT NOT NULL,
    vehicle_type VARCHAR(50) NOT NULL,
    vehicle_number VARCHAR(20) UNIQUE NOT NULL,
    capacity INT NOT NULL,
    status ENUM('available', 'unavailable') NOT NULL DEFAULT 'available',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (driver_id) REFERENCES users(id) ON DELETE CASCADE
);
show create table bookings;
alter table bookings drop foreign key bookings_ibfk_4;
alter table bookings drop column driver_id;
CREATE TABLE bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
    driver_id INT,
    pickup_location VARCHAR(255) NOT NULL,
    dropoff_location VARCHAR(255) NOT NULL,
    booking_status ENUM('pending', 'accepted', 'completed', 'cancelled') NOT NULL DEFAULT 'pending',
    fare DECIMAL(10,2) NOT NULL,
    payment_status ENUM('pending', 'paid') NOT NULL DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (driver_id) REFERENCES users(id) ON DELETE SET NULL ON UPDATE CASCADE
);
alter table bookings add FOREIGN KEY (driver_id) REFERENCES users(id) ON DELETE SET NULL ON UPDATE CASCADE;
select * from bookings;
desc bookings;
select * from users;
CREATE TABLE payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    booking_id INT NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    payment_method ENUM('cash', 'card', 'UPI', 'wallet') NOT NULL,
    payment_status ENUM('pending', 'successful', 'failed') NOT NULL DEFAULT 'pending',
    transaction_id VARCHAR(100) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (booking_id) REFERENCES bookings(id) ON DELETE CASCADE
);

insert into payments values (default, 9, 250, 'UPI','pending','dghr3434lkjg',default);
CREATE TABLE admin (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
show create table bookings;
select * from admin;
select * from users;
select * from bookings;
select * from payments;
desc vehicles;
select * from vehicles;
insert into admin values (default, 'Vishal Nimbalkar', 'vishalnimbalkar78@gmail.com','Vishal@123',default);
delete from users where id = 1;
select * from vehicles where driver_id = 32;
DELIMITER $$
update bookings set driver_id = null, booking_status = 'pending' where id = 43;

CREATE TRIGGER before_booking_update
BEFORE UPDATE ON bookings
FOR EACH ROW
BEGIN
    IF OLD.driver_id IS NULL AND NEW.driver_id IS NOT NULL THEN
        SET NEW.booking_status = 'accepted';
    END IF;
END$$

DELIMITER ;

INSERT INTO vehicles (driver_id, vehicle_type, vehicle_number, capacity, status, created_at) VALUES
(32, 'Truck', 'KA01AB1234', 1000, 'available', NOW()),
(32, 'Van', 'MH12CD5678', 500, 'unavailable', NOW()),
(32, 'Mini Truck', 'DL08EF9012', 750, 'available', NOW()),
(32, 'Bike', 'TN09GH3456', 100, 'available', NOW()),
(32, 'Pickup', 'RJ14IJ7890', 600, 'unavailable', NOW());


INSERT INTO users (name, email, password, phone, role, created_at) VALUES
-- Customers
('Alice Johnson', 'alice@example.com', 'hashedpassword1', '9876543210', 'customer', NOW()),
('Bob Smith', 'bob@example.com', 'hashedpassword2', '9123456780', 'customer', NOW()),
('Charlie Brown', 'charlie@example.com', 'hashedpassword3', '9988776655', 'customer', NOW()),
('Diana Prince', 'diana@example.com', 'hashedpassword4', '9090909090', 'customer', NOW()),
('Ethan Ray', 'ethan@example.com', 'hashedpassword5', '9012345678', 'driver', NOW()),
('Fiona Green', 'fiona@example.com', 'hashedpassword6', '9112233445', 'driver', NOW()),
('George White', 'george@example.com', 'hashedpassword7', '9321654987', 'driver', NOW()),
('Hannah Lee', 'hannah@example.com', 'hashedpassword8', '9445566778', 'driver', NOW());


create database products_db;
create table products(
id int primary key auto_increment,
product_name varchar(50),
product_qnt int,
product_price decimal(10,2),
created_At timestamp default current_timestamp
);

INSERT INTO products (product_name, product_qnt, product_price) VALUES
('Wireless Mouse', 150, 25.99),
('Mechanical Keyboard', 75, 59.99),
('HD Monitor', 30, 199.99),
('USB-C Cable', 300, 9.49),
('Laptop Stand', 120, 34.95),
('External Hard Drive', 50, 89.90),
('Bluetooth Speaker', 80, 45.00),
('Webcam 1080p', 60, 55.49),
('Gaming Chair', 20, 129.99),
('Desk Lamp', 100, 22.75);

select * from products;

