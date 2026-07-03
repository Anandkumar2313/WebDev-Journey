# Select Clause

```SQL
Select Clause :-
-> It is used to retrieve and display data from database(s)

mysql> /*select: It is use to retrieve and display data. */
mysql>
mysql> /*Question based on select :- */
mysql>
mysql> /*1. Display all details of every customers ? */
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

mysql> /*1. Display all details of every product ? */
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
6 rows in set (0.00 sec)

mysql> /*3. Display all details of every order ? */
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
+----------+-------------+------------+--------------+-----------+
6 rows in set (0.00 sec)

mysql> /*4. Display all details of every payment ? */
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

mysql> /*5. Display all details of every category ? */
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

mysql> /*6. Display product name and price ? */
mysql> select product_name, price from products;
+---------------------+----------+
| product_name        | price    |
+---------------------+----------+
| HP Victus 15        | 65000.00 |
| Samsung Galaxy S25  | 72000.00 |
| Logitech G102 Mouse |   900.00 |
| LG UltraGear 24     | 12000.00 |
| Apple iPad Air      | 56000.00 |
| Canon Pixma G3010   | 15000.00 |
+---------------------+----------+
6 rows in set (0.00 sec)

mysql> /*Display only the first name and city of every customer ? */
mysql> select first_name, city from customers;
+------------+---------+
| first_name | city    |
+------------+---------+
| Anand      | Ranchi  |
| Rahul      | Delhi   |
| Priya      | Patna   |
| Amit       | Lucknow |
| Neha       | Kolkata |
| Rohan      | Pune    |
| Priti      | Ranchi  |
+------------+---------+
7 rows in set (0.00 sec)

mysql> /*8. Display category name only? */
mysql> select category_name from categories;
+---------------+
| category_name |
+---------------+
| Accessories   |
| Laptop        |
| Moniter       |
| Printer       |
| Smartphone    |
| Tablet        |
+---------------+
6 rows in set (0.00 sec)

mysql> /*9. Display payment method only? */
mysql> select payment_method in payments;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'payments' at line 1
mysql> select payment_method from payments;
+----------------+
| payment_method |
+----------------+
| UPI            |
| Credit Card    |
| Cash           |
| Credit Card    |
| UPI            |
| Cash           |
+----------------+
6 rows in set (0.00 sec)

mysql> /*10. Display order date and total amount? */
mysql> select order_date, total_amount from orders;
+------------+--------------+
| order_date | total_amount |
+------------+--------------+
| 2026-07-01 |     65000.00 |
| 2026-07-02 |     72900.00 |
| 2026-07-03 |     12000.00 |
| 2026-07-04 |     56000.00 |
| 2026-07-05 |     15000.00 |
| 2026-07-06 |       900.00 |
+------------+--------------+
6 rows in set (0.00 sec)

mysql> /*11. Display first name, last name and email? */
mysql> select first_name, last_name, email from customers;
+------------+-----------+-----------------+
| first_name | last_name | email           |
+------------+-----------+-----------------+
| Anand      | Kumar     | anand@gmail.com |
| Rahul      | Singh     | rahul@gmail.com |
| Priya      | Sharma    | priya@gmail.com |
| Amit       | verma     | amit@gmail.com  |
| Neha       | gupta     | neha@gmail.com  |
| Rohan      | Das       | rohan@gmail.com |
| Priti      | kumari    | priti@gmail.com |
+------------+-----------+-----------------+
7 rows in set (0.00 sec)

mysql> /*12. Display product name, brand and stock? */
mysql> select product_name, brand, stock from products;
+---------------------+----------+-------+
| product_name        | brand    | stock |
+---------------------+----------+-------+
| HP Victus 15        | HP       |    10 |
| Samsung Galaxy S25  | Samsung  |     8 |
| Logitech G102 Mouse | Logitech |    35 |
| LG UltraGear 24     | LG       |    12 |
| Apple iPad Air      | Apple    |     5 |
| Canon Pixma G3010   | Canon    |     7 |
+---------------------+----------+-------+
6 rows in set (0.00 sec)

mysql> /*13. Display payment method and payment status? */
mysql> select payment_method, payment_status from payments;
+----------------+----------------+
| payment_method | payment_status |
+----------------+----------------+
| UPI            | Paid           |
| Credit Card    | Pending        |
| Cash           | Paid           |
| Credit Card    | Refunded       |
| UPI            | Pending        |
| Cash           | Paid           |
+----------------+----------------+
6 rows in set (0.00 sec)

mysql> /*14. Display customer name and registration date? */
mysql> select first_name, last_name, created_at from customers;
+------------+-----------+------------+
| first_name | last_name | created_at |
+------------+-----------+------------+
| Anand      | Kumar     | 2026-01-10 |
| Rahul      | Singh     | 2026-02-15 |
| Priya      | Sharma    | 2026-03-12 |
| Amit       | verma     | 2026-04-08 |
| Neha       | gupta     | 2026-05-21 |
| Rohan      | Das       | 2026-06-01 |
| Priti      | kumari    | 2026-07-23 |
+------------+-----------+------------+
7 rows in set (0.00 sec)

mysql> /*15. Display order id and status? */
mysql> select order_id, status from orders;
+----------+-----------+
| order_id | status    |
+----------+-----------+
|        1 | Delivered |
|        2 | Pending   |
|        3 | Delivered |
|        4 | Cancelled |
|        5 | Pending   |
|        6 | Delivered |
+----------+-----------+
6 rows in set (0.00 sec)

mysql> /*16. Display every customer's email? */
mysql> select first_name,email from customers;
+------------+-----------------+
| first_name | email           |
+------------+-----------------+
| Anand      | anand@gmail.com |
| Rahul      | rahul@gmail.com |
| Priya      | priya@gmail.com |
| Amit       | amit@gmail.com  |
| Neha       | neha@gmail.com  |
| Rohan      | rohan@gmail.com |
| Priti      | priti@gmail.com |
+------------+-----------------+
7 rows in set (0.00 sec)

mysql> /*17. Display every customer's phone number? */
mysql> select first_name,phone from customers;
+------------+------------+
| first_name | phone      |
+------------+------------+
| Anand      | 9876543210 |
| Rahul      | 9876543211 |
| Priya      | 9876543212 |
| Amit       | 9876543213 |
| Neha       | 9876543214 |
| Rohan      | 9876543215 |
| Priti      | 9876543216 |
+------------+------------+
7 rows in set (0.00 sec)

mysql> /*18. Display every product's brand? */
mysql> select brand from products;
+----------+
| brand    |
+----------+
| HP       |
| Samsung  |
| Logitech |
| LG       |
| Apple    |
| Canon    |
+----------+
6 rows in set (0.00 sec)

mysql> /*19. Display every product's stock? */
mysql> select product_name, stock from products;
+---------------------+-------+
| product_name        | stock |
+---------------------+-------+
| HP Victus 15        |    10 |
| Samsung Galaxy S25  |     8 |
| Logitech G102 Mouse |    35 |
| LG UltraGear 24     |    12 |
| Apple iPad Air      |     5 |
| Canon Pixma G3010   |     7 |
+---------------------+-------+
6 rows in set (0.00 sec)

mysql> /*20. Display every payment date? */
mysql> select payment_date from payments;
+--------------+
| payment_date |
+--------------+
| 2026-07-01   |
| 2026-07-02   |
| 2026-07-03   |
| 2026-07-04   |
| 2026-07-05   |
| 2026-07-06   |
+--------------+
6 rows in set (0.00 sec)
```