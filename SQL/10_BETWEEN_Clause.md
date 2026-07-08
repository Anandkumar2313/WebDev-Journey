BETWEEN Clause :-

```SQL
mysql> /* Between Clause */
mysql> /* Between is used to filter values within a range. */
mysql> /* The range is inclusive, which means both the starting value and ending value are included. */
mysql>
mysql> /* SYNTAX :- select column_name from table_name where column_name BETWEEN value1 AND value2; */
mysql>
mysql> /*Equivalent Query :- */
mysql> /* Where price between 10000 And 50000;*/
mysql> /* is eqivalent to */
mysql> /* where price >= 10000 and price <= 50000;*/
mysql>
mysql> /* Examples :- */
mysql> /* FOR NUMERIC */
mysql> /* where stock Between 5 and 20;*/
mysql> /* Means range : [5,20]*/
mysql>
mysql> /* FOR DATE */
mysql> /* where order_date between '2026-07-10' and '2026-07-20';*/
mysql> /* It return every order placed from 10th july through 20th july, including both dates.*/
mysql>
mysql> /* FOR TEXT */
mysql> /* Between also works on Strings, Will do later*/
mysql>
mysql> /* Practice Questions */
mysql>
mysql> /* Syntax Builder */
mysql> -- 1. Display all details of products whose price is between ₹10,000 and ₹20,000.
mysql> select * from products where price between 10000 and 20000;
+------------+---------------------+-------------+----------+-------+---------+
| product_id | product_name        | category_id | price    | stock | brand   |
+------------+---------------------+-------------+----------+-------+---------+
|          4 | LG UltraGear 24     |           4 | 12000.00 |    12 | LG      |
|          6 | Canon Pixma G3010   |           6 | 15000.00 |     7 | Canon   |
|         10 | Samsung Galaxy M36  |           2 | 18000.00 |    18 | Samsung |
|         13 | Dell 24 Monitor     |           4 | 12000.00 |    10 | Dell    |
|         14 | Acer Nitro Monitor  |           4 | 18000.00 |     7 | Acer    |
|         17 | Epson EcoTank L3250 |           6 | 15000.00 |     8 | Epson   |
|         18 | Canon Laser Printer |           6 | 15000.00 |     5 | Canon   |
+------------+---------------------+-------------+----------+-------+---------+
7 rows in set (0.02 sec)

mysql> -- 2. Display the product name and stock of products whose stock is between 5 and 15.
mysql> select product_name, stock from products where stock between 5 and 15;
+------------------------+-------+
| product_name           | stock |
+------------------------+-------+
| HP Victus 15           |    10 |
| Samsung Galaxy S25     |     8 |
| LG UltraGear 24        |    12 |
| Apple iPad Air         |     5 |
| Canon Pixma G3010      |     7 |
| HP Pavilion 14         |     6 |
| Dell 24 Monitor        |    10 |
| Acer Nitro Monitor     |     7 |
| Lenovo Tab M11         |    12 |
| Samsung Galaxy Tab S10 |     6 |
| Epson EcoTank L3250    |     8 |
| Canon Laser Printer    |     5 |
| Apple Magic Mouse      |    10 |
+------------------------+-------+
13 rows in set (0.04 sec)

mysql> -- 3. Display all details of customers whose customer IDs are between 5 and 10.
mysql> select * from customers where customer_id between 5 and 10;
+-------------+------------+-----------+------------------+------------+---------+------------+
| customer_id | first_name | last_name | email            | phone      | city    | created_at |
+-------------+------------+-----------+------------------+------------+---------+------------+
|           5 | Neha       | gupta     | neha@gmail.com   | 9876543214 | Kolkata | 2026-05-21 |
|           6 | Rohan      | Das       | rohan@gmail.com  | 9876543215 | Pune    | 2026-06-01 |
|           7 | Priti      | kumari    | priti@gmail.com  | 9876543216 | Ranchi  | 2026-07-23 |
|           8 | Suresh     | Yadav     | suresh@gmail.com | 9876543217 | Delhi   | 2026-08-01 |
|           9 | Kavita     | Mishra    | kavita@gmail.com | 9876543218 | Patna   | 2026-08-05 |
|          10 | Vikash     | Roy       | vikash@gmail.com | 9876543219 | Ranchi  | 2026-08-08 |
+-------------+------------+-----------+------------------+------------+---------+------------+
6 rows in set (0.01 sec)

mysql> -- 4. Display the order ID, customer ID, and total amount of orders whose total amount is between ₹15,000 and ₹60,000.
mysql> select order_id, customer_id, total_amount from orders where total_amount between 15000 and 60000;
+----------+-------------+--------------+
| order_id | customer_id | total_amount |
+----------+-------------+--------------+
|        4 |           4 |     56000.00 |
|        5 |           5 |     15000.00 |
|        7 |           7 |     35000.00 |
|        8 |           8 |     18000.00 |
|       12 |          12 |     22000.00 |
|       13 |          13 |     56000.00 |
|       14 |          14 |     15000.00 |
|       18 |          10 |     15000.00 |
+----------+-------------+--------------+
8 rows in set (0.01 sec)

mysql> -- 5. Display the payment ID and payment method for payments whose order IDs are between 5 and 15.
mysql> select payment_id, payment_method from payments where order_id between 5 and 15;
+------------+----------------+
| payment_id | payment_method |
+------------+----------------+
|          5 | UPI            |
|          6 | Cash           |
|          7 | UPI            |
|          8 | Credit Card    |
|          9 | Cash           |
|         10 | UPI            |
|         11 | Net Banking    |
|         12 | Cash           |
|         13 | Credit Card    |
|         14 | UPI            |
|         15 | Cash           |
+------------+----------------+
11 rows in set (0.02 sec)

mysql> -- 6. The inventory manager wants the product name, brand, and price of all products priced between ₹15,000 and ₹70,000.
mysql> select product_name, brand, price from products where price between 15000 and 70000;
+------------------------+---------+----------+
| product_name           | brand   | price    |
+------------------------+---------+----------+
| HP Victus 15           | HP      | 65000.00 |
| Apple iPad Air         | Apple   | 56000.00 |
| Canon Pixma G3010      | Canon   | 15000.00 |
| HP Pavilion 14         | HP      | 65000.00 |
| Samsung Galaxy A56     | Samsung | 35000.00 |
| Samsung Galaxy M36     | Samsung | 18000.00 |
| Acer Nitro Monitor     | Acer    | 18000.00 |
| Lenovo Tab M11         | Lenovo  | 22000.00 |
| Samsung Galaxy Tab S10 | Samsung | 56000.00 |
| Epson EcoTank L3250    | Epson   | 15000.00 |
| Canon Laser Printer    | Canon   | 15000.00 |
+------------------------+---------+----------+
11 rows in set (0.00 sec)

mysql> -- 7. The HR team wants to see the first name, last name, city, and registration date of customers who registered between 1st August 2026 and 20th August 2026.
mysql> select first_name, last_name, city, created_at from customers where created_at between '2026-08-01' and '2026-08-20';
+------------+-----------+---------+------------+
| first_name | last_name | city    | created_at |
+------------+-----------+---------+------------+
| Suresh     | Yadav     | Delhi   | 2026-08-01 |
| Kavita     | Mishra    | Patna   | 2026-08-05 |
| Vikash     | Roy       | Ranchi  | 2026-08-08 |
| Sneha      | Jain      | Kolkata | 2026-08-10 |
| Mohit      | Sharma    | Delhi   | 2026-08-12 |
| Anjali     | Sinha     | Pune    | 2026-08-15 |
| Deepak     | Gupta     | Ranchi  | 2026-08-18 |
| Arjun      | kumar     | Lucknow | 2026-08-20 |
+------------+-----------+---------+------------+
8 rows in set (0.02 sec)

mysql> -- 8. The finance team wants the order ID, order date, total amount, and status for orders placed between 10th July 2026 and 18th July 2026.
mysql> select order_id, order_date, total_amount, status from orders where order_date between '2026-07-10' and '2026-07-18';
+----------+------------+--------------+-----------+
| order_id | order_date | total_amount | status    |
+----------+------------+--------------+-----------+
|        9 | 2026-07-10 |      2500.00 | Delivered |
|       10 | 2026-07-11 |     92000.00 | Pending   |
|       11 | 2026-07-12 |       900.00 | Delivered |
|       12 | 2026-07-13 |     22000.00 | Cancelled |
|       13 | 2026-07-14 |     56000.00 | Pending   |
|       14 | 2026-07-15 |     15000.00 | Delivered |
|       15 | 2026-07-16 |     12000.00 | Pending   |
|       16 | 2026-07-17 |      9000.00 | Delivered |
|       17 | 2026-07-18 |     65000.00 | Delivered |
+----------+------------+--------------+-----------+
9 rows in set (0.00 sec)

mysql> -- 9. The warehouse manager wants the product name and stock of products whose stock is between 8 and 20, sorted by stock in ascending order.
mysql> select product_name, stock from products where stock between 8 and 20 order by stock asc;
+---------------------+-------+
| product_name        | stock |
+---------------------+-------+
| Samsung Galaxy S25  |     8 |
| Epson EcoTank L3250 |     8 |
| HP Victus 15        |    10 |
| Dell 24 Monitor     |    10 |
| Apple Magic Mouse   |    10 |
| LG UltraGear 24     |    12 |
| Lenovo Tab M11      |    12 |
| Samsung Galaxy M36  |    18 |
| Samsung Galaxy A56  |    20 |
+---------------------+-------+
9 rows in set (0.01 sec)

mysql> -- 10. The sales manager wants the payment ID, payment method, and payment status for payments made between 8th July 2026 and 18th July 2026, sorted by payment date.
mysql> select payment_id, payment_method, payment_status from payments where payment_date between '2026-07-08' and '2026-07-18' order by payment_date asc;
+------------+----------------+----------------+
| payment_id | payment_method | payment_status |
+------------+----------------+----------------+
|          7 | UPI            | Paid           |
|          8 | Credit Card    | Pending        |
|          9 | Cash           | Paid           |
|         10 | UPI            | Pending        |
|         11 | Net Banking    | Paid           |
|         12 | Cash           | Refunded       |
|         13 | Credit Card    | Pending        |
|         14 | UPI            | Paid           |
|         15 | Cash           | Pending        |
|         16 | UPI            | Paid           |
|         17 | Credit Card    | Paid           |
+------------+----------------+----------------+
11 rows in set (0.00 sec)

mysql> -- 11. Display the names and prices of the 5 cheapest products priced between ₹10,000 and ₹70,000.
mysql> select product_name, price from products where price between 10000 and 70000 order by asc limit 5;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'asc limit 5' at line 1
mysql> select product_name, price from products where price between 10000 and 70000 order by price asc limit 5;
+---------------------+----------+
| product_name        | price    |
+---------------------+----------+
| Dell 24 Monitor     | 12000.00 |
| LG UltraGear 24     | 12000.00 |
| Canon Pixma G3010   | 15000.00 |
| Canon Laser Printer | 15000.00 |
| Epson EcoTank L3250 | 15000.00 |
+---------------------+----------+
5 rows in set (0.00 sec)

mysql> -- 12. Display the first name and city of customers whose IDs are between 3 and 12, sorted alphabetically.
mysql> select first_name, city from customers where cuetomer_id between 3 and 12 order by first_name asc;
ERROR 1054 (42S22): Unknown column 'cuetomer_id' in 'where clause'
mysql> select first_name, city from customers where customer_id between 3 and 12 order by first_name asc;
+------------+---------+
| first_name | city    |
+------------+---------+
| Amit       | Lucknow |
| Kavita     | Patna   |
| Mohit      | Delhi   |
| Neha       | Kolkata |
| Priti      | Ranchi  |
| Priya      | Patna   |
| Rohan      | Pune    |
| Sneha      | Kolkata |
| Suresh     | Delhi   |
| Vikash     | Ranchi  |
+------------+---------+
10 rows in set (0.00 sec)

mysql> -- 13. Display the order ID, customer ID, and total amount of pending orders whose total amount is between ₹15,000 and ₹80,000.
mysql> select order_id, customer_id, total_amount where status = 'pending' and total_amount between 15000 and 80000;
ERROR 1054 (42S22): Unknown column 'order_id' in 'field list'
mysql> select order_id, customer_id, total_amount from orders where status = 'pending' and total_amount between 15000 and 80000;
+----------+-------------+--------------+
| order_id | customer_id | total_amount |
+----------+-------------+--------------+
|        2 |           2 |     72900.00 |
|        5 |           5 |     15000.00 |
|        8 |           8 |     18000.00 |
|       13 |          13 |     56000.00 |
|       19 |          11 |     72000.00 |
+----------+-------------+--------------+
5 rows in set (0.02 sec)

mysql> -- 14. Display the product name, brand, and stock of HP products whose stock is between 5 and 40, sorted by stock in descending order.
mysql> select product_name, brand, stock from products where brand = 'HP' and stock between 5 and 40 order by stock desc;
+-------------------+-------+-------+
| product_name      | brand | stock |
+-------------------+-------+-------+
| HP Wireless Mouse | HP    |    35 |
| HP Victus 15      | HP    |    10 |
| HP Pavilion 14    | HP    |     6 |
+-------------------+-------+-------+
3 rows in set (0.00 sec)

mysql> /* 15. Display the first 3 products that: */
mysql> /* cost between ₹10,000 and ₹70,000 */
mysql> /* belong to the Samsung brand */
mysql> /* are sorted by price from highest to lowest */
mysql>
mysql> /* Display only: product_name, price */
mysql> select product_name, price from products where price between 10000 and 70000 and brand = 'samsung' order by price desc limit 3;
+------------------------+----------+
| product_name           | price    |
+------------------------+----------+
| Samsung Galaxy Tab S10 | 56000.00 |
| Samsung Galaxy A56     | 35000.00 |
| Samsung Galaxy M36     | 18000.00 |
+------------------------+----------+
3 rows in set (0.01 sec)

mysql> select product_name, price from products where price between 70000 and 10000 and brand = 'samsung' order by price desc limit 3;
Empty set (0.02 sec)
```