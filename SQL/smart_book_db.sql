create database smart_book_db;
use smart_book_db;

create table mst_users(
	id int primary key auto_increment,
    name varchar(100) not null, 
    email varchar(100) not null unique,
    phone varchar(20) not null,
    password varchar(255) not null,
    role enum('customer', 'admin') default 'customer',
    isActive boolean default true,
    isVerified boolean default false, 
    verificationToken varchar(255),
    createdAt datetime default current_timestamp,
    updatedAt datetime default current_timestamp on update current_timestamp
);

create table address(
	id int primary key auto_increment,
    userId int not null, 
    addressLine varchar(255) not null, 
    city varchar(100) not null,
    state varchar(100) not null,
    zipCode varchar(50) not null,
    country varchar(100) not null,
    createdAt datetime default current_timestamp,
    updatedAt datetime default current_timestamp on update current_timestamp,
    foreign key (userId) references users(id)
);

create table categories(
	id int primary key auto_increment,
    name varchar(100) not null unique,
    description text,
    createdAt datetime default current_timestamp,
    updatedAt datetime default current_timestamp on update current_timestamp
);

create table books(
	id int primary key auto_increment,
    title varchar(255) not null,
    description text,
    price decimal(10,2) not null, 
    stock int not null, 
    status enum('available', 'out-of-stock') default 'available',
    coverPageUrl varchar(255) not null, 
    authorName varchar(255),
    categoryId int not null, 
    createdAt datetime default current_timestamp,
    updatedAt datetime default current_timestamp on update current_timestamp,
    foreign key (categoryId) references categories(id)
);

create table reviews(
	id int primary key auto_increment,
	userId int not null, 
    bookId int not null,
    rating int check (rating between 1 and 5),
    comment text,
    createdAt datetime default current_timestamp,
    updatedAt datetime default current_timestamp on update current_timestamp,
    foreign key (userId) references users(id),
    foreign key (bookId) references books(id),
    unique(userId, bookId)
);

create table carts(
	id int primary key auto_increment,
    userId int not null, 
    createdAt datetime default current_timestamp,
    updatedAt datetime default current_timestamp on update current_timestamp,
	foreign key (userId) references users(id)
);

create table cart_books(
	id int primary key auto_increment,
    cartId int not null, 
    bookId int not null,
    quantity int default 1,
    createdAt datetime default current_timestamp,
    updatedAt datetime default current_timestamp on update current_timestamp,
    foreign key (cartId) references carts(id),
    foreign key (bookId) references books(id),
    unique(cartId, bookId)
);

create table orders (
    id int primary key auto_increment,
    userId int not null,
    address_id int not null,
    deliveredDate datetime,
    orderMethod enum('COD', 'Online'),
    orderStatus enum('Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled') default 'Pending',
    totalAmount decimal(10,2),
    createdAt datetime default current_timestamp,
    updatedAt datetime default current_timestamp on update current_timestamp,
    foreign key (userId) references users(id),
    foreign key (address_id) references address(id)
);

create table  order_books (
    id int primary key auto_increment,
    orderId int not null,
    bookId int not null,
    quantity int not null,
    price decimal(10,2),
    createdAt datetime default current_timestamp,
    updatedAt datetime default current_timestamp on update current_timestamp,
    foreign key (orderId) references orders(id),
    foreign key (bookId) references books(id)
);

create table payments (
    id int primary key auto_increment,
    orderId int not null,
    amount decimal(10,2),
    paymentMethod enum('UPI','netbanking', 'wallet', 'cash'),
    paymentStatus enum('Pending', 'Paid', 'Failed') default 'Pending',
    transactionId varchar(255),
    createdAt datetime default current_timestamp,
    updatedAt datetime default current_timestamp on update current_timestamp,
    foreign key (orderId) references orders(id)
);



