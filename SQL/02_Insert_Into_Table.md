# Insert Into Table

```SQL
mysql> insert into Customers(first_name, last_name,email, phone, city, created_at) values
    -> ("Anand", "Kumar", "anand@gmail.com", "9876543210", "Ranchi", "2026-01-10"),
    -> ("Rahul", "Singh", "rahul@gmail.com", "9876543211", "Delhi", "2026-02-15"),
    -> ("Priya", "Sharma", "priya@gmail.com","9876543212", "Patna", "2026-03-12),
    "> ("Amit", "verma", "amit@gmail.com","9876543213", "Lucknow", "2026-04-08),
    -> ("Neha", "gupta", "neha@gmail.com","98765432134, "Kolkata", "2026-05-21),
    -> ("Rohan", "Das", "rohan@gmail.com","98765432135, "Pune", "2026-06-01),
    -> ("Priti", "kumari", "priti@gmail.com","98765432136, "Ranchi", "2026-07-23)
    -> );
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'Amit", "verma", "amit@gmail.com","9876543213", "Lucknow", "2026-04-08),
("Neha",' at line 5

mysql> insert into Customers(first_name, last_name,email, phone, city, created_at) values
    -> ("Anand", "Kumar", "anand@gmail.com", "9876543210", "Ranchi", "2026-01-10"),
    -> ("Rahul", "Singh", "rahul@gmail.com", "9876543211", "Delhi", "2026-02-15"),
    -> ("Priya", "Sharma", "priya@gmail.com","9876543212", "Patna", "2026-03-12),
    "> ^C

mysql> insert into Customers(first_name, last_name,email, phone, city, created_at) values
    -> ("Anand", "Kumar", "anand@gmail.com", "9876543210", "Ranchi", "2026-01-10"),
    -> ("Rahul", "Singh", "rahul@gmail.com", "9876543211", "Delhi", "2026-02-15"),
    -> ("Priya", "Sharma", "priya@gmail.com","9876543212", "Patna", "2026-03-12"),
    -> ("Amit", "verma", "amit@gmail.com","9876543213", "Lucknow", "2026-04-08"),
    -> ("Neha", "gupta", "neha@gmail.com","9876543214, "Kolkata", "2026-05-21"),
    "> ("Rohan", "Das", "rohan@gmail.com","9876543215, "Pune", "2026-06-01"),
    -> ("Priti", "kumari", "priti@gmail.com","9876543216, "Ranchi", "2026-07-23")
    "> );
    "> ;
    ">
    "> ^C

mysql> ^C

mysql> insert into Customers(first_name, last_name,email, phone, city, created_at) values
    -> ("Anand", "Kumar", "anand@gmail.com", "9876543210", "Ranchi", "2026-01-10"),
    -> ("Rahul", "Singh", "rahul@gmail.com", "9876543211", "Delhi", "2026-02-15"),
    -> ("Priya", "Sharma", "priya@gmail.com","9876543212", "Patna", "2026-03-12"),
    -> ("Amit", "verma", "amit@gmail.com","9876543213", "Lucknow", "2026-04-08"),
    -> ("Neha", "gupta", "neha@gmail.com","9876543214", "Kolkata", "2026-05-21"),
    -> ("Rohan", "Das", "rohan@gmail.com","9876543215", "Pune", "2026-06-01"),
    -> ("Priti", "kumari", "priti@gmail.com","9876543216", "Ranchi", "2026-07-23");
Query OK, 7 rows affected (0.05 sec)
Records: 7  Duplicates: 0  Warnings: 0

mysql> select * from customers;
+-------------+------------+-----------+-----------------+------------+---------+------------+
| customer_id | first_name | last_name | email           | phone      | city    | created_at |
+-------------+------------+-----------+-----------------+------------+---------+------------+
|           1 | Anand      | Kumar     | anand@gmail.com | 9876543210 | Ranchi  | 2026-01-10 |
|           2 | Rahul      | Singh     | rahul@gmail.com | 9876543211 | Delhi   | 2026-02-15 |
|           3 | Priya      | Sharma    | priya@gmail.com | 9876543212 | Patna   | 2026-03-12 |
|           4 | Amit       | verma     | amit@gmail.com  | 9876543213 | Lucknow | 2026-04-08 |
|           5 | Neha       | gupta     | neha@gmail.com  | 9876543214 | Kolkata | 2026-05-21 |
|           6 | Rohan      | Das       | rohan@gmail.com | 9876543215 | Pune    | 2026-06-01 |
|           7 | Priti      | kumari    | priti@gmail.com | 9876543216 | Ranchi  | 2026-07-23 |
+-------------+------------+-----------+-----------------+------------+---------+------------+
7 rows in set (0.00 sec)

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
6 rows in set (0.03 sec)

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
6 rows in set (0.03 sec)

mysql> desc categories;
+---------------+--------------+------+-----+---------+----------------+
| Field         | Type         | Null | Key | Default | Extra          |
+---------------+--------------+------+-----+---------+----------------+
| category_id   | int          | NO   | PRI | NULL    | auto_increment |
| category_name | varchar(40)  | NO   | UNI | NULL    |                |
| description   | varchar(150) | YES  |     | NULL    |                |
+---------------+--------------+------+-----+---------+----------------+
3 rows in set (0.02 sec)

mysql> insert into categories(category_name, description) values
    -> ("Laptop", "Portable computers"),
    -> (Smartphone, "Android and iOS phones"),
    -> ("Accessories", "Computer accessories"),
    -> ("Moniter", "LED and LCD monitors"),
    -> ("Tablet", "Android and ipad tablets"),
    -> ("Printer", "Inkjet and Laser printers");
ERROR 1054 (42S22): Unknown column 'Smartphone' in 'field list'

mysql> insert into categories(category_name, description) values
    -> ("Laptop", "Portable computers"),
    -> ("Smartphone", "Android and iOS phones"),
    -> ("Accessories", "Computer accessories"),
    -> ("Moniter", "LED and LCD monitors"),
    -> ("Tablet", "Android and ipad tablets"),
    -> ("Printer", "Inkjet and Laser printers");
Query OK, 6 rows affected (0.03 sec)
Records: 6  Duplicates: 0  Warnings: 0

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

mysql> insert into products(product_name, category_id, price, stock, brand) values
    -> ("HP Victus 15", 1, 65000.00, 10, "HP"),
    -> ("Samsung Galaxy S25", 2, 72000.00, 8, "Samsung"),
    -> ("Logitech G102 Mouse", 3, 900.00, 35, "Logitech"),
    -> ("LG UltraGear 24", 4, 12000.00, 12, "LG"),
    -> ("Apple iPad Air", 5, 56000.00, 5, "Apple"),
    -> ("Canon Pixma G3010", 6, 15000.00, 7, "Canon");
Query OK, 6 rows affected (0.03 sec)
Records: 6  Duplicates: 0  Warnings: 0

mysql> select * from categories;
+-------------+---------------+---------------------------+
| category_id | category_name | description               |
+-------------+---------------+---------------------------+
|           1 | Laptop        | Portable computers        |
|           2 | Smartphone    | Android and iOS phones    |
|           3 | Accessories   | Computer accessories      |
|           4 | Moniter       | LED and LCD monitors      |
|           5 | Tablet        | Android and ipad tablets  |
|           6 | Printer       | Inkjet and Laser printers |
+-------------+---------------+---------------------------+
6 rows in set (0.00 sec)

mysql> select * from products;
+------------+---------------------+-------------+----------+-------+----------+
| product_id | product_name        | category_id | price    | stock | brand    |
+------------+---------------------+-------------+----------+-------+----------+
|          1 | HP Victus 15        |           1 | 65000.00 |    10 | HP       |
|          2 | Samsung Galaxy S25  |           2 | 72000.00 |     8 | Samsung  |
|          3 | Logitech G102 Mouse |           3 |   900.00 |    35 | Logitech |
|          4 | LG UltraGear 24     |           4 | 12000.00 |    12 | LG       |
|          5 | Apple iPad Air      |           5 | 56000.00 |     5 | Apple    |
|          6 | Canon Pixma G3010   |           6 | 15000.00 |     7 | Canon    |
+------------+---------------------+-------------+----------+-------+----------+
6 rows in set (0.02 sec)

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
5 rows in set (0.03 sec)

mysql> insert into Orders(customer_id, order_date, total_amount, status) values
    -> (1, "2026-07-01", 65000.00, "Delivered"),
    -> (2, "2026-07-02", 72900.00, "Pending"),
    -> (3, "2026-07-03", 12000.00, "Delivered"),
    -> (4, "2026-07-04", 56000.00, "Cancelled"),
    -> (5, "2026-07-05", 15000.00, "Pending"),
    -> (1, "2026-07-06", 900.00, "Delivered");
Query OK, 6 rows affected (0.03 sec)
Records: 6  Duplicates: 0  Warnings: 0

mysql> select * from Orders;
+----------+-------------+------------+--------------+-----------+
| order_id | customer_id | order_date | total_amount | status    |
+----------+-------------+------------+--------------+-----------+
|        1 |           1 | 2026-07-01 |     65000.00 | Delivered |
|        2 |           2 | 2026-07-02 |     72900.00 | Pending   |
|        3 |           3 | 2026-07-03 |     12000.00 | Delivered |
|        4 |           4 | 2026-07-04 |     56000.00 | Cancelled |
|        5 |           5 | 2026-07-05 |     15000.00 | Pending   |
|        6 |           1 | 2026-07-06 |       900.00 | Delivered |
+----------+-------------+------------+--------------+-----------+
6 rows in set (0.00 sec)

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
6 rows in set (0.00 sec)

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
5 rows in set (0.00 sec)

mysql> insert into orderitems(order_id, product_id, quantity, item_price) values
    -> (1, ,1, 1, 65000.00),
    -> (2, 2, 1, ^C
mysql> insert into orderitems(order_id, product_id, quantity, item_price) values
    -> (1, 1, 1, 65000.00),
    -> (2, 2, 1, 72000.00),
    -> (2, 3, 1, 900.00),
    -> (3, 4, 1, 12000.00),
    -> (4, 5, 1, 56000.00),
    -> (5, 6, 1, 15000.00),
    -> (6, 3, 1, 900.00);
Query OK, 7 rows affected (0.03 sec)
Records: 7  Duplicates: 0  Warnings: 0

mysql> select * from orderitems
    -> ;
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
+---------------+----------+------------+----------+------------+
7 rows in set (0.00 sec)

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
5 rows in set (0.02 sec)
       insert into payments(order)
       insert into payments(order^C
mysql> insert into payments(order_id, payment_date, payment_method, payment_status) values
    -> (1, "2026-07-01", "UPI", "Paid"),
    -> (2, "2026-07-02", "Credit Card", "Pending"),
    -> (3, "2026-07-03", "Cash", "Paid"),
    -> (4, "2026-07-04", "Credit Card", "Refunded"),
    -> (5, "2026-07-05", "UPI", "Pending"),
    -> (6, "2026-07-06", "Cash", "Paid");
Query OK, 6 rows affected (0.03 sec)
Records: 6  Duplicates: 0  Warnings: 0

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
+------------+----------+--------------+----------------+----------------+
6 rows in set (0.00 sec)

mysql>
```