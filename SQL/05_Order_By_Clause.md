Order By Clause -
->ORDER BY is used to sort the result.

```SQL
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
6 rows in set (0.05 sec)

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
6 rows in set (0.02 sec)

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
+---------------+----------+------------+----------+------------+
7 rows in set (0.02 sec)

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

mysql> /* ORDER CLAUSE */
mysql>
mysql> /* SYNTAX :- select column_name(s) from table_name order by column_name asc/desc; */
mysql> /*By default, it sorts in ascending order (ASC).*/
mysql> /*For descending order (desc) */
mysql>
mysql> /* QUESTIONS ON ASCENDING ORDER */
mysql>
mysql> /*1. Display all customers sorted by first name? */
mysql> select first_name, last_name from customers order by first_name asc;
+------------+-----------+
| first_name | last_name |
+------------+-----------+
| Amit       | verma     |
| Anand      | Kumar     |
| Neha       | gupta     |
| Priti      | kumari    |
| Priya      | Sharma    |
| Rahul      | Singh     |
| Rohan      | Das       |
+------------+-----------+
7 rows in set (0.00 sec)

mysql> /*2. Display all products sorted by price (lowest to highest)? */
mysql> select product_name, price from products order by price asc;
+---------------------+----------+
| product_name        | price    |
+---------------------+----------+
| Logitech G102 Mouse |   900.00 |
| LG UltraGear 24     | 12000.00 |
| Canon Pixma G3010   | 15000.00 |
| Apple iPad Air      | 56000.00 |
| HP Victus 15        | 65000.00 |
| Samsung Galaxy S25  | 72000.00 |
+---------------------+----------+
6 rows in set (0.00 sec)

mysql> /*3. Display all orders sorted by order date? */
mysql> select order_id, order_date from orders order by order_date asc;
+----------+------------+
| order_id | order_date |
+----------+------------+
|        1 | 2026-07-01 |
|        2 | 2026-07-02 |
|        3 | 2026-07-03 |
|        4 | 2026-07-04 |
|        5 | 2026-07-05 |
|        6 | 2026-07-06 |
+----------+------------+
6 rows in set (0.00 sec)

mysql> /*4. Display all payments sorted by payment date? */
mysql> select payment_id, payment_date from payments order by payment_date;
+------------+--------------+
| payment_id | payment_date |
+------------+--------------+
|          1 | 2026-07-01   |
|          2 | 2026-07-02   |
|          3 | 2026-07-03   |
|          4 | 2026-07-04   |
|          5 | 2026-07-05   |
|          6 | 2026-07-06   |
+------------+--------------+
6 rows in set (0.00 sec)

mysql> /*5. Display all categories sorted alphabetically? */
mysql> select category_name from categories order by category_name;
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

mysql> /* DESCENDING ORDER */
mysql>
mysql> /*6. Display all products sorted by price (highest to lowest)? */
mysql> select product_name, price from products order by desc;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'desc' at line 1

mysql> select product_name, price from products order by price desc;
+---------------------+----------+
| product_name        | price    |
+---------------------+----------+
| Samsung Galaxy S25  | 72000.00 |
| HP Victus 15        | 65000.00 |
| Apple iPad Air      | 56000.00 |
| Canon Pixma G3010   | 15000.00 |
| LG UltraGear 24     | 12000.00 |
| Logitech G102 Mouse |   900.00 |
+---------------------+----------+
6 rows in set (0.00 sec)

mysql> /*7. Display customers sorted by registration date (newest first)? */
mysql> select first_name, last_name from customers order by created_at desc;
+------------+-----------+
| first_name | last_name |
+------------+-----------+
| Priti      | kumari    |
| Rohan      | Das       |
| Neha       | gupta     |
| Amit       | verma     |
| Priya      | Sharma    |
| Rahul      | Singh     |
| Anand      | Kumar     |
+------------+-----------+
7 rows in set (0.00 sec)

mysql> select first_name,last_name, created_at from customers order by created_at desc;
+------------+-----------+------------+
| first_name | last_name | created_at |
+------------+-----------+------------+
| Priti      | kumari    | 2026-07-23 |
| Rohan      | Das       | 2026-06-01 |
| Neha       | gupta     | 2026-05-21 |
| Amit       | verma     | 2026-04-08 |
| Priya      | Sharma    | 2026-03-12 |
| Rahul      | Singh     | 2026-02-15 |
| Anand      | Kumar     | 2026-01-10 |
+------------+-----------+------------+
7 rows in set (0.00 sec)

mysql> /*8. Display products sorted by stock (highest stock first) ? */
mysql> select product_name, stock from products order by stock desc;
+---------------------+-------+
| product_name        | stock |
+---------------------+-------+
| Logitech G102 Mouse |    35 |
| LG UltraGear 24     |    12 |
| HP Victus 15        |    10 |
| Samsung Galaxy S25  |     8 |
| Canon Pixma G3010   |     7 |
| Apple iPad Air      |     5 |
+---------------------+-------+
6 rows in set (0.00 sec)

mysql> /*9. Display orders sorted by total amount (highest first) ? */
mysql> select order_id, total_amount from orders order by total_amount desc;
+----------+--------------+
| order_id | total_amount |
+----------+--------------+
|        2 |     72900.00 |
|        1 |     65000.00 |
|        4 |     56000.00 |
|        5 |     15000.00 |
|        3 |     12000.00 |
|        6 |       900.00 |
+----------+--------------+
6 rows in set (0.00 sec)

mysql> /*10. Display payments sorted by payment date (latest first) ? */
mysql> select payment_id, payment_method, payment_date from payments order by payment_date desc;
+------------+----------------+--------------+
| payment_id | payment_method | payment_date |
+------------+----------------+--------------+
|          6 | Cash           | 2026-07-06   |
|          5 | UPI            | 2026-07-05   |
|          4 | Credit Card    | 2026-07-04   |
|          3 | Cash           | 2026-07-03   |
|          2 | Credit Card    | 2026-07-02   |
|          1 | UPI            | 2026-07-01   |
+------------+----------------+--------------+
6 rows in set (0.00 sec)

mysql> /* Multiple Columns */
mysql> /* Suppose two rows have the same value in the first column. SQL can use another column to decide the order. */
mysql>
mysql> /* SYNTAX :- select --- from --- order by columns1, column2; */
mysql> /* QUESTIONS */

mysql>

mysql> /*11. Display customers sorted by city, then by first name? */
mysql> select first_name, last_name from customers order by city,first_name;
+------------+-----------+
| first_name | last_name |
+------------+-----------+
| Rahul      | Singh     |
| Neha       | gupta     |
| Amit       | verma     |
| Priya      | Sharma    |
| Rohan      | Das       |
| Anand      | Kumar     |
| Priti      | kumari    |
+------------+-----------+
7 rows in set (0.00 sec)

mysql> select first_name, last_name, city from customers order by city,first_name;
+------------+-----------+---------+
| first_name | last_name | city    |
+------------+-----------+---------+
| Rahul      | Singh     | Delhi   |
| Neha       | gupta     | Kolkata |
| Amit       | verma     | Lucknow |
| Priya      | Sharma    | Patna   |
| Rohan      | Das       | Pune    |
| Anand      | Kumar     | Ranchi  |
| Priti      | kumari    | Ranchi  |
+------------+-----------+---------+
7 rows in set (0.00 sec)

mysql> /*12. Display products sorted by brand, then by price? */
mysql> select product_name, brand, price from products order by brand,price;
+---------------------+----------+----------+
| product_name        | brand    | price    |
+---------------------+----------+----------+
| Apple iPad Air      | Apple    | 56000.00 |
| Canon Pixma G3010   | Canon    | 15000.00 |
| HP Victus 15        | HP       | 65000.00 |
| LG UltraGear 24     | LG       | 12000.00 |
| Logitech G102 Mouse | Logitech |   900.00 |
| Samsung Galaxy S25  | Samsung  | 72000.00 |
+---------------------+----------+----------+
6 rows in set (0.00 sec)

mysql> /*13. Display orders sorted by status, then by total amount? */
mysql> selects order_id, status, total_amount from orders order by status,total_amount;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'selects order_id, status, total_amount from orders order by status,total_amount' at line 1

mysql> select order_id, status, total_amount from orders order by status,total_amount;
+----------+-----------+--------------+
| order_id | status    | total_amount |
+----------+-----------+--------------+
|        4 | Cancelled |     56000.00 |
|        6 | Delivered |       900.00 |
|        3 | Delivered |     12000.00 |
|        1 | Delivered |     65000.00 |
|        5 | Pending   |     15000.00 |
|        2 | Pending   |     72900.00 |
+----------+-----------+--------------+
6 rows in set (0.00 sec)

mysql> /*14. Display payments sorted by payment method, then by payment date? */
mysql> select payment_id, payment_method, payment_date from payments order by payment_method,payment_date;
+------------+----------------+--------------+
| payment_id | payment_method | payment_date |
+------------+----------------+--------------+
|          3 | Cash           | 2026-07-03   |
|          6 | Cash           | 2026-07-06   |
|          2 | Credit Card    | 2026-07-02   |
|          4 | Credit Card    | 2026-07-04   |
|          1 | UPI            | 2026-07-01   |
|          5 | UPI            | 2026-07-05   |
+------------+----------------+--------------+
6 rows in set (0.00 sec)

mysql> select payment_id, payment_method, payment_date from payments order by payment_method,payment_date desc;
+------------+----------------+--------------+
| payment_id | payment_method | payment_date |
+------------+----------------+--------------+
|          6 | Cash           | 2026-07-06   |
|          3 | Cash           | 2026-07-03   |
|          4 | Credit Card    | 2026-07-04   |
|          2 | Credit Card    | 2026-07-02   |
|          5 | UPI            | 2026-07-05   |
|          1 | UPI            | 2026-07-01   |
+------------+----------------+--------------+
6 rows in set (0.00 sec)

mysql> select payment_id, payment_method, payment_date from payments order by payment_method desc ,payment_date asc;
+------------+----------------+--------------+
| payment_id | payment_method | payment_date |
+------------+----------------+--------------+
|          1 | UPI            | 2026-07-01   |
|          5 | UPI            | 2026-07-05   |
|          2 | Credit Card    | 2026-07-02   |
|          4 | Credit Card    | 2026-07-04   |
|          3 | Cash           | 2026-07-03   |
|          6 | Cash           | 2026-07-06   |
+------------+----------------+--------------+
6 rows in set (0.00 sec)

mysql> select payment_id, payment_method, payment_date from payments order by payment_method asc ,payment_date desc;
+------------+----------------+--------------+
| payment_id | payment_method | payment_date |
+------------+----------------+--------------+
|          6 | Cash           | 2026-07-06   |
|          3 | Cash           | 2026-07-03   |
|          4 | Credit Card    | 2026-07-04   |
|          2 | Credit Card    | 2026-07-02   |
|          5 | UPI            | 2026-07-05   |
|          1 | UPI            | 2026-07-01   |
+------------+----------------+--------------+
6 rows in set (0.00 sec)

mysql> /*15. Display products sorted by stock (highest first), and if two products have the same stock, sort them by price (lowest first).*/
mysql> select product_name, stock, price from products order by stock desc, price asc;
+---------------------+-------+----------+
| product_name        | stock | price    |
+---------------------+-------+----------+
| Logitech G102 Mouse |    35 |   900.00 |
| LG UltraGear 24     |    12 | 12000.00 |
| HP Victus 15        |    10 | 65000.00 |
| Samsung Galaxy S25  |     8 | 72000.00 |
| Canon Pixma G3010   |     7 | 15000.00 |
| Apple iPad Air      |     5 | 56000.00 |
+---------------------+-------+----------+
6 rows in set (0.00 sec)

mysql> /*16. Display first name of customer sorted by registration date? */
mysql> select first_name from customers order by created_at;
+------------+
| first_name |
+------------+
| Anand      |
| Rahul      |
| Priya      |
| Amit       |
| Neha       |
| Rohan      |
| Priti      |
+------------+
7 rows in set (0.00 sec)
```