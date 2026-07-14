INNER JOIN

```SQL
mysql> /* INNER JOIN */
mysql> /* INNER JOIN returns only the rows that have matching values in both tables. */
mysql> /* It only keeps the common(matching) rows. */
mysql> /* SYNTAX: SELECT column1, column2 FROM table1 INNER JOIN table2 ON table1.common_column = table2.common_column; */
mysql>
mysql> /* Example : */
mysql> select first_name, order_id, total_amount from customers INNER JOIN orders ON customers.customer_id = orders.customer_id;
+------------+----------+--------------+
| first_name | order_id | total_amount |
+------------+----------+--------------+
| Anand      |        1 |     65000.00 |
| Anand      |        6 |       900.00 |
| Rahul      |        2 |     72900.00 |
| Rahul      |       20 |       900.00 |
| Priya      |        3 |     12000.00 |
| Priya      |       15 |     12000.00 |
| Amit       |        4 |     56000.00 |
| Neha       |        5 |     15000.00 |
| Neha       |       16 |      9000.00 |
| Priti      |        7 |     35000.00 |
| Suresh     |        8 |     18000.00 |
| Kavita     |        9 |      2500.00 |
| Kavita     |       17 |     65000.00 |
| Vikash     |       10 |     25000.00 |
| Vikash     |       18 |     15000.00 |
| Sneha      |       11 |       900.00 |
| Sneha      |       19 |     72000.00 |
| Mohit      |       12 |     22000.00 |
| Anjali     |       13 |     56000.00 |
| Deepak     |       14 |     15000.00 |
+------------+----------+--------------+
20 rows in set (0.12 sec)

mysql> /* Practice Questions */
mysql> /* JOINING TWO TABLE */
mysql> -- 1. Display customer name, order date.
mysql> select first_name AS Customer_Name, Order_date from customers INNER JOIN orders ON cutomers.customer_id = orders.customer_id;
ERROR 1054 (42S22): Unknown column 'cutomers.customer_id' in 'on clause'
mysql> select first_name AS Customer_Name, Order_date from customers INNER JOIN orders ON customers.customer_id = orders.customer_id;
+---------------+------------+
| Customer_Name | Order_date |
+---------------+------------+
| Anand         | 2026-07-01 |
| Anand         | 2026-07-06 |
| Rahul         | 2026-07-02 |
| Rahul         | 2026-07-21 |
| Priya         | 2026-07-03 |
| Priya         | 2026-07-16 |
| Amit          | 2026-07-04 |
| Neha          | 2026-07-05 |
| Neha          | 2026-07-17 |
| Priti         | 2026-07-08 |
| Suresh        | 2026-07-09 |
| Kavita        | 2026-07-10 |
| Kavita        | 2026-07-18 |
| Vikash        | 2026-07-11 |
| Vikash        | 2026-07-19 |
| Sneha         | 2026-07-12 |
| Sneha         | 2026-07-20 |
| Mohit         | 2026-07-13 |
| Anjali        | 2026-07-14 |
| Deepak        | 2026-07-15 |
+---------------+------------+
20 rows in set (0.00 sec)

mysql> -- 2. Display Customer Name and order Status.
mysql> select first_name, status from customers INNER JOIN orders ON customers.customer_id = orders.customer_id;
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
20 rows in set (0.00 sec)

mysql> -- 3. Display Customer Name and Total Order Amount.
mysql> select first_name, total_amount from customers INNER JOIN orders ON customers.customer_id = orders.customer_id;
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
20 rows in set (0.00 sec)

mysql> select first_name, sum(total_amount) from customers INNER JOIN orders ON customers.customer_id = orders.customer_id group by first_name;
+------------+-------------------+
| first_name | sum(total_amount) |
+------------+-------------------+
| Anand      |          65900.00 |
| Rahul      |          73800.00 |
| Priya      |          24000.00 |
| Amit       |          56000.00 |
| Neha       |          24000.00 |
| Priti      |          35000.00 |
| Suresh     |          18000.00 |
| Kavita     |          67500.00 |
| Vikash     |          40000.00 |
| Sneha      |          72900.00 |
| Mohit      |          22000.00 |
| Anjali     |          56000.00 |
| Deepak     |          15000.00 |
+------------+-------------------+
13 rows in set (0.03 sec)

mysql> -- 4. Display Customer Name, Order ID, Order Date, Status.
mysql> select First_name, Order_id, Order_date, Status from customers INNER JOIN orders On customers.customer_id = orders.customer_id;
+------------+----------+------------+-----------+
| First_name | Order_id | Order_date | Status    |
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
20 rows in set (0.00 sec)

mysql> -- 5. Display Customer Name, Customer City, Order Amount.
mysql> select first_name AS Customer_Name, city AS Customer_City, total_amount AS Order_Amount from customers INNER JOIN orders ON customers.customer_id = orders.customer_id;
+---------------+---------------+--------------+
| Customer_Name | Customer_City | Order_Amount |
+---------------+---------------+--------------+
| Anand         | Banglore      |     65000.00 |
| Anand         | Banglore      |       900.00 |
| Rahul         | Delhi         |     72900.00 |
| Rahul         | Delhi         |       900.00 |
| Priya         | Kolkata       |     12000.00 |
| Priya         | Kolkata       |     12000.00 |
| Amit          | Lucknow       |     56000.00 |
| Neha          | Kolkata       |     15000.00 |
| Neha          | Kolkata       |      9000.00 |
| Priti         | Ranchi        |     35000.00 |
| Suresh        | Delhi         |     18000.00 |
| Kavita        | Kolkata       |      2500.00 |
| Kavita        | Kolkata       |     65000.00 |
| Vikash        | Ranchi        |     25000.00 |
| Vikash        | Ranchi        |     15000.00 |
| Sneha         | Kolkata       |       900.00 |
| Sneha         | Kolkata       |     72000.00 |
| Mohit         | Delhi         |     22000.00 |
| Anjali        | Pune          |     56000.00 |
| Deepak        | Ranchi        |     15000.00 |
+---------------+---------------+--------------+
20 rows in set (0.00 sec)

mysql> /* Final Challenge */
mysql> -- Display Customer Name, Order ID, Order Date, Total Amount.
mysql> select first_name, order_id, order_date, total_amount from customers INNER JOIN orders ON customer.customer_id = orders.customer_id;
ERROR 1054 (42S22): Unknown column 'customer.customer_id' in 'on clause'
mysql> select first_name, order_id, order_date, total_amount from customers INNER JOIN orders ON customers.customer_id = orders.customer_id;
+------------+----------+------------+--------------+
| first_name | order_id | order_date | total_amount |
+------------+----------+------------+--------------+
| Anand      |        1 | 2026-07-01 |     65000.00 |
| Anand      |        6 | 2026-07-06 |       900.00 |
| Rahul      |        2 | 2026-07-02 |     72900.00 |
| Rahul      |       20 | 2026-07-21 |       900.00 |
| Priya      |        3 | 2026-07-03 |     12000.00 |
| Priya      |       15 | 2026-07-16 |     12000.00 |
| Amit       |        4 | 2026-07-04 |     56000.00 |
| Neha       |        5 | 2026-07-05 |     15000.00 |
| Neha       |       16 | 2026-07-17 |      9000.00 |
| Priti      |        7 | 2026-07-08 |     35000.00 |
| Suresh     |        8 | 2026-07-09 |     18000.00 |
| Kavita     |        9 | 2026-07-10 |      2500.00 |
| Kavita     |       17 | 2026-07-18 |     65000.00 |
| Vikash     |       10 | 2026-07-11 |     25000.00 |
| Vikash     |       18 | 2026-07-19 |     15000.00 |
| Sneha      |       11 | 2026-07-12 |       900.00 |
| Sneha      |       19 | 2026-07-20 |     72000.00 |
| Mohit      |       12 | 2026-07-13 |     22000.00 |
| Anjali     |       13 | 2026-07-14 |     56000.00 |
| Deepak     |       14 | 2026-07-15 |     15000.00 |
+------------+----------+------------+--------------+
20 rows in set (0.02 sec)
```