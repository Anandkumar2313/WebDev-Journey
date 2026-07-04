Where Clause :-

```SQL
->The WHERE clause filters rows based on a condition.

mysql> /* WHERE CLAUSE*/
mysql> /*Syntax : select column_name from table_name where condition; */
mysql>
mysql> /*1. Display all customers who live in Ranchi? */
mysql> select first_name, last_name from customers where city = "Ranchi";
+------------+-----------+
| first_name | last_name |
+------------+-----------+
| Anand      | Kumar     |
| Priti      | kumari    |
+------------+-----------+
2 rows in set (0.00 sec)

mysql> /*2. Display all products whose brand is Samsung? */
mysql> select product_name from products where brand = "samsung";
+--------------------+
| product_name       |
+--------------------+
| Samsung Galaxy S25 |
+--------------------+
1 row in set (0.00 sec)

mysql> /*3. Display all orders whose status is Pending? */
mysql> select order_id from orders where status = "pending";
+----------+
| order_id |
+----------+
|        2 |
|        5 |
+----------+
2 rows in set (0.00 sec)

mysql> /*4. Display all payments whose payment status is Paid? */
mysql> select payment_id where payment_status = "paid";
ERROR 1054 (42S22): Unknown column 'payment_id' in 'field list'

mysql> select payment_id from payments where payment_status = "paid";
+------------+
| payment_id |
+------------+
|          1 |
|          3 |
|          6 |
+------------+
3 rows in set (0.00 sec)

mysql> /*5. Display all categories whose category name is Laptop? */
mysql> select * from categories where catogary_name = "laptop";
ERROR 1054 (42S22): Unknown column 'catogary_name' in 'where clause'

mysql> select * from categories where catogory_name = "laptop";
ERROR 1054 (42S22): Unknown column 'catogory_name' in 'where clause'

mysql>

mysql> select * from categories where category_name = "laptop";
+-------------+---------------+--------------------+
| category_id | category_name | description        |
+-------------+---------------+--------------------+
|           1 | Laptop        | Portable computers |
+-------------+---------------+--------------------+
1 row in set (0.00 sec)

mysql> /*6. Display products whose price is greater than 20000? */
mysql> select product_name from products where price > 20000;
+--------------------+
| product_name       |
+--------------------+
| HP Victus 15       |
| Samsung Galaxy S25 |
| Apple iPad Air     |
+--------------------+
3 rows in set (0.00 sec)

mysql> /*7. Display products whose stock is less than 10? */
mysql> selects product_name from products where stock < 10;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'selects product_name from products where stock < 10' at line 1

mysql>

mysql> select product_name from products where stock < 10;
+--------------------+
| product_name       |
+--------------------+
| Samsung Galaxy S25 |
| Apple iPad Air     |
| Canon Pixma G3010  |
+--------------------+
3 rows in set (0.00 sec)

mysql> /*8. Display orders whose total amount is greater than 50000? */
mysql> select * from orders where total_amount > 50000;
+----------+-------------+------------+--------------+-----------+
| order_id | customer_id | order_date | total_amount | status    |
+----------+-------------+------------+--------------+-----------+
|        1 |           1 | 2026-07-01 |     65000.00 | Delivered |
|        2 |           2 | 2026-07-02 |     72900.00 | Pending   |
|        4 |           4 | 2026-07-04 |     56000.00 | Cancelled |
+----------+-------------+------------+--------------+-----------+
3 rows in set (0.00 sec)

mysql> /*9. Display customers whose customer ID is 3? */
mysql> select first_name from customers where customer_id = 3;
+------------+
| first_name |
+------------+
| Priya      |
+------------+
1 row in set (0.00 sec)

mysql> /*10. Display the order whose order ID is 6? */
mysql> select * from order where order_id = 6;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'order where order_id = 6' at line 1

mysql>

mysql> select * from orders where order_id = 6;
+----------+-------------+------------+--------------+-----------+
| order_id | customer_id | order_date | total_amount | status    |
+----------+-------------+------------+--------------+-----------+
|        6 |           1 | 2026-07-06 |       900.00 | Delivered |
+----------+-------------+------------+--------------+-----------+
1 row in set (0.00 sec)

mysql> /*11. Display customers who registered on 2026-05-21 ? */
mysql> select first_name, last_name, email, phone from customers where created_at = "2026-05-21";
+------------+-----------+----------------+------------+
| first_name | last_name | email          | phone      |
+------------+-----------+----------------+------------+
| Neha       | gupta     | neha@gmail.com | 9876543214 |
+------------+-----------+----------------+------------+
1 row in set (0.00 sec)

mysql> /*12. Display orders placed on 2026-07-04 ? */
mysql> select order_id from orders where order_date = "2026-07-04";
+----------+
| order_id |
+----------+
|        4 |
+----------+
1 row in set (0.00 sec)

mysql> /*13. Display payments made on 2026-07-03 ? */
mysql> select * from payments where payment_date = "2026-07-03";
+------------+----------+--------------+----------------+----------------+
| payment_id | order_id | payment_date | payment_method | payment_status |
+------------+----------+--------------+----------------+----------------+
|          3 |        3 | 2026-07-03   | Cash           | Paid           |
+------------+----------+--------------+----------------+----------------+
1 row in set (0.00 sec)

mysql> /*14. Display products whose stock is greater than or equal to 10? */
mysql> select * from products where stock >= 10;
+------------+---------------------+-------------+----------+-------+----------+
| product_id | product_name        | category_id | price    | stock | brand    |
+------------+---------------------+-------------+----------+-------+----------+
|          1 | HP Victus 15        |           1 | 65000.00 |    10 | HP       |
|          3 | Logitech G102 Mouse |           3 |   900.00 |    35 | Logitech |
|          4 | LG UltraGear 24     |           4 | 12000.00 |    12 | LG       |
+------------+---------------------+-------------+----------+-------+----------+
3 rows in set (0.00 sec)

mysql> /*15. Display products whose price is not equal to 900? */
mysql> select product_name from products where price != 900;
+--------------------+
| product_name       |
+--------------------+
| HP Victus 15       |
| Samsung Galaxy S25 |
| LG UltraGear 24    |
| Apple iPad Air     |
| Canon Pixma G3010  |
+--------------------+
5 rows in set (0.00 sec)

mysql> /*16. Display customers who are not from Ranchi? */
mysql> select first_name, last_name from customers where city != "Ranchi";
+------------+-----------+
| first_name | last_name |
+------------+-----------+
| Rahul      | Singh     |
| Priya      | Sharma    |
| Amit       | verma     |
| Neha       | gupta     |
| Rohan      | Das       |
+------------+-----------+
5 rows in set (0.00 sec)

mysql> /*17. Display orders that are not Delivered?*/
mysql> select order_id from orders where status != "delivered";
+----------+
| order_id |
+----------+
|        2 |
|        4 |
|        5 |
+----------+
3 rows in set (0.00 sec)

mysql> /*18. Display payments whose method is not UPI? */
mysql> select payment_id from payments where payment_id != "upi";
+------------+
| payment_id |
+------------+
|          1 |
|          2 |
|          3 |
|          4 |
|          5 |
|          6 |
+------------+
6 rows in set, 1 warning (0.00 sec)

mysql> select payment_id from payments where payment_method != "upi";
+------------+
| payment_id |
+------------+
|          2 |
|          3 |
|          4 |
|          6 |
+------------+
4 rows in set (0.00 sec)
```