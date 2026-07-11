UPDATE

```SQL
mysql> /* UPDATE */
mysql> /* UPDATE is used to modify existing data in a table. */
mysql> /* It changes the value(s) of existing row(s). */
mysql>
mysql> /* SYNTAX : UPDATE table_name SET column_name = value WHERE condition; */
mysql>
mysql> /* Example : Suppose a customer moves from ranchi to banglore. So we don't insert a new customer, We update the existing row. */
mysql> /* For this Example Query would be :  */
mysql> /* update customers set city = 'Banglore' where customer_id = 1; */
mysql>
mysql> /* NOTE : Never forget where else it will apply to all rows entrie of that  column */
mysql>
mysql> /* Example : Updating Multiple Columns in single Query */
mysql> /* update customers set city = 'Ranchi', phone = '9865376599' where customer_id = 1 */
mysql>
mysql> /* We can use : */
mysql> --   =, >, <, BETWEEN, IN, LIKE with WHERE similarly as we have used before
mysql> /* Practice Questions */
mysql> /* Level 1: Basic Updates */
mysql> -- 1. Update the city of customer 1 to Bangalore.
mysql> update customers set city = 'Banglore' where customer_id = 1;
Query OK, 1 row affected (0.06 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> select * from customers where customer_id = 1;
+-------------+------------+-----------+-----------------+------------+----------+------------+
| customer_id | first_name | last_name | email           | phone      | city     | created_at |
+-------------+------------+-----------+-----------------+------------+----------+------------+
|           1 | Anand      | Kumar     | anand@gmail.com | 9876543210 | Banglore | 2026-01-10 |
+-------------+------------+-----------+-----------------+------------+----------+------------+
1 row in set (0.00 sec)

mysql> -- 2. Update the stock of product 5 to 18.
mysql> select stock from products where product_id = 5;
+-------+
| stock |
+-------+
|     5 |
+-------+
1 row in set (0.00 sec)

mysql> update products set stock = 18 where product_id = 5;
Query OK, 1 row affected (0.03 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> select stock from products where product_id = 5;
+-------+
| stock |
+-------+
|    18 |
+-------+
1 row in set (0.00 sec)

mysql> -- 3. Update the payment status of payment 4 to Paid.
mysql> select payment_status from payments where payment_id = 4;
+----------------+
| payment_status |
+----------------+
| Refunded       |
+----------------+
1 row in set (0.02 sec)

mysql> update payments set payment_status = 'Paid' where payment_id = 4;
Query OK, 1 row affected (0.03 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> select payment_status from payments where payment_id = 4;
+----------------+
| payment_status |
+----------------+
| Paid           |
+----------------+
1 row in set (0.00 sec)

mysql> -- 4. Update the total amount of order 8 to ₹45,000.
mysql> select total_amount from orders where order_id = 8;
+--------------+
| total_amount |
+--------------+
|     18000.00 |
+--------------+
1 row in set (0.00 sec)

mysql> update orders set total_amount = 45000 where order_id = 8;
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> select total_amount from orders where order_id = 8;
+--------------+
| total_amount |
+--------------+
|     45000.00 |
+--------------+
1 row in set (0.00 sec)

mysql> -- 5. Update the brand of product 12 to Sony.
mysql> select brand from products where product_id = 12;
+----------+
| brand    |
+----------+
| Logitech |
+----------+
1 row in set (0.00 sec)

mysql> update products set brand = 'sony' where product_id = 12;
Query OK, 1 row affected (0.03 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> select brand from products where product_id = 12;
+-------+
| brand |
+-------+
| sony  |
+-------+
1 row in set (0.00 sec)

mysql> select * from products where product_id = 12;
+------------+----------------------+-------------+---------+-------+-------+
| product_id | product_name         | category_id | price   | stock | brand |
+------------+----------------------+-------------+---------+-------+-------+
|         12 | Logitech Webcam C270 |           3 | 2500.00 |    25 | sony  |
+------------+----------------------+-------------+---------+-------+-------+
1 row in set (0.00 sec)

mysql> /* Multiple Columns Update */
mysql> -- 6. For customer 6 , change city to hyderabad and phone to 9998887776
mysql> select * from customers where customer_id = 6;
+-------------+------------+-----------+-----------------+------------+------+------------+
| customer_id | first_name | last_name | email           | phone      | city | created_at |
+-------------+------------+-----------+-----------------+------------+------+------------+
|           6 | Rohan      | Das       | rohan@gmail.com | 9876543215 | Pune | 2026-06-01 |
+-------------+------------+-----------+-----------------+------------+------+------------+
1 row in set (0.00 sec)

mysql> update customers set city = 'hyderabad', phone = '9998887776' where customer_id = 6;
Query OK, 1 row affected (0.03 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> select * from customers where customer_id = 6;
+-------------+------------+-----------+-----------------+------------+-----------+------------+
| customer_id | first_name | last_name | email           | phone      | city      | created_at |
+-------------+------------+-----------+-----------------+------------+-----------+------------+
|           6 | Rohan      | Das       | rohan@gmail.com | 9998887776 | hyderabad | 2026-06-01 |
+-------------+------------+-----------+-----------------+------------+-----------+------------+
1 row in set (0.00 sec)

mysql> -- 7. For order 10, change status to delivered, change total amount to 25000
mysql> update orders set status = 'Delivered', total_amount = 25000 where order_id = 10;
Query OK, 1 row affected (0.03 sec)
Rows matched: 1  Changed: 1  Warnings: 0

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
|       10 |          10 | 2026-07-11 |     25000.00 | Delivered |
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

mysql> -- 8. For product 15. Change price to 42000, Change stock to 15
mysql> update products set price = 42000, stock = 15 where product_id = 15;
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> select * from products where product_id = 15;
+------------+----------------+-------------+----------+-------+--------+
| product_id | product_name   | category_id | price    | stock | brand  |
+------------+----------------+-------------+----------+-------+--------+
|         15 | Lenovo Tab M11 |           5 | 42000.00 |    15 | Lenovo |
+------------+----------------+-------------+----------+-------+--------+
1 row in set (0.00 sec)

mysql> -- 9. For payment 9: Change payment method to UPI, Change payment status to Paid
mysql> select * from payments where payment_id = 9;
+------------+----------+--------------+----------------+----------------+
| payment_id | order_id | payment_date | payment_method | payment_status |
+------------+----------+--------------+----------------+----------------+
|          9 |        9 | 2026-07-10   | Cash           | Paid           |
+------------+----------+--------------+----------------+----------------+
1 row in set (0.03 sec)

mysql> update payments set payment_method = 'UPI', payment_status = 'Paid' where payment_id = 9;
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> select * from payments where payment_id = 9;
+------------+----------+--------------+----------------+----------------+
| payment_id | order_id | payment_date | payment_method | payment_status |
+------------+----------+--------------+----------------+----------------+
|          9 |        9 | 2026-07-10   | UPI            | Paid           |
+------------+----------+--------------+----------------+----------------+
1 row in set (0.00 sec)

mysql> -- 10. For category 6: Change category name to Accessories, Change description to Electronic accessories
mysql> select * from category where category_id = 6;
ERROR 1146 (42S02): Table 'techstoredb.category' doesn't exist
mysql> select * from categories where category_id = 6;
+-------------+---------------+---------------------------+
| category_id | category_name | description               |
+-------------+---------------+---------------------------+
|           6 | Printer       | Inkjet and Laser printers |
+-------------+---------------+---------------------------+
1 row in set (0.03 sec)

mysql> update categories set category_name = 'Accessories', description = 'Electronic accessories' where category_id = 6;
ERROR 1062 (23000): Duplicate entry 'Accessories' for key 'categories.category_name'
mysql>
mysql> /* Level 3 : Using Conditions */
mysql> -- 11. Increase the stock of all HP products to 20.
mysql> select * from products where brand = 'HP';
+------------+-------------------+-------------+----------+-------+-------+
| product_id | product_name      | category_id | price    | stock | brand |
+------------+-------------------+-------------+----------+-------+-------+
|          1 | HP Victus 15      |           1 | 65000.00 |    10 | HP    |
|          7 | HP Pavilion 14    |           1 | 65000.00 |     6 | HP    |
|          8 | HP Omen 16        |           1 | 92000.00 |     4 | HP    |
|         20 | HP Wireless Mouse |           3 |   900.00 |    35 | HP    |
+------------+-------------------+-------------+----------+-------+-------+
4 rows in set (0.03 sec)

mysql> update products set stock = 20 where brand = 'HP';
Query OK, 4 rows affected (0.01 sec)
Rows matched: 4  Changed: 4  Warnings: 0

mysql> select * from products where brand = 'HP';
+------------+-------------------+-------------+----------+-------+-------+
| product_id | product_name      | category_id | price    | stock | brand |
+------------+-------------------+-------------+----------+-------+-------+
|          1 | HP Victus 15      |           1 | 65000.00 |    20 | HP    |
|          7 | HP Pavilion 14    |           1 | 65000.00 |    20 | HP    |
|          8 | HP Omen 16        |           1 | 92000.00 |    20 | HP    |
|         20 | HP Wireless Mouse |           3 |   900.00 |    20 | HP    |
+------------+-------------------+-------------+----------+-------+-------+
4 rows in set (0.02 sec)

mysql> -- 12. Change the payment status to Completed for all payments currently marked Paid.
mysql> select * from payments where payment_status = 'Paid';
+------------+----------+--------------+----------------+----------------+
| payment_id | order_id | payment_date | payment_method | payment_status |
+------------+----------+--------------+----------------+----------------+
|          1 |        1 | 2026-07-01   | UPI            | Paid           |
|          3 |        3 | 2026-07-03   | Cash           | Paid           |
|          4 |        4 | 2026-07-04   | Credit Card    | Paid           |
|          6 |        6 | 2026-07-06   | Cash           | Paid           |
|          7 |        7 | 2026-07-08   | UPI            | Paid           |
|          9 |        9 | 2026-07-10   | UPI            | Paid           |
|         11 |       11 | 2026-07-12   | Net Banking    | Paid           |
|         14 |       14 | 2026-07-15   | UPI            | Paid           |
|         16 |       16 | 2026-07-17   | UPI            | Paid           |
|         17 |       17 | 2026-07-18   | Credit Card    | Paid           |
|         19 |       19 | 2026-07-20   | Cash           | Paid           |
|         20 |       20 | 2026-07-21   | UPI            | Paid           |
+------------+----------+--------------+----------------+----------------+
12 rows in set (0.00 sec)

mysql> update payments set payment_status = 'Completed' where payment_status = 'Paid';
Query OK, 12 rows affected (0.03 sec)
Rows matched: 12  Changed: 12  Warnings: 0

mysql> select * from payments where payment_status = 'Completed';
+------------+----------+--------------+----------------+----------------+
| payment_id | order_id | payment_date | payment_method | payment_status |
+------------+----------+--------------+----------------+----------------+
|          1 |        1 | 2026-07-01   | UPI            | Completed      |
|          3 |        3 | 2026-07-03   | Cash           | Completed      |
|          4 |        4 | 2026-07-04   | Credit Card    | Completed      |
|          6 |        6 | 2026-07-06   | Cash           | Completed      |
|          7 |        7 | 2026-07-08   | UPI            | Completed      |
|          9 |        9 | 2026-07-10   | UPI            | Completed      |
|         11 |       11 | 2026-07-12   | Net Banking    | Completed      |
|         14 |       14 | 2026-07-15   | UPI            | Completed      |
|         16 |       16 | 2026-07-17   | UPI            | Completed      |
|         17 |       17 | 2026-07-18   | Credit Card    | Completed      |
|         19 |       19 | 2026-07-20   | Cash           | Completed      |
|         20 |       20 | 2026-07-21   | UPI            | Completed      |
+------------+----------+--------------+----------------+----------------+
12 rows in set (0.02 sec)

mysql> -- 13. Change the city to Kolkata for all customers currently living in Patna.
mysql> select * from customers;
+-------------+------------+-----------+------------------+------------+-----------+------------+
| customer_id | first_name | last_name | email            | phone      | city      | created_at |
+-------------+------------+-----------+------------------+------------+-----------+------------+
|           1 | Anand      | Kumar     | anand@gmail.com  | 9876543210 | Banglore  | 2026-01-10 |
|           2 | Rahul      | Singh     | rahul@gmail.com  | 9876543211 | Delhi     | 2026-02-15 |
|           3 | Priya      | Sharma    | priya@gmail.com  | 9876543212 | Patna     | 2026-03-12 |
|           4 | Amit       | verma     | amit@gmail.com   | 9876543213 | Lucknow   | 2026-04-08 |
|           5 | Neha       | gupta     | neha@gmail.com   | 9876543214 | Kolkata   | 2026-05-21 |
|           6 | Rohan      | Das       | rohan@gmail.com  | 9998887776 | hyderabad | 2026-06-01 |
|           7 | Priti      | kumari    | priti@gmail.com  | 9876543216 | Ranchi    | 2026-07-23 |
|           8 | Suresh     | Yadav     | suresh@gmail.com | 9876543217 | Delhi     | 2026-08-01 |
|           9 | Kavita     | Mishra    | kavita@gmail.com | 9876543218 | Patna     | 2026-08-05 |
|          10 | Vikash     | Roy       | vikash@gmail.com | 9876543219 | Ranchi    | 2026-08-08 |
|          11 | Sneha      | Jain      | Sneha@gmail.com  | 9876543220 | Kolkata   | 2026-08-10 |
|          12 | Mohit      | Sharma    | mohit@gmail.com  | 9876543221 | Delhi     | 2026-08-12 |
|          13 | Anjali     | Sinha     | anjali@gmail.com | 9876543222 | Pune      | 2026-08-15 |
|          14 | Deepak     | Gupta     | deepak@gmail.com | 9876543223 | Ranchi    | 2026-08-18 |
|          15 | Arjun      | kumar     | arjun@gmail.com  | 9876543224 | Lucknow   | 2026-08-20 |
+-------------+------------+-----------+------------------+------------+-----------+------------+
15 rows in set (0.02 sec)

mysql> update customers set city = 'Kolkata' where city = 'Patna';
Query OK, 2 rows affected (0.03 sec)
Rows matched: 2  Changed: 2  Warnings: 0

mysql> select * from customers where city = 'Patna';
Empty set (0.00 sec)

mysql> select * from customers where city = 'Kolkata';
+-------------+------------+-----------+------------------+------------+---------+------------+
| customer_id | first_name | last_name | email            | phone      | city    | created_at |
+-------------+------------+-----------+------------------+------------+---------+------------+
|           3 | Priya      | Sharma    | priya@gmail.com  | 9876543212 | Kolkata | 2026-03-12 |
|           5 | Neha       | gupta     | neha@gmail.com   | 9876543214 | Kolkata | 2026-05-21 |
|           9 | Kavita     | Mishra    | kavita@gmail.com | 9876543218 | Kolkata | 2026-08-05 |
|          11 | Sneha      | Jain      | Sneha@gmail.com  | 9876543220 | Kolkata | 2026-08-10 |
+-------------+------------+-----------+------------------+------------+---------+------------+
4 rows in set (0.02 sec)

mysql> -- 14. Update the price to ₹18,000 for all products whose price is between ₹15,000 and ₹20,000.
mysql> update products set price = 18000 where price between 15000 and 20000;
Query OK, 3 rows affected (0.03 sec)
Rows matched: 5  Changed: 3  Warnings: 0

mysql> -- 15. For all Samsung products priced between ₹20,000 and ₹80,000:
mysql> /* Change stock to 30, Change brand to Samsung Electronics */
mysql> update products set stock = 30, brand = 'Samsung Electronics' where brand = 'Samsung' and price between 20000 and 80000;
Query OK, 3 rows affected (0.02 sec)
Rows matched: 3  Changed: 3  Warnings: 0

mysql> /* Challenge Question */
mysql> /* The manager says: */
mysql> /* "All HP products priced below ₹50,000 should now: have stock = 40, price = 45000 */
mysql> /* Write one query */
mysql>
mysql> /* Answer Query */
mysql> update products set stock = 40, price = 45000 where brand = 'HP' and price < 50000;
Query OK, 1 row affected (0.03 sec)
Rows matched: 1  Changed: 1  Warnings: 0
```