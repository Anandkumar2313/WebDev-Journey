INNER JOIN (Joining % Tables)

```SQL
mysql> /* INNER JOIN Part 4 (Joining 5 Tables) */
mysql> /* Example: */
mysql> /* Show Customer Name, Product Name and Category Name. */
mysql> select first_name, product_name, category_name from customers INNER JOIN orders ON customers.customer_id = orders.customer_id INNER JOIN orderitems ON orders.order_id = orderitems.order_id INNER JOIN products ON orderitems.product_id = products.product_id INNER JOIN categories ON products.category_id = categories.category_id;
+------------+------------------------+---------------+
| first_name | product_name           | category_name |
+------------+------------------------+---------------+
| Rahul      | Logitech G102 Mouse    | Accessories   |
| Anand      | Logitech G102 Mouse    | Accessories   |
| Rahul      | Logitech G102 Mouse    | Accessories   |
| Vikash     | Logitech Keyboard K120 | Accessories   |
| Kavita     | Logitech Webcam C270   | Accessories   |
| Vikash     | Logitech Webcam C270   | Accessories   |
| Neha       | Apple Magic Mouse      | Accessories   |
| Sneha      | HP Wireless Mouse      | Accessories   |
| Kavita     | HP Wireless Mouse      | Accessories   |
| Anand      | HP Victus 15           | Laptop        |
| Kavita     | HP Pavilion 14         | Laptop        |
| Vikash     | HP Omen 16             | Laptop        |
| Priya      | LG UltraGear 24        | Moniter       |
| Rahul      | LG UltraGear 24        | Moniter       |
| Priya      | Dell 24 Monitor        | Moniter       |
| Suresh     | Acer Nitro Monitor     | Moniter       |
| Neha       | Canon Pixma G3010      | Printer       |
| Sneha      | Canon Pixma G3010      | Printer       |
| Deepak     | Epson EcoTank L3250    | Printer       |
| Vikash     | Canon Laser Printer    | Printer       |
| Rahul      | Samsung Galaxy S25     | Smartphone    |
| Sneha      | Samsung Galaxy S25     | Smartphone    |
| Priti      | Samsung Galaxy A56     | Smartphone    |
| Suresh     | Samsung Galaxy M36     | Smartphone    |
| Amit       | Apple iPad Air         | Tablet        |
| Mohit      | Lenovo Tab M11         | Tablet        |
| Anjali     | Samsung Galaxy Tab S10 | Tablet        |
+------------+------------------------+---------------+
27 rows in set (0.02 sec)

mysql> /* Practice Questions */
mysql> /* Show Customer Name, Product Name and Category Name. */
mysql> select first_name, product_name, category_name from customers INNER JOIN orders ON customers.customer_id = orders.customer_id INNER JOIN orderitems ON orders.order_id = orderitems.order_id INNER JOIN products ON orderitems.product_id = products.product_id INNER JOIN categories ON products.category_id = categories.category_id;
+------------+------------------------+---------------+
| first_name | product_name           | category_name |
+------------+------------------------+---------------+
| Rahul      | Logitech G102 Mouse    | Accessories   |
| Anand      | Logitech G102 Mouse    | Accessories   |
| Rahul      | Logitech G102 Mouse    | Accessories   |
| Vikash     | Logitech Keyboard K120 | Accessories   |
| Kavita     | Logitech Webcam C270   | Accessories   |
| Vikash     | Logitech Webcam C270   | Accessories   |
| Neha       | Apple Magic Mouse      | Accessories   |
| Sneha      | HP Wireless Mouse      | Accessories   |
| Kavita     | HP Wireless Mouse      | Accessories   |
| Anand      | HP Victus 15           | Laptop        |
| Kavita     | HP Pavilion 14         | Laptop        |
| Vikash     | HP Omen 16             | Laptop        |
| Priya      | LG UltraGear 24        | Moniter       |
| Rahul      | LG UltraGear 24        | Moniter       |
| Priya      | Dell 24 Monitor        | Moniter       |
| Suresh     | Acer Nitro Monitor     | Moniter       |
| Neha       | Canon Pixma G3010      | Printer       |
| Sneha      | Canon Pixma G3010      | Printer       |
| Deepak     | Epson EcoTank L3250    | Printer       |
| Vikash     | Canon Laser Printer    | Printer       |
| Rahul      | Samsung Galaxy S25     | Smartphone    |
| Sneha      | Samsung Galaxy S25     | Smartphone    |
| Priti      | Samsung Galaxy A56     | Smartphone    |
| Suresh     | Samsung Galaxy M36     | Smartphone    |
| Amit       | Apple iPad Air         | Tablet        |
| Mohit      | Lenovo Tab M11         | Tablet        |
| Anjali     | Samsung Galaxy Tab S10 | Tablet        |
+------------+------------------------+---------------+
27 rows in set (0.02 sec)

mysql> -- 2. Show Customer Name, Product Name, Quantity and Category Name.
mysql> select first_name, product_name, quantity, category_name from customers INNER JOIN orders ON customers.customer_id = orders.customer_id INNER JOIN orderitems ON orders.order_id = orderitems.order_id INNER JOIN products ON orderitems.product_id = products.product_id INNER JOIN categories ON products.category_id = categories.category_id;
+------------+------------------------+----------+---------------+
| first_name | product_name           | quantity | category_name |
+------------+------------------------+----------+---------------+
| Rahul      | Logitech G102 Mouse    |        1 | Accessories   |
| Anand      | Logitech G102 Mouse    |        1 | Accessories   |
| Rahul      | Logitech G102 Mouse    |        1 | Accessories   |
| Vikash     | Logitech Keyboard K120 |        1 | Accessories   |
| Kavita     | Logitech Webcam C270   |        1 | Accessories   |
| Vikash     | Logitech Webcam C270   |        2 | Accessories   |
| Neha       | Apple Magic Mouse      |        1 | Accessories   |
| Sneha      | HP Wireless Mouse      |        1 | Accessories   |
| Kavita     | HP Wireless Mouse      |        2 | Accessories   |
| Anand      | HP Victus 15           |        1 | Laptop        |
| Kavita     | HP Pavilion 14         |        1 | Laptop        |
| Vikash     | HP Omen 16             |        1 | Laptop        |
| Priya      | LG UltraGear 24        |        1 | Moniter       |
| Rahul      | LG UltraGear 24        |        1 | Moniter       |
| Priya      | Dell 24 Monitor        |        1 | Moniter       |
| Suresh     | Acer Nitro Monitor     |        1 | Moniter       |
| Neha       | Canon Pixma G3010      |        1 | Printer       |
| Sneha      | Canon Pixma G3010      |        1 | Printer       |
| Deepak     | Epson EcoTank L3250    |        1 | Printer       |
| Vikash     | Canon Laser Printer    |        1 | Printer       |
| Rahul      | Samsung Galaxy S25     |        1 | Smartphone    |
| Sneha      | Samsung Galaxy S25     |        1 | Smartphone    |
| Priti      | Samsung Galaxy A56     |        1 | Smartphone    |
| Suresh     | Samsung Galaxy M36     |        1 | Smartphone    |
| Amit       | Apple iPad Air         |        1 | Tablet        |
| Mohit      | Lenovo Tab M11         |        1 | Tablet        |
| Anjali     | Samsung Galaxy Tab S10 |        1 | Tablet        |
+------------+------------------------+----------+---------------+
27 rows in set (0.02 sec)

mysql> -- 3. Show Customer Name, Brand and Category Name.
mysql> select first_name, brand, category_name from customers INNER JOIN orders ON customers.customer_id = orders.customer_id INNER JOIN orderitems ON orders.order_id = orderitems.order_id INNER JOIN products ON orderitems.product_id = products.product_id INNER JOIN categories ON products.category_id = categories.category_id;
+------------+---------------------+---------------+
| first_name | brand               | category_name |
+------------+---------------------+---------------+
| Rahul      | Logitech            | Accessories   |
| Anand      | Logitech            | Accessories   |
| Rahul      | Logitech            | Accessories   |
| Vikash     | Logitech            | Accessories   |
| Kavita     | sony                | Accessories   |
| Vikash     | sony                | Accessories   |
| Neha       | Apple               | Accessories   |
| Sneha      | HP                  | Accessories   |
| Kavita     | HP                  | Accessories   |
| Anand      | HP                  | Laptop        |
| Kavita     | HP                  | Laptop        |
| Vikash     | HP                  | Laptop        |
| Priya      | LG                  | Moniter       |
| Rahul      | LG                  | Moniter       |
| Priya      | Dell                | Moniter       |
| Suresh     | Acer                | Moniter       |
| Neha       | Canon               | Printer       |
| Sneha      | Canon               | Printer       |
| Deepak     | Epson               | Printer       |
| Vikash     | Canon               | Printer       |
| Rahul      | Samsung Electronics | Smartphone    |
| Sneha      | Samsung Electronics | Smartphone    |
| Priti      | Samsung Electronics | Smartphone    |
| Suresh     | Samsung             | Smartphone    |
| Amit       | Apple               | Tablet        |
| Mohit      | Lenovo              | Tablet        |
| Anjali     | Samsung Electronics | Tablet        |
+------------+---------------------+---------------+
27 rows in set (0.00 sec)

mysql> -- 4. Show Customer Name, Order date, Product name and Category Name.
mysql> select first_name, order_date, product_name, category_name from customers INNER JOIN orders ON customers.customer_id = orders.customer_id INNER JOIN orderitems ON orders.order_id = orderitems.order_id INNER JOIN products INNER JOIN orderitems.product_id = products.product_id INNER JOIN categories ON product.categories_id = categories.category_id;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '= products.product_id INNER JOIN categories ON product.categories_id = categorie' at line 1
mysql> select first_name, order_date, product_name, category_name from customers INNER JOIN orders ON customers.customer_id = orders.customer_id INNER JOIN orderitems ON orders.order_id = orderitems.order_id INNER JOIN products INNER JOIN orderitems.product_id = products.product_id INNER JOIN categories ON product.category_id = categories.category_id;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '= products.product_id INNER JOIN categories ON product.category_id = categories.' at line 1
mysql>
mysql> select first_name, order_date, product_name, category_name from customers INNER JOIN orders ON customers.customer_id = orders.customer_id INNER JOIN orderitems ON orders.order_id = orderitems.order_id INNER JOIN products ON orderitems.product_id = products.product_id INNER JOIN categories ON products.category_id = categories.category_id;
+------------+------------+------------------------+---------------+
| first_name | order_date | product_name           | category_name |
+------------+------------+------------------------+---------------+
| Rahul      | 2026-07-02 | Logitech G102 Mouse    | Accessories   |
| Anand      | 2026-07-06 | Logitech G102 Mouse    | Accessories   |
| Rahul      | 2026-07-21 | Logitech G102 Mouse    | Accessories   |
| Vikash     | 2026-07-11 | Logitech Keyboard K120 | Accessories   |
| Kavita     | 2026-07-10 | Logitech Webcam C270   | Accessories   |
| Vikash     | 2026-07-19 | Logitech Webcam C270   | Accessories   |
| Neha       | 2026-07-17 | Apple Magic Mouse      | Accessories   |
| Sneha      | 2026-07-12 | HP Wireless Mouse      | Accessories   |
| Kavita     | 2026-07-18 | HP Wireless Mouse      | Accessories   |
| Anand      | 2026-07-01 | HP Victus 15           | Laptop        |
| Kavita     | 2026-07-18 | HP Pavilion 14         | Laptop        |
| Vikash     | 2026-07-11 | HP Omen 16             | Laptop        |
| Priya      | 2026-07-03 | LG UltraGear 24        | Moniter       |
| Rahul      | 2026-07-21 | LG UltraGear 24        | Moniter       |
| Priya      | 2026-07-16 | Dell 24 Monitor        | Moniter       |
| Suresh     | 2026-07-09 | Acer Nitro Monitor     | Moniter       |
| Neha       | 2026-07-05 | Canon Pixma G3010      | Printer       |
| Sneha      | 2026-07-20 | Canon Pixma G3010      | Printer       |
| Deepak     | 2026-07-15 | Epson EcoTank L3250    | Printer       |
| Vikash     | 2026-07-19 | Canon Laser Printer    | Printer       |
| Rahul      | 2026-07-02 | Samsung Galaxy S25     | Smartphone    |
| Sneha      | 2026-07-20 | Samsung Galaxy S25     | Smartphone    |
| Priti      | 2026-07-08 | Samsung Galaxy A56     | Smartphone    |
| Suresh     | 2026-07-09 | Samsung Galaxy M36     | Smartphone    |
| Amit       | 2026-07-04 | Apple iPad Air         | Tablet        |
| Mohit      | 2026-07-13 | Lenovo Tab M11         | Tablet        |
| Anjali     | 2026-07-14 | Samsung Galaxy Tab S10 | Tablet        |
+------------+------------+------------------------+---------------+
27 rows in set (0.02 sec)

mysql> -- 5. Display Customer Name, Product Name, Brand, Category Name, Quantity.
mysql> select first_name, product_name, brand, category_name, quantity from customers INNER JOIN orders ON customers.customer_id = orders.customer_id INNER JOIN orderitems ON orders.order_id = orderitems.order_id INNER JOIN products ON orderitems.product_id = products.product_id INNER JOIN categories ON products.category_id = categories.category_id;
+------------+------------------------+---------------------+---------------+----------+
| first_name | product_name           | brand               | category_name | quantity |
+------------+------------------------+---------------------+---------------+----------+
| Rahul      | Logitech G102 Mouse    | Logitech            | Accessories   |        1 |
| Anand      | Logitech G102 Mouse    | Logitech            | Accessories   |        1 |
| Rahul      | Logitech G102 Mouse    | Logitech            | Accessories   |        1 |
| Vikash     | Logitech Keyboard K120 | Logitech            | Accessories   |        1 |
| Kavita     | Logitech Webcam C270   | sony                | Accessories   |        1 |
| Vikash     | Logitech Webcam C270   | sony                | Accessories   |        2 |
| Neha       | Apple Magic Mouse      | Apple               | Accessories   |        1 |
| Sneha      | HP Wireless Mouse      | HP                  | Accessories   |        1 |
| Kavita     | HP Wireless Mouse      | HP                  | Accessories   |        2 |
| Anand      | HP Victus 15           | HP                  | Laptop        |        1 |
| Kavita     | HP Pavilion 14         | HP                  | Laptop        |        1 |
| Vikash     | HP Omen 16             | HP                  | Laptop        |        1 |
| Priya      | LG UltraGear 24        | LG                  | Moniter       |        1 |
| Rahul      | LG UltraGear 24        | LG                  | Moniter       |        1 |
| Priya      | Dell 24 Monitor        | Dell                | Moniter       |        1 |
| Suresh     | Acer Nitro Monitor     | Acer                | Moniter       |        1 |
| Neha       | Canon Pixma G3010      | Canon               | Printer       |        1 |
| Sneha      | Canon Pixma G3010      | Canon               | Printer       |        1 |
| Deepak     | Epson EcoTank L3250    | Epson               | Printer       |        1 |
| Vikash     | Canon Laser Printer    | Canon               | Printer       |        1 |
| Rahul      | Samsung Galaxy S25     | Samsung Electronics | Smartphone    |        1 |
| Sneha      | Samsung Galaxy S25     | Samsung Electronics | Smartphone    |        1 |
| Priti      | Samsung Galaxy A56     | Samsung Electronics | Smartphone    |        1 |
| Suresh     | Samsung Galaxy M36     | Samsung             | Smartphone    |        1 |
| Amit       | Apple iPad Air         | Apple               | Tablet        |        1 |
| Mohit      | Lenovo Tab M11         | Lenovo              | Tablet        |        1 |
| Anjali     | Samsung Galaxy Tab S10 | Samsung Electronics | Tablet        |        1 |
+------------+------------------------+---------------------+---------------+----------+
27 rows in set (0.00 sec)

mysql> /* Business Questions */
mysql> -- 6. Display all Laptop products purchased by customers.
mysql> select first_name, product_name from customers INNER JOIN orders ON customers.customer_id = orders.customer_id INNER JOIN orderitems ON orders.order_id = orderitems.order_id INNER JOIN products ON orderitems.product_id = products.product_id INNER JOIN categories ON products.category_id = categories.category_id where category_name = 'Laptop';
+------------+----------------+
| first_name | product_name   |
+------------+----------------+
| Anand      | HP Victus 15   |
| Kavita     | HP Pavilion 14 |
| Vikash     | HP Omen 16     |
+------------+----------------+
3 rows in set (0.02 sec)

mysql> -- 7. Display all customers who purchased products from the Accessories category.
mysql> select first_name, product_name from customers INNER JOIN orders ON customers.customer_id = orders.customer_id INNER JOIN orderitems ON orders.order_id = orderitems.order_id INNER JOIN products ON orderitems.product_id = products.product_id INNER JOIN categories ON products.category_id = categories.category_id where category_name = 'Accessories';
+------------+------------------------+
| first_name | product_name           |
+------------+------------------------+
| Rahul      | Logitech G102 Mouse    |
| Anand      | Logitech G102 Mouse    |
| Rahul      | Logitech G102 Mouse    |
| Vikash     | Logitech Keyboard K120 |
| Kavita     | Logitech Webcam C270   |
| Vikash     | Logitech Webcam C270   |
| Neha       | Apple Magic Mouse      |
| Sneha      | HP Wireless Mouse      |
| Kavita     | HP Wireless Mouse      |
+------------+------------------------+
9 rows in set (0.00 sec)

mysql> -- 8. Display all Smartphone products purchased by Rahul.
mysql> select first_name, product_name from customers INNER JOIN orders ON customers.customer_id = orders.customer_id INNER JOIN orderitems ON orders.order_id = orderitems.order_id INNER JOIN products ON orderitems.product_id = products.product_id INNER JOIN categories ON products.category_id = categories.category_id where first_name = 'Rahul' and category_name = 'Samrtphone';
Empty set (0.00 sec)

mysql> select first_name, product_name from customers INNER JOIN orders ON customers.customer_id = orders.customer_id INNER JOIN orderitems ON orders.order_id = orderitems.order_id INNER JOIN products ON orderitems.product_id = products.product_id INNER JOIN categories ON products.category_id = categories.category_id where first_name = 'Rahul' and category_name = 'Smartphone';
+------------+--------------------+
| first_name | product_name       |
+------------+--------------------+
| Rahul      | Samsung Galaxy S25 |
+------------+--------------------+
1 row in set (0.02 sec)

mysql> -- 9. Display all products from the Printer category whose quantity purchased is greater than 1.
mysql> select product_name, quantity from orderitems INNER JOIN products ON orderitems.product_id = products.product_id INNER JOIN categories ON products.category_id = categories.category_id where category_name = 'Printer' and quantity > 1;
Empty set (0.00 sec)

mysql> -- 10. Display Customer Name, Product Name, Category Name, Brand, Quantity Only for Delivered orders.
mysql> select first_name, product_name, category_name, brand, quantity from customers INNER JOIN orders ON customers.customer_id = orders.customer_id INNER JOIN orderitems ON orderitems.order_id = orders.order_id INNER JOIN products ON orderitems.product_id = products.product_id INNER JOIN categories ON categories.category_id = products.category_id where status = 'Delivered';
+------------+------------------------+---------------+---------------------+----------+
| first_name | product_name           | category_name | brand               | quantity |
+------------+------------------------+---------------+---------------------+----------+
| Anand      | HP Victus 15           | Laptop        | HP                  |        1 |
| Priya      | LG UltraGear 24        | Moniter       | LG                  |        1 |
| Anand      | Logitech G102 Mouse    | Accessories   | Logitech            |        1 |
| Priti      | Samsung Galaxy A56     | Smartphone    | Samsung Electronics |        1 |
| Kavita     | Logitech Webcam C270   | Accessories   | sony                |        1 |
| Vikash     | HP Omen 16             | Laptop        | HP                  |        1 |
| Vikash     | Logitech Keyboard K120 | Accessories   | Logitech            |        1 |
| Sneha      | HP Wireless Mouse      | Accessories   | HP                  |        1 |
| Deepak     | Epson EcoTank L3250    | Printer       | Epson               |        1 |
| Neha       | Apple Magic Mouse      | Accessories   | Apple               |        1 |
| Kavita     | HP Pavilion 14         | Laptop        | HP                  |        1 |
| Kavita     | HP Wireless Mouse      | Accessories   | HP                  |        2 |
| Rahul      | Logitech G102 Mouse    | Accessories   | Logitech            |        1 |
| Rahul      | LG UltraGear 24        | Moniter       | LG                  |        1 |
+------------+------------------------+---------------+---------------------+----------+
14 rows in set (0.00 sec)

mysql> /* Final Challenge */
mysql> /* write one query that displays : */
mysql> /* Customer Name */
mysql> /* Product Name */
mysql> /* Brand */
mysql> /* Category Name */
mysql> /* Quantity */
mysql>
mysql> /* Answer Query */
mysql> select first_name, product_name, brand, category_name, quantity from customers INNER JOIN orders ON customers.customer_id = orders.customer_id INNER JOIN orderitems ON orders.order_id = orderitems.order_id INNER JOIN products ON orderitems.product_id = products.product_id INNER JOIN categories ON products.category_id = categories.category_id;
+------------+------------------------+---------------------+---------------+----------+
| first_name | product_name           | brand               | category_name | quantity |
+------------+------------------------+---------------------+---------------+----------+
| Rahul      | Logitech G102 Mouse    | Logitech            | Accessories   |        1 |
| Anand      | Logitech G102 Mouse    | Logitech            | Accessories   |        1 |
| Rahul      | Logitech G102 Mouse    | Logitech            | Accessories   |        1 |
| Vikash     | Logitech Keyboard K120 | Logitech            | Accessories   |        1 |
| Kavita     | Logitech Webcam C270   | sony                | Accessories   |        1 |
| Vikash     | Logitech Webcam C270   | sony                | Accessories   |        2 |
| Neha       | Apple Magic Mouse      | Apple               | Accessories   |        1 |
| Sneha      | HP Wireless Mouse      | HP                  | Accessories   |        1 |
| Kavita     | HP Wireless Mouse      | HP                  | Accessories   |        2 |
| Anand      | HP Victus 15           | HP                  | Laptop        |        1 |
| Kavita     | HP Pavilion 14         | HP                  | Laptop        |        1 |
| Vikash     | HP Omen 16             | HP                  | Laptop        |        1 |
| Priya      | LG UltraGear 24        | LG                  | Moniter       |        1 |
| Rahul      | LG UltraGear 24        | LG                  | Moniter       |        1 |
| Priya      | Dell 24 Monitor        | Dell                | Moniter       |        1 |
| Suresh     | Acer Nitro Monitor     | Acer                | Moniter       |        1 |
| Neha       | Canon Pixma G3010      | Canon               | Printer       |        1 |
| Sneha      | Canon Pixma G3010      | Canon               | Printer       |        1 |
| Deepak     | Epson EcoTank L3250    | Epson               | Printer       |        1 |
| Vikash     | Canon Laser Printer    | Canon               | Printer       |        1 |
| Rahul      | Samsung Galaxy S25     | Samsung Electronics | Smartphone    |        1 |
| Sneha      | Samsung Galaxy S25     | Samsung Electronics | Smartphone    |        1 |
| Priti      | Samsung Galaxy A56     | Samsung Electronics | Smartphone    |        1 |
| Suresh     | Samsung Galaxy M36     | Samsung             | Smartphone    |        1 |
| Amit       | Apple iPad Air         | Apple               | Tablet        |        1 |
| Mohit      | Lenovo Tab M11         | Lenovo              | Tablet        |        1 |
| Anjali     | Samsung Galaxy Tab S10 | Samsung Electronics | Tablet        |        1 |
+------------+------------------------+---------------------+---------------+----------+
27 rows in set (0.00 sec)
```