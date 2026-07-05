Inserted More tuples in each table to learn complex clauses :-

```SQL
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| movies_db          |
| mysql              |
| performance_schema |
| sys                |
| techstoredb        |
+--------------------+
6 rows in set (0.07 sec)

mysql> use techstoredb;
Database changed
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
6 rows in set (0.04 sec)

mysql> desc customers;
+-------------+--------------+------+-----+---------+----------------+
| Field       | Type         | Null | Key | Default | Extra          |
+-------------+--------------+------+-----+---------+----------------+
| customer_id | int          | NO   | PRI | NULL    | auto_increment |
| first_name  | varchar(30)  | NO   |     | NULL    |                |
| last_name   | varchar(30)  | NO   |     | NULL    |                |
| email       | varchar(100) | NO   | UNI | NULL    |                |
| phone       | varchar(15)  | YES  | UNI | NULL    |                |
| city        | varchar(40)  | NO   |     | NULL    |                |
| created_at  | date         | NO   |     | NULL    |                |
+-------------+--------------+------+-----+---------+----------------+
7 rows in set (0.03 sec)

mysql> desc categories;
+---------------+--------------+------+-----+---------+----------------+
| Field         | Type         | Null | Key | Default | Extra          |
+---------------+--------------+------+-----+---------+----------------+
| category_id   | int          | NO   | PRI | NULL    | auto_increment |
| category_name | varchar(40)  | NO   | UNI | NULL    |                |
| description   | varchar(150) | YES  |     | NULL    |                |
+---------------+--------------+------+-----+---------+----------------+
3 rows in set (0.00 sec)

mysql> desc orderitems;
+---------------+---------------+------+-----+---------+----------------+
| Field         | Type          | Null | Key | Default | Extra          |
+---------------+---------------+------+-----+---------+----------------+
| order_item_id | int           | NO   | PRI | NULL    | auto_increment |
| order_id      | int           | YES  | MUL | NULL    |                |
| product_id    | int           | YES  | MUL | NULL    |                |
| quantity      | int           | NO   |     | NULL    |                |
| item_price    | decimal(10,2) | NO   |     | NULL    |                |
+---------------+---------------+------+-----+---------+----------------+
5 rows in set (0.02 sec)

mysql> desc orders;
+--------------+---------------+------+-----+---------+----------------+
| Field        | Type          | Null | Key | Default | Extra          |
+--------------+---------------+------+-----+---------+----------------+
| order_id     | int           | NO   | PRI | NULL    | auto_increment |
| customer_id  | int           | YES  | MUL | NULL    |                |
| order_date   | date          | NO   |     | NULL    |                |
| total_amount | decimal(10,2) | NO   |     | NULL    |                |
| status       | varchar(20)   | YES  |     | Pending |                |
+--------------+---------------+------+-----+---------+----------------+
5 rows in set (0.00 sec)

mysql> desc payments;
+----------------+-------------+------+-----+---------+----------------+
| Field          | Type        | Null | Key | Default | Extra          |
+----------------+-------------+------+-----+---------+----------------+
| payment_id     | int         | NO   | PRI | NULL    | auto_increment |
| order_id       | int         | YES  | UNI | NULL    |                |
| payment_date   | date        | NO   |     | NULL    |                |
| payment_method | varchar(20) | NO   |     | NULL    |                |
| payment_status | varchar(20) | YES  |     | pending |                |
+----------------+-------------+------+-----+---------+----------------+
5 rows in set (0.00 sec)

mysql> desc products;
+--------------+---------------+------+-----+---------+----------------+
| Field        | Type          | Null | Key | Default | Extra          |
+--------------+---------------+------+-----+---------+----------------+
| product_id   | int           | NO   | PRI | NULL    | auto_increment |
| product_name | varchar(80)   | NO   |     | NULL    |                |
| category_id  | int           | YES  | MUL | NULL    |                |
| price        | decimal(10,2) | NO   |     | NULL    |                |
| stock        | int           | YES  |     | 0       |                |
| brand        | varchar(40)   | NO   |     | NULL    |                |
+--------------+---------------+------+-----+---------+----------------+
6 rows in set (0.00 sec)

mysql> insert into customers(first_name,last_name,email,phone,city,created_at) values
    -> ("Suresh", "Yadav", "suresh@gmail.com", 9876543217, "Delhi", "2026-08-01"),
    -> ("Kavita", "Mishra", "kavita@gmail.com", 9876543218, "Patna", "2026-08-05"),
    -> ("Vikash", "Roy", "vikash@gmail.com", 9876543219, "Ranchi", "2026-08-08"),
    -> ("Sneha", "Jain", "Sneha@gmail.com", 9876543220, "Kolkata", "2026-08-10"),
    -> ("Mohit", "Sharma", "mohit@gmail.com", 9876543221, "Delhi", "2026-08-12"),
    -> ("Anjali", "Sinha", "anjali@gmail.com", 9876543222, "Pune", "2026-08-15"),
    -> ("Deepak", "Gupta", "deepak@gmail.com", 9876543223, "Ranchi", "2026-08-18"),
    -> ("Arjun", "kumar", "arjun@gmail.com", 9876543224, "Lucknow", "2026-08-20");
Query OK, 8 rows affected (0.05 sec)
Records: 8  Duplicates: 0  Warnings: 0

mysql> select * from customers;
+-------------+------------+-----------+------------------+------------+---------+------------+
| customer_id | first_name | last_name | email            | phone      | city    | created_at |
+-------------+------------+-----------+------------------+------------+---------+------------+
|           1 | Anand      | Kumar     | anand@gmail.com  | 9876543210 | Ranchi  | 2026-01-10 |
|           2 | Rahul      | Singh     | rahul@gmail.com  | 9876543211 | Delhi   | 2026-02-15 |
|           3 | Priya      | Sharma    | priya@gmail.com  | 9876543212 | Patna   | 2026-03-12 |
|           4 | Amit       | verma     | amit@gmail.com   | 9876543213 | Lucknow | 2026-04-08 |
|           5 | Neha       | gupta     | neha@gmail.com   | 9876543214 | Kolkata | 2026-05-21 |
|           6 | Rohan      | Das       | rohan@gmail.com  | 9876543215 | Pune    | 2026-06-01 |
|           7 | Priti      | kumari    | priti@gmail.com  | 9876543216 | Ranchi  | 2026-07-23 |
|           8 | Suresh     | Yadav     | suresh@gmail.com | 9876543217 | Delhi   | 2026-08-01 |
|           9 | Kavita     | Mishra    | kavita@gmail.com | 9876543218 | Patna   | 2026-08-05 |
|          10 | Vikash     | Roy       | vikash@gmail.com | 9876543219 | Ranchi  | 2026-08-08 |
|          11 | Sneha      | Jain      | Sneha@gmail.com  | 9876543220 | Kolkata | 2026-08-10 |
|          12 | Mohit      | Sharma    | mohit@gmail.com  | 9876543221 | Delhi   | 2026-08-12 |
|          13 | Anjali     | Sinha     | anjali@gmail.com | 9876543222 | Pune    | 2026-08-15 |
|          14 | Deepak     | Gupta     | deepak@gmail.com | 9876543223 | Ranchi  | 2026-08-18 |
|          15 | Arjun      | kumar     | arjun@gmail.com  | 9876543224 | Lucknow | 2026-08-20 |
+-------------+------------+-----------+------------------+------------+---------+------------+
15 rows in set (0.02 sec)

mysql> insert into products(product_name, category_id, price, stock, brand) values
    -> ("HP Pavilion 14", 1, 65000.00, 6, "HP"),
    -> ("HP Omen 16", 1, 92000.00, 4, "HP"),
    -> ("Samsung Galaxy A56", 2, 35000.00, 20, "Samsung"),
    -> ("Samsung Galaxy M36", 2, 18000.00, 18, "Samsung"),
    -> ("Logitech Keyboard K120", 3, 900.00, 40, "Logitech"),
    -> ("Logitech Webcam C270", 3, 2500.00, 25, "Logitech"),
    -> ("Dell 24 Monitor", 4, 12000.00, 10, "Dell"),
    -> ("Acer Nitro Monitor", 4, 18000.00, 7, "Acer"),
    -> ("Lenovo Tab M11", 5, 22000.00, 12, "Lenovo"),
    -> ("Samsung Galaxy Tab S10", 5, 56000.00, 6, "Samsung"),
    -> ("Epson EcoTank L3250", 6, 15000.00, 8, "Epson"),
    -> ("Canon Laser Printer", 6, 15000.00, 5, "Canon"),
    -> ("Apple Magic Mouse", 3, 9000.00, 10, "Apple"),
    -> ("HP Wireless Mouse", 3, 900.00, 35, "HP");
Query OK, 14 rows affected (0.02 sec)
Records: 14  Duplicates: 0  Warnings: 0
mysql> select * from products;
+------------+------------------------+-------------+----------+-------+----------+
| product_id | product_name           | category_id | price    | stock | brand    |
+------------+------------------------+-------------+----------+-------+----------+
|          1 | HP Victus 15           |           1 | 65000.00 |    10 | HP       |
|          2 | Samsung Galaxy S25     |           2 | 72000.00 |     8 | Samsung  |
|          3 | Logitech G102 Mouse    |           3 |   900.00 |    35 | Logitech |
|          4 | LG UltraGear 24        |           4 | 12000.00 |    12 | LG       |
|          5 | Apple iPad Air         |           5 | 56000.00 |     5 | Apple    |
|          6 | Canon Pixma G3010      |           6 | 15000.00 |     7 | Canon    |
|          7 | HP Pavilion 14         |           1 | 65000.00 |     6 | HP       |
|          8 | HP Omen 16             |           1 | 92000.00 |     4 | HP       |
|          9 | Samsung Galaxy A56     |           2 | 35000.00 |    20 | Samsung  |
|         10 | Samsung Galaxy M36     |           2 | 18000.00 |    18 | Samsung  |
|         11 | Logitech Keyboard K120 |           3 |   900.00 |    40 | Logitech |
|         12 | Logitech Webcam C270   |           3 |  2500.00 |    25 | Logitech |
|         13 | Dell 24 Monitor        |           4 | 12000.00 |    10 | Dell     |
|         14 | Acer Nitro Monitor     |           4 | 18000.00 |     7 | Acer     |
|         15 | Lenovo Tab M11         |           5 | 22000.00 |    12 | Lenovo   |
|         16 | Samsung Galaxy Tab S10 |           5 | 56000.00 |     6 | Samsung  |
|         17 | Epson EcoTank L3250    |           6 | 15000.00 |     8 | Epson    |
|         18 | Canon Laser Printer    |           6 | 15000.00 |     5 | Canon    |
|         19 | Apple Magic Mouse      |           3 |  9000.00 |    10 | Apple    |
|         20 | HP Wireless Mouse      |           3 |   900.00 |    35 | HP       |
+------------+------------------------+-------------+----------+-------+----------+
20 rows in set (0.00 sec)

mysql> insert into orders(customer_id, order_date, total_amount, status) values
    -> (7, "2026-07-08", 35000.00, "Delivered"),
    -> (8, "2026-07-09", 18000.00, "Pending"),
    -> (9, "2026-07-10", 2500.00, "Delivered"),
    -> (10, "2026-07-11", 92000.00, "Pending"),
    -> (11, "2026-07-12", 900.00, "Delivered"),
    -> (12, "2026-07-13", 22000.00, "Cancelled"),
    -> (13, "2026-07-14", 56000.00, "Pending"),
    -> (14, "2026-07-15", 15000.00, "Delivered"),
    -> (3, "2026-07-16", 12000.00, "Pending"),
    -> (5, "2026-07-17", 9000.00, "Delivered"),
    -> (9, "2026-07-18", 65000.00, "Delivered"),
    -> (10, "2026-07-19", 15000.00, "Cancelled"),
    -> (11, "2026-07-20", 72000.00, "Pending"),
    -> (2, "2026-07-21", 900.00, "Delivered");
Query OK, 14 rows affected (0.01 sec)
Records: 14  Duplicates: 0  Warnings: 0

mysql> select * from orders;
+----------+-------------+------------+--------------+-----------+
| order_id | customer_id | order_date | total_amount | status    |
+----------+-------------+------------+--------------+-----------+
|        1 |           1 | 2026-07-01 |     65000.00 | Delivered |
|        2 |           2 | 2026-07-02 |     72900.00 | Pending   |
|        3 |           3 | 2026-07-03 |     12000.00 | Delivered |
|        4 |           4 | 2026-07-04 |     56000.00 | Cancelled |
|        5 |           5 | 2026-07-05 |     15000.00 | Pending   |
|        6 |           1 | 2026-07-06 |       900.00 | Delivered |
|        7 |           7 | 2026-07-08 |     35000.00 | Delivered |
|        8 |           8 | 2026-07-09 |     18000.00 | Pending   |
|        9 |           9 | 2026-07-10 |      2500.00 | Delivered |
|       10 |          10 | 2026-07-11 |     92000.00 | Pending   |
|       11 |          11 | 2026-07-12 |       900.00 | Delivered |
|       12 |          12 | 2026-07-13 |     22000.00 | Cancelled |
|       13 |          13 | 2026-07-14 |     56000.00 | Pending   |
|       14 |          14 | 2026-07-15 |     15000.00 | Delivered |
|       15 |           3 | 2026-07-16 |     12000.00 | Pending   |
|       16 |           5 | 2026-07-17 |      9000.00 | Delivered |
|       17 |           9 | 2026-07-18 |     65000.00 | Delivered |
|       18 |          10 | 2026-07-19 |     15000.00 | Cancelled |
|       19 |          11 | 2026-07-20 |     72000.00 | Pending   |
|       20 |           2 | 2026-07-21 |       900.00 | Delivered |
+----------+-------------+------------+--------------+-----------+
20 rows in set (0.00 sec)

mysql> insert into orderitems(order_id, product_id, quantity, item_price) values
    -> (7,9,1,35000.00),
    -> (8,10,1,18000.00),
    -> (9,12,1,2500.00),
    -> (10,8,1,92000.00),
    -> (11,20,1,900.00),
    -> (12,15,1,22000.00),
    -> (13,16,1,56000.00),
    -> (14,17,1,15000.00),
    -> (15,13,1,12000.00),
    -> (16,19,1,9000.00),
    -> (17,7,1,65000.00),
    -> (18,18,1,15000.00),
    -> (19,2,1,72000.00),
    -> (20,3,1,900.00),
    -> (17,20,2,900.00),
    -> (18,12,2,2500.00),
    -> (19,6,1,15000.00),
    -> (20,4,1,12000.00),
    -> (10,11,1,900.00),
    -> (8,14,1,18000.00);
Query OK, 20 rows affected (0.02 sec)
Records: 20  Duplicates: 0  Warnings: 0

mysql> select * from orderitems;
+---------------+----------+------------+----------+------------+
| order_item_id | order_id | product_id | quantity | item_price |
+---------------+----------+------------+----------+------------+
|             1 |        1 |          1 |        1 |   65000.00 |
|             2 |        2 |          2 |        1 |   72000.00 |
|             3 |        2 |          3 |        1 |     900.00 |
|             4 |        3 |          4 |        1 |   12000.00 |
|             5 |        4 |          5 |        1 |   56000.00 |
|             6 |        5 |          6 |        1 |   15000.00 |
|             7 |        6 |          3 |        1 |     900.00 |
|             8 |        7 |          9 |        1 |   35000.00 |
|             9 |        8 |         10 |        1 |   18000.00 |
|            10 |        9 |         12 |        1 |    2500.00 |
|            11 |       10 |          8 |        1 |   92000.00 |
|            12 |       11 |         20 |        1 |     900.00 |
|            13 |       12 |         15 |        1 |   22000.00 |
|            14 |       13 |         16 |        1 |   56000.00 |
|            15 |       14 |         17 |        1 |   15000.00 |
|            16 |       15 |         13 |        1 |   12000.00 |
|            17 |       16 |         19 |        1 |    9000.00 |
|            18 |       17 |          7 |        1 |   65000.00 |
|            19 |       18 |         18 |        1 |   15000.00 |
|            20 |       19 |          2 |        1 |   72000.00 |
|            21 |       20 |          3 |        1 |     900.00 |
|            22 |       17 |         20 |        2 |     900.00 |
|            23 |       18 |         12 |        2 |    2500.00 |
|            24 |       19 |          6 |        1 |   15000.00 |
|            25 |       20 |          4 |        1 |   12000.00 |
|            26 |       10 |         11 |        1 |     900.00 |
|            27 |        8 |         14 |        1 |   18000.00 |
+---------------+----------+------------+----------+------------+
27 rows in set (0.00 sec)

mysql> insert into payments(order_id, payment_date, payment_method, payment_status) values
    -> (7, '2026-07-08', 'UPI', 'Paid'),
    -> (8, '2026-07-09', 'Credit Card', 'Pending'),
    -> (9, '2026-07-10', 'Cash', 'Paid'),
    -> (10, '2026-07-11', 'UPI', 'Pending'),
    -> (11, '2026-07-12', 'Net Banking', 'Paid'),
    -> (12, '2026-07-13', 'Cash', 'Refunded'),
    -> (13, '2026-07-14', 'Credit Card', 'Pending'),
    -> (14, '2026-07-15', 'UPI', 'Paid'),
    -> (15, '2026-07-16', 'Cash', 'Pending'),
    -> (16, '2026-07-17', 'UPI', 'Paid'),
    -> (17, '2026-07-18', 'Credit Card', 'Paid'),
    -> (18, '2026-07-19', 'Net Banking', 'Pending'),
    -> (19, '2026-07-20', 'Cash', 'Paid'),
    -> (20, '2026-07-21', 'UPI', 'Paid');
Query OK, 14 rows affected (0.02 sec)
Records: 14  Duplicates: 0  Warnings: 0

mysql> select * from payments;
+------------+----------+--------------+----------------+----------------+
| payment_id | order_id | payment_date | payment_method | payment_status |
+------------+----------+--------------+----------------+----------------+
|          1 |        1 | 2026-07-01   | UPI            | Paid           |
|          2 |        2 | 2026-07-02   | Credit Card    | Pending        |
|          3 |        3 | 2026-07-03   | Cash           | Paid           |
|          4 |        4 | 2026-07-04   | Credit Card    | Refunded       |
|          5 |        5 | 2026-07-05   | UPI            | Pending        |
|          6 |        6 | 2026-07-06   | Cash           | Paid           |
|          7 |        7 | 2026-07-08   | UPI            | Paid           |
|          8 |        8 | 2026-07-09   | Credit Card    | Pending        |
|          9 |        9 | 2026-07-10   | Cash           | Paid           |
|         10 |       10 | 2026-07-11   | UPI            | Pending        |
|         11 |       11 | 2026-07-12   | Net Banking    | Paid           |
|         12 |       12 | 2026-07-13   | Cash           | Refunded       |
|         13 |       13 | 2026-07-14   | Credit Card    | Pending        |
|         14 |       14 | 2026-07-15   | UPI            | Paid           |
|         15 |       15 | 2026-07-16   | Cash           | Pending        |
|         16 |       16 | 2026-07-17   | UPI            | Paid           |
|         17 |       17 | 2026-07-18   | Credit Card    | Paid           |
|         18 |       18 | 2026-07-19   | Net Banking    | Pending        |
|         19 |       19 | 2026-07-20   | Cash           | Paid           |
|         20 |       20 | 2026-07-21   | UPI            | Paid           |
+------------+----------+--------------+----------------+----------------+
20 rows in set (0.00 sec)

mysql> /* Multiple Columns */
mysql> -- 11. Display unique combinations of: brand,price ?
mysql> select distinct brand,price from products;
+----------+----------+
| brand    | price    |
+----------+----------+
| HP       | 65000.00 |
| Samsung  | 72000.00 |
| Logitech |   900.00 |
| LG       | 12000.00 |
| Apple    | 56000.00 |
| Canon    | 15000.00 |
| HP       | 92000.00 |
| Samsung  | 35000.00 |
| Samsung  | 18000.00 |
| Logitech |  2500.00 |
| Dell     | 12000.00 |
| Acer     | 18000.00 |
| Lenovo   | 22000.00 |
| Samsung  | 56000.00 |
| Epson    | 15000.00 |
| Apple    |  9000.00 |
| HP       |   900.00 |
+----------+----------+
17 rows in set (0.00 sec)

mysql> select distinct (brand),price from products;
+----------+----------+
| brand    | price    |
+----------+----------+
| HP       | 65000.00 |
| Samsung  | 72000.00 |
| Logitech |   900.00 |
| LG       | 12000.00 |
| Apple    | 56000.00 |
| Canon    | 15000.00 |
| HP       | 92000.00 |
| Samsung  | 35000.00 |
| Samsung  | 18000.00 |
| Logitech |  2500.00 |
| Dell     | 12000.00 |
| Acer     | 18000.00 |
| Lenovo   | 22000.00 |
| Samsung  | 56000.00 |
| Epson    | 15000.00 |
| Apple    |  9000.00 |
| HP       |   900.00 |
+----------+----------+
17 rows in set (0.00 sec)
```