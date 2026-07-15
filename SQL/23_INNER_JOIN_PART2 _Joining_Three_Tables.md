INNER JOIN PART2 (Joining 3 Tables)

```SQL
mysql> /* INNER JOIN PART2 (Joining 3 Tables) */
mysql> /* Example : */
mysql> SELECT first_name, orders.order_id, product_id, quantity from customers INNER JOIN orders ON customers.customer_id = orders.customer_id INNER JOIN orderitems ON orders.order_id = orderitems.order_id;
+------------+----------+------------+----------+
| first_name | order_id | product_id | quantity |
+------------+----------+------------+----------+
| Anand      |        1 |          1 |        1 |
| Rahul      |        2 |          2 |        1 |
| Rahul      |        2 |          3 |        1 |
| Priya      |        3 |          4 |        1 |
| Amit       |        4 |          5 |        1 |
| Neha       |        5 |          6 |        1 |
| Anand      |        6 |          3 |        1 |
| Priti      |        7 |          9 |        1 |
| Suresh     |        8 |         10 |        1 |
| Kavita     |        9 |         12 |        1 |
| Vikash     |       10 |          8 |        1 |
| Sneha      |       11 |         20 |        1 |
| Mohit      |       12 |         15 |        1 |
| Anjali     |       13 |         16 |        1 |
| Deepak     |       14 |         17 |        1 |
| Priya      |       15 |         13 |        1 |
| Neha       |       16 |         19 |        1 |
| Kavita     |       17 |          7 |        1 |
| Vikash     |       18 |         18 |        1 |
| Sneha      |       19 |          2 |        1 |
| Rahul      |       20 |          3 |        1 |
| Kavita     |       17 |         20 |        2 |
| Vikash     |       18 |         12 |        2 |
| Sneha      |       19 |          6 |        1 |
| Rahul      |       20 |          4 |        1 |
| Vikash     |       10 |         11 |        1 |
| Suresh     |        8 |         14 |        1 |
+------------+----------+------------+----------+
27 rows in set (0.13 sec)

mysql> /* Practice Questions */
mysql> -- 1. Display Customer Name and Product ID.
mysql> select first_name, product_id from customers INNER JOIN orders ON customers.customer_id = orders.customer_id INNER JOIN orders.order_id = orderitems.order_id;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '= orderitems.order_id' at line 1
mysql>
mysql> SELECT first_name, product_id from customers INNER JOIN orders ON customers.customer_id = orders.customer_id INNER JOIN orderitems ON orders.order_id = orderitems.order_id;
+------------+------------+
| first_name | product_id |
+------------+------------+
| Anand      |          1 |
| Anand      |          3 |
| Rahul      |          2 |
| Rahul      |          3 |
| Rahul      |          3 |
| Rahul      |          4 |
| Priya      |          4 |
| Priya      |         13 |
| Amit       |          5 |
| Neha       |          6 |
| Neha       |         19 |
| Priti      |          9 |
| Suresh     |         10 |
| Suresh     |         14 |
| Kavita     |         12 |
| Kavita     |          7 |
| Kavita     |         20 |
| Vikash     |          8 |
| Vikash     |         11 |
| Vikash     |         18 |
| Vikash     |         12 |
| Sneha      |         20 |
| Sneha      |          2 |
| Sneha      |          6 |
| Mohit      |         15 |
| Anjali     |         16 |
| Deepak     |         17 |
+------------+------------+
27 rows in set (0.02 sec)

mysql> -- 2. Display Customer name, quantity purchased.
mysql> select first_name, quantity from customers INNER JOIN orders ON customers.customer_id = orders.customers_id INNER JOIN orderitems ON orders.order_id = orderitems.order_id;
ERROR 1054 (42S22): Unknown column 'orders.customers_id' in 'on clause'
mysql> select first_name, quantity from customers INNER JOIN orders ON customers.customer_id = orders.customer_id INNER JOIN orderitems ON orders.order_id = orderitems.order_id;
+------------+----------+
| first_name | quantity |
+------------+----------+
| Anand      |        1 |
| Anand      |        1 |
| Rahul      |        1 |
| Rahul      |        1 |
| Rahul      |        1 |
| Rahul      |        1 |
| Priya      |        1 |
| Priya      |        1 |
| Amit       |        1 |
| Neha       |        1 |
| Neha       |        1 |
| Priti      |        1 |
| Suresh     |        1 |
| Suresh     |        1 |
| Kavita     |        1 |
| Kavita     |        1 |
| Kavita     |        2 |
| Vikash     |        1 |
| Vikash     |        1 |
| Vikash     |        1 |
| Vikash     |        2 |
| Sneha      |        1 |
| Sneha      |        1 |
| Sneha      |        1 |
| Mohit      |        1 |
| Anjali     |        1 |
| Deepak     |        1 |
+------------+----------+
27 rows in set (0.02 sec)

mysql> -- 3. Display customer name, order date, quantity.
mysql> select first_name AS Customer_Name, order_date AS Purchase_Date, Quantity from customers INNER JOIN orders ON customers.customer_id = orders.customer_id INNER JOIN orderitems ON orders.order_id = orderitems.order_id;
+---------------+---------------+----------+
| Customer_Name | Purchase_Date | Quantity |
+---------------+---------------+----------+
| Anand         | 2026-07-01    |        1 |
| Rahul         | 2026-07-02    |        1 |
| Rahul         | 2026-07-02    |        1 |
| Priya         | 2026-07-03    |        1 |
| Amit          | 2026-07-04    |        1 |
| Neha          | 2026-07-05    |        1 |
| Anand         | 2026-07-06    |        1 |
| Priti         | 2026-07-08    |        1 |
| Suresh        | 2026-07-09    |        1 |
| Suresh        | 2026-07-09    |        1 |
| Kavita        | 2026-07-10    |        1 |
| Vikash        | 2026-07-11    |        1 |
| Vikash        | 2026-07-11    |        1 |
| Sneha         | 2026-07-12    |        1 |
| Mohit         | 2026-07-13    |        1 |
| Anjali        | 2026-07-14    |        1 |
| Deepak        | 2026-07-15    |        1 |
| Priya         | 2026-07-16    |        1 |
| Neha          | 2026-07-17    |        1 |
| Kavita        | 2026-07-18    |        1 |
| Kavita        | 2026-07-18    |        2 |
| Vikash        | 2026-07-19    |        1 |
| Vikash        | 2026-07-19    |        2 |
| Sneha         | 2026-07-20    |        1 |
| Sneha         | 2026-07-20    |        1 |
| Rahul         | 2026-07-21    |        1 |
| Rahul         | 2026-07-21    |        1 |
+---------------+---------------+----------+
27 rows in set (0.02 sec)

mysql> -- 4. Display customer name, order status, product ID.
mysql> select first_name, status, product_id from customers INNER JOIN orders ON customers.customer_id = orders.customer_id INNER JOIN orderitems ON orders.order_id = orderitems.order_id;
+------------+-----------+------------+
| first_name | status    | product_id |
+------------+-----------+------------+
| Anand      | Delivered |          1 |
| Rahul      | Pending   |          2 |
| Rahul      | Pending   |          3 |
| Priya      | Delivered |          4 |
| Amit       | Cancelled |          5 |
| Neha       | Pending   |          6 |
| Anand      | Delivered |          3 |
| Priti      | Delivered |          9 |
| Suresh     | Pending   |         10 |
| Suresh     | Pending   |         14 |
| Kavita     | Delivered |         12 |
| Vikash     | Delivered |          8 |
| Vikash     | Delivered |         11 |
| Sneha      | Delivered |         20 |
| Mohit      | Cancelled |         15 |
| Anjali     | Pending   |         16 |
| Deepak     | Delivered |         17 |
| Priya      | Pending   |         13 |
| Neha       | Delivered |         19 |
| Kavita     | Delivered |          7 |
| Kavita     | Delivered |         20 |
| Vikash     | Cancelled |         18 |
| Vikash     | Cancelled |         12 |
| Sneha      | Pending   |          2 |
| Sneha      | Pending   |          6 |
| Rahul      | Delivered |          3 |
| Rahul      | Delivered |          4 |
+------------+-----------+------------+
27 rows in set (0.00 sec)

mysql> -- 5. Display customer_name, order_ID, product_ID, Quantity, order_date.
mysql> select first_name AS Customer_Name, order_id, product_id, quantity from customers INNER JOIN orders ON customers.customer_id = orders.customer_id INNER JOIN orderitems ON orders.order_id = orderitems.order_id;
ERROR 1052 (23000): Column 'order_id' in field list is ambiguous

mysql> select first_name AS Customer_Name, orders.order_id, product_id, quantity from customers INNER JOIN orders ON customers.customer_id = orders.customer_id INNER JOIN orderitems ON orders.order_id = orderitems.order_id;
+---------------+----------+------------+----------+
| Customer_Name | order_id | product_id | quantity |
+---------------+----------+------------+----------+
| Anand         |        1 |          1 |        1 |
| Anand         |        6 |          3 |        1 |
| Rahul         |        2 |          2 |        1 |
| Rahul         |        2 |          3 |        1 |
| Rahul         |       20 |          3 |        1 |
| Rahul         |       20 |          4 |        1 |
| Priya         |        3 |          4 |        1 |
| Priya         |       15 |         13 |        1 |
| Amit          |        4 |          5 |        1 |
| Neha          |        5 |          6 |        1 |
| Neha          |       16 |         19 |        1 |
| Priti         |        7 |          9 |        1 |
| Suresh        |        8 |         10 |        1 |
| Suresh        |        8 |         14 |        1 |
| Kavita        |        9 |         12 |        1 |
| Kavita        |       17 |          7 |        1 |
| Kavita        |       17 |         20 |        2 |
| Vikash        |       10 |          8 |        1 |
| Vikash        |       10 |         11 |        1 |
| Vikash        |       18 |         18 |        1 |
| Vikash        |       18 |         12 |        2 |
| Sneha         |       11 |         20 |        1 |
| Sneha         |       19 |          2 |        1 |
| Sneha         |       19 |          6 |        1 |
| Mohit         |       12 |         15 |        1 |
| Anjali        |       13 |         16 |        1 |
| Deepak        |       14 |         17 |        1 |
+---------------+----------+------------+----------+
27 rows in set (0.01 sec)

mysql> -- 6. Display all products(Product_IDs) purchased by Anand.
mysql> select first_name, product_id from customers INNER JOIN orders ON customers.customer_id = orders.customer_id INNER JOIN orderitems ON orders.order_id = orderitems.order_id where first_name = 'Anand';
+------------+------------+
| first_name | product_id |
+------------+------------+
| Anand      |          1 |
| Anand      |          3 |
+------------+------------+
2 rows in set (0.02 sec)

mysql> -- 7. Display all order IDs placed by Rahul.
mysql> select first_name, order_id from customers INNER JOIN orders ON customers.customer_id = orders.customer_id where first_name = 'Rahul';
+------------+----------+
| first_name | order_id |
+------------+----------+
| Rahul      |        2 |
| Rahul      |       20 |
+------------+----------+
2 rows in set (0.00 sec)

mysql> -- 8. Display all customers who purchased more than 1 quantity of any product.
mysql> select customer_id, first_name, quantity from customers INNER JOIN orders ON customers.customer_id = orders.customer_id INNER JOIN orderitems ON orders.order_id = orderitems.order_id where quantity > 1;
ERROR 1052 (23000): Column 'customer_id' in field list is ambiguous
mysql> select first_name, quantity from customers INNER JOIN orders ON customers.customer_id = orders.customer_id INNER JOIN orderitems ON orders.order_id = orderitems.order_id where quantity > 1;
+------------+----------+
| first_name | quantity |
+------------+----------+
| Kavita     |        2 |
| Vikash     |        2 |
+------------+----------+
2 rows in set (0.02 sec)

mysql> select customers.customer_id, first_name, quantity from customers INNER JOIN orders ON customers.customer_id = orders.customer_id INNER JOIN orderitems ON orders.order_id = orderitems.order_id where quantity > 1;
+-------------+------------+----------+
| customer_id | first_name | quantity |
+-------------+------------+----------+
|           9 | Kavita     |        2 |
|          10 | Vikash     |        2 |
+-------------+------------+----------+
2 rows in set (0.02 sec)

mysql> -- 9. Display all orders where the quantity purchased is exactly 1.
mysql> select orders.order_id, quantity from orders INNER JOIN orderitems ON orders.order_id = orderitems.order_id where quantity = 1;
+----------+----------+
| order_id | quantity |
+----------+----------+
|        1 |        1 |
|        2 |        1 |
|        2 |        1 |
|        3 |        1 |
|        4 |        1 |
|        5 |        1 |
|        6 |        1 |
|        7 |        1 |
|        8 |        1 |
|        9 |        1 |
|       10 |        1 |
|       11 |        1 |
|       12 |        1 |
|       13 |        1 |
|       14 |        1 |
|       15 |        1 |
|       16 |        1 |
|       17 |        1 |
|       18 |        1 |
|       19 |        1 |
|       20 |        1 |
|       19 |        1 |
|       20 |        1 |
|       10 |        1 |
|        8 |        1 |
+----------+----------+
25 rows in set (0.00 sec)

mysql> -- 10. Display customer_Name, order_ID, Quantity only for Delivered orders.
mysql> select first_name, orders.order_id, quantity from customers INNER JOIN orders ON customers.customer_id = orders.customer_id INNER JOIN orderitems ON orders.order_id = orderitems.order_id where status = 'delivered';
+------------+----------+----------+
| first_name | order_id | quantity |
+------------+----------+----------+
| Anand      |        1 |        1 |
| Priya      |        3 |        1 |
| Anand      |        6 |        1 |
| Priti      |        7 |        1 |
| Kavita     |        9 |        1 |
| Vikash     |       10 |        1 |
| Vikash     |       10 |        1 |
| Sneha      |       11 |        1 |
| Deepak     |       14 |        1 |
| Neha       |       16 |        1 |
| Kavita     |       17 |        1 |
| Kavita     |       17 |        2 |
| Rahul      |       20 |        1 |
| Rahul      |       20 |        1 |
+------------+----------+----------+
14 rows in set (0.02 sec)

mysql> /* Final Challenge */
mysql> /* Write one query that displays: Customer Name, Order ID, Quantity using three table. */
mysql> select first_name, orders.order_id, quantity from customers INNER JOIN orders ON customers.customer_id = orders.customer_id INNER JOIN orderitems ON orders.order_id = orderitems.order_id;
+------------+----------+----------+
| first_name | order_id | quantity |
+------------+----------+----------+
| Anand      |        1 |        1 |
| Anand      |        6 |        1 |
| Rahul      |        2 |        1 |
| Rahul      |        2 |        1 |
| Rahul      |       20 |        1 |
| Rahul      |       20 |        1 |
| Priya      |        3 |        1 |
| Priya      |       15 |        1 |
| Amit       |        4 |        1 |
| Neha       |        5 |        1 |
| Neha       |       16 |        1 |
| Priti      |        7 |        1 |
| Suresh     |        8 |        1 |
| Suresh     |        8 |        1 |
| Kavita     |        9 |        1 |
| Kavita     |       17 |        1 |
| Kavita     |       17 |        2 |
| Vikash     |       10 |        1 |
| Vikash     |       10 |        1 |
| Vikash     |       18 |        1 |
| Vikash     |       18 |        2 |
| Sneha      |       11 |        1 |
| Sneha      |       19 |        1 |
| Sneha      |       19 |        1 |
| Mohit      |       12 |        1 |
| Anjali     |       13 |        1 |
| Deepak     |       14 |        1 |
+------------+----------+----------+
27 rows in set (0.00 sec)
```