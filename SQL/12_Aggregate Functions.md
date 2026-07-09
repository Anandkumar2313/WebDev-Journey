Aggregate Functions

```SQL
mysql> /* Aggregate functions */
mysql> /* Aggregate Functions perform a calculation on multiple rows and return one summarized value. */
mysql>
mysql> /* The 5 Aggregate Functions are :-  */
mysql> -- 1. COUNT()
mysql> -- 2. SUM()
mysql> -- 3. AVG()
mysql> -- 4. MIN()
mysql> -- 5. MAX()
mysql>
mysql> /* 1. COUNT() :- Return the number of rows */
mysql> /* Syntax1 : select count(*) from table_name; */
mysql>
mysql> /* Syntax2 : select count(column_name) from table_name; */
mysql> /* This counts only non null value in that column. */
mysql>
mysql> /* 2. SUM() :- Add numeric values */
mysql> /* Syntax : select sum(column_name) from table_name; */
mysql>
mysql> /* 3. AVG() :- Returns average values */
mysql> /* Syntax : select avg(column_name) from table_name; */
mysql>
mysql> /* 4. MIN() :- Returns the smallest value. */
mysql> /* Syntax : select min(column_name) from table_name; */
mysql>
mysql> /* 4. MAX() :- Returns the largest value. */
mysql> /* Syntax : select max(column_name) from table_name; */
mysql>
mysql> /* Practice Questions */
mysql>
mysql> -- 1. Display the total number of customers.
mysql> select count(*) from customers;
+----------+
| count(*) |
+----------+
|       15 |
+----------+
1 row in set (0.05 sec)

mysql> -- 2. Display the total number of products.
mysql> select count(*) from products;
+----------+
| count(*) |
+----------+
|       20 |
+----------+
1 row in set (0.02 sec)

mysql> -- 3. Display the total number of orders.
mysql> select count(order_id) from orders;
+-----------------+
| count(order_id) |
+-----------------+
|              20 |
+-----------------+
1 row in set (0.02 sec)

mysql> -- 4. Display the total number of payments.
mysql> select count(*) from payments;
+----------+
| count(*) |
+----------+
|       20 |
+----------+
1 row in set (0.02 sec)

mysql> -- 5. Display the total stock available in the products table.
mysql> select add(stock) from products;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'add(stock) from products' at line 1
mysql> select ADD(stock) from products;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'ADD(stock) from products' at line 1
mysql> select sum(stock) from products;
+------------+
| sum(stock) |
+------------+
|        283 |
+------------+
1 row in set (0.03 sec)

mysql> -- 6. Display the average product price.
mysql> select avg(price) from products;
+--------------+
| avg(price)   |
+--------------+
| 29110.000000 |
+--------------+
1 row in set (0.00 sec)

mysql> -- 7. Display the highest product price.
mysql> select max(price) from products;
+------------+
| max(price) |
+------------+
|   92000.00 |
+------------+
1 row in set (0.01 sec)

mysql> -- 8. Display the lowest product price.
mysql> select min(price) from products;
+------------+
| min(price) |
+------------+
|     900.00 |
+------------+
1 row in set (0.00 sec)

mysql> -- 9. Display the highest stock value.
mysql> select max(stock) from products;
+------------+
| max(stock) |
+------------+
|         40 |
+------------+
1 row in set (0.02 sec)

mysql> -- 10. Display the lowest stock value.
mysql> select min(stock) from products;
+------------+
| min(stock) |
+------------+
|          4 |
+------------+
1 row in set (0.00 sec)

mysql> /* Level 2: Real Business Questions */
mysql> -- 11. The finance team wants to know the total sales amount from all orders.
mysql> select sum(total_amount) from orders;
+-------------------+
| sum(total_amount) |
+-------------------+
|         637100.00 |
+-------------------+
1 row in set (0.00 sec)

mysql> -- 12. The warehouse manager wants to know the average stock across all products.
mysql> select avg(stock) from products;
+------------+
| avg(stock) |
+------------+
|    14.1500 |
+------------+
1 row in set (0.00 sec)

mysql> -- 13. The purchasing manager wants to know the most expensive product price.
mysql> select max(price) from products;
+------------+
| max(price) |
+------------+
|   92000.00 |
+------------+
1 row in set (0.00 sec)

mysql> select product_name, max(price) from products;
ERROR 1140 (42000): In aggregated query without GROUP BY, expression #1 of SELECT list contains nonaggregated column 'techstoredb.products.product_name'; this is incompatible with sql_mode=only_full_group_by
mysql> select product_name and max(price) from products;
ERROR 1140 (42000): In aggregated query without GROUP BY, expression #1 of SELECT list contains nonaggregated column 'techstoredb.products.product_name'; this is incompatible with sql_mode=only_full_group_by

mysql> -- 14. The purchasing manager also wants to know the cheapest product price.
mysql> select min(price) from products;
+------------+
| min(price) |
+------------+
|     900.00 |
+------------+
1 row in set (0.00 sec)

mysql> -- 15. The sales manager wants to know the average order value.
mysql> select avg(total_amount) from orders;
+-------------------+
| avg(total_amount) |
+-------------------+
|      31855.000000 |
+-------------------+
1 row in set (0.00 sec)

mysql> /* Level 3: Aggregate + WHERE */
mysql> -- 16. Display the number of Samsung products.
mysql> select count(*) from products where brand = 'Samsung';
+----------+
| count(*) |
+----------+
|        4 |
+----------+
1 row in set (0.02 sec)

mysql> select count(brand) from products where brand = 'Samsung';
+--------------+
| count(brand) |
+--------------+
|            4 |
+--------------+
1 row in set (0.00 sec)

mysql> -- 17. Display the average price of HP products.
mysql> select avg(price) from products where brand = 'HP';
+--------------+
| avg(price)   |
+--------------+
| 55725.000000 |
+--------------+
1 row in set (0.00 sec)

mysql> -- 18. Display the highest price among Canon products.
mysql> select max(price) from products where brand = 'Canon';
+------------+
| max(price) |
+------------+
|   15000.00 |
+------------+
1 row in set (0.00 sec)

mysql> -- 19. Display the total stock of Logitech products.
mysql> select sum(stock) from products where brand = 'Logitech';
+------------+
| sum(stock) |
+------------+
|        100 |
+------------+
1 row in set (0.00 sec)

mysql> -- 20. Display the average price of products costing between ₹15,000 and ₹70,000.
mysql> select avg(price) from products where price between 15000 and 70000;
+--------------+
| avg(price)   |
+--------------+
| 34545.454545 |
+--------------+
1 row in set (0.00 sec)

mysql> /* Challenge Question */
mysql> /* Write one query that returns: */
mysql> /* Total number of HP and Samsung products. */
mysql> /* Price between ₹15,000 and ₹70,000. */
mysql>
mysql> /* Answer Query */
mysql> select count(*) from products where price between 15000 and 70000 and brand in('HP', 'Samsung');
+----------+
| count(*) |
+----------+
|        5 |
+----------+
1 row in set (0.00 sec)
```