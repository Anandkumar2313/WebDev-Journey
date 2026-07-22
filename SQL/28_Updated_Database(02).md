Updated Database

```
mysql> /* Updated Database */
mysql>
mysql> select * from customers;
+-------------+------------+-----------+------------------+---------------+------------+------------+--------+
| customer_id | first_name | last_name | email            | mobile_number | city       | created_at | gender |
+-------------+------------+-----------+------------------+---------------+------------+------------+--------+
|           1 | Anand      | Kumar     | anand@gmail.com  | 9876543210    | Banglore   | 2026-01-10 | Male   |
|           2 | Rahul      | Singh     | rahul@gmail.com  | 9876543211    | Delhi      | 2026-02-15 | NULL   |
|           3 | Priya      | Sharma    | priya@gmail.com  | 9876543212    | Kolkata    | 2026-03-12 | NULL   |
|           4 | Amit       | verma     | amit@gmail.com   | 9876543213    | Lucknow    | 2026-04-08 | NULL   |
|           5 | Neha       | gupta     | neha@gmail.com   | 9876543214    | Kolkata    | 2026-05-21 | NULL   |
|           6 | Rohan      | Das       | rohan@gmail.com  | 9998887776    | hyderabad  | 2026-06-01 | NULL   |
|           7 | Priti      | kumari    | priti@gmail.com  | 9876543216    | Ranchi     | 2026-07-23 | NULL   |
|           8 | Suresh     | Yadav     | suresh@gmail.com | 9876543217    | Delhi      | 2026-08-01 | NULL   |
|           9 | Kavita     | Mishra    | kavita@gmail.com | 9876543218    | Kolkata    | 2026-08-05 | NULL   |
|          10 | Vikash     | Roy       | vikash@gmail.com | 9876543219    | Ranchi     | 2026-08-08 | NULL   |
|          11 | Sneha      | Jain      | Sneha@gmail.com  | 9876543220    | Kolkata    | 2026-08-10 | NULL   |
|          12 | Mohit      | Sharma    | mohit@gmail.com  | 9876543221    | Delhi      | 2026-08-12 | NULL   |
|          13 | Anjali     | Sinha     | anjali@gmail.com | 9876543222    | Pune       | 2026-08-15 | NULL   |
|          14 | Deepak     | Gupta     | deepak@gmail.com | 9876543223    | Ranchi     | 2026-08-18 | NULL   |
|          16 | Arjun      | Mehta     | arjun@gmail.com  | 9876543224    | Mumbai     | 2026-08-20 | Male   |
|          17 | Riya       | Kapoor    | riya@gmail.com   | 9876543225    | Delhi      | 2026-08-21 | Female |
|          18 | Karan      | Patel     | karan@gmail.com  | 9876543226    | Ahmedabad  | 2026-08-22 | Male   |
|          19 | Simran     | Kaur      | simran@gmail.com | 9876543227    | Chandigarh | 2026-08-23 | Female |
+-------------+------------+-----------+------------------+---------------+------------+------------+--------+
18 rows in set (0.02 sec)

mysql> select * from orders;
+----------+-------------+------------+--------------+-----------+-------------------+
| order_id | customer_id | order_date | total_amount | status    | expected_delivery |
+----------+-------------+------------+--------------+-----------+-------------------+
|        1 |           1 | 2026-07-01 |     65000.00 | Delivered | NULL              |
|        2 |           2 | 2026-07-02 |     72900.00 | Pending   | 2026-07-10        |
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
|       21 |          17 | 2026-08-24 |     98000.00 | Delivered | NULL              |
|       22 |          17 | 2026-08-25 |     32000.00 | Pending   | NULL              |
|       23 |          18 | 2026-08-25 |     55000.00 | Delivered | NULL              |
+----------+-------------+------------+--------------+-----------+-------------------+
23 rows in set (0.03 sec)

mysql> select * from orderitems;
+---------------+----------+------------+----------+------------+
| order_item_id | order_id | product_id | quantity | item_price |
+---------------+----------+------------+----------+------------+
|             1 |        1 |          1 |        1 |   65000.00 |
|             2 |        2 |          2 |        1 |   72000.00 |
|             3 |        2 |          3 |        1 |     900.00 |
|             4 |        3 |          4 |        1 |   12000.00 |
|             5 |        4 |          5 |        1 |   56000.00 |
|             6 |        5 |          6 |        1 |   15000.00 |
|             7 |        6 |          3 |        1 |     900.00 |
|             8 |        7 |          9 |        1 |   35000.00 |
|             9 |        8 |         10 |        1 |   18000.00 |
|            10 |        9 |         12 |        1 |    2500.00 |
|            11 |       10 |          8 |        1 |   92000.00 |
|            12 |       11 |         20 |        1 |     900.00 |
|            13 |       12 |         15 |        1 |   22000.00 |
|            14 |       13 |         16 |        1 |   56000.00 |
|            15 |       14 |         17 |        1 |   15000.00 |
|            16 |       15 |         13 |        1 |   12000.00 |
|            17 |       16 |         19 |        1 |    9000.00 |
|            18 |       17 |          7 |        1 |   65000.00 |
|            19 |       18 |         18 |        1 |   15000.00 |
|            20 |       19 |          2 |        1 |   72000.00 |
|            21 |       20 |          3 |        1 |     900.00 |
|            22 |       17 |         20 |        2 |     900.00 |
|            23 |       18 |         12 |        2 |    2500.00 |
|            24 |       19 |          6 |        1 |   15000.00 |
|            25 |       20 |          4 |        1 |   12000.00 |
|            26 |       10 |         11 |        1 |     900.00 |
|            27 |        8 |         14 |        1 |   18000.00 |
|            28 |       21 |         24 |        1 |   98000.00 |
|            29 |       22 |         23 |        1 |   32000.00 |
|            30 |       23 |         21 |        1 |   55000.00 |
+---------------+----------+------------+----------+------------+
30 rows in set (0.00 sec)

mysql> select * from products;
+------------+------------------------+-------------+----------+-------+---------------------+
| product_id | product_name           | category_id | price    | stock | brand               |
+------------+------------------------+-------------+----------+-------+---------------------+
|          1 | HP Victus 15           |           1 | 65000.00 |    20 | HP                  |
|          2 | Samsung Galaxy S25     |           2 | 72000.00 |    30 | Samsung Electronics |
|          3 | Logitech G102 Mouse    |           3 |   900.00 |    35 | Logitech            |
|          4 | LG UltraGear 24        |           4 | 12000.00 |    12 | LG                  |
|          5 | Apple iPad Air         |           5 | 56000.00 |    18 | Apple               |
|          6 | Canon Pixma G3010      |           6 | 18000.00 |     7 | Canon               |
|          7 | HP Pavilion 14         |           1 | 65000.00 |    20 | HP                  |
|          8 | HP Omen 16             |           1 | 92000.00 |    20 | HP                  |
|          9 | Samsung Galaxy A56     |           2 | 35000.00 |    30 | Samsung Electronics |
|         10 | Samsung Galaxy M36     |           2 | 18000.00 |    18 | Samsung             |
|         11 | Logitech Keyboard K120 |           3 |   900.00 |    40 | Logitech            |
|         12 | Logitech Webcam C270   |           3 |  2500.00 |    25 | sony                |
|         13 | Dell 24 Monitor        |           4 | 12000.00 |    10 | Dell                |
|         14 | Acer Nitro Monitor     |           4 | 18000.00 |     7 | Acer                |
|         15 | Lenovo Tab M11         |           5 | 42000.00 |    15 | Lenovo              |
|         16 | Samsung Galaxy Tab S10 |           5 | 56000.00 |    30 | Samsung Electronics |
|         17 | Epson EcoTank L3250    |           6 | 18000.00 |     8 | Epson               |
|         18 | Canon Laser Printer    |           6 | 18000.00 |     5 | Canon               |
|         19 | Apple Magic Mouse      |           3 |  9000.00 |    10 | Apple               |
|         20 | HP Wireless Mouse      |           3 | 45000.00 |    40 | HP                  |
|         21 | Sony PlayStation 5     |           7 | 55000.00 |     8 | Sony                |
|         22 | Xbox Series X          |           7 | 52000.00 |     6 | Microsoft           |
|         23 | Nintendo Switch OLED   |           7 | 32000.00 |    12 | Nintendo            |
|         24 | Dell XP5 13            |           1 | 98000.00 |     4 | Dell                |
|         25 | HP EliteBook 840       |           1 | 88000.00 |     5 | HP                  |
+------------+------------------------+-------------+----------+-------+---------------------+
25 rows in set (0.02 sec)

mysql> select * from categories;
+-------------+----------------+--------------------------------+
| category_id | category_name  | description                    |
+-------------+----------------+--------------------------------+
|           1 | Laptop         | Portable computers             |
|           2 | Smartphone     | Android and iOS phones         |
|           3 | Accessories    | Computer accessories           |
|           4 | Moniter        | LED and LCD monitors           |
|           5 | Tablet         | Android and ipad tablets       |
|           6 | Printer        | Inkjet and Laser printers      |
|           7 | Gaming Console | Gaming devices and accessories |
+-------------+----------------+--------------------------------+
7 rows in set (0.00 sec)

mysql> select * from payments;
+------------+----------+--------------+----------------+----------------+-----------------------+
| payment_id | order_id | payment_date | payment_method | payment_status | remarks               |
+------------+----------+--------------+----------------+----------------+-----------------------+
|          2 |        2 | 2026-07-02   | Credit Card    | Pending        | Paid via Visa         |
|          5 |        5 | 2026-07-05   | UPI            | Pending        | NULL                  |
|          8 |        8 | 2026-07-09   | Credit Card    | Pending        | NULL                  |
|         10 |       10 | 2026-07-11   | UPI            | Pending        | NULL                  |
|         13 |       13 | 2026-07-14   | Credit Card    | Pending        | NULL                  |
|         18 |       18 | 2026-07-19   | Net Banking    | Pending        | NULL                  |
|         21 |       21 | 2026-08-24   | Credit Card    | Completed      | NULL                  |
|         22 |       23 | 2026-08-25   | UPI            | Completed      | NULL                  |
|         27 |       12 | 2026-07-05   | Cash           | Completed      | Store Payment         |
|         28 |       16 | 2026-07-17   | UPI            | Completed      | PhonePe               |
|         29 |       22 | 2026-08-25   | Net Banking    | Pending        | Awaiting Confirmation |
|         30 |        7 | 2026-07-08   | Debit Card     | Completed      | Rupay                 |
+------------+----------+--------------+----------------+----------------+-----------------------+
12 rows in set (0.00 sec)

mysql>
```