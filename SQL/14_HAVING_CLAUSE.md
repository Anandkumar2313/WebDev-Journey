HAVING CLAUSE

```SQL
mysql> /* Having Clause */
mysql> /* HAVING filters groups after GROUP BY and after aggregate functions have been calculated. */
mysql>
mysql> /* WHERE : Filters rows */
mysql> /* HAVING : Filters groups inside a table */
mysql>
mysql> /* SYNTAX : select group_column, aggregate_function(column) from table_name group by group_column having condition_on_aggregate; */
mysql>
mysql> /* Example: Display brands having more than 2 Products. */
mysql> select brand, count(*) from products group by brand having stock > 2;
ERROR 1054 (42S22): Unknown column 'stock' in 'having clause'
mysql> select brand, count(*) from products group by brand having count(stock) > 2;
+----------+----------+
| brand    | count(*) |
+----------+----------+
| HP       |        4 |
| Samsung  |        4 |
| Logitech |        3 |
+----------+----------+
3 rows in set (0.03 sec)

mysql> select brand, count(*) from products group by brand having count(*) > 2;
+----------+----------+
| brand    | count(*) |
+----------+----------+
| HP       |        4 |
| Samsung  |        4 |
| Logitech |        3 |
+----------+----------+
3 rows in set (0.00 sec)

mysql> /* Example : Display brands whose average price is greater than ₹20,000. */
mysql> select brand, avg(price) from products group by brand having avg(price) > 20000;
+---------+--------------+
| brand   | avg(price)   |
+---------+--------------+
| HP      | 55725.000000 |
| Samsung | 45250.000000 |
| Apple   | 32500.000000 |
| Lenovo  | 22000.000000 |
+---------+--------------+
4 rows in set (0.00 sec)

mysql> /* Practice Questions */
mysql> /* Level 1: Understanding HAVING */
mysql> -- 1. Display city, number of customers, show only those cities having more than 2 customers.
mysql> select city, count(city) from customers group by city having count(city) > 2;
+--------+-------------+
| city   | count(city) |
+--------+-------------+
| Ranchi |           4 |
| Delhi  |           3 |
+--------+-------------+
2 rows in set (0.02 sec)

mysql> -- 2. Display brand, number of products, show only brands having more than 2 products.
mysql> select brand, count(*) from products group by brand having count(brand) > 2;
+----------+----------+
| brand    | count(*) |
+----------+----------+
| HP       |        4 |
| Samsung  |        4 |
| Logitech |        3 |
+----------+----------+
3 rows in set (0.02 sec)

mysql> -- 3. Display brand, total stock, Show only brands whose total stock is greater than 20.
mysql> select brand, sum(stock) from products group by brand having sum(stock) > 20;
+----------+------------+
| brand    | sum(stock) |
+----------+------------+
| HP       |         55 |
| Samsung  |         52 |
| Logitech |        100 |
+----------+------------+
3 rows in set (0.00 sec)

mysql> -- 4. Display brand, highest product price, Show only brands whose highest product price is greater than ₹50,000.
mysql> select brand, max(price) from products group by brand having max(price) > 50000;
+---------+------------+
| brand   | max(price) |
+---------+------------+
| HP      |   92000.00 |
| Samsung |   72000.00 |
| Apple   |   56000.00 |
+---------+------------+
3 rows in set (0.00 sec)

mysql> -- 5. Display payment status, number of payments, Show only statuses having more than 5 payments.
mysql> select payment_status, count(*) from payments group by payment_status having count(*) > 5;
+----------------+----------+
| payment_status | count(*) |
+----------------+----------+
| Paid           |       11 |
| Pending        |        7 |
+----------------+----------+
2 rows in set (0.02 sec)

mysql> select payment_status, count(*) from payments group by payment_status having count(payment_status) > 5;
+----------------+----------+
| payment_status | count(*) |
+----------------+----------+
| Paid           |       11 |
| Pending        |        7 |
+----------------+----------+
2 rows in set (0.00 sec)

mysql> select payment_status, count(payment_status) from payments group by payment_status having count(payment_status) > 5;
+----------------+-----------------------+
| payment_status | count(payment_status) |
+----------------+-----------------------+
| Paid           |                    11 |
| Pending        |                     7 |
+----------------+-----------------------+
2 rows in set (0.00 sec)

mysql> select payment_status, count(payment_status) from payments group by payment_status having count(*) > 5;
+----------------+-----------------------+
| payment_status | count(payment_status) |
+----------------+-----------------------+
| Paid           |                    11 |
| Pending        |                     7 |
+----------------+-----------------------+
2 rows in set (0.00 sec)

mysql> /* Level 2 : Business Analytics */
mysql> -- 6. The warehouse manager wants the average stock of each brand. Display only brands whose average stock is greater than 10.
mysql> select brand from products group by brand having avg(stock) > 10;
+----------+
| brand    |
+----------+
| HP       |
| Samsung  |
| Logitech |
| LG       |
| Lenovo   |
+----------+
5 rows in set (0.00 sec)

mysql> select brand, avg(stock) from products group by brand having avg(stock) > 10;
+----------+------------+
| brand    | avg(stock) |
+----------+------------+
| HP       |    13.7500 |
| Samsung  |    13.0000 |
| Logitech |    33.3333 |
| LG       |    12.0000 |
| Lenovo   |    12.0000 |
+----------+------------+
5 rows in set (0.00 sec)

mysql> -- 7. Display the average product price for each brand. Show only brands with an average price greater than ₹20,000.
mysql> select brand, avg(price) from products group by brand having avg(price) > 20000;
+---------+--------------+
| brand   | avg(price)   |
+---------+--------------+
| HP      | 55725.000000 |
| Samsung | 45250.000000 |
| Apple   | 32500.000000 |
| Lenovo  | 22000.000000 |
+---------+--------------+
4 rows in set (0.00 sec)

mysql> -- 8. Display .customer_id, total_orders. Show only customers who placed more than one order.
mysql> select customer_id, count(*) from orders group by customer_id having count(*) > 1;
+-------------+----------+
| customer_id | count(*) |
+-------------+----------+
|           1 |        2 |
|           2 |        2 |
|           3 |        2 |
|           5 |        2 |
|           9 |        2 |
|          10 |        2 |
|          11 |        2 |
+-------------+----------+
7 rows in set (0.02 sec)

mysql> -- 9. Display category_id, number of products. Show only categories containing 3 or more products.
mysql> select category_id, count(category_id) from products group by category_id having count(category_id) >= 3;
+-------------+--------------------+
| category_id | count(category_id) |
+-------------+--------------------+
|           1 |                  3 |
|           2 |                  3 |
|           3 |                  5 |
|           4 |                  3 |
|           5 |                  3 |
|           6 |                  3 |
+-------------+--------------------+
6 rows in set (0.03 sec)

mysql> -- 10. Display payment_method, total_payments. Show only payment methods used more than 3 times.
mysql> select payment_method, count(payment_method) from payments group by payment_method having count(payment_method) > 3;
+----------------+-----------------------+
| payment_method | count(payment_method) |
+----------------+-----------------------+
| UPI            |                     7 |
| Credit Card    |                     5 |
| Cash           |                     6 |
+----------------+-----------------------+
3 rows in set (0.00 sec)

mysql> /* level 3 : WHERE + GROUP BY + HAVING */
mysql> -- 11. Display brand, number of products, Only consider products priced above ₹10,000.Show only brands having 2 or more such products.
mysql> select brand, count(*) from products where price > 10000 group by brand having count(brand) >= 3;
+---------+----------+
| brand   | count(*) |
+---------+----------+
| HP      |        3 |
| Samsung |        4 |
+---------+----------+
2 rows in set (0.00 sec)

mysql> -- 12. Display order status, average order amount, Only consider orders above ₹10,000. Show only statuses whose average exceeds ₹30,000.
mysql> select status, avg(toatl_amount)  from orders where total_amount > 10000 group by status having avg(total_amount) > 30000;
ERROR 1054 (42S22): Unknown column 'toatl_amount' in 'field list'
mysql>
mysql> select status, avg(total_amount)  from orders where total_amount > 10000 group by status having avg(total_amount) > 30000;
+-----------+-------------------+
| status    | avg(total_amount) |
+-----------+-------------------+
| Delivered |      38400.000000 |
| Pending   |      48271.428571 |
| Cancelled |      31000.000000 |
+-----------+-------------------+
3 rows in set (0.00 sec)

mysql> -- 13. Display city, number of customers, Only consider customers whose IDs are greater than 5. Show only cities having 2 or more customers.
mysql> select city, count(*) from customers where customer_id > 5 group by city having count(city) >= 2;
+--------+----------+
| city   | count(*) |
+--------+----------+
| Pune   |        2 |
| Ranchi |        3 |
| Delhi  |        2 |
+--------+----------+
3 rows in set (0.02 sec)

mysql> -- 14. Display brand, total stock, Only consider products with stock greater than 5. Show only brands whose total stock exceeds 20.
mysql> select brand, sum(stock) from products where stock > 5 group by brand having sum(stock) > 20;
+----------+------------+
| brand    | sum(stock) |
+----------+------------+
| HP       |         51 |
| Samsung  |         52 |
| Logitech |        100 |
+----------+------------+
3 rows in set (0.00 sec)

mysql> /* The CEO Wnats to know Brand, Total product, Average Price, Only include : */
mysql> /* Product costing more than 10000 */
mysql> /* Brands having at least 2 such products */
mysql> /* Sort by average price(highest first) */
mysql>
mysql> /* Answer Query */
mysql> select brand, count(*), avg(price) from products where price > 10000 group by brand  having count(price) > 2 order by avg(price) desc;
+---------+----------+--------------+
| brand   | count(*) | avg(price)   |
+---------+----------+--------------+
| HP      |        3 | 74000.000000 |
| Samsung |        4 | 45250.000000 |
+---------+----------+--------------+
2 rows in set (0.02 sec)

mysql> /* Challenge Problem */
mysql> /* Write one query that returns brand, number of products, total stock, average price */
mysql> /* Conditions :  */
mysql> /* 1. Only products costing more than ₹15,000 */
mysql> /* 2. Brands having at least 2 products */
mysql> /* 3. Average price greater than ₹25,000 */
mysql> /* 4. Sort by average price (highest first) */
mysql>
mysql> /* Answer Query */
mysql> select brand, count(*), sum(stock), avg(price) from products where price > 15000 group by brand having count(*) >= 2 and avg(price) > 25000 order by avg(price) desc;
+---------+----------+------------+--------------+
| brand   | count(*) | sum(stock) | avg(price)   |
+---------+----------+------------+--------------+
| HP      |        3 |         20 | 74000.000000 |
| Samsung |        4 |         52 | 45250.000000 |
+---------+----------+------------+--------------+
2 rows in set (0.02 sec)
```