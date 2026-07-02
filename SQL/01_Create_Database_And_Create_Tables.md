# Create Database & Create Tables

```SQL
mysql> Create database TechStoreDB;
Query OK, 1 row affected (0.01 sec)

mysql> use TechStoreDB;
Database changed

mysql> Create table Customers;
ERROR 4028 (HY000): A table must have at least one visible column.

mysql> Create table Customers(
    -> customer_id INT Primary key Auto_Increment,
    -> first_name VARCHAR(30) Not null,
    -> last_name varchar(30) not null,
    -> email varchar(100) unique, not null,
    -> phone varchar(15) unique,
    -> city varchar(40) not null,
    -> created_at date not null
    -> );
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'not null,
phone varchar(15) unique,
city varchar(40) not null,
created_at date n' at line 5

mysql> Create table Customers(
    -> customer_id INT Primary key Auto_Increment,
    -> first_name VARCHAR(30) Not null,
    -> last_name varchar(30) not null,
    -> email varchar(100) unique not null,
    -> phone varchar(15) unique,
    -> city varchar(40) not null,
    -> created_at date not null
    -> );
Query OK, 0 rows affected (0.08 sec)

mysql> create table Categories(
    -> category_id int primary key auto_increment,
    -> category_name varchar(40) unique not null,
    -> description varchar(150) null
    -> );
Query OK, 0 rows affected (0.07 sec)

mysql> create table Products(
    -> product_id int primary key auto_increment,
    -> product_name varchar(80) not null,
    -> category_id int foreign key,
    -> price decimal(10,2) not null,
    -> stock int default 0,
    -> brand varchar(40) not null
    -> );
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'foreign key,
price decimal(10,2) not null,
stock int default 0,
brand varchar(40' at line 4

mysql> create table Products(
    -> product_id int primary key auto_increment,
    -> product_name varchar(80) not null,
    -> category_id int foreign key,
    -> price decimal(10,2) not null,
    -> stock int default 0,
    -> brand varchar(40) not null,
    -> foreign key (category_id) references Categories(category_id)
    -> );
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'foreign key,
price decimal(10,2) not null,
stock int default 0,
brand varchar(40' at line 4

mysql> create table Products(
    -> product_id int primary key auto_increment,
    -> product_name varchar(80) not null,
    -> category_id int,
    -> price decimal(10,2) not null,
    -> stock int default 0,
    -> brand varchar(40) not null,
    -> foreign key (category_id) references Categories(category_id)
    -> );
Query OK, 0 rows affected (0.06 sec)

mysql> create table Orders(
    -> order_id int primary key auto_increment,
    -> customer_id int,
    -> order_date date not null,
    -> total_amount decimal(10,2) not null,
    -> status varchar(20) default 'Pending',
    -> foreign key(customer_id) references Customers(customer_id)
    -> );
Query OK, 0 rows affected (0.09 sec)

mysql> create table OrderItems(
    -> order_item_id int primary key auto_increment,
    -> order_id int,
    -> product_id int,
    -> quantity int not null,
    -> item_price decimal(10,2) not null,
    -> foreign key(order_id) references Orders(order_id),
    -> foreign key(product_id) references Products(product_id)
    -> );
Query OK, 0 rows affected (0.09 sec)

mysql> create table Payments(
    -> payment_id int primary key auto_increment,
    -> order_id int unique,
    -> payment_date date not null,
    -> payment_method varchar(20) not null,
    -> payment_status varchar(20) default 'pending',
    -> foreign key(order_id) references Orders(order_id)
    -> );
Query OK, 0 rows affected (0.08 sec)

mysql> show tables;
+-----------------------+
| Tables_in_techstoredb |
+-----------------------+
| categories            |
| customers             |
| orderitems            |
| orders                |
| payments              |
| products              |
+-----------------------+
6 rows in set (0.02 sec)
```