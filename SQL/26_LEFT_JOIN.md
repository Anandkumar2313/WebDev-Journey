LEFT JOIN

```SQL
mysql> /* LEFT JOIN */
| INNER JOIN                   | LEFT JOIN                                 |
| ---------------------------- | ----------------------------------------- |
| Returns only matching rows   | Returns all rows from the left table      |
| Unmatched rows are removed   | Unmatched rows are kept                   |
| Missing matches never appear | Missing matches appear with `NULL` values |

mysql> /* LEFT JOIN preserves all rows from the LEFT table. */

mysql> /* Syntax: SELECT column1, column2 FROM table1 LEFT JOIN table2 ON table1.common_column = table2.common_column; */
mysql>
mysql> /* Example: Display customer_id, order_id. */
mysql> select first_name, order_id from customers LEFT JOIN orders ON customers.customer_id = orders.customer_id;
+------------+----------+
| first_name | order_id |
+------------+----------+
| Anand      |        1 |
| Anand      |        6 |
| Rahul      |        2 |
| Rahul      |       20 |
| Priya      |        3 |
| Priya      |       15 |
| Amit       |        4 |
| Neha       |        5 |
| Neha       |       16 |
| Rohan      |     NULL |
| Priti      |        7 |
| Suresh     |        8 |
| Kavita     |        9 |
| Kavita     |       17 |
| Vikash     |       10 |
| Vikash     |       18 |
| Sneha      |       11 |
| Sneha      |       19 |
| Mohit      |       12 |
| Anjali     |       13 |
| Deepak     |       14 |
+------------+----------+
21 rows in set (0.01 sec)

mysql> /* Practice Questions */
mysql> -- 1. Display Customer id, order date using LEFT JOIN.
mysql> select first_name, order_date from customers LEFT JOIN orders ON customers.customer_id = orders.customer_id;
+------------+------------+
| first_name | order_date |
+------------+------------+
| Anand      | 2026-07-01 |
| Anand      | 2026-07-06 |
| Rahul      | 2026-07-02 |
| Rahul      | 2026-07-21 |
| Priya      | 2026-07-03 |
| Priya      | 2026-07-16 |
| Amit       | 2026-07-04 |
| Neha       | 2026-07-05 |
| Neha       | 2026-07-17 |
| Rohan      | NULL       |
| Priti      | 2026-07-08 |
| Suresh     | 2026-07-09 |
| Kavita     | 2026-07-10 |
| Kavita     | 2026-07-18 |
| Vikash     | 2026-07-11 |
| Vikash     | 2026-07-19 |
| Sneha      | 2026-07-12 |
| Sneha      | 2026-07-20 |
| Mohit      | 2026-07-13 |
| Anjali     | 2026-07-14 |
| Deepak     | 2026-07-15 |
+------------+------------+
21 rows in set (0.00 sec)

mysql> -- 2. Display Customer id, order status using LEFT JOIN.
mysql> select first_name, status from customers LEFT JOIN orders ON customers.customer_id = orders.customer_id;
+------------+-----------+
| first_name | status    |
+------------+-----------+
| Anand      | Delivered |
| Anand      | Delivered |
| Rahul      | Pending   |
| Rahul      | Delivered |
| Priya      | Delivered |
| Priya      | Pending   |
| Amit       | Cancelled |
| Neha       | Pending   |
| Neha       | Delivered |
| Rohan      | NULL      |
| Priti      | Delivered |
| Suresh     | Pending   |
| Kavita     | Delivered |
| Kavita     | Delivered |
| Vikash     | Delivered |
| Vikash     | Cancelled |
| Sneha      | Delivered |
| Sneha      | Pending   |
| Mohit      | Cancelled |
| Anjali     | Pending   |
| Deepak     | Delivered |
+------------+-----------+
21 rows in set (0.00 sec)

mysql> -- 3. Display Customer Name, Total order Amount using LEFT JOIN.
mysql> select first_name, total_amount from customers LEFT JOIN orders ON customers.customer_id = orders.customer_id;
+------------+--------------+
| first_name | total_amount |
+------------+--------------+
| Anand      |     65000.00 |
| Anand      |       900.00 |
| Rahul      |     72900.00 |
| Rahul      |       900.00 |
| Priya      |     12000.00 |
| Priya      |     12000.00 |
| Amit       |     56000.00 |
| Neha       |     15000.00 |
| Neha       |      9000.00 |
| Rohan      |         NULL |
| Priti      |     35000.00 |
| Suresh     |     18000.00 |
| Kavita     |      2500.00 |
| Kavita     |     65000.00 |
| Vikash     |     25000.00 |
| Vikash     |     15000.00 |
| Sneha      |       900.00 |
| Sneha      |     72000.00 |
| Mohit      |     22000.00 |
| Anjali     |     56000.00 |
| Deepak     |     15000.00 |
+------------+--------------+
21 rows in set (0.00 sec)

mysql> -- 4. Display Customer Name, Order ID, Order Date, Status using LEFT JOIN.
mysql> select first_name, order_id, order_date, status from customers LEFT JOIN orders ON customers.customer_id = orders.customer_id;
+------------+----------+------------+-----------+
| first_name | order_id | order_date | status    |
+------------+----------+------------+-----------+
| Anand      |        1 | 2026-07-01 | Delivered |
| Anand      |        6 | 2026-07-06 | Delivered |
| Rahul      |        2 | 2026-07-02 | Pending   |
| Rahul      |       20 | 2026-07-21 | Delivered |
| Priya      |        3 | 2026-07-03 | Delivered |
| Priya      |       15 | 2026-07-16 | Pending   |
| Amit       |        4 | 2026-07-04 | Cancelled |
| Neha       |        5 | 2026-07-05 | Pending   |
| Neha       |       16 | 2026-07-17 | Delivered |
| Rohan      |     NULL | NULL       | NULL      |
| Priti      |        7 | 2026-07-08 | Delivered |
| Suresh     |        8 | 2026-07-09 | Pending   |
| Kavita     |        9 | 2026-07-10 | Delivered |
| Kavita     |       17 | 2026-07-18 | Delivered |
| Vikash     |       10 | 2026-07-11 | Delivered |
| Vikash     |       18 | 2026-07-19 | Cancelled |
| Sneha      |       11 | 2026-07-12 | Delivered |
| Sneha      |       19 | 2026-07-20 | Pending   |
| Mohit      |       12 | 2026-07-13 | Cancelled |
| Anjali     |       13 | 2026-07-14 | Pending   |
| Deepak     |       14 | 2026-07-15 | Delivered |
+------------+----------+------------+-----------+
21 rows in set (0.00 sec)

mysql> -- 5. Display Customer Name, Customer City, Order Amount using LEFT JOIN.
mysql> select first_name, city, total_amount from customers LEFT JOIN orders ON customers.customer_id = orders.customer_id;
+------------+-----------+--------------+
| first_name | city      | total_amount |
+------------+-----------+--------------+
| Anand      | Banglore  |     65000.00 |
| Anand      | Banglore  |       900.00 |
| Rahul      | Delhi     |     72900.00 |
| Rahul      | Delhi     |       900.00 |
| Priya      | Kolkata   |     12000.00 |
| Priya      | Kolkata   |     12000.00 |
| Amit       | Lucknow   |     56000.00 |
| Neha       | Kolkata   |     15000.00 |
| Neha       | Kolkata   |      9000.00 |
| Rohan      | hyderabad |         NULL |
| Priti      | Ranchi    |     35000.00 |
| Suresh     | Delhi     |     18000.00 |
| Kavita     | Kolkata   |      2500.00 |
| Kavita     | Kolkata   |     65000.00 |
| Vikash     | Ranchi    |     25000.00 |
| Vikash     | Ranchi    |     15000.00 |
| Sneha      | Kolkata   |       900.00 |
| Sneha      | Kolkata   |     72000.00 |
| Mohit      | Delhi     |     22000.00 |
| Anjali     | Pune      |     56000.00 |
| Deepak     | Ranchi    |     15000.00 |
+------------+-----------+--------------+
21 rows in set (0.00 sec)

mysql> /* Business Questions */
mysql> -- 6. Display all customers whose order status is Pending using LEFT JOIN.
mysql> select first_name, status from customers LEFT JOIN orders ON customers.customer_id = orders.customer_id where status = 'Pending';
+------------+---------+
| first_name | status  |
+------------+---------+
| Rahul      | Pending |
| Neha       | Pending |
| Suresh     | Pending |
| Anjali     | Pending |
| Priya      | Pending |
| Sneha      | Pending |
+------------+---------+
6 rows in set (0.00 sec)

mysql> -- 7. Display all customers whose order amount is greater than ₹50,000.
mysql> select first_name, total_amount from customers LEFT JOIN orders ON customers.customer_id = orders.customer_id where total_amount > 50000;
+------------+--------------+
| first_name | total_amount |
+------------+--------------+
| Anand      |     65000.00 |
| Rahul      |     72900.00 |
| Amit       |     56000.00 |
| Anjali     |     56000.00 |
| Kavita     |     65000.00 |
| Sneha      |     72000.00 |
+------------+--------------+
6 rows in set (0.02 sec)

mysql> -- 8. Display all customers from Ranchi along with their order IDs.
mysql> select first_name, order_id from customers LEFT JOIN orders ON customers.customer_id = orders.customer_id where city = 'ranchi';
+------------+----------+
| first_name | order_id |
+------------+----------+
| Priti      |        7 |
| Vikash     |       10 |
| Vikash     |       18 |
| Deepak     |       14 |
+------------+----------+
4 rows in set (0.00 sec)

mysql> -- 9. Display all customers who have no orders.
mysql> select first_name from customers LEFT JOIN orders ON customers.customer_id = orders.customer_id where order_id IS NULL;
+------------+
| first_name |
+------------+
| Rohan      |
+------------+
1 row in set (0.00 sec)

mysql> /* Final Challenge */
mysql> /* write a query that displays: */
mysql> /* Customer Name */
mysql> /* Order ID */
mysql> /* Only for customers who never placed an order. */
mysql>
mysql> /* Answer Query */
mysql> select first_name, order_id from customers LEFT JOIN orders ON customers.customer_id = orders.customer_id where order_id IS NULL;
+------------+----------+
| first_name | order_id |
+------------+----------+
| Rohan      |     NULL |
+------------+----------+
1 row in set (0.00 sec)

mysql> /* Summary: LEFT JOIN Returns */
mysql> /* All rows from the LEFT table. */
mysql> /* Matching rows from the RIGHT table. */
mysql> /* No match → NULL */
mysql>
mysql> /* Most Famous LEFT JOIN Pattern: */
mysql> /* SELECT ...
   /*> 	  FROM table1
   /*> 	  LEFT JOIN table2
   /*> 	  ON ...
   /*> 	  WHERE table2.primary_key IS NULL;
   /*> */
mysql> /* Used to find rows in the LEFT table that have no matching row in the RIGHT table. */
```