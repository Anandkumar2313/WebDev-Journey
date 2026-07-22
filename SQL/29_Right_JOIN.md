RIGHT JOIN

```
mysql> /* Right JOIN */
mysql> /* RIGHT JOIN returns all rows from the RIGHT table and the matching rows from the LEFT table. If there is no matching row in the LEFT table, SQL fills the LEFT table columns with NULL. */

| INNER JOIN                                    | LEFT JOIN                                                   | RIGHT JOIN                                                 |
| --------------------------------------------- | ----------------------------------------------------------- | ---------------------------------------------------------- |
| Only matching rows                            | Keeps every row from LEFT table                             | Keeps every row from RIGHT table                           |
| Unmatched rows removed                        | Left table preserved                                        | Right table preserved                                      |
| NULL never appears because of missing matches | NULL appears for right-table columns when there is no match | NULL appears for left-table columns when there is no match |


mysql>
mysql> /* Exapmple 1: */
mysql> select first_name, order_id from customers RIGHT JOIN orders ON customers.customer_id = orders.customer_id;
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
| Riya       |       21 |
| Riya       |       22 |
| Karan      |       23 |
+------------+----------+
23 rows in set (0.01 sec)

mysql> /* Practice Questions */
mysql> -- 1. Display Customer Name and Order Date using RIGHT JOIN.
mysql> select first_name, order_date from customers Right JOIN orders ON customers.customer_id = orders.customer_id;
+------------+------------+
| first_name | order_date |
+------------+------------+
| Anand      | 2026-07-01 |
| Rahul      | 2026-07-02 |
| Priya      | 2026-07-03 |
| Amit       | 2026-07-04 |
| Neha       | 2026-07-05 |
| Anand      | 2026-07-06 |
| Priti      | 2026-07-08 |
| Suresh     | 2026-07-09 |
| Kavita     | 2026-07-10 |
| Vikash     | 2026-07-11 |
| Sneha      | 2026-07-12 |
| Mohit      | 2026-07-13 |
| Anjali     | 2026-07-14 |
| Deepak     | 2026-07-15 |
| Priya      | 2026-07-16 |
| Neha       | 2026-07-17 |
| Kavita     | 2026-07-18 |
| Vikash     | 2026-07-19 |
| Sneha      | 2026-07-20 |
| Rahul      | 2026-07-21 |
| Riya       | 2026-08-24 |
| Riya       | 2026-08-25 |
| Karan      | 2026-08-25 |
+------------+------------+
23 rows in set (0.00 sec)

mysql> -- 2. Display Customer Name and Order Status using RIGHT JOIN.
mysql> select first_name, status from customers RIGHT JOIN orders ON customers.customer_id = orders.customer_id;
+------------+-----------+
| first_name | status    |
+------------+-----------+
| Anand      | Delivered |
| Rahul      | Pending   |
| Priya      | Delivered |
| Amit       | Cancelled |
| Neha       | Pending   |
| Anand      | Delivered |
| Priti      | Delivered |
| Suresh     | Pending   |
| Kavita     | Delivered |
| Vikash     | Delivered |
| Sneha      | Delivered |
| Mohit      | Cancelled |
| Anjali     | Pending   |
| Deepak     | Delivered |
| Priya      | Pending   |
| Neha       | Delivered |
| Kavita     | Delivered |
| Vikash     | Cancelled |
| Sneha      | Pending   |
| Rahul      | Delivered |
| Riya       | Delivered |
| Riya       | Pending   |
| Karan      | Delivered |
+------------+-----------+
23 rows in set (0.00 sec)

mysql> -- 3. Display Customer Name, Order Amount, and Order Date using RIGHT JOIN.
mysql> select first_name, total_amount, order_date from customers RIGHT JOIN orders ON customers.customer_id = orders.customer_id;
+------------+--------------+------------+
| first_name | total_amount | order_date |
+------------+--------------+------------+
| Anand      |     65000.00 | 2026-07-01 |
| Rahul      |     72900.00 | 2026-07-02 |
| Priya      |     12000.00 | 2026-07-03 |
| Amit       |     56000.00 | 2026-07-04 |
| Neha       |     15000.00 | 2026-07-05 |
| Anand      |       900.00 | 2026-07-06 |
| Priti      |     35000.00 | 2026-07-08 |
| Suresh     |     18000.00 | 2026-07-09 |
| Kavita     |      2500.00 | 2026-07-10 |
| Vikash     |     25000.00 | 2026-07-11 |
| Sneha      |       900.00 | 2026-07-12 |
| Mohit      |     22000.00 | 2026-07-13 |
| Anjali     |     56000.00 | 2026-07-14 |
| Deepak     |     15000.00 | 2026-07-15 |
| Priya      |     12000.00 | 2026-07-16 |
| Neha       |      9000.00 | 2026-07-17 |
| Kavita     |     65000.00 | 2026-07-18 |
| Vikash     |     15000.00 | 2026-07-19 |
| Sneha      |     72000.00 | 2026-07-20 |
| Rahul      |       900.00 | 2026-07-21 |
| Riya       |     98000.00 | 2026-08-24 |
| Riya       |     32000.00 | 2026-08-25 |
| Karan      |     55000.00 | 2026-08-25 |
+------------+--------------+------------+
23 rows in set (0.00 sec)

mysql> select first_name, total_amount, order_date from orders LEFT JOIN customers ON customers.customer_id = orders.customer_id;
+------------+--------------+------------+
| first_name | total_amount | order_date |
+------------+--------------+------------+
| Anand      |     65000.00 | 2026-07-01 |
| Rahul      |     72900.00 | 2026-07-02 |
| Priya      |     12000.00 | 2026-07-03 |
| Amit       |     56000.00 | 2026-07-04 |
| Neha       |     15000.00 | 2026-07-05 |
| Anand      |       900.00 | 2026-07-06 |
| Priti      |     35000.00 | 2026-07-08 |
| Suresh     |     18000.00 | 2026-07-09 |
| Kavita     |      2500.00 | 2026-07-10 |
| Vikash     |     25000.00 | 2026-07-11 |
| Sneha      |       900.00 | 2026-07-12 |
| Mohit      |     22000.00 | 2026-07-13 |
| Anjali     |     56000.00 | 2026-07-14 |
| Deepak     |     15000.00 | 2026-07-15 |
| Priya      |     12000.00 | 2026-07-16 |
| Neha       |      9000.00 | 2026-07-17 |
| Kavita     |     65000.00 | 2026-07-18 |
| Vikash     |     15000.00 | 2026-07-19 |
| Sneha      |     72000.00 | 2026-07-20 |
| Rahul      |       900.00 | 2026-07-21 |
| Riya       |     98000.00 | 2026-08-24 |
| Riya       |     32000.00 | 2026-08-25 |
| Karan      |     55000.00 | 2026-08-25 |
+------------+--------------+------------+
23 rows in set (0.00 sec)

mysql> -- 4. Display Customer Name, City, Order ID, and Status using RIGHT JOIN.
mysql> select first_name, city, order_id, status from customers RIGHT JOIN orders ON customers.customer_id = orders.customer_id;
+------------+-----------+----------+-----------+
| first_name | city      | order_id | status    |
+------------+-----------+----------+-----------+
| Anand      | Banglore  |        1 | Delivered |
| Rahul      | Delhi     |        2 | Pending   |
| Priya      | Kolkata   |        3 | Delivered |
| Amit       | Lucknow   |        4 | Cancelled |
| Neha       | Kolkata   |        5 | Pending   |
| Anand      | Banglore  |        6 | Delivered |
| Priti      | Ranchi    |        7 | Delivered |
| Suresh     | Delhi     |        8 | Pending   |
| Kavita     | Kolkata   |        9 | Delivered |
| Vikash     | Ranchi    |       10 | Delivered |
| Sneha      | Kolkata   |       11 | Delivered |
| Mohit      | Delhi     |       12 | Cancelled |
| Anjali     | Pune      |       13 | Pending   |
| Deepak     | Ranchi    |       14 | Delivered |
| Priya      | Kolkata   |       15 | Pending   |
| Neha       | Kolkata   |       16 | Delivered |
| Kavita     | Kolkata   |       17 | Delivered |
| Vikash     | Ranchi    |       18 | Cancelled |
| Sneha      | Kolkata   |       19 | Pending   |
| Rahul      | Delhi     |       20 | Delivered |
| Riya       | Delhi     |       21 | Delivered |
| Riya       | Delhi     |       22 | Pending   |
| Karan      | Ahmedabad |       23 | Delivered |
+------------+-----------+----------+-----------+
23 rows in set (0.01 sec)

mysql> -- 5. Display all Delivered orders with the corresponding customer names.
mysql> select first_name, status from customers RIGHT JOIN orders ON customers.customer_id = orders.customer_id;
+------------+-----------+
| first_name | status    |
+------------+-----------+
| Anand      | Delivered |
| Rahul      | Pending   |
| Priya      | Delivered |
| Amit       | Cancelled |
| Neha       | Pending   |
| Anand      | Delivered |
| Priti      | Delivered |
| Suresh     | Pending   |
| Kavita     | Delivered |
| Vikash     | Delivered |
| Sneha      | Delivered |
| Mohit      | Cancelled |
| Anjali     | Pending   |
| Deepak     | Delivered |
| Priya      | Pending   |
| Neha       | Delivered |
| Kavita     | Delivered |
| Vikash     | Cancelled |
| Sneha      | Pending   |
| Rahul      | Delivered |
| Riya       | Delivered |
| Riya       | Pending   |
| Karan      | Delivered |
+------------+-----------+
23 rows in set (0.02 sec)

mysql> select first_name, status from customers RIGHT JOIN orders ON customers.customer_id = orders.customer_id where status = 'Delivered';
+------------+-----------+
| first_name | status    |
+------------+-----------+
| Anand      | Delivered |
| Priya      | Delivered |
| Anand      | Delivered |
| Priti      | Delivered |
| Kavita     | Delivered |
| Vikash     | Delivered |
| Sneha      | Delivered |
| Deepak     | Delivered |
| Neha       | Delivered |
| Kavita     | Delivered |
| Rahul      | Delivered |
| Riya       | Delivered |
| Karan      | Delivered |
+------------+-----------+
13 rows in set (0.02 sec)

mysql> select first_name, status from customers LEFT JOIN orders ON customers.customer_id = orders.customer_id where status = 'Delivered';
+------------+-----------+
| first_name | status    |
+------------+-----------+
| Anand      | Delivered |
| Priya      | Delivered |
| Anand      | Delivered |
| Priti      | Delivered |
| Kavita     | Delivered |
| Vikash     | Delivered |
| Sneha      | Delivered |
| Deepak     | Delivered |
| Neha       | Delivered |
| Kavita     | Delivered |
| Rahul      | Delivered |
| Riya       | Delivered |
| Karan      | Delivered |
+------------+-----------+
13 rows in set (0.00 sec)

mysql> -- 6. Display all orders with an amount greater than ₹50,000
mysql> select * from orders where total_amount > 50000;
+----------+-------------+------------+--------------+-----------+-------------------+
| order_id | customer_id | order_date | total_amount | status    | expected_delivery |
+----------+-------------+------------+--------------+-----------+-------------------+
|        1 |           1 | 2026-07-01 |     65000.00 | Delivered | NULL              |
|        2 |           2 | 2026-07-02 |     72900.00 | Pending   | 2026-07-10        |
|        4 |           4 | 2026-07-04 |     56000.00 | Cancelled | NULL              |
|       13 |          13 | 2026-07-14 |     56000.00 | Pending   | NULL              |
|       17 |           9 | 2026-07-18 |     65000.00 | Delivered | NULL              |
|       19 |          11 | 2026-07-20 |     72000.00 | Pending   | NULL              |
|       21 |          17 | 2026-08-24 |     98000.00 | Delivered | NULL              |
|       23 |          18 | 2026-08-25 |     55000.00 | Delivered | NULL              |
+----------+-------------+------------+--------------+-----------+-------------------+
8 rows in set (0.02 sec)

mysql> -- 7. Display Order ID, Customer Name, and Payment Status using a RIGHT JOIN between payments and orders.
mysql> select first_name, order_id, payment_status from customers INNER JOIN orders orders ON customers.customer_id = orders.customer_id Right JOIN payments ON orders.order_id = payments.order_id;
ERROR 1052 (23000): Column 'order_id' in field list is ambiguous

mysql> select first_name, payments.order_id, payment_status from customers INNER JOIN orders orders ON customers.customer_id = orders.customer_id Right JOIN payments ON orders.order_id = payments.order_id;
+------------+----------+----------------+
| first_name | order_id | payment_status |
+------------+----------+----------------+
| Rahul      |        2 | Pending        |
| Neha       |        5 | Pending        |
| Suresh     |        8 | Pending        |
| Vikash     |       10 | Pending        |
| Anjali     |       13 | Pending        |
| Vikash     |       18 | Pending        |
| Riya       |       21 | Completed      |
| Karan      |       23 | Completed      |
| Mohit      |       12 | Completed      |
| Neha       |       16 | Completed      |
| Riya       |       22 | Pending        |
| Priti      |        7 | Completed      |
+------------+----------+----------------+
12 rows in set (0.00 sec)

mysql> select first_name, payments.order_id, payment_status from customers LEFT JOIN orders orders ON customers.customer_id = orders.customer_id Right JOIN payments ON orders.order_id = payments.order_id;
+------------+----------+----------------+
| first_name | order_id | payment_status |
+------------+----------+----------------+
| Rahul      |        2 | Pending        |
| Neha       |        5 | Pending        |
| Suresh     |        8 | Pending        |
| Vikash     |       10 | Pending        |
| Anjali     |       13 | Pending        |
| Vikash     |       18 | Pending        |
| Riya       |       21 | Completed      |
| Karan      |       23 | Completed      |
| Mohit      |       12 | Completed      |
| Neha       |       16 | Completed      |
| Riya       |       22 | Pending        |
| Priti      |        7 | Completed      |
+------------+----------+----------------+
12 rows in set (0.01 sec)

mysql> select first_name, payments.order_id, payment_status from customers RIGHT JOIN orders orders ON customers.customer_id = orders.customer_id Right JOIN payments ON orders.order_id = payments.order_id;
+------------+----------+----------------+
| first_name | order_id | payment_status |
+------------+----------+----------------+
| Rahul      |        2 | Pending        |
| Neha       |        5 | Pending        |
| Suresh     |        8 | Pending        |
| Vikash     |       10 | Pending        |
| Anjali     |       13 | Pending        |
| Vikash     |       18 | Pending        |
| Riya       |       21 | Completed      |
| Karan      |       23 | Completed      |
| Mohit      |       12 | Completed      |
| Neha       |       16 | Completed      |
| Riya       |       22 | Pending        |
| Priti      |        7 | Completed      |
+------------+----------+----------------+
12 rows in set (0.00 sec)

mysql> /* Important Points: */
mysql> /* Preserves the RIGHT table. */
mysql> /* Matching rows come from the LEFT table. */
mysql> /* No match → LEFT table columns become NULL. */
mysql> /* RIGHT JOIN and LEFT JOIN are mirror images. */
mysql> /* A RIGHT JOIN B = B LEFT JOIN A */
mysql> /* In practice, LEFT JOIN is used much more often than RIGHT JOIN. */
mysql>
```