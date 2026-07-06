DISTINCT Clause :-

```SQL
mysql> /* Distinct : It is used to remove duplicate rows from result set.*/
mysql> -- Question Practice
mysql> -- 1. Display all unique cities.
mysql> select distinct city from customers;
+---------+
| city    |
+---------+
| Ranchi  |
| Delhi   |
| Patna   |
| Lucknow |
| Kolkata |
| Pune    |
+---------+
6 rows in set (0.02 sec)

mysql> -- 2. Display all unique brands.
mysql> select distinct brand from products;
+----------+
| brand    |
+----------+
| HP       |
| Samsung  |
| Logitech |
| LG       |
| Apple    |
| Canon    |
| Dell     |
| Acer     |
| Lenovo   |
| Epson    |
+----------+
10 rows in set (0.00 sec)

mysql> -- 3. Display all unique payment methods.
mysql> select distinct payment_methods from payments;
ERROR 1054 (42S22): Unknown column 'payment_methods' in 'field list'

mysql> select distinct payment_method from payments;
+----------------+
| payment_method |
+----------------+
| UPI            |
| Credit Card    |
| Cash           |
| Net Banking    |
+----------------+
4 rows in set (0.00 sec)

mysql> -- 4. Display all unique payment statuses.
mysql> select distinct payment_status from payments;
+----------------+
| payment_status |
+----------------+
| Paid           |
| Pending        |
| Refunded       |
+----------------+
3 rows in set (0.00 sec)

mysql> -- 5. Display all unique order statuses.
mysql> select distinct status from orders;
+-----------+
| status    |
+-----------+
| Delivered |
| Pending   |
| Cancelled |
+-----------+
3 rows in set (0.00 sec)

mysql> -- 6. Display all unique product prices.
mysql> select distinct product_name, prices from products;
ERROR 1054 (42S22): Unknown column 'prices' in 'field list'

mysql> select distinct product_name, price from products;
+------------------------+----------+
| product_name           | price    |
+------------------------+----------+
| HP Victus 15           | 65000.00 |
| Samsung Galaxy S25     | 72000.00 |
| Logitech G102 Mouse    |   900.00 |
| LG UltraGear 24        | 12000.00 |
| Apple iPad Air         | 56000.00 |
| Canon Pixma G3010      | 15000.00 |
| HP Pavilion 14         | 65000.00 |
| HP Omen 16             | 92000.00 |
| Samsung Galaxy A56     | 35000.00 |
| Samsung Galaxy M36     | 18000.00 |
| Logitech Keyboard K120 |   900.00 |
| Logitech Webcam C270   |  2500.00 |
| Dell 24 Monitor        | 12000.00 |
| Acer Nitro Monitor     | 18000.00 |
| Lenovo Tab M11         | 22000.00 |
| Samsung Galaxy Tab S10 | 56000.00 |
| Epson EcoTank L3250    | 15000.00 |
| Canon Laser Printer    | 15000.00 |
| Apple Magic Mouse      |  9000.00 |
| HP Wireless Mouse      |   900.00 |
+------------------------+----------+
20 rows in set (0.00 sec)

mysql> select distinct price from products;
+----------+
| price    |
+----------+
| 65000.00 |
| 72000.00 |
|   900.00 |
| 12000.00 |
| 56000.00 |
| 15000.00 |
| 92000.00 |
| 35000.00 |
| 18000.00 |
|  2500.00 |
| 22000.00 |
|  9000.00 |
+----------+
12 rows in set (0.00 sec)

mysql> -- 7. Display all unique stock values.
mysql> select distinct stock from products;
+-------+
| stock |
+-------+
|    10 |
|     8 |
|    35 |
|    12 |
|     5 |
|     7 |
|     6 |
|     4 |
|    20 |
|    18 |
|    40 |
|    25 |
+-------+
12 rows in set (0.00 sec)

mysql> -- 8. Display all unique category IDs used in the Products table.
mysql> select distinct category_id from products;
+-------------+
| category_id |
+-------------+
|           1 |
|           2 |
|           3 |
|           4 |
|           5 |
|           6 |
+-------------+
6 rows in set (0.00 sec)

mysql> -- 9. Display all unique customer IDs who have placed orders.
mysql> select distinct customer_id from orders;
+-------------+
| customer_id |
+-------------+
|           1 |
|           2 |
|           3 |
|           4 |
|           5 |
|           7 |
|           8 |
|           9 |
|          10 |
|          11 |
|          12 |
|          13 |
|          14 |
+-------------+
13 rows in set (0.00 sec)

mysql> -- 10. Display all unique quantities from OrderItems.
mysql> select distinct quantity from orderitems;
+----------+
| quantity |
+----------+
|        1 |
|        2 |
+----------+
2 rows in set (0.00 sec)

mysql> /* Multiple Columns */
mysql> -- Display unique combinations of: brand,price ?
mysql> select distinct brand,price from products;
+----------+----------+
| brand    | price    |
+----------+----------+
| HP       | 65000.00 |
| Samsung  | 72000.00 |
| Logitech |   900.00 |
| LG       | 12000.00 |
| Apple    | 56000.00 |
| Canon    | 15000.00 |
| HP       | 92000.00 |
| Samsung  | 35000.00 |
| Samsung  | 18000.00 |
| Logitech |  2500.00 |
| Dell     | 12000.00 |
| Acer     | 18000.00 |
| Lenovo   | 22000.00 |
| Samsung  | 56000.00 |
| Epson    | 15000.00 |
| Apple    |  9000.00 |
| HP       |   900.00 |
+----------+----------+
17 rows in set (0.00 sec)

mysql> select distinct (brand),price from products;
+----------+----------+
| brand    | price    |
+----------+----------+
| HP       | 65000.00 |
| Samsung  | 72000.00 |
| Logitech |   900.00 |
| LG       | 12000.00 |
| Apple    | 56000.00 |
| Canon    | 15000.00 |
| HP       | 92000.00 |
| Samsung  | 35000.00 |
| Samsung  | 18000.00 |
| Logitech |  2500.00 |
| Dell     | 12000.00 |
| Acer     | 18000.00 |
| Lenovo   | 22000.00 |
| Samsung  | 56000.00 |
| Epson    | 15000.00 |
| Apple    |  9000.00 |
| HP       |   900.00 |
+----------+----------+
17 rows in set (0.00 sec)

mysql> select brand, distinct price from products;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'distinct price from products' at line 1

mysql> select distinct (price),brand from products;
+----------+----------+
| price    | brand    |
+----------+----------+
| 65000.00 | HP       |
| 72000.00 | Samsung  |
|   900.00 | Logitech |
| 12000.00 | LG       |
| 56000.00 | Apple    |
| 15000.00 | Canon    |
| 92000.00 | HP       |
| 35000.00 | Samsung  |
| 18000.00 | Samsung  |
|  2500.00 | Logitech |
| 12000.00 | Dell     |
| 18000.00 | Acer     |
| 22000.00 | Lenovo   |
| 56000.00 | Samsung  |
| 15000.00 | Epson    |
|  9000.00 | Apple    |
|   900.00 | HP       |
+----------+----------+
17 rows in set (0.00 sec)

mysql> -- 12. Display unique combinations of: city,first name
mysql> select distinct first_name, city from customers;
+------------+---------+
| first_name | city    |
+------------+---------+
| Anand      | Ranchi  |
| Rahul      | Delhi   |
| Priya      | Patna   |
| Amit       | Lucknow |
| Neha       | Kolkata |
| Rohan      | Pune    |
| Priti      | Ranchi  |
| Suresh     | Delhi   |
| Kavita     | Patna   |
| Vikash     | Ranchi  |
| Sneha      | Kolkata |
| Mohit      | Delhi   |
| Anjali     | Pune    |
| Deepak     | Ranchi  |
| Arjun      | Lucknow |
+------------+---------+
15 rows in set (0.00 sec)

mysql> -- 13. Display unique combinations of: payment_method, payment_status
mysql> select distinct payment_method, payment_status from payments;
+----------------+----------------+
| payment_method | payment_status |
+----------------+----------------+
| UPI            | Paid           |
| Credit Card    | Pending        |
| Cash           | Paid           |
| Credit Card    | Refunded       |
| UPI            | Pending        |
| Net Banking    | Paid           |
| Cash           | Refunded       |
| Cash           | Pending        |
| Credit Card    | Paid           |
| Net Banking    | Pending        |
+----------------+----------------+
10 rows in set (0.00 sec)

mysql> -- 14. Display unique combinations of: status, customer id
mysql> select distinct customer_id, status from orders;
+-------------+-----------+
| customer_id | status    |
+-------------+-----------+
|           1 | Delivered |
|           2 | Pending   |
|           3 | Delivered |
|           4 | Cancelled |
|           5 | Pending   |
|           7 | Delivered |
|           8 | Pending   |
|           9 | Delivered |
|          10 | Pending   |
|          11 | Delivered |
|          12 | Cancelled |
|          13 | Pending   |
|          14 | Delivered |
|           3 | Pending   |
|           5 | Delivered |
|          10 | Cancelled |
|          11 | Pending   |
|           2 | Delivered |
+-------------+-----------+
18 rows in set (0.00 sec)

mysql> -- 15. Display unique combinations of: category id, brand
mysql> select distinct category_id, brand from products;
+-------------+----------+
| category_id | brand    |
+-------------+----------+
|           1 | HP       |
|           2 | Samsung  |
|           3 | Logitech |
|           4 | LG       |
|           5 | Apple    |
|           6 | Canon    |
|           4 | Dell     |
|           4 | Acer     |
|           5 | Lenovo   |
|           5 | Samsung  |
|           6 | Epson    |
|           3 | Apple    |
|           3 | HP       |
+-------------+----------+
13 rows in set (0.00 sec)

mysql> /*Distinct + Order by */
mysql> -- 16. Display unique cities sorted alphabetically.
mysql> select distinct city from customers order by asc;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'asc' at line 1

mysql> select distinct city from customers order by city asc;
+---------+
| city    |
+---------+
| Delhi   |
| Kolkata |
| Lucknow |
| Patna   |
| Pune    |
| Ranchi  |
+---------+
6 rows in set (0.00 sec)

mysql> -- 17. Display unique brands sorted in descending order.
mysql> select distinct brand from products order by brand desc;
+----------+
| brand    |
+----------+
| Samsung  |
| Logitech |
| LG       |
| Lenovo   |
| HP       |
| Epson    |
| Dell     |
| Canon    |
| Apple    |
| Acer     |
+----------+
10 rows in set (0.00 sec)

mysql> -- 18. Display unique payment methods sorted alphabetically.
mysql> select distinct payment_method from payments order by payment_method asc;
+----------------+
| payment_method |
+----------------+
| Cash           |
| Credit Card    |
| Net Banking    |
| UPI            |
+----------------+
4 rows in set (0.00 sec)

mysql> -- 19. Display unique prices sorted from highest to lowest.
mysql> select distinct price from products order by price desc;
+----------+
| price    |
+----------+
| 92000.00 |
| 72000.00 |
| 65000.00 |
| 56000.00 |
| 35000.00 |
| 22000.00 |
| 18000.00 |
| 15000.00 |
| 12000.00 |
|  9000.00 |
|  2500.00 |
|   900.00 |
+----------+
12 rows in set (0.00 sec)

mysql> -- 20. Display unique stock values sorted from lowest to highest.
mysql> select distinct stock from products order by stock asc;
+-------+
| stock |
+-------+
|     4 |
|     5 |
|     6 |
|     7 |
|     8 |
|    10 |
|    12 |
|    18 |
|    20 |
|    25 |
|    35 |
|    40 |
+-------+
12 rows in set (0.00 sec)

mysql> -- 21. write one query that returns: Unique cities, Sorted alphabetically, Excluding Ranchi
mysql> select distinct city from customers where city <> "Ranchi" order by city asc;
+---------+
| city    |
+---------+
| Delhi   |
| Kolkata |
| Lucknow |
| Patna   |
| Pune    |
+---------+
5 rows in set (0.00 sec)
```