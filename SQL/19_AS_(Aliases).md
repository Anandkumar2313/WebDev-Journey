AS (Aliases)

```SQL
mysql> /* AS (Aliases) */
mysql> /* AS is used to give a temporary name (alias) to a column or a table in the query result. */
mysql>
mysql> /* Important: */
mysql> /* 1. It does not rename the actual column or table. */
mysql> /* 2. It changes the name only in the output of the current query. */
mysql>
mysql> /* SYNTAX : SELECT column_name AS alias_name FROM table_name; */
mysql> /* Alias with Spaces */
mysql> /* SYNTAX : SELECT column_name AS `alias_name_with_space` FROM table_name; */
mysql>
mysql> /* Level 1: Column Aliases */
mysql> -- 1. Display customer names using AS, rename first_name to Customer_Name.
mysql> select first_name AS Customer_name from customers;
+---------------+
| Customer_name |
+---------------+
| Anand         |
| Rahul         |
| Priya         |
| Amit          |
| Neha          |
| Rohan         |
| Priti         |
| Suresh        |
| Kavita        |
| Vikash        |
| Sneha         |
| Mohit         |
| Anjali        |
| Deepak        |
+---------------+
14 rows in set (0.04 sec)

mysql> -- 2. Display product prices using AS, rename price to Product_Price.
mysql> select price AS Product_Price from products;
+---------------+
| Product_Price |
+---------------+
|      65000.00 |
|      72000.00 |
|        900.00 |
|      12000.00 |
|      56000.00 |
|      18000.00 |
|      65000.00 |
|      92000.00 |
|      35000.00 |
|      18000.00 |
|        900.00 |
|       2500.00 |
|      12000.00 |
|      18000.00 |
|      42000.00 |
|      56000.00 |
|      18000.00 |
|      18000.00 |
|       9000.00 |
|      45000.00 |
+---------------+
20 rows in set (0.02 sec)

mysql> -- 3. Display cities using AS, rename city to Customer_City.
mysql> select city AS Customer_City from customers;
+---------------+
| Customer_City |
+---------------+
| Banglore      |
| Delhi         |
| Kolkata       |
| Lucknow       |
| Kolkata       |
| hyderabad     |
| Ranchi        |
| Delhi         |
| Kolkata       |
| Ranchi        |
| Kolkata       |
| Delhi         |
| Pune          |
| Ranchi        |
+---------------+
14 rows in set (0.00 sec)

mysql> -- 4. Display order amount using AS, rename total_amount to Order_value.
mysql> select total_amount AS order_value from orders;
+-------------+
| order_value |
+-------------+
|    65000.00 |
|    72900.00 |
|    12000.00 |
|    56000.00 |
|    15000.00 |
|      900.00 |
|    35000.00 |
|    18000.00 |
|     2500.00 |
|    25000.00 |
|      900.00 |
|    22000.00 |
|    56000.00 |
|    15000.00 |
|    12000.00 |
|     9000.00 |
|    65000.00 |
|    15000.00 |
|    72000.00 |
|      900.00 |
+-------------+
20 rows in set (0.03 sec)

mysql> -- 5. Display payment_status using AS, rename Payment_status to Payment_status.
mysql> select payment_status AS payment_status from payments;
+----------------+
| payment_status |
+----------------+
| Pending        |
| Pending        |
| Pending        |
| Pending        |
| Pending        |
| Pending        |
+----------------+
6 rows in set (0.03 sec)

mysql> /* Aggregate Functions */
mysql> -- 6. Display total customers, Alias: Total_Customers.
mysql> select count(*) AS Total_Customers from customers;
+-----------------+
| Total_Customers |
+-----------------+
|              14 |
+-----------------+
1 row in set (0.01 sec)

mysql> -- 7. Display average product price, Alias: Average_Price.
mysql> select avg(price) AS Average_Price from products;
+---------------+
| Average_Price |
+---------------+
|  32765.000000 |
+---------------+
1 row in set (0.03 sec)

mysql> -- 8. Display maximum product price, Alias: Highest_Price.
mysql> select max(price) AS Highest_Price from products;
+---------------+
| Highest_Price |
+---------------+
|      92000.00 |
+---------------+
1 row in set (0.02 sec)

mysql> -- 9. Display minimum stock, Alias: Minimum_Stock.
mysql> select min(stock) AS Minimum_stock from products;
+---------------+
| Minimum_stock |
+---------------+
|             5 |
+---------------+
1 row in set (0.02 sec)

mysql> -- 10. Display total order amount, Alias: Total_sales.
mysql> select sum(total_amount) AS Total_sales from orders;
+-------------+
| Total_sales |
+-------------+
|   570100.00 |
+-------------+
1 row in set (0.00 sec)

mysql> /* Level 3: GROUP BY + AS */
mysql> -- 11. Display Brand and Number of products, Rename count(*) to Total_Products.
mysql> select brand, count(*) As Total_Products from products group by brand;
+---------------------+----------------+
| brand               | Total_Products |
+---------------------+----------------+
| HP                  |              4 |
| Samsung Electronics |              3 |
| Logitech            |              2 |
| LG                  |              1 |
| Apple               |              2 |
| Canon               |              2 |
| Samsung             |              1 |
| sony                |              1 |
| Dell                |              1 |
| Acer                |              1 |
| Lenovo              |              1 |
| Epson               |              1 |
+---------------------+----------------+
12 rows in set (0.03 sec)

mysql> -- 12. Display City, Number of customers, rename count(*) to Total_Customers.
mysql> select city, count(*) AS total_customers from customers group by city;
+-----------+-----------------+
| city      | total_customers |
+-----------+-----------------+
| Banglore  |               1 |
| Delhi     |               3 |
| Kolkata   |               4 |
| Lucknow   |               1 |
| hyderabad |               1 |
| Ranchi    |               3 |
| Pune      |               1 |
+-----------+-----------------+
7 rows in set (0.00 sec)

mysql> -- 13. Display Payment method, Number of Payments, rename count(*) to total_payments.
mysql> select payment_method, count(*) AS total_payments from payments group by payment_method;
+----------------+----------------+
| payment_method | total_payments |
+----------------+----------------+
| Credit Card    |              3 |
| UPI            |              2 |
| Net Banking    |              1 |
+----------------+----------------+
3 rows in set (0.02 sec)

mysql> -- 14. Display category ID, Average price, rename avg(price) to Average_Price.
mysql> select category_id, avg(price) AS Average_Price from categories group by category_id;
ERROR 1054 (42S22): Unknown column 'price' in 'field list'
mysql> select category_id, avg(total_amount) AS Average_Price from categories group by category_id;
ERROR 1054 (42S22): Unknown column 'total_amount' in 'field list'
mysql> select category_id, avg(total_amount) AS Average_Price from products group by category_id;
ERROR 1054 (42S22): Unknown column 'total_amount' in 'field list'
mysql> select category_id, avg(price) AS Average_Price from products group by category_id;
+-------------+---------------+
| category_id | Average_Price |
+-------------+---------------+
|           1 |  74000.000000 |
|           2 |  41666.666667 |
|           3 |  11660.000000 |
|           4 |  14000.000000 |
|           5 |  51333.333333 |
|           6 |  18000.000000 |
+-------------+---------------+
6 rows in set (0.02 sec)

mysql> -- 15. Display brand, average price, maximum price, minimum price, rename every aggregate column using AS.
mysql> select brand, avg(price) AS Average_Price, max(price) AS `Maximum Price`, min(price) AS minimum_price from products group by brand;
+---------------------+---------------+---------------+---------------+
| brand               | Average_Price | Maximum Price | minimum_price |
+---------------------+---------------+---------------+---------------+
| HP                  |  66750.000000 |      92000.00 |      45000.00 |
| Samsung Electronics |  54333.333333 |      72000.00 |      35000.00 |
| Logitech            |    900.000000 |        900.00 |        900.00 |
| LG                  |  12000.000000 |      12000.00 |      12000.00 |
| Apple               |  32500.000000 |      56000.00 |       9000.00 |
| Canon               |  18000.000000 |      18000.00 |      18000.00 |
| Samsung             |  18000.000000 |      18000.00 |      18000.00 |
| sony                |   2500.000000 |       2500.00 |       2500.00 |
| Dell                |  12000.000000 |      12000.00 |      12000.00 |
| Acer                |  18000.000000 |      18000.00 |      18000.00 |
| Lenovo              |  42000.000000 |      42000.00 |      42000.00 |
| Epson               |  18000.000000 |      18000.00 |      18000.00 |
+---------------------+---------------+---------------+---------------+
12 rows in set (0.03 sec)

mysql> /* Challenge Question */
mysql> /* Write one Query that displays: */
mysql> /* Customer ID as ID */
mysql> /* First Name as Name */
mysql> /* City as Location */
mysql>
mysql> /* Answer Query */
mysql> select customer_id AS ID, first_name AS Name, city AS Location from customers;
+----+--------+-----------+
| ID | Name   | Location  |
+----+--------+-----------+
|  1 | Anand  | Banglore  |
|  2 | Rahul  | Delhi     |
|  3 | Priya  | Kolkata   |
|  4 | Amit   | Lucknow   |
|  5 | Neha   | Kolkata   |
|  6 | Rohan  | hyderabad |
|  7 | Priti  | Ranchi    |
|  8 | Suresh | Delhi     |
|  9 | Kavita | Kolkata   |
| 10 | Vikash | Ranchi    |
| 11 | Sneha  | Kolkata   |
| 12 | Mohit  | Delhi     |
| 13 | Anjali | Pune      |
| 14 | Deepak | Ranchi    |
+----+--------+-----------+
14 rows in set (0.00 sec)
```