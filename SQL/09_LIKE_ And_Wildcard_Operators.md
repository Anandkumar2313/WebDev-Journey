LIKE & Wildcard Operators

``` SQL
mysql> /* LIKE & Wildcard Operators */
mysql> /* 'Like' clause is used for pattern matching. */
mysql>
mysql> /*SYNTAX :- select column_name from table_name where column_name like 'pattern'; */
mysql>
mysql> /* There are two main 'Wildcard Operator' in SQL :- */
mysql> /* 1. '%' :- used for random zero or more character. */
mysql> /* 2. '_' :- used for random only one character. */
mysql>
mysql> /* Example of '%' Wildcard:- */
mysql> /* Where first_name like 'A%' means first_name starts with A/a */
mysql> /* Where first_name like '%A' means first_name ends with A/a */
mysql> /* Where first_name like '%ha%' means first_name contains any combination of HA/ha/Ha/hA */
mysql>
mysql> /* Example of '_' Wildcard:- */
mysql> /* WHERE first_name LIKE '_o%' means :- */
mysql> /*1. First character -> Anything */
mysql> /*2. Second character -> o*/
mysql> /*3. Remaining characters → anything */
mysql>
mysql> /* Where first_name like 'A__' means */
mysql> /*1. Starts with A/a */
mysql> /*2. Exactly 3 characters total. */
mysql>
mysql> /* Real world Example of Like and Wildcard operators :-  */
mysql> /* Show me all customers whose name starts with A. */
mysql> /* Find all Samsung products. */
mysql> /* Display all emails ending with gmail.com. */
mysql>
mysql> /* Practice Questions */
mysql> /* Starts With */
mysql>
mysql> -- 1. Display customers whose first name starts with A.
mysql> select first_name from customers where first_name like 'A%';
+------------+
| first_name |
+------------+
| Anand      |
| Amit       |
| Anjali     |
| Arjun      |
+------------+
4 rows in set (0.03 sec)

mysql> -- 2. Display products whose brand starts with S.
mysql> select product_name, brand from products where brand like 'S%';
+------------------------+---------+
| product_name           | brand   |
+------------------------+---------+
| Samsung Galaxy S25     | Samsung |
| Samsung Galaxy A56     | Samsung |
| Samsung Galaxy M36     | Samsung |
| Samsung Galaxy Tab S10 | Samsung |
+------------------------+---------+
4 rows in set (0.02 sec)

mysql> -- 3. Display payment methods starting with C.
mysql> select payment_method, payment_status from payments where payment_method like 'C%';
+----------------+----------------+
| payment_method | payment_status |
+----------------+----------------+
| Credit Card    | Pending        |
| Cash           | Paid           |
| Credit Card    | Refunded       |
| Cash           | Paid           |
| Credit Card    | Pending        |
| Cash           | Paid           |
| Cash           | Refunded       |
| Credit Card    | Pending        |
| Cash           | Pending        |
| Credit Card    | Paid           |
| Cash           | Paid           |
+----------------+----------------+
11 rows in set (0.00 sec)

mysql> select distinct payment_method, payment_status from payments where payment_method like 'C%';
+----------------+----------------+
| payment_method | payment_status |
+----------------+----------------+
| Credit Card    | Pending        |
| Cash           | Paid           |
| Credit Card    | Refunded       |
| Cash           | Refunded       |
| Cash           | Pending        |
| Credit Card    | Paid           |
+----------------+----------------+
6 rows in set (0.00 sec)

mysql> select distinct payment_method from payments where payment_method like 'C%';
+----------------+
| payment_method |
+----------------+
| Credit Card    |
| Cash           |
+----------------+
2 rows in set (0.00 sec)

mysql> -- 4. Display products whose name starts with HP.
mysql> select product_name from products where product_name like 'HP%';
+-------------------+
| product_name      |
+-------------------+
| HP Victus 15      |
| HP Pavilion 14    |
| HP Omen 16        |
| HP Wireless Mouse |
+-------------------+
4 rows in set (0.02 sec)

mysql> -- 5. Display cities starting with P.
mysql> select distinct city from customers where city like 'P%';
+-------+
| city  |
+-------+
| Patna |
| Pune  |
+-------+
2 rows in set (0.01 sec)

mysql> /* Ends With */
mysql> -- 6. Display customers whose first name ends with a.
mysql> select first_name, last_name from customers where first_name like '%A';
+------------+-----------+
| first_name | last_name |
+------------+-----------+
| Priya      | Sharma    |
| Neha       | gupta     |
| Kavita     | Mishra    |
| Sneha      | Jain      |
+------------+-----------+
4 rows in set (0.00 sec)

mysql> -- 7. Display emails ending with gmail.com.
mysql> select email from customers where email like '%gmail.com';
+------------------+
| email            |
+------------------+
| amit@gmail.com   |
| anand@gmail.com  |
| anjali@gmail.com |
| arjun@gmail.com  |
| deepak@gmail.com |
| kavita@gmail.com |
| mohit@gmail.com  |
| neha@gmail.com   |
| priti@gmail.com  |
| priya@gmail.com  |
| rahul@gmail.com  |
| rohan@gmail.com  |
| Sneha@gmail.com  |
| suresh@gmail.com |
| vikash@gmail.com |
+------------------+
15 rows in set (0.02 sec)

mysql> -- 8. Display products whose name ends with Mouse.
mysql> select product_name, brand where product_name like '%mouse';
ERROR 1054 (42S22): Unknown column 'product_name' in 'field list'
mysql> select product_name, brand from products where product_name like '%mouse';
+---------------------+----------+
| product_name        | brand    |
+---------------------+----------+
| Logitech G102 Mouse | Logitech |
| Apple Magic Mouse   | Apple    |
| HP Wireless Mouse   | HP       |
+---------------------+----------+
3 rows in set (0.00 sec)

mysql> -- 9. Display brands ending with g.
mysql> select product_name, brand from products where brand like '%g';
+------------------------+---------+
| product_name           | brand   |
+------------------------+---------+
| Samsung Galaxy S25     | Samsung |
| LG UltraGear 24        | LG      |
| Samsung Galaxy A56     | Samsung |
| Samsung Galaxy M36     | Samsung |
| Samsung Galaxy Tab S10 | Samsung |
+------------------------+---------+
5 rows in set (0.00 sec)

mysql> -- 10. Display payment methods ending with h.
mysql> select distinct payment_method from payments where payment_method like '%h';
+----------------+
| payment_method |
+----------------+
| Cash           |
+----------------+
1 row in set (0.00 sec)

mysql> /* Contains */
mysql> -- 11. Display customers whose first name contains an.
mysql> select first_name, last_name from customers where first_name like '%an%';
+------------+-----------+
| first_name | last_name |
+------------+-----------+
| Anand      | Kumar     |
| Rohan      | Das       |
| Anjali     | Sinha     |
+------------+-----------+
3 rows in set (0.00 sec)

mysql> -- 12. Display products whose name contains Galaxy.
mysql> select product_name, price from products where product_name like '%galaxy%';
+------------------------+----------+
| product_name           | price    |
+------------------------+----------+
| Samsung Galaxy S25     | 72000.00 |
| Samsung Galaxy A56     | 35000.00 |
| Samsung Galaxy M36     | 18000.00 |
| Samsung Galaxy Tab S10 | 56000.00 |
+------------------------+----------+
4 rows in set (0.00 sec)

mysql>
mysql> -- 13. Display cities containing an.
mysql> select distinct city from customers where city like '%an';
Empty set (0.00 sec)

mysql> select distinct city from customers where city like '%an%';
+--------+
| city   |
+--------+
| Ranchi |
+--------+
1 row in set (0.00 sec)

mysql> -- 14. Display brands containing o.
mysql> select distict brand from products where brand like '%o%';
ERROR 1054 (42S22): Unknown column 'distict' in 'field list'
mysql> select distinct brand from products where brand like '%o%';
+----------+
| brand    |
+----------+
| Logitech |
| Canon    |
| Lenovo   |
| Epson    |
+----------+
4 rows in set (0.00 sec)

mysql>
mysql> -- 15. Display payment methods containing Card.
mysql> select distinct payment_method from payments where payment_method like '%card%';
+----------------+
| payment_method |
+----------------+
| Credit Card    |
+----------------+
1 row in set (0.00 sec)

mysql> /* '_' Wildcard */
mysql> -- 16. Display names where the second letter is o.
mysql> select first_name, last_name from customers where first_name like '_o%';
+------------+-----------+
| first_name | last_name |
+------------+-----------+
| Rohan      | Das       |
| Mohit      | Sharma    |
+------------+-----------+
2 rows in set (0.00 sec)

mysql> -- 17. Display cities where the second letter is e.
mysql> select distinct city from customers city like '_e%';
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'like '_e%'' at line 1
mysql> select distinct city from customers where city like '_e%';
+-------+
| city  |
+-------+
| Delhi |
+-------+
1 row in set (0.00 sec)

mysql> -- 18. Display brands having exactly 2 letters.
mysql> select distinct brand from products where brand like'__';
+-------+
| brand |
+-------+
| HP    |
| LG    |
+-------+
2 rows in set (0.00 sec)

mysql> -- 19. Display first names having exactly 5 characters.
mysql> select first_name from customers where first_name like '_____';
+------------+
| first_name |
+------------+
| Anand      |
| Rahul      |
| Priya      |
| Rohan      |
| Priti      |
| Sneha      |
| Mohit      |
| Arjun      |
+------------+
8 rows in set (0.00 sec)

mysql> -- 20. Display product names beginning with H and ending with 5.
mysql> select product_name from products where product_name like 'h%5';
+--------------+
| product_name |
+--------------+
| HP Victus 15 |
+--------------+
1 row in set (0.00 sec)

mysql> /* Challenge Questions */
mysql> /* Write one query that : */
mysql> /*1. Shows 2 customers */
mysql> /*2. Whose name starts with A */
mysql> /*3. Sorts them alphabetically */
mysql> /*4. Displays only: first_name, city */
mysql>
mysql> /* Answer Query */
mysql> select first_name, city from customers where first_name like 'a%' order by first_name asc limit 2;
+------------+---------+
| first_name | city    |
+------------+---------+
| Amit       | Lucknow |
| Anand      | Ranchi  |
+------------+---------+
2 rows in set (0.00 sec)
```