GROUP BY

```SQL
mysql> /* GROUP BY */
mysql> /* Group by forms group of rows based on one or more columns, and then aggregate function are applied to each groups. */
mysql>
mysql> /* Why GROUP By came into exist ? */
mysql> /* Using only aggregate functions, we can find the COUNT(), SUM(), AVG(), MIN(), and MAX() for the entire table. However, we cannot find them for specific groups within the table. By combining GROUP BY with aggregate functions, we can calculate these values for specific groups created from one or more columns. */
mysql>
mysql> /*Example : */
mysql> /*Using only aggregate functions, it can answer maximum price in products table but, */
mysql> /*Using aggregate_functions + group_by, it can answers maximumm price of each brand of products table.*/
mysql>
mysql> /* Syntax:- select column_name, aggregate_function(col_name) from table_name group by column_name;*/
mysql> /* Note : In both place after select and group by column_name should be same. */
mysql>
mysql> /* Practice Questions */
mysql> /* Level 1: Understanding GROUP BY */
mysql> -- 1. The admin wants to know how many customers belong to each city, Display City & number of customers.
mysql> select city, count(city) from customers group by city;
+---------+-------------+
| city    | count(city) |
+---------+-------------+
| Ranchi  |           4 |
| Delhi   |           3 |
| Patna   |           2 |
| Lucknow |           2 |
| Kolkata |           2 |
| Pune    |           2 |
+---------+-------------+
6 rows in set (0.02 sec)

mysql> -- 2. The inventory manager wants to know how many products belong to each brand. Display brand, number of products
mysql> select brand, count(stock) from products group by stock;
ERROR 1055 (42000): Expression #1 of SELECT list is not in GROUP BY clause and contains nonaggregated column 'techstoredb.products.brand' which is not functionally dependent on columns in GROUP BY clause; this is incompatible with sql_mode=only_full_group_by
mysql> select brand, count(stock) from products group by brand;
+----------+--------------+
| brand    | count(stock) |
+----------+--------------+
| HP       |            4 |
| Samsung  |            4 |
| Logitech |            3 |
| LG       |            1 |
| Apple    |            2 |
| Canon    |            2 |
| Dell     |            1 |
| Acer     |            1 |
| Lenovo   |            1 |
| Epson    |            1 |
+----------+--------------+
10 rows in set (0.02 sec)

mysql> -- 3. The warehouse manager wants to know the total stock available for each brand.Display brand, total stock.
mysql> select brand, sum(stock) from products group by stock;
ERROR 1055 (42000): Expression #1 of SELECT list is not in GROUP BY clause and contains nonaggregated column 'techstoredb.products.brand' which is not functionally dependent on columns in GROUP BY clause; this is incompatible with sql_mode=only_full_group_by
mysql> select brand, sum(stock) from products group by brand;
+----------+------------+
| brand    | sum(stock) |
+----------+------------+
| HP       |         55 |
| Samsung  |         52 |
| Logitech |        100 |
| LG       |         12 |
| Apple    |         15 |
| Canon    |         12 |
| Dell     |         10 |
| Acer     |          7 |
| Lenovo   |         12 |
| Epson    |          8 |
+----------+------------+
10 rows in set (0.02 sec)

mysql> -- 4. The purchasing manager wants to know the highest product price for each brand.Display brand, highest price.
mysql> select brand, max(price) from products group by brand;
+----------+------------+
| brand    | max(price) |
+----------+------------+
| HP       |   92000.00 |
| Samsung  |   72000.00 |
| Logitech |    2500.00 |
| LG       |   12000.00 |
| Apple    |   56000.00 |
| Canon    |   15000.00 |
| Dell     |   12000.00 |
| Acer     |   18000.00 |
| Lenovo   |   22000.00 |
| Epson    |   15000.00 |
+----------+------------+
10 rows in set (0.02 sec)

mysql> -- 5. The purchasing manager also wants to know the lowest product price for each brand.
mysql> select brand, min(price) from products group by brand;
+----------+------------+
| brand    | min(price) |
+----------+------------+
| HP       |     900.00 |
| Samsung  |   18000.00 |
| Logitech |     900.00 |
| LG       |   12000.00 |
| Apple    |    9000.00 |
| Canon    |   15000.00 |
| Dell     |   12000.00 |
| Acer     |   18000.00 |
| Lenovo   |   22000.00 |
| Epson    |   15000.00 |
+----------+------------+
10 rows in set (0.00 sec)

mysql> /* Level 2: Business Analytics */
mysql> -- 6. The finance team wants the average product price for every brand.
mysql> select brand, avg(price) from products group by brand;
+----------+--------------+
| brand    | avg(price)   |
+----------+--------------+
| HP       | 55725.000000 |
| Samsung  | 45250.000000 |
| Logitech |  1433.333333 |
| LG       | 12000.000000 |
| Apple    | 32500.000000 |
| Canon    | 15000.000000 |
| Dell     | 12000.000000 |
| Acer     | 18000.000000 |
| Lenovo   | 22000.000000 |
| Epson    | 15000.000000 |
+----------+--------------+
10 rows in set (0.02 sec)

mysql> -- 7. The warehouse manager wants the average stock for every brand.
mysql> select brand, avg(stock) from products group by brand;
+----------+------------+
| brand    | avg(stock) |
+----------+------------+
| HP       |    13.7500 |
| Samsung  |    13.0000 |
| Logitech |    33.3333 |
| LG       |    12.0000 |
| Apple    |     7.5000 |
| Canon    |     6.0000 |
| Dell     |    10.0000 |
| Acer     |     7.0000 |
| Lenovo   |    12.0000 |
| Epson    |     8.0000 |
+----------+------------+
10 rows in set (0.00 sec)

mysql> -- 8. The sales team wants to know how many orders each customer has placed.
mysql> select customer_id, count(customer_id) from orders group by customer_id;
+-------------+--------------------+
| customer_id | count(customer_id) |
+-------------+--------------------+
|           1 |                  2 |
|           2 |                  2 |
|           3 |                  2 |
|           4 |                  1 |
|           5 |                  2 |
|           7 |                  1 |
|           8 |                  1 |
|           9 |                  2 |
|          10 |                  2 |
|          11 |                  2 |
|          12 |                  1 |
|          13 |                  1 |
|          14 |                  1 |
+-------------+--------------------+
13 rows in set (0.00 sec)

mysql> -- 9. The finance team wants to know how many payments were made using each payment method.
mysql> select payment_method, count(payment_method) from payments group by payment_method;
+----------------+-----------------------+
| payment_method | count(payment_method) |
+----------------+-----------------------+
| UPI            |                     7 |
| Credit Card    |                     5 |
| Cash           |                     6 |
| Net Banking    |                     2 |
+----------------+-----------------------+
4 rows in set (0.00 sec)

mysql> -- 10. The finance team wants to know how many payments exist for each payment status.
mysql> select payment_status, count(payment_status) from payments group by payment_status;
+----------------+-----------------------+
| payment_status | count(payment_status) |
+----------------+-----------------------+
| Paid           |                    11 |
| Pending        |                     7 |
| Refunded       |                     2 |
+----------------+-----------------------+
3 rows in set (0.00 sec)

mysql> select payment_method, count(payment_method),payment_status, count(payment_status) from payments group by payment_method, payment_status;
+----------------+-----------------------+----------------+-----------------------+
| payment_method | count(payment_method) | payment_status | count(payment_status) |
+----------------+-----------------------+----------------+-----------------------+
| UPI            |                     5 | Paid           |                     5 |
| Credit Card    |                     3 | Pending        |                     3 |
| Cash           |                     4 | Paid           |                     4 |
| Credit Card    |                     1 | Refunded       |                     1 |
| UPI            |                     2 | Pending        |                     2 |
| Net Banking    |                     1 | Paid           |                     1 |
| Cash           |                     1 | Refunded       |                     1 |
| Cash           |                     1 | Pending        |                     1 |
| Credit Card    |                     1 | Paid           |                     1 |
| Net Banking    |                     1 | Pending        |                     1 |
+----------------+-----------------------+----------------+-----------------------+
10 rows in set (0.00 sec)

mysql> /* Level 3 : Interview Style */
mysql> -- 11. Display the number of products in each category.show Category_id, total_products
mysql> select category_id, count(*) from products group by category_id;
+-------------+----------+
| category_id | count(*) |
+-------------+----------+
|           1 |        3 |
|           2 |        3 |
|           3 |        5 |
|           4 |        3 |
|           5 |        3 |
|           6 |        3 |
+-------------+----------+
6 rows in set (0.00 sec)

mysql> -- 12. Display the highest order amount for each order status.
mysql> select status, max(total_amount) from orders group by status;
+-----------+-------------------+
| status    | max(total_amount) |
+-----------+-------------------+
| Delivered |          65000.00 |
| Pending   |          92000.00 |
| Cancelled |          56000.00 |
+-----------+-------------------+
3 rows in set (0.00 sec)

mysql> -- 13. Display the lowest order amount for each order status.
mysql> select status, min(total_amount) from orders group by status;
+-----------+-------------------+
| status    | min(total_amount) |
+-----------+-------------------+
| Delivered |            900.00 |
| Pending   |          12000.00 |
| Cancelled |          15000.00 |
+-----------+-------------------+
3 rows in set (0.00 sec)

mysql> -- 14. Display the average order amount for each order status.
mysql> select status, avg(total_amount) from orders group by status;
+-----------+-------------------+
| status    | avg(total_amount) |
+-----------+-------------------+
| Delivered |      20620.000000 |
| Pending   |      48271.428571 |
| Cancelled |      31000.000000 |
+-----------+-------------------+
3 rows in set (0.00 sec)

mysql> -- 15. Display brand, number of products, average price for every brand.
mysql> select brand, sum(stock), avg(price) from products group by brand;
+----------+------------+--------------+
| brand    | sum(stock) | avg(price)   |
+----------+------------+--------------+
| HP       |         55 | 55725.000000 |
| Samsung  |         52 | 45250.000000 |
| Logitech |        100 |  1433.333333 |
| LG       |         12 | 12000.000000 |
| Apple    |         15 | 32500.000000 |
| Canon    |         12 | 15000.000000 |
| Dell     |         10 | 12000.000000 |
| Acer     |          7 | 18000.000000 |
| Lenovo   |         12 | 22000.000000 |
| Epson    |          8 | 15000.000000 |
+----------+------------+--------------+
10 rows in set (0.00 sec)

 ysql> select brand, count(stock), avg(price) from products group by brand;
+----------+--------------+--------------+
| brand    | count(stock) | avg(price)   |
+----------+--------------+--------------+
| HP       |            4 | 55725.000000 |
| Samsung  |            4 | 45250.000000 |
| Logitech |            3 |  1433.333333 |
| LG       |            1 | 12000.000000 |
| Apple    |            2 | 32500.000000 |
| Canon    |            2 | 15000.000000 |
| Dell     |            1 | 12000.000000 |
| Acer     |            1 | 18000.000000 |
| Lenovo   |            1 | 22000.000000 |
| Epson    |            1 | 15000.000000 |
+----------+--------------+--------------+
10 rows in set (0.00 sec)

mysql> /* Challenge Problem */
mysql> /*The CEO asks: For each brand, tell me total products, total stock, average price and sort the result by average price in descending order. Display brand, total product total stock average price */
mysql>
mysql> /* Answer Query */
mysql> select brand, count(stock), sum(stock), avg(price) from products order by avg(price) desc group by brand;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'group by brand' at line 1
mysql> select brand, count(stock), sum(stock), avg(price) from products order by price desc group by brand;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'group by brand' at line 1
mysql> select brand, count(stock), sum(stock), avg(price) from products group by brand;
+----------+--------------+------------+--------------+
| brand    | count(stock) | sum(stock) | avg(price)   |
+----------+--------------+------------+--------------+
| HP       |            4 |         55 | 55725.000000 |
| Samsung  |            4 |         52 | 45250.000000 |
| Logitech |            3 |        100 |  1433.333333 |
| LG       |            1 |         12 | 12000.000000 |
| Apple    |            2 |         15 | 32500.000000 |
| Canon    |            2 |         12 | 15000.000000 |
| Dell     |            1 |         10 | 12000.000000 |
| Acer     |            1 |          7 | 18000.000000 |
| Lenovo   |            1 |         12 | 22000.000000 |
| Epson    |            1 |          8 | 15000.000000 |
+----------+--------------+------------+--------------+
10 rows in set (0.02 sec)

mysql> select brand, count(stock), sum(stock), avg(price) from products group by brand order by avg(price) desc;
+----------+--------------+------------+--------------+
| brand    | count(stock) | sum(stock) | avg(price)   |
+----------+--------------+------------+--------------+
| HP       |            4 |         55 | 55725.000000 |
| Samsung  |            4 |         52 | 45250.000000 |
| Apple    |            2 |         15 | 32500.000000 |
| Lenovo   |            1 |         12 | 22000.000000 |
| Acer     |            1 |          7 | 18000.000000 |
| Canon    |            2 |         12 | 15000.000000 |
| Epson    |            1 |          8 | 15000.000000 |
| LG       |            1 |         12 | 12000.000000 |
| Dell     |            1 |         10 | 12000.000000 |
| Logitech |            3 |        100 |  1433.333333 |
+----------+--------------+------------+--------------+
10 rows in set (0.02 sec)
```