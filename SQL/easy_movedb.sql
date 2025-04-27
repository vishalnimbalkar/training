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
select * from bookings;
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
select * from admin;
select * from users;
select * from bookings;
select * from payments;
select * from admin;
insert into admin values (default, 'Vishal Nimbalkar', 'vishalnimbalkar78@gmail.com','Vishal@123',default);
delete from users where id = 1;


