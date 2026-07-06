Limits :-

```SQL
mysql> /*Limit : It restricts the number of rows returned by a query.*/
mysql> /*Syntax :- select column_name from table_name limit number;*/
mysql> /*Returns only first (number) of rows*/
mysql>
mysql> /*LIMIT does not sort the data.*/
mysql> /*It simply returns the first n rows based on the current order.*/
mysql> /*That's why we often combine it with ORDER BY.*/
mysql>
mysql> -- Example :-
mysql> /*select * from products order by price desc limit 5;*/
mysql> /*Means :- Sort by highest price, then show only the first 5.*/
mysql>

mysql> /* Practice Questions (Basic LIMIT) */
mysql> -- 1. Display the first 5 customers.
mysql> select first_name, last_name from customers limit 5;
+------------+-----------+
| first_name | last_name |
+------------+-----------+
| Anand      | Kumar     |
| Rahul      | Singh     |
| Priya      | Sharma    |
| Amit       | verma     |
| Neha       | gupta     |
+------------+-----------+
5 rows in set (0.03 sec)

mysql> -- 2. Display the first 3 products.
mysql> select product_id, product_name from products limit 3;
+------------+---------------------+
| product_id | product_name        |
+------------+---------------------+
|          1 | HP Victus 15        |
|          2 | Samsung Galaxy S25  |
|          3 | Logitech G102 Mouse |
+------------+---------------------+
3 rows in set (0.02 sec)

mysql> -- 3. Display the first 10 orders.
mysql> select order_id, customer_id from orders limit 10;
+----------+-------------+
| order_id | customer_id |
+----------+-------------+
|        1 |           1 |
|        6 |           1 |
|        2 |           2 |
|       20 |           2 |
|        3 |           3 |
|       15 |           3 |
|        4 |           4 |
|        5 |           5 |
|       16 |           5 |
|        7 |           7 |
+----------+-------------+
10 rows in set (0.00 sec)

mysql> -- 4. Display the first 5 payments.
mysql> select payment_id, payment_date, payment_status from payments limit 5;
+------------+--------------+----------------+
| payment_id | payment_date | payment_status |
+------------+--------------+----------------+
|          1 | 2026-07-01   | Paid           |
|          2 | 2026-07-02   | Pending        |
|          3 | 2026-07-03   | Paid           |
|          4 | 2026-07-04   | Refunded       |
|          5 | 2026-07-05   | Pending        |
+------------+--------------+----------------+
5 rows in set (0.02 sec)

mysql> -- 5. Display the first 2 categories.
mysql> select category_name, description from categories limit 2;
+---------------+------------------------+
| category_name | description            |
+---------------+------------------------+
| Laptop        | Portable computers     |
| Smartphone    | Android and iOS phones |
+---------------+------------------------+
2 rows in set (0.01 sec)

mysql> /* (Order by + limit) */

mysql> -- 6. Display the 3 most expensive products.
mysql> select product_id, product_name from products order by price desc limit 3;
+------------+--------------------+
| product_id | product_name       |
+------------+--------------------+
|          8 | HP Omen 16         |
|          2 | Samsung Galaxy S25 |
|          1 | HP Victus 15       |
+------------+--------------------+
3 rows in set (0.00 sec)

mysql> select product_id, product_name, price from products order by price desc limit 3;
+------------+--------------------+----------+
| product_id | product_name       | price    |
+------------+--------------------+----------+
|          8 | HP Omen 16         | 92000.00 |
|          2 | Samsung Galaxy S25 | 72000.00 |
|          1 | HP Victus 15       | 65000.00 |
+------------+--------------------+----------+
3 rows in set (0.00 sec)

mysql> -- 7. Display the 5 cheapest products.
mysql> select product_id, product_name, price from products order by price asc limit 5;
+------------+------------------------+---------+
| product_id | product_name           | price   |
+------------+------------------------+---------+
|          3 | Logitech G102 Mouse    |  900.00 |
|         20 | HP Wireless Mouse      |  900.00 |
|         11 | Logitech Keyboard K120 |  900.00 |
|         12 | Logitech Webcam C270   | 2500.00 |
|         19 | Apple Magic Mouse      | 9000.00 |
+------------+------------------------+---------+
5 rows in set (0.00 sec)

mysql> -- 8. Display the 4 newest customers (based on created_at).
mysql> select customer_id, customer_name, created_at from customers order by created_at desc limit 4;
ERROR 1054 (42S22): Unknown column 'customer_name' in 'field list'

mysql> select customer_id, first_name, created_at from customers order by created_at desc limit 4;
+-------------+------------+------------+
| customer_id | first_name | created_at |
+-------------+------------+------------+
|          15 | Arjun      | 2026-08-20 |
|          14 | Deepak     | 2026-08-18 |
|          13 | Anjali     | 2026-08-15 |
|          12 | Mohit      | 2026-08-12 |
+-------------+------------+------------+
4 rows in set (0.00 sec)

mysql> -- 9. Display the 3 oldest customers.
mysql> select customer_id, first_name, created_at from customers order by created_at asc limit 3;
+-------------+------------+------------+
| customer_id | first_name | created_at |
+-------------+------------+------------+
|           1 | Anand      | 2026-01-10 |
|           2 | Rahul      | 2026-02-15 |
|           3 | Priya      | 2026-03-12 |
+-------------+------------+------------+
3 rows in set (0.00 sec)

mysql> -- 10. Display the 5 latest orders.
mysql> select order_id, customer_id, date from orders order by date desc limit 5;
ERROR 1054 (42S22): Unknown column 'date' in 'field list'

mysql> select order_id, customer_id, order_date from orders order by date desc limit 5;
ERROR 1054 (42S22): Unknown column 'date' in 'order clause'

mysql> select order_id, customer_id, order_date from orders order by order_date desc limit 5;
+----------+-------------+------------+
| order_id | customer_id | order_date |
+----------+-------------+------------+
|       20 |           2 | 2026-07-21 |
|       19 |          11 | 2026-07-20 |
|       18 |          10 | 2026-07-19 |
|       17 |           9 | 2026-07-18 |
|       16 |           5 | 2026-07-17 |
+----------+-------------+------------+
5 rows in set (0.00 sec)

mysql> /* (Where + Limit) */

mysql> -- 11. Display the first 2 customers from Ranchi.
mysql> select customer_id, first_name from customers where city = 'Ranchi' limit 2;
+-------------+------------+
| customer_id | first_name |
+-------------+------------+
|           1 | Anand      |
|           7 | Priti      |
+-------------+------------+
2 rows in set (0.00 sec)

mysql> -- 12. Display the first 3 Samsung products.
mysql> select product_id, product_name, price from products where brand = 'Samsung' limit 3;
+------------+--------------------+----------+
| product_id | product_name       | price    |
+------------+--------------------+----------+
|          2 | Samsung Galaxy S25 | 72000.00 |
|          9 | Samsung Galaxy A56 | 35000.00 |
|         10 | Samsung Galaxy M36 | 18000.00 |
+------------+--------------------+----------+
3 rows in set (0.00 sec)

mysql> -- 13. Display the first 2 pending orders.
mysql> select order_id, customer_id, status from orders where status = 'Pending' limit 2;
+----------+-------------+---------+
| order_id | customer_id | status  |
+----------+-------------+---------+
|        2 |           2 | Pending |
|        5 |           5 | Pending |
+----------+-------------+---------+
2 rows in set (0.00 sec)

mysql> -- 14. Display the first 2 paid payments.
mysql> selct payment_id, payment_method from payments where payment_status = 'paid' limit 2;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'selct payment_id, payment_method from payments where payment_status = 'paid' lim' at line 1

mysql> select payment_id, payment_method from payments where payment_status = 'paid' limit 2;
+------------+----------------+
| payment_id | payment_method |
+------------+----------------+
|          1 | UPI            |
|          3 | Cash           |
+------------+----------------+
2 rows in set (0.00 sec)

mysql> -- 15. Display the first 3 products whose stock is greater than 10.
mysql> select product_id, product_name from products where stock > 10 limit 3;
+------------+---------------------+
| product_id | product_name        |
+------------+---------------------+
|          3 | Logitech G102 Mouse |
|          4 | LG UltraGear 24     |
|          9 | Samsung Galaxy A56  |
+------------+---------------------+
3 rows in set (0.02 sec)

mysql> select product_id, product_name, stock from products where stock > 10 limit 3;
+------------+---------------------+-------+
| product_id | product_name        | stock |
+------------+---------------------+-------+
|          3 | Logitech G102 Mouse |    35 |
|          4 | LG UltraGear 24     |    12 |
|          9 | Samsung Galaxy A56  |    20 |
+------------+---------------------+-------+
3 rows in set (0.00 sec)

mysql> /* Offset */
mysql> /* SYNTAX :- Limit offeset_number, count_number */
mysql> -- Example :-
mysql> /*Limit 5,3*/
mysql> /*Means :- skip first 5 rows, return the next 3 rows. */
mysql>

mysql> -- 16. Skip the first 5 customers and display the next 5.
mysql> select customer_id, first_name from customers limit 5,5;
+-------------+------------+
| customer_id | first_name |
+-------------+------------+
|           6 | Rohan      |
|           7 | Priti      |
|           8 | Suresh     |
|           9 | Kavita     |
|          10 | Vikash     |
+-------------+------------+
5 rows in set (0.00 sec)

mysql> -- 17. Skip the first 3 products and display the next 4.
mysql> selct product_id, product_name from products limit 3,4;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'selct product_id, product_name from products limit 3,4' at line 1

mysql> select product_id, product_name from products limit 3,4;
+------------+-------------------+
| product_id | product_name      |
+------------+-------------------+
|          4 | LG UltraGear 24   |
|          5 | Apple iPad Air    |
|          6 | Canon Pixma G3010 |
|          7 | HP Pavilion 14    |
+------------+-------------------+
4 rows in set (0.00 sec)

mysql> -- 18. Skip the first 5 orders and display the next 5.
mysql> select order_id, total_amount from orders limit 5,5;
+----------+--------------+
| order_id | total_amount |
+----------+--------------+
|        6 |       900.00 |
|        7 |     35000.00 |
|        8 |     18000.00 |
|        9 |      2500.00 |
|       10 |     92000.00 |
+----------+--------------+
5 rows in set (0.00 sec)

mysql> -- 19. Skip the first 2 payments and display the next 3.
mysql> select payment_id, payment_method,payment_status from payments limit 2,3;
+------------+----------------+----------------+
| payment_id | payment_method | payment_status |
+------------+----------------+----------------+
|          3 | Cash           | Paid           |
|          4 | Credit Card    | Refunded       |
|          5 | UPI            | Pending        |
+------------+----------------+----------------+
3 rows in set (0.00 sec)

mysql> -- 20. Skip the first 1 category and display the next 3.
mysql> select category_id, category_name from categories limit 1,3;
+-------------+---------------+
| category_id | category_name |
+-------------+---------------+
|           1 | Laptop        |
|           4 | Moniter       |
|           6 | Printer       |
+-------------+---------------+
3 rows in set (0.02 sec)

mysql> /* Challenge Questions */

mysql> -- Question 1: Which query will execute first ?
mysql> /* Query - select * from products order by price desc limit 5; */
mysql> select * from products order by price desc limit 5;
+------------+--------------------+-------------+----------+-------+---------+
| product_id | product_name       | category_id | price    | stock | brand   |
+------------+--------------------+-------------+----------+-------+---------+
|          8 | HP Omen 16         |           1 | 92000.00 |     4 | HP      |
|          2 | Samsung Galaxy S25 |           2 | 72000.00 |     8 | Samsung |
|          1 | HP Victus 15       |           1 | 65000.00 |    10 | HP      |
|          7 | HP Pavilion 14     |           1 | 65000.00 |     6 | HP      |
|          5 | Apple iPad Air     |           5 | 56000.00 |     5 | Apple   |
+------------+--------------------+-------------+----------+-------+---------+
5 rows in set (0.02 sec)

mysql> -- Question 2
mysql> select * from customers limit 100;
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
15 rows in set (0.00 sec)

mysql> -- Final Challenge
mysql> /*Question :- Write one query that does all of this : */
mysql> /* 1. Show 3 Products. */
mysql> /* 2. Only HP Products. */
mysql> /* 3. Sort by price from highest to lowest */
mysql> /*Display only product name and price */
mysql>
mysql> -- Answer/Query
mysql>
mysql> select product_name, price from products where brand = 'HP' order by price desc limit 3;
+----------------+----------+
| product_name   | price    |
+----------------+----------+
| HP Omen 16     | 92000.00 |
| HP Victus 15   | 65000.00 |
| HP Pavilion 14 | 65000.00 |
+----------------+----------+
3 rows in set (0.02 sec)
```