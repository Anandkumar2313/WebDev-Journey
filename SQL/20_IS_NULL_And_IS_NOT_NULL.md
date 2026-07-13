IS NULL & IS NOT NULL

```SQL
mysql> /* IS NULL & IS NOT NULL */
mysql> /* First Question: What is NULL? */
mysql> /* Many people think, NULL = 0 or NULL = ''(Empty String) or NULL = "NULL" these all are wrong. */
mysql>
mysql> /* Correct definition: NULL means the value is unknown, missing, or not yet assigned. */
mysql> /* Example: */
mysql> -- 1. Customer hasn't entered phone number.
mysql> -- 2. Delivery date not assigned.
mysql> -- 3. Payment remarks not entered.
mysql> -- 4. Gender unknown.
mysql> /* SQL stores these as NULL */
mysql>
mysql> /* We cannot compare NULL using = or !=, SQL provides the special operators IS NULL and IS NOT NULL. */
mysql> /* SQL provides IS NULL and IS NOT NULL special opeartors. */
mysql> /* Suntax(IS NULL) : select from table_name where column_name IS NULL; */
mysql>
mysql> /* Suntax(IS NOT NULL) : select from table_name where column_name IS NOT NULL; */
mysql>
mysql> /* Practice Questions */
mysql> /* Level 1: IS NULL */
mysql> -- 1. Display all customers whose gender is NULL.
mysql> select * from customers where gender IS NULL;
+-------------+------------+-----------+------------------+---------------+-----------+------------+--------+
| customer_id | first_name | last_name | email            | mobile_number | city      | created_at | gender |
+-------------+------------+-----------+------------------+---------------+-----------+------------+--------+
|           1 | Anand      | Kumar     | anand@gmail.com  | 9876543210    | Banglore  | 2026-01-10 | NULL   |
|           2 | Rahul      | Singh     | rahul@gmail.com  | 9876543211    | Delhi     | 2026-02-15 | NULL   |
|           3 | Priya      | Sharma    | priya@gmail.com  | 9876543212    | Kolkata   | 2026-03-12 | NULL   |
|           4 | Amit       | verma     | amit@gmail.com   | 9876543213    | Lucknow   | 2026-04-08 | NULL   |
|           5 | Neha       | gupta     | neha@gmail.com   | 9876543214    | Kolkata   | 2026-05-21 | NULL   |
|           6 | Rohan      | Das       | rohan@gmail.com  | 9998887776    | hyderabad | 2026-06-01 | NULL   |
|           7 | Priti      | kumari    | priti@gmail.com  | 9876543216    | Ranchi    | 2026-07-23 | NULL   |
|           8 | Suresh     | Yadav     | suresh@gmail.com | 9876543217    | Delhi     | 2026-08-01 | NULL   |
|           9 | Kavita     | Mishra    | kavita@gmail.com | 9876543218    | Kolkata   | 2026-08-05 | NULL   |
|          10 | Vikash     | Roy       | vikash@gmail.com | 9876543219    | Ranchi    | 2026-08-08 | NULL   |
|          11 | Sneha      | Jain      | Sneha@gmail.com  | 9876543220    | Kolkata   | 2026-08-10 | NULL   |
|          12 | Mohit      | Sharma    | mohit@gmail.com  | 9876543221    | Delhi     | 2026-08-12 | NULL   |
|          13 | Anjali     | Sinha     | anjali@gmail.com | 9876543222    | Pune      | 2026-08-15 | NULL   |
|          14 | Deepak     | Gupta     | deepak@gmail.com | 9876543223    | Ranchi    | 2026-08-18 | NULL   |
+-------------+------------+-----------+------------------+---------------+-----------+------------+--------+
14 rows in set (0.12 sec)

mysql> -- 2. Display all products whose supplier is NULL.
mysql> select * from products where dsupplier IS NULL;
ERROR 1054 (42S22): Unknown column 'dsupplier' in 'where clause'
mysql> select * from products where supplier IS NULL;
ERROR 1054 (42S22): Unknown column 'supplier' in 'where clause'
mysql>
mysql> -- 3. Display all orders whose expected_delivery is NULL.
mysql> select * from orders where expected_delivery is NULL;
+----------+-------------+------------+--------------+-----------+-------------------+
| order_id | customer_id | order_date | total_amount | status    | expected_delivery |
+----------+-------------+------------+--------------+-----------+-------------------+
|        1 |           1 | 2026-07-01 |     65000.00 | Delivered | NULL              |
|        2 |           2 | 2026-07-02 |     72900.00 | Pending   | NULL              |
|        3 |           3 | 2026-07-03 |     12000.00 | Delivered | NULL              |
|        4 |           4 | 2026-07-04 |     56000.00 | Cancelled | NULL              |
|        5 |           5 | 2026-07-05 |     15000.00 | Pending   | NULL              |
|        6 |           1 | 2026-07-06 |       900.00 | Delivered | NULL              |
|        7 |           7 | 2026-07-08 |     35000.00 | Delivered | NULL              |
|        8 |           8 | 2026-07-09 |     18000.00 | Pending   | NULL              |
|        9 |           9 | 2026-07-10 |      2500.00 | Delivered | NULL              |
|       10 |          10 | 2026-07-11 |     25000.00 | Delivered | NULL              |
|       11 |          11 | 2026-07-12 |       900.00 | Delivered | NULL              |
|       12 |          12 | 2026-07-13 |     22000.00 | Cancelled | NULL              |
|       13 |          13 | 2026-07-14 |     56000.00 | Pending   | NULL              |
|       14 |          14 | 2026-07-15 |     15000.00 | Delivered | NULL              |
|       15 |           3 | 2026-07-16 |     12000.00 | Pending   | NULL              |
|       16 |           5 | 2026-07-17 |      9000.00 | Delivered | NULL              |
|       17 |           9 | 2026-07-18 |     65000.00 | Delivered | NULL              |
|       18 |          10 | 2026-07-19 |     15000.00 | Cancelled | NULL              |
|       19 |          11 | 2026-07-20 |     72000.00 | Pending   | NULL              |
|       20 |           2 | 2026-07-21 |       900.00 | Delivered | NULL              |
+----------+-------------+------------+--------------+-----------+-------------------+
20 rows in set (0.04 sec)
mysql> -- 4. Display all payments whose payment_remarks is NULL.
mysql> select payment_method from payments where payment_remarks IS NULL;
ERROR 1054 (42S22): Unknown column 'payment_remarks' in 'where clause'
mysql>
mysql> -- 5. Display all customers whose mobile_number is NULL.
mysql> select first_name from customers where mobile_number is null;
Empty set (0.02 sec)

mysql> select * from customers where mobile_number is null;
Empty set (0.00 sec)

mysql> /* IS NOT NULL */
mysql> -- 6. Display all customers whose gender is NOT NULL.
mysql> select first_name from customers where gender is not null;
Empty set (0.00 sec)

mysql> -- 7. Display all orders whose expected_delivery is not null.
mysql> select * from orders where expected_delivery is not null;
Empty set (0.00 sec)

mysql> -- 8. Display all customers whose mobile_number is not null.
mysql> select first_name from customers where mobile_number is not null;
+------------+
| first_name |
+------------+
| Anand      |
| Rahul      |
| Priya      |
| Amit       |
| Neha       |
| Rohan      |
| Priti      |
| Suresh     |
| Kavita     |
| Vikash     |
| Sneha      |
| Mohit      |
| Anjali     |
| Deepak     |
+------------+
14 rows in set (0.00 sec)

mysql> -- 9. Display all products whose brand is not null.
mysql> select product_name from products where brand is not null;
+------------------------+
| product_name           |
+------------------------+
| HP Victus 15           |
| Samsung Galaxy S25     |
| Logitech G102 Mouse    |
| LG UltraGear 24        |
| Apple iPad Air         |
| Canon Pixma G3010      |
| HP Pavilion 14         |
| HP Omen 16             |
| Samsung Galaxy A56     |
| Samsung Galaxy M36     |
| Logitech Keyboard K120 |
| Logitech Webcam C270   |
| Dell 24 Monitor        |
| Acer Nitro Monitor     |
| Lenovo Tab M11         |
| Samsung Galaxy Tab S10 |
| Epson EcoTank L3250    |
| Canon Laser Printer    |
| Apple Magic Mouse      |
| HP Wireless Mouse      |
+------------------------+
20 rows in set (0.00 sec)

mysql> -- 10. Display all payments whose payment_method is not null.
mysql> select * from payments where payment_method is not null;
+------------+----------+--------------+----------------+----------------+---------+
| payment_id | order_id | payment_date | payment_method | payment_status | remarls |
+------------+----------+--------------+----------------+----------------+---------+
|          2 |        2 | 2026-07-02   | Credit Card    | Pending        | NULL    |
|          5 |        5 | 2026-07-05   | UPI            | Pending        | NULL    |
|          8 |        8 | 2026-07-09   | Credit Card    | Pending        | NULL    |
|         10 |       10 | 2026-07-11   | UPI            | Pending        | NULL    |
|         13 |       13 | 2026-07-14   | Credit Card    | Pending        | NULL    |
|         18 |       18 | 2026-07-19   | Net Banking    | Pending        | NULL    |
+------------+----------+--------------+----------------+----------------+---------+
6 rows in set (0.00 sec)

mysql> /* Level 3: UPDATE + NULL */
mysql> -- 11. Update customer 1 Set gender = 'Male', Then display customers whose gender IS NOT NULL.
mysql> update customers set gender = 'Male' where customer_id = 1;
Query OK, 1 row affected (0.04 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> select first_name from customers where gender is not null;
+------------+
| first_name |
+------------+
| Anand      |
+------------+
1 row in set (0.00 sec)

mysql> -- 12. Update customer 5 set gender = 'Female', Again display IS NOT NULL.
mysql> update customers set gender = 'Female' where customer_id = 5;
Query OK, 1 row affected (0.03 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> select first_name AS Name from customers where gender is not null;
+-------+
| Name  |
+-------+
| Anand |
| Neha  |
+-------+
2 rows in set (0.02 sec)

mysql> -- 13. Update order 2 set expected_delivery = '2026-07-10', Now display orders whose expected_delivery IS NOT NULL.
mysql> update orders set expected_delivery = '2026-07-10' where order_id = 2;
Query OK, 1 row affected (0.02 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> select * from orders where expected_delivery is not null;
+----------+-------------+------------+--------------+---------+-------------------+
| order_id | customer_id | order_date | total_amount | status  | expected_delivery |
+----------+-------------+------------+--------------+---------+-------------------+
|        2 |           2 | 2026-07-02 |     72900.00 | Pending | 2026-07-10        |
+----------+-------------+------------+--------------+---------+-------------------+
1 row in set (0.00 sec)

mysql> desc payments;
+----------------+--------------+------+-----+---------+----------------+
| Field          | Type         | Null | Key | Default | Extra          |
+----------------+--------------+------+-----+---------+----------------+
| payment_id     | int          | NO   | PRI | NULL    | auto_increment |
| order_id       | int          | YES  | UNI | NULL    |                |
| payment_date   | date         | NO   |     | NULL    |                |
| payment_method | varchar(30)  | YES  |     | NULL    |                |
| payment_status | varchar(20)  | YES  |     | pending |                |
| remarls        | varchar(100) | YES  |     | NULL    |                |
+----------------+--------------+------+-----+---------+----------------+
6 rows in set (0.05 sec)

mysql> alter table payments rename column remarls to remarks;
Query OK, 0 rows affected (0.07 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> desc payments;
+----------------+--------------+------+-----+---------+----------------+
| Field          | Type         | Null | Key | Default | Extra          |
+----------------+--------------+------+-----+---------+----------------+
| payment_id     | int          | NO   | PRI | NULL    | auto_increment |
| order_id       | int          | YES  | UNI | NULL    |                |
| payment_date   | date         | NO   |     | NULL    |                |
| payment_method | varchar(30)  | YES  |     | NULL    |                |
| payment_status | varchar(20)  | YES  |     | pending |                |
| remarks        | varchar(100) | YES  |     | NULL    |                |
+----------------+--------------+------+-----+---------+----------------+
6 rows in set (0.00 sec)

mysql> -- 14. Update payment 2 set remarks = 'Paid via Visa'.
mysql> update payments set remarks = 'Paid via Visa' where payment_id = 2;
Query OK, 1 row affected (0.03 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> selext * from payments where remarks is not null;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'selext * from payments where remarks is not null' at line 1
mysql> select * from payments where remarks is not null;
+------------+----------+--------------+----------------+----------------+---------------+
| payment_id | order_id | payment_date | payment_method | payment_status | remarks       |
+------------+----------+--------------+----------------+----------------+---------------+
|          2 |        2 | 2026-07-02   | Credit Card    | Pending        | Paid via Visa |
+------------+----------+--------------+----------------+----------------+---------------+
1 row in set (0.00 sec)

mysql> -- 15. Set gender = Null for customer 5 then, display gender is null and gender is not null.
mysql> update customers set gender = null where customer_id = 5;
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> select gender from customers where gender is null;
+--------+
| gender |
+--------+
| NULL   |
| NULL   |
| NULL   |
| NULL   |
| NULL   |
| NULL   |
| NULL   |
| NULL   |
| NULL   |
| NULL   |
| NULL   |
| NULL   |
| NULL   |
+--------+
13 rows in set (0.00 sec)

mysql> select gender from customers where gender is not null;
+--------+
| gender |
+--------+
| Male   |
+--------+
1 row in set (0.00 sec)

mysql> /* Challenge Question */
mysql> /* Write one query that displays customer id, name, gender only for customer whose gender is not null, Use aliases for every column. */
mysql>
mysql> /* Answer Query */
mysql> select customer_id AS ID, first_name AS Name, Gender AS M/F from customers where gender is not null;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '/F from customers where gender is not null' at line 1
mysql> select customer_id AS ID, first_name AS Name, Gender AS `M/F` from customers where gender is not null;
+----+-------+------+
| ID | Name  | M/F  |
+----+-------+------+
|  1 | Anand | Male |
+----+-------+------+
1 row in set (0.02 sec)
```