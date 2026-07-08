IN Clause

```SQL
mysql> /* IN Clause */
mysql> /* The IN operator is used to check whether a value matches any value in a list. */
mysql>
mysql> /* select column_name from table_name where column_name in (value1, value2, value3, ...); */
mysql>
mysql> /* Problem : Suppose we want customers whose city is Ranchi, Delhi, or Patna. */
mysql> /* We can write */
mysql>
mysql> /* Without IN */
mysql> select first_name, city from customers where city = 'Ranchi' or city = 'Delhi' or city = 'Patna';
+------------+--------+
| first_name | city   |
+------------+--------+
| Anand      | Ranchi |
| Rahul      | Delhi  |
| Priya      | Patna  |
| Priti      | Ranchi |
| Suresh     | Delhi  |
| Kavita     | Patna  |
| Vikash     | Ranchi |
| Mohit      | Delhi  |
| Deepak     | Ranchi |
+------------+--------+
9 rows in set (0.02 sec)

mysql> /* With IN */
mysql> select first_name, city from customers where city in('Ranchi', 'Delhi', 'Patna');
+------------+--------+
| first_name | city   |
+------------+--------+
| Anand      | Ranchi |
| Rahul      | Delhi  |
| Priya      | Patna  |
| Priti      | Ranchi |
| Suresh     | Delhi  |
| Kavita     | Patna  |
| Vikash     | Ranchi |
| Mohit      | Delhi  |
| Deepak     | Ranchi |
+------------+--------+
9 rows in set (0.00 sec)

mysql> /* Using IN Makes Query Much shorter, cleaner, easier to read.*/
mysql> /* The IN operator is equivalent to using multiple OR conditions on the same column. */
mysql>
mysql>
mysql> -- 1. Display all details of customers who belong to Ranchi or Delhi.
mysql> select * from customers where city in('ranchi', 'delhi');
+-------------+------------+-----------+------------------+------------+--------+------------+
| customer_id | first_name | last_name | email            | phone      | city   | created_at |
+-------------+------------+-----------+------------------+------------+--------+------------+
|           1 | Anand      | Kumar     | anand@gmail.com  | 9876543210 | Ranchi | 2026-01-10 |
|           2 | Rahul      | Singh     | rahul@gmail.com  | 9876543211 | Delhi  | 2026-02-15 |
|           7 | Priti      | kumari    | priti@gmail.com  | 9876543216 | Ranchi | 2026-07-23 |
|           8 | Suresh     | Yadav     | suresh@gmail.com | 9876543217 | Delhi  | 2026-08-01 |
|          10 | Vikash     | Roy       | vikash@gmail.com | 9876543219 | Ranchi | 2026-08-08 |
|          12 | Mohit      | Sharma    | mohit@gmail.com  | 9876543221 | Delhi  | 2026-08-12 |
|          14 | Deepak     | Gupta     | deepak@gmail.com | 9876543223 | Ranchi | 2026-08-18 |
+-------------+------------+-----------+------------------+------------+--------+------------+
7 rows in set (0.02 sec)

mysql> -- 2. Display the product name, brand, and price of products whose brand is HP or Samsung.
mysql> select product_name, brand, price from products where brand in('HP', 'Samsung');
+------------------------+---------+----------+
| product_name           | brand   | price    |
+------------------------+---------+----------+
| HP Victus 15           | HP      | 65000.00 |
| Samsung Galaxy S25     | Samsung | 72000.00 |
| HP Pavilion 14         | HP      | 65000.00 |
| HP Omen 16             | HP      | 92000.00 |
| Samsung Galaxy A56     | Samsung | 35000.00 |
| Samsung Galaxy M36     | Samsung | 18000.00 |
| Samsung Galaxy Tab S10 | Samsung | 56000.00 |
| HP Wireless Mouse      | HP      |   900.00 |
+------------------------+---------+----------+
8 rows in set (0.02 sec)

mysql> -- 3. Display the order ID, customer ID, and status of orders whose status is Pending or Cancelled.
mysql> select order_id, customer_id, status from orders where status in('Pending', 'Cancelled');
+----------+-------------+-----------+
| order_id | customer_id | status    |
+----------+-------------+-----------+
|        2 |           2 | Pending   |
|        4 |           4 | Cancelled |
|        5 |           5 | Pending   |
|        8 |           8 | Pending   |
|       10 |          10 | Pending   |
|       12 |          12 | Cancelled |
|       13 |          13 | Pending   |
|       15 |           3 | Pending   |
|       18 |          10 | Cancelled |
|       19 |          11 | Pending   |
+----------+-------------+-----------+
10 rows in set (0.00 sec)

mysql> -- 4. Display the payment ID, payment method, and payment status of payments made using UPI or Cash.
mysql> select payment_id, payment_method, payment_status from payments where payment_method in('UPI', 'Cash');
+------------+----------------+----------------+
| payment_id | payment_method | payment_status |
+------------+----------------+----------------+
|          1 | UPI            | Paid           |
|          3 | Cash           | Paid           |
|          5 | UPI            | Pending        |
|          6 | Cash           | Paid           |
|          7 | UPI            | Paid           |
|          9 | Cash           | Paid           |
|         10 | UPI            | Pending        |
|         12 | Cash           | Refunded       |
|         14 | UPI            | Paid           |
|         15 | Cash           | Pending        |
|         16 | UPI            | Paid           |
|         19 | Cash           | Paid           |
|         20 | UPI            | Paid           |
+------------+----------------+----------------+
13 rows in set (0.00 sec)

mysql> -- 5. Display all details of products whose category ID is 1, 3, or 5.
mysql> select * from products where category_id in(1,3,5);
+------------+------------------------+-------------+----------+-------+----------+
| product_id | product_name           | category_id | price    | stock | brand    |
+------------+------------------------+-------------+----------+-------+----------+
|          1 | HP Victus 15           |           1 | 65000.00 |    10 | HP       |
|          3 | Logitech G102 Mouse    |           3 |   900.00 |    35 | Logitech |
|          5 | Apple iPad Air         |           5 | 56000.00 |     5 | Apple    |
|          7 | HP Pavilion 14         |           1 | 65000.00 |     6 | HP       |
|          8 | HP Omen 16             |           1 | 92000.00 |     4 | HP       |
|         11 | Logitech Keyboard K120 |           3 |   900.00 |    40 | Logitech |
|         12 | Logitech Webcam C270   |           3 |  2500.00 |    25 | Logitech |
|         15 | Lenovo Tab M11         |           5 | 22000.00 |    12 | Lenovo   |
|         16 | Samsung Galaxy Tab S10 |           5 | 56000.00 |     6 | Samsung  |
|         19 | Apple Magic Mouse      |           3 |  9000.00 |    10 | Apple    |
|         20 | HP Wireless Mouse      |           3 |   900.00 |    35 | HP       |
+------------+------------------------+-------------+----------+-------+----------+
11 rows in set (0.01 sec)

mysql> /* Level 2 -- Real Database Tasks */
mysql> -- 6. The sales manager wants the first name, last name, city, and email of customers who live in Patna, Pune, or Lucknow.
mysql> select first_name, last_name, city, email from customers where city in('Patna', 'Pune', 'Lucknow');
+------------+-----------+---------+------------------+
| first_name | last_name | city    | email            |
+------------+-----------+---------+------------------+
| Priya      | Sharma    | Patna   | priya@gmail.com  |
| Amit       | verma     | Lucknow | amit@gmail.com   |
| Rohan      | Das       | Pune    | rohan@gmail.com  |
| Kavita     | Mishra    | Patna   | kavita@gmail.com |
| Anjali     | Sinha     | Pune    | anjali@gmail.com |
| Arjun      | kumar     | Lucknow | arjun@gmail.com  |
+------------+-----------+---------+------------------+
6 rows in set (0.02 sec)

mysql> -- 7. The inventory manager wants the product name, brand, stock, and price of Canon, Apple, or Logitech products.
mysql> select product_name, brand, stock, price from products where brand in ('Canon', 'Apple', 'Logitech');
+------------------------+----------+-------+----------+
| product_name           | brand    | stock | price    |
+------------------------+----------+-------+----------+
| Logitech G102 Mouse    | Logitech |    35 |   900.00 |
| Apple iPad Air         | Apple    |     5 | 56000.00 |
| Canon Pixma G3010      | Canon    |     7 | 15000.00 |
| Logitech Keyboard K120 | Logitech |    40 |   900.00 |
| Logitech Webcam C270   | Logitech |    25 |  2500.00 |
| Canon Laser Printer    | Canon    |     5 | 15000.00 |
| Apple Magic Mouse      | Apple    |    10 |  9000.00 |
+------------------------+----------+-------+----------+
7 rows in set (0.00 sec)

mysql> -- 8. The finance team wants the order ID, order date, total amount, and status of orders whose status is Delivered or Pending, sorted by order date.
mysql> select order_id, order_date, total_amount, status from orders where status in('Delivered', 'Pending') order by order_date;
+----------+------------+--------------+-----------+
| order_id | order_date | total_amount | status    |
+----------+------------+--------------+-----------+
|        1 | 2026-07-01 |     65000.00 | Delivered |
|        2 | 2026-07-02 |     72900.00 | Pending   |
|        3 | 2026-07-03 |     12000.00 | Delivered |
|        5 | 2026-07-05 |     15000.00 | Pending   |
|        6 | 2026-07-06 |       900.00 | Delivered |
|        7 | 2026-07-08 |     35000.00 | Delivered |
|        8 | 2026-07-09 |     18000.00 | Pending   |
|        9 | 2026-07-10 |      2500.00 | Delivered |
|       10 | 2026-07-11 |     92000.00 | Pending   |
|       11 | 2026-07-12 |       900.00 | Delivered |
|       13 | 2026-07-14 |     56000.00 | Pending   |
|       14 | 2026-07-15 |     15000.00 | Delivered |
|       15 | 2026-07-16 |     12000.00 | Pending   |
|       16 | 2026-07-17 |      9000.00 | Delivered |
|       17 | 2026-07-18 |     65000.00 | Delivered |
|       19 | 2026-07-20 |     72000.00 | Pending   |
|       20 | 2026-07-21 |       900.00 | Delivered |
+----------+------------+--------------+-----------+
17 rows in set (0.02 sec)

mysql> -- 9. The warehouse manager wants the product name and stock of products belonging to category 3, 4, or 6, sorted by stock in descending order.
mysql> select product_name, stock from products where category_id in (3,4,6) order by stock desc;
+------------------------+-------+
| product_name           | stock |
+------------------------+-------+
| Logitech Keyboard K120 |    40 |
| Logitech G102 Mouse    |    35 |
| HP Wireless Mouse      |    35 |
| Logitech Webcam C270   |    25 |
| LG UltraGear 24        |    12 |
| Dell 24 Monitor        |    10 |
| Apple Magic Mouse      |    10 |
| Epson EcoTank L3250    |     8 |
| Canon Pixma G3010      |     7 |
| Acer Nitro Monitor     |     7 |
| Canon Laser Printer    |     5 |
+------------------------+-------+
11 rows in set (0.00 sec)

mysql> -- 10. The payment team wants the payment ID, payment method, payment status, and payment date of payments made through Credit Card or Net Banking, sorted by payment date.
mysql> select payment_id, payment_method, payment_status, payment_date from payments where payment_method in('Credit Card', 'Net Banking') order by payment_date;
+------------+----------------+----------------+--------------+
| payment_id | payment_method | payment_status | payment_date |
+------------+----------------+----------------+--------------+
|          2 | Credit Card    | Pending        | 2026-07-02   |
|          4 | Credit Card    | Refunded       | 2026-07-04   |
|          8 | Credit Card    | Pending        | 2026-07-09   |
|         11 | Net Banking    | Paid           | 2026-07-12   |
|         13 | Credit Card    | Pending        | 2026-07-14   |
|         17 | Credit Card    | Paid           | 2026-07-18   |
|         18 | Net Banking    | Pending        | 2026-07-19   |
+------------+----------------+----------------+--------------+
7 rows in set (0.02 sec)

mysql> /* Level 3 -- Interview Style */
mysql> /* 11. Display the 5 cheapest HP or Samsung products. */
mysql> /* show  product_name, brand, price */
mysql>  select product_name, brand, price from products where brand in ('HP', 'Samsung') order by price asc limit 5;
+------------------------+---------+----------+
| product_name           | brand   | price    |
+------------------------+---------+----------+
| HP Wireless Mouse      | HP      |   900.00 |
| Samsung Galaxy M36     | Samsung | 18000.00 |
| Samsung Galaxy A56     | Samsung | 35000.00 |
| Samsung Galaxy Tab S10 | Samsung | 56000.00 |
| HP Victus 15           | HP      | 65000.00 |
+------------------------+---------+----------+
5 rows in set (0.00 sec)

mysql> -- 12. Display the first name and city of customers from Delhi, Ranchi, or Kolkata, sorted alphabetically.
mysql> select first_name, city from customers where city in ('Delhi', 'Ranchi', 'Kolkata') order by first_name asc;
+------------+---------+
| first_name | city    |
+------------+---------+
| Anand      | Ranchi  |
| Deepak     | Ranchi  |
| Mohit      | Delhi   |
| Neha       | Kolkata |
| Priti      | Ranchi  |
| Rahul      | Delhi   |
| Sneha      | Kolkata |
| Suresh     | Delhi   |
| Vikash     | Ranchi  |
+------------+---------+
9 rows in set (0.00 sec)

mysql> select first_name, city from customers where city in ('Delhi', 'Ranchi', 'Kolkata') order by city asc;
+------------+---------+
| first_name | city    |
+------------+---------+
| Rahul      | Delhi   |
| Suresh     | Delhi   |
| Mohit      | Delhi   |
| Neha       | Kolkata |
| Sneha      | Kolkata |
| Anand      | Ranchi  |
| Priti      | Ranchi  |
| Vikash     | Ranchi  |
| Deepak     | Ranchi  |
+------------+---------+
9 rows in set (0.02 sec)

mysql> -- 13. Display the order ID, customer ID, and total amount of Pending or Cancelled orders whose total amount is between ₹15,000 and ₹80,000.
mysql> select order_id, customer_id, total_amount from orders where status in ('cancelled', 'pending') and total_amount between 15000 and 80000;
+----------+-------------+--------------+
| order_id | customer_id | total_amount |
+----------+-------------+--------------+
|        2 |           2 |     72900.00 |
|        4 |           4 |     56000.00 |
|        5 |           5 |     15000.00 |
|        8 |           8 |     18000.00 |
|       12 |          12 |     22000.00 |
|       13 |          13 |     56000.00 |
|       18 |          10 |     15000.00 |
|       19 |          11 |     72000.00 |
+----------+-------------+--------------+
8 rows in set (0.00 sec)

mysql> -- 14. Display the product name, brand, and stock of HP, Samsung, or Apple        select product_name, brand, stock where stock in ('samsung', 'apple', 'hp') and stock between 5 and 20 order by stock desc;
ERROR 1054 (42S22): Unknown column 'product_name' in 'field list'
mysql> select product_name, brand, stock 0from products where stock in ('samsung', 'apple', 'hp') and stock between 5 and 20 order by stock desc;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'products where stock in ('samsung', 'apple', 'hp') and stock between 5 and 20 or' at line 1
mysql> select product_name, brand, stock from products where stock in ('samsung', 'apple', 'hp') and stock between 5 and 20 order by stock desc;
Empty set, 3 warnings (0.00 sec)

mysql> -- 14. Display the product name, brand, and stock of HP, Samsung, or Apple products whose stock is between 5 and 20, sorted by stock in descending order.
mysql> select product_name, brand, stock from products where brand in ('samsung', 'apple', 'hp') and stock between 5 and 20 order by stock desc;
+------------------------+---------+-------+
| product_name           | brand   | stock |
+------------------------+---------+-------+
| Samsung Galaxy A56     | Samsung |    20 |
| Samsung Galaxy M36     | Samsung |    18 |
| HP Victus 15           | HP      |    10 |
| Apple Magic Mouse      | Apple   |    10 |
| Samsung Galaxy S25     | Samsung |     8 |
| HP Pavilion 14         | HP      |     6 |
| Samsung Galaxy Tab S10 | Samsung |     6 |
| Apple iPad Air         | Apple   |     5 |
+------------------------+---------+-------+
8 rows in set (0.00 sec)

mysql> /* 15. Display the first 3 Samsung or HP products: */
mysql> /* priced between ₹15,000 and ₹70,000 */
mysql> /* sorted by price (highest first) */
mysql> /* Display only : product_name, brand, price */
mysql>
mysql>  select product_name, brand, price from products where brand in ('samsung', 'hp') and price between 15000 and 70000 order by price desc limit 3;
+------------------------+---------+----------+
| product_name           | brand   | price    |
+------------------------+---------+----------+
| HP Victus 15           | HP      | 65000.00 |
| HP Pavilion 14         | HP      | 65000.00 |
| Samsung Galaxy Tab S10 | Samsung | 56000.00 |
+------------------------+---------+----------+
3 rows in set (0.01 sec)

mysql> /* Challenge Problem */
mysql> /* Display four products */
mysql> /* Brands are HP, Samsung, or Apple */
mysql> /* Price between ₹15,000 and ₹70,000 */
mysql> /* Sorted by price (descending) */
mysql> /* Display only: product_name, brand, price */
mysql>
mysql> /* Answer Query */
mysql> select product_name, brand, price from products where brand in ('HP', 'Samsung', 'Apple') and price between 15000 and 70000 order by price desc limit 4;
+------------------------+---------+----------+
| product_name           | brand   | price    |
+------------------------+---------+----------+
| HP Victus 15           | HP      | 65000.00 |
| HP Pavilion 14         | HP      | 65000.00 |
| Apple iPad Air         | Apple   | 56000.00 |
| Samsung Galaxy Tab S10 | Samsung | 56000.00 |
+------------------------+---------+----------+
4 rows in set (0.00 sec)
```