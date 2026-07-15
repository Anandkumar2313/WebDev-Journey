INNER JOIN Part 3 (Joining 4 Tables)

```SQL
mysql> /* INNER JOIN Part 3 (Joining 4 Tables) */
mysql> /* Every ON clause defines one relationship. Since four tables have three relationships, SQL needs three ON clauses. */
mysql>
mysql> /* Example : */
mysql> select first_name, product_name from customers INNER JOIN orders ON customers.customer_id = orders.customer_id INNER JOIN orderitems ON orders.order_id = orderitems.order_id INNER JOIN products ON orderitems.product_id = products.product_id;
+------------+------------------------+
| first_name | product_name           |
+------------+------------------------+
| Anand      | HP Victus 15           |
| Anand      | Logitech G102 Mouse    |
| Rahul      | Samsung Galaxy S25     |
| Rahul      | Logitech G102 Mouse    |
| Rahul      | Logitech G102 Mouse    |
| Rahul      | LG UltraGear 24        |
| Priya      | LG UltraGear 24        |
| Priya      | Dell 24 Monitor        |
| Amit       | Apple iPad Air         |
| Neha       | Canon Pixma G3010      |
| Neha       | Apple Magic Mouse      |
| Priti      | Samsung Galaxy A56     |
| Suresh     | Samsung Galaxy M36     |
| Suresh     | Acer Nitro Monitor     |
| Kavita     | Logitech Webcam C270   |
| Kavita     | HP Pavilion 14         |
| Kavita     | HP Wireless Mouse      |
| Vikash     | HP Omen 16             |
| Vikash     | Logitech Keyboard K120 |
| Vikash     | Canon Laser Printer    |
| Vikash     | Logitech Webcam C270   |
| Sneha      | HP Wireless Mouse      |
| Sneha      | Samsung Galaxy S25     |
| Sneha      | Canon Pixma G3010      |
| Mohit      | Lenovo Tab M11         |
| Anjali     | Samsung Galaxy Tab S10 |
| Deepak     | Epson EcoTank L3250    |
+------------+------------------------+
27 rows in set (0.04 sec)

mysql> /* Practice Questions */
mysql> -- 1. Display Customer Name, Product Name.
mysql> select first_name, product_name from customers INNER JOIN orders ON customers.customer_id INNER JOIN orderitems ON orders.order_id = orderitems.order_id INNER JOIN products ON orderitems.product_id = products.product_id;
+------------+------------------------+
| first_name | product_name           |
+------------+------------------------+
| Deepak     | HP Victus 15           |
| Anjali     | HP Victus 15           |
| Mohit      | HP Victus 15           |
| Sneha      | HP Victus 15           |
| Vikash     | HP Victus 15           |
| Kavita     | HP Victus 15           |
| Suresh     | HP Victus 15           |
| Priti      | HP Victus 15           |
| Rohan      | HP Victus 15           |
| Neha       | HP Victus 15           |
| Amit       | HP Victus 15           |
| Priya      | HP Victus 15           |
| Rahul      | HP Victus 15           |
| Anand      | HP Victus 15           |
| Deepak     | Samsung Galaxy S25     |
| Anjali     | Samsung Galaxy S25     |
| Mohit      | Samsung Galaxy S25     |
| Sneha      | Samsung Galaxy S25     |
| Vikash     | Samsung Galaxy S25     |
| Kavita     | Samsung Galaxy S25     |
| Suresh     | Samsung Galaxy S25     |
| Priti      | Samsung Galaxy S25     |
| Rohan      | Samsung Galaxy S25     |
| Neha       | Samsung Galaxy S25     |
| Amit       | Samsung Galaxy S25     |
| Priya      | Samsung Galaxy S25     |
| Rahul      | Samsung Galaxy S25     |
| Anand      | Samsung Galaxy S25     |
| Deepak     | Logitech G102 Mouse    |
| Anjali     | Logitech G102 Mouse    |
| Mohit      | Logitech G102 Mouse    |
| Sneha      | Logitech G102 Mouse    |
| Vikash     | Logitech G102 Mouse    |
| Kavita     | Logitech G102 Mouse    |
| Suresh     | Logitech G102 Mouse    |
| Priti      | Logitech G102 Mouse    |
| Rohan      | Logitech G102 Mouse    |
| Neha       | Logitech G102 Mouse    |
| Amit       | Logitech G102 Mouse    |
| Priya      | Logitech G102 Mouse    |
| Rahul      | Logitech G102 Mouse    |
| Anand      | Logitech G102 Mouse    |
| Deepak     | LG UltraGear 24        |
| Anjali     | LG UltraGear 24        |
| Mohit      | LG UltraGear 24        |
| Sneha      | LG UltraGear 24        |
| Vikash     | LG UltraGear 24        |
| Kavita     | LG UltraGear 24        |
| Suresh     | LG UltraGear 24        |
| Priti      | LG UltraGear 24        |
| Rohan      | LG UltraGear 24        |
| Neha       | LG UltraGear 24        |
| Amit       | LG UltraGear 24        |
| Priya      | LG UltraGear 24        |
| Rahul      | LG UltraGear 24        |
| Anand      | LG UltraGear 24        |
| Deepak     | Apple iPad Air         |
| Anjali     | Apple iPad Air         |
| Mohit      | Apple iPad Air         |
| Sneha      | Apple iPad Air         |
| Vikash     | Apple iPad Air         |
| Kavita     | Apple iPad Air         |
| Suresh     | Apple iPad Air         |
| Priti      | Apple iPad Air         |
| Rohan      | Apple iPad Air         |
| Neha       | Apple iPad Air         |
| Amit       | Apple iPad Air         |
| Priya      | Apple iPad Air         |
| Rahul      | Apple iPad Air         |
| Anand      | Apple iPad Air         |
| Deepak     | Canon Pixma G3010      |
| Anjali     | Canon Pixma G3010      |
| Mohit      | Canon Pixma G3010      |
| Sneha      | Canon Pixma G3010      |
| Vikash     | Canon Pixma G3010      |
| Kavita     | Canon Pixma G3010      |
| Suresh     | Canon Pixma G3010      |
| Priti      | Canon Pixma G3010      |
| Rohan      | Canon Pixma G3010      |
| Neha       | Canon Pixma G3010      |
| Amit       | Canon Pixma G3010      |
| Priya      | Canon Pixma G3010      |
| Rahul      | Canon Pixma G3010      |
| Anand      | Canon Pixma G3010      |
| Deepak     | Logitech G102 Mouse    |
| Anjali     | Logitech G102 Mouse    |
| Mohit      | Logitech G102 Mouse    |
| Sneha      | Logitech G102 Mouse    |
| Vikash     | Logitech G102 Mouse    |
| Kavita     | Logitech G102 Mouse    |
| Suresh     | Logitech G102 Mouse    |
| Priti      | Logitech G102 Mouse    |
| Rohan      | Logitech G102 Mouse    |
| Neha       | Logitech G102 Mouse    |
| Amit       | Logitech G102 Mouse    |
| Priya      | Logitech G102 Mouse    |
| Rahul      | Logitech G102 Mouse    |
| Anand      | Logitech G102 Mouse    |
| Deepak     | Samsung Galaxy A56     |
| Anjali     | Samsung Galaxy A56     |
| Mohit      | Samsung Galaxy A56     |
| Sneha      | Samsung Galaxy A56     |
| Vikash     | Samsung Galaxy A56     |
| Kavita     | Samsung Galaxy A56     |
| Suresh     | Samsung Galaxy A56     |
| Priti      | Samsung Galaxy A56     |
| Rohan      | Samsung Galaxy A56     |
| Neha       | Samsung Galaxy A56     |
| Amit       | Samsung Galaxy A56     |
| Priya      | Samsung Galaxy A56     |
| Rahul      | Samsung Galaxy A56     |
| Anand      | Samsung Galaxy A56     |
| Deepak     | Samsung Galaxy M36     |
| Anjali     | Samsung Galaxy M36     |
| Mohit      | Samsung Galaxy M36     |
| Sneha      | Samsung Galaxy M36     |
| Vikash     | Samsung Galaxy M36     |
| Kavita     | Samsung Galaxy M36     |
| Suresh     | Samsung Galaxy M36     |
| Priti      | Samsung Galaxy M36     |
| Rohan      | Samsung Galaxy M36     |
| Neha       | Samsung Galaxy M36     |
| Amit       | Samsung Galaxy M36     |
| Priya      | Samsung Galaxy M36     |
| Rahul      | Samsung Galaxy M36     |
| Anand      | Samsung Galaxy M36     |
| Deepak     | Logitech Webcam C270   |
| Anjali     | Logitech Webcam C270   |
| Mohit      | Logitech Webcam C270   |
| Sneha      | Logitech Webcam C270   |
| Vikash     | Logitech Webcam C270   |
| Kavita     | Logitech Webcam C270   |
| Suresh     | Logitech Webcam C270   |
| Priti      | Logitech Webcam C270   |
| Rohan      | Logitech Webcam C270   |
| Neha       | Logitech Webcam C270   |
| Amit       | Logitech Webcam C270   |
| Priya      | Logitech Webcam C270   |
| Rahul      | Logitech Webcam C270   |
| Anand      | Logitech Webcam C270   |
| Deepak     | HP Omen 16             |
| Anjali     | HP Omen 16             |
| Mohit      | HP Omen 16             |
| Sneha      | HP Omen 16             |
| Vikash     | HP Omen 16             |
| Kavita     | HP Omen 16             |
| Suresh     | HP Omen 16             |
| Priti      | HP Omen 16             |
| Rohan      | HP Omen 16             |
| Neha       | HP Omen 16             |
| Amit       | HP Omen 16             |
| Priya      | HP Omen 16             |
| Rahul      | HP Omen 16             |
| Anand      | HP Omen 16             |
| Deepak     | HP Wireless Mouse      |
| Anjali     | HP Wireless Mouse      |
| Mohit      | HP Wireless Mouse      |
| Sneha      | HP Wireless Mouse      |
| Vikash     | HP Wireless Mouse      |
| Kavita     | HP Wireless Mouse      |
| Suresh     | HP Wireless Mouse      |
| Priti      | HP Wireless Mouse      |
| Rohan      | HP Wireless Mouse      |
| Neha       | HP Wireless Mouse      |
| Amit       | HP Wireless Mouse      |
| Priya      | HP Wireless Mouse      |
| Rahul      | HP Wireless Mouse      |
| Anand      | HP Wireless Mouse      |
| Deepak     | Lenovo Tab M11         |
| Anjali     | Lenovo Tab M11         |
| Mohit      | Lenovo Tab M11         |
| Sneha      | Lenovo Tab M11         |
| Vikash     | Lenovo Tab M11         |
| Kavita     | Lenovo Tab M11         |
| Suresh     | Lenovo Tab M11         |
| Priti      | Lenovo Tab M11         |
| Rohan      | Lenovo Tab M11         |
| Neha       | Lenovo Tab M11         |
| Amit       | Lenovo Tab M11         |
| Priya      | Lenovo Tab M11         |
| Rahul      | Lenovo Tab M11         |
| Anand      | Lenovo Tab M11         |
| Deepak     | Samsung Galaxy Tab S10 |
| Anjali     | Samsung Galaxy Tab S10 |
| Mohit      | Samsung Galaxy Tab S10 |
| Sneha      | Samsung Galaxy Tab S10 |
| Vikash     | Samsung Galaxy Tab S10 |
| Kavita     | Samsung Galaxy Tab S10 |
| Suresh     | Samsung Galaxy Tab S10 |
| Priti      | Samsung Galaxy Tab S10 |
| Rohan      | Samsung Galaxy Tab S10 |
| Neha       | Samsung Galaxy Tab S10 |
| Amit       | Samsung Galaxy Tab S10 |
| Priya      | Samsung Galaxy Tab S10 |
| Rahul      | Samsung Galaxy Tab S10 |
| Anand      | Samsung Galaxy Tab S10 |
| Deepak     | Epson EcoTank L3250    |
| Anjali     | Epson EcoTank L3250    |
| Mohit      | Epson EcoTank L3250    |
| Sneha      | Epson EcoTank L3250    |
| Vikash     | Epson EcoTank L3250    |
| Kavita     | Epson EcoTank L3250    |
| Suresh     | Epson EcoTank L3250    |
| Priti      | Epson EcoTank L3250    |
| Rohan      | Epson EcoTank L3250    |
| Neha       | Epson EcoTank L3250    |
| Amit       | Epson EcoTank L3250    |
| Priya      | Epson EcoTank L3250    |
| Rahul      | Epson EcoTank L3250    |
| Anand      | Epson EcoTank L3250    |
| Deepak     | Dell 24 Monitor        |
| Anjali     | Dell 24 Monitor        |
| Mohit      | Dell 24 Monitor        |
| Sneha      | Dell 24 Monitor        |
| Vikash     | Dell 24 Monitor        |
| Kavita     | Dell 24 Monitor        |
| Suresh     | Dell 24 Monitor        |
| Priti      | Dell 24 Monitor        |
| Rohan      | Dell 24 Monitor        |
| Neha       | Dell 24 Monitor        |
| Amit       | Dell 24 Monitor        |
| Priya      | Dell 24 Monitor        |
| Rahul      | Dell 24 Monitor        |
| Anand      | Dell 24 Monitor        |
| Deepak     | Apple Magic Mouse      |
| Anjali     | Apple Magic Mouse      |
| Mohit      | Apple Magic Mouse      |
| Sneha      | Apple Magic Mouse      |
| Vikash     | Apple Magic Mouse      |
| Kavita     | Apple Magic Mouse      |
| Suresh     | Apple Magic Mouse      |
| Priti      | Apple Magic Mouse      |
| Rohan      | Apple Magic Mouse      |
| Neha       | Apple Magic Mouse      |
| Amit       | Apple Magic Mouse      |
| Priya      | Apple Magic Mouse      |
| Rahul      | Apple Magic Mouse      |
| Anand      | Apple Magic Mouse      |
| Deepak     | HP Pavilion 14         |
| Anjali     | HP Pavilion 14         |
| Mohit      | HP Pavilion 14         |
| Sneha      | HP Pavilion 14         |
| Vikash     | HP Pavilion 14         |
| Kavita     | HP Pavilion 14         |
| Suresh     | HP Pavilion 14         |
| Priti      | HP Pavilion 14         |
| Rohan      | HP Pavilion 14         |
| Neha       | HP Pavilion 14         |
| Amit       | HP Pavilion 14         |
| Priya      | HP Pavilion 14         |
| Rahul      | HP Pavilion 14         |
| Anand      | HP Pavilion 14         |
| Deepak     | Canon Laser Printer    |
| Anjali     | Canon Laser Printer    |
| Mohit      | Canon Laser Printer    |
| Sneha      | Canon Laser Printer    |
| Vikash     | Canon Laser Printer    |
| Kavita     | Canon Laser Printer    |
| Suresh     | Canon Laser Printer    |
| Priti      | Canon Laser Printer    |
| Rohan      | Canon Laser Printer    |
| Neha       | Canon Laser Printer    |
| Amit       | Canon Laser Printer    |
| Priya      | Canon Laser Printer    |
| Rahul      | Canon Laser Printer    |
| Anand      | Canon Laser Printer    |
| Deepak     | Samsung Galaxy S25     |
| Anjali     | Samsung Galaxy S25     |
| Mohit      | Samsung Galaxy S25     |
| Sneha      | Samsung Galaxy S25     |
| Vikash     | Samsung Galaxy S25     |
| Kavita     | Samsung Galaxy S25     |
| Suresh     | Samsung Galaxy S25     |
| Priti      | Samsung Galaxy S25     |
| Rohan      | Samsung Galaxy S25     |
| Neha       | Samsung Galaxy S25     |
| Amit       | Samsung Galaxy S25     |
| Priya      | Samsung Galaxy S25     |
| Rahul      | Samsung Galaxy S25     |
| Anand      | Samsung Galaxy S25     |
| Deepak     | Logitech G102 Mouse    |
| Anjali     | Logitech G102 Mouse    |
| Mohit      | Logitech G102 Mouse    |
| Sneha      | Logitech G102 Mouse    |
| Vikash     | Logitech G102 Mouse    |
| Kavita     | Logitech G102 Mouse    |
| Suresh     | Logitech G102 Mouse    |
| Priti      | Logitech G102 Mouse    |
| Rohan      | Logitech G102 Mouse    |
| Neha       | Logitech G102 Mouse    |
| Amit       | Logitech G102 Mouse    |
| Priya      | Logitech G102 Mouse    |
| Rahul      | Logitech G102 Mouse    |
| Anand      | Logitech G102 Mouse    |
| Deepak     | HP Wireless Mouse      |
| Anjali     | HP Wireless Mouse      |
| Mohit      | HP Wireless Mouse      |
| Sneha      | HP Wireless Mouse      |
| Vikash     | HP Wireless Mouse      |
| Kavita     | HP Wireless Mouse      |
| Suresh     | HP Wireless Mouse      |
| Priti      | HP Wireless Mouse      |
| Rohan      | HP Wireless Mouse      |
| Neha       | HP Wireless Mouse      |
| Amit       | HP Wireless Mouse      |
| Priya      | HP Wireless Mouse      |
| Rahul      | HP Wireless Mouse      |
| Anand      | HP Wireless Mouse      |
| Deepak     | Logitech Webcam C270   |
| Anjali     | Logitech Webcam C270   |
| Mohit      | Logitech Webcam C270   |
| Sneha      | Logitech Webcam C270   |
| Vikash     | Logitech Webcam C270   |
| Kavita     | Logitech Webcam C270   |
| Suresh     | Logitech Webcam C270   |
| Priti      | Logitech Webcam C270   |
| Rohan      | Logitech Webcam C270   |
| Neha       | Logitech Webcam C270   |
| Amit       | Logitech Webcam C270   |
| Priya      | Logitech Webcam C270   |
| Rahul      | Logitech Webcam C270   |
| Anand      | Logitech Webcam C270   |
| Deepak     | Canon Pixma G3010      |
| Anjali     | Canon Pixma G3010      |
| Mohit      | Canon Pixma G3010      |
| Sneha      | Canon Pixma G3010      |
| Vikash     | Canon Pixma G3010      |
| Kavita     | Canon Pixma G3010      |
| Suresh     | Canon Pixma G3010      |
| Priti      | Canon Pixma G3010      |
| Rohan      | Canon Pixma G3010      |
| Neha       | Canon Pixma G3010      |
| Amit       | Canon Pixma G3010      |
| Priya      | Canon Pixma G3010      |
| Rahul      | Canon Pixma G3010      |
| Anand      | Canon Pixma G3010      |
| Deepak     | LG UltraGear 24        |
| Anjali     | LG UltraGear 24        |
| Mohit      | LG UltraGear 24        |
| Sneha      | LG UltraGear 24        |
| Vikash     | LG UltraGear 24        |
| Kavita     | LG UltraGear 24        |
| Suresh     | LG UltraGear 24        |
| Priti      | LG UltraGear 24        |
| Rohan      | LG UltraGear 24        |
| Neha       | LG UltraGear 24        |
| Amit       | LG UltraGear 24        |
| Priya      | LG UltraGear 24        |
| Rahul      | LG UltraGear 24        |
| Anand      | LG UltraGear 24        |
| Deepak     | Logitech Keyboard K120 |
| Anjali     | Logitech Keyboard K120 |
| Mohit      | Logitech Keyboard K120 |
| Sneha      | Logitech Keyboard K120 |
| Vikash     | Logitech Keyboard K120 |
| Kavita     | Logitech Keyboard K120 |
| Suresh     | Logitech Keyboard K120 |
| Priti      | Logitech Keyboard K120 |
| Rohan      | Logitech Keyboard K120 |
| Neha       | Logitech Keyboard K120 |
| Amit       | Logitech Keyboard K120 |
| Priya      | Logitech Keyboard K120 |
| Rahul      | Logitech Keyboard K120 |
| Anand      | Logitech Keyboard K120 |
| Deepak     | Acer Nitro Monitor     |
| Anjali     | Acer Nitro Monitor     |
| Mohit      | Acer Nitro Monitor     |
| Sneha      | Acer Nitro Monitor     |
| Vikash     | Acer Nitro Monitor     |
| Kavita     | Acer Nitro Monitor     |
| Suresh     | Acer Nitro Monitor     |
| Priti      | Acer Nitro Monitor     |
| Rohan      | Acer Nitro Monitor     |
| Neha       | Acer Nitro Monitor     |
| Amit       | Acer Nitro Monitor     |
| Priya      | Acer Nitro Monitor     |
| Rahul      | Acer Nitro Monitor     |
| Anand      | Acer Nitro Monitor     |
+------------+------------------------+
378 rows in set (0.03 sec)

mysql> select first_name, product_name from customers INNER JOIN orders ON customers.customer_id = orders.customer_id INNER JOIN orderitems ON orders.order_id = orderitems.order_id INNER JOIN products ON orderitems.product_id = products.product_id;
+------------+------------------------+
| first_name | product_name           |
+------------+------------------------+
| Anand      | HP Victus 15           |
| Anand      | Logitech G102 Mouse    |
| Rahul      | Samsung Galaxy S25     |
| Rahul      | Logitech G102 Mouse    |
| Rahul      | Logitech G102 Mouse    |
| Rahul      | LG UltraGear 24        |
| Priya      | LG UltraGear 24        |
| Priya      | Dell 24 Monitor        |
| Amit       | Apple iPad Air         |
| Neha       | Canon Pixma G3010      |
| Neha       | Apple Magic Mouse      |
| Priti      | Samsung Galaxy A56     |
| Suresh     | Samsung Galaxy M36     |
| Suresh     | Acer Nitro Monitor     |
| Kavita     | Logitech Webcam C270   |
| Kavita     | HP Pavilion 14         |
| Kavita     | HP Wireless Mouse      |
| Vikash     | HP Omen 16             |
| Vikash     | Logitech Keyboard K120 |
| Vikash     | Canon Laser Printer    |
| Vikash     | Logitech Webcam C270   |
| Sneha      | HP Wireless Mouse      |
| Sneha      | Samsung Galaxy S25     |
| Sneha      | Canon Pixma G3010      |
| Mohit      | Lenovo Tab M11         |
| Anjali     | Samsung Galaxy Tab S10 |
| Deepak     | Epson EcoTank L3250    |
+------------+------------------------+
27 rows in set (0.00 sec)

mysql> -- 2. Display customer name, brand.
mysql> select first_name, brand from customers INNER JOIN orders ON customers.customer_id = orders.customer_id INNER JOIN orderitems ON orders.order_id = orderitems.order_id INNER JOIN products ON orderitems.product_id = products.product_id;
+------------+---------------------+
| first_name | brand               |
+------------+---------------------+
| Anand      | HP                  |
| Anand      | Logitech            |
| Rahul      | Samsung Electronics |
| Rahul      | Logitech            |
| Rahul      | Logitech            |
| Rahul      | LG                  |
| Priya      | LG                  |
| Priya      | Dell                |
| Amit       | Apple               |
| Neha       | Canon               |
| Neha       | Apple               |
| Priti      | Samsung Electronics |
| Suresh     | Samsung             |
| Suresh     | Acer                |
| Kavita     | sony                |
| Kavita     | HP                  |
| Kavita     | HP                  |
| Vikash     | HP                  |
| Vikash     | Logitech            |
| Vikash     | Canon               |
| Vikash     | sony                |
| Sneha      | HP                  |
| Sneha      | Samsung Electronics |
| Sneha      | Canon               |
| Mohit      | Lenovo              |
| Anjali     | Samsung Electronics |
| Deepak     | Epson               |
+------------+---------------------+
27 rows in set (0.00 sec)

mysql> -- 3. Display customer name, product name, quantity.
mysql> select first_name, product_name, quantity from customers INNER JOIN orders ON customers.customer_id = orders.customer_id INNER JOIN orderitems ON orders.order_id = orderitems.order_id INNER JOIN products ON orderitems.product_id = products.product_id;
+------------+------------------------+----------+
| first_name | product_name           | quantity |
+------------+------------------------+----------+
| Anand      | HP Victus 15           |        1 |
| Anand      | Logitech G102 Mouse    |        1 |
| Rahul      | Samsung Galaxy S25     |        1 |
| Rahul      | Logitech G102 Mouse    |        1 |
| Rahul      | Logitech G102 Mouse    |        1 |
| Rahul      | LG UltraGear 24        |        1 |
| Priya      | LG UltraGear 24        |        1 |
| Priya      | Dell 24 Monitor        |        1 |
| Amit       | Apple iPad Air         |        1 |
| Neha       | Canon Pixma G3010      |        1 |
| Neha       | Apple Magic Mouse      |        1 |
| Priti      | Samsung Galaxy A56     |        1 |
| Suresh     | Samsung Galaxy M36     |        1 |
| Suresh     | Acer Nitro Monitor     |        1 |
| Kavita     | Logitech Webcam C270   |        1 |
| Kavita     | HP Pavilion 14         |        1 |
| Kavita     | HP Wireless Mouse      |        2 |
| Vikash     | HP Omen 16             |        1 |
| Vikash     | Logitech Keyboard K120 |        1 |
| Vikash     | Canon Laser Printer    |        1 |
| Vikash     | Logitech Webcam C270   |        2 |
| Sneha      | HP Wireless Mouse      |        1 |
| Sneha      | Samsung Galaxy S25     |        1 |
| Sneha      | Canon Pixma G3010      |        1 |
| Mohit      | Lenovo Tab M11         |        1 |
| Anjali     | Samsung Galaxy Tab S10 |        1 |
| Deepak     | Epson EcoTank L3250    |        1 |
+------------+------------------------+----------+
27 rows in set (0.00 sec)

mysql> -- 4. Display Customer Name, Product Name, Order Date.
mysql> select first_name, product_name, order_date from customers INNER JOIN orders ON customers.customer_id = orders.customer_id INNER JOIN orderitems ON orders.order_id = orderitems.order_id INNER JOIN products ON orderitems.product_id = products.product_id;
+------------+------------------------+------------+
| first_name | product_name           | order_date |
+------------+------------------------+------------+
| Anand      | HP Victus 15           | 2026-07-01 |
| Rahul      | Samsung Galaxy S25     | 2026-07-02 |
| Rahul      | Logitech G102 Mouse    | 2026-07-02 |
| Priya      | LG UltraGear 24        | 2026-07-03 |
| Amit       | Apple iPad Air         | 2026-07-04 |
| Neha       | Canon Pixma G3010      | 2026-07-05 |
| Anand      | Logitech G102 Mouse    | 2026-07-06 |
| Priti      | Samsung Galaxy A56     | 2026-07-08 |
| Suresh     | Samsung Galaxy M36     | 2026-07-09 |
| Suresh     | Acer Nitro Monitor     | 2026-07-09 |
| Kavita     | Logitech Webcam C270   | 2026-07-10 |
| Vikash     | HP Omen 16             | 2026-07-11 |
| Vikash     | Logitech Keyboard K120 | 2026-07-11 |
| Sneha      | HP Wireless Mouse      | 2026-07-12 |
| Mohit      | Lenovo Tab M11         | 2026-07-13 |
| Anjali     | Samsung Galaxy Tab S10 | 2026-07-14 |
| Deepak     | Epson EcoTank L3250    | 2026-07-15 |
| Priya      | Dell 24 Monitor        | 2026-07-16 |
| Neha       | Apple Magic Mouse      | 2026-07-17 |
| Kavita     | HP Pavilion 14         | 2026-07-18 |
| Kavita     | HP Wireless Mouse      | 2026-07-18 |
| Vikash     | Canon Laser Printer    | 2026-07-19 |
| Vikash     | Logitech Webcam C270   | 2026-07-19 |
| Sneha      | Samsung Galaxy S25     | 2026-07-20 |
| Sneha      | Canon Pixma G3010      | 2026-07-20 |
| Rahul      | Logitech G102 Mouse    | 2026-07-21 |
| Rahul      | LG UltraGear 24        | 2026-07-21 |
+------------+------------------------+------------+
27 rows in set (0.02 sec)

mysql> -- 5. Display customer name,product name, total amount.
mysql> select first_name, product_name, total_amount from customers INNER JOIN orders ON customers.customer_id = orders.customer_id INNER JOIN orderitems ON orders.order_id = orderitems.order_id INNER JOIN products ON orderitems.product_id = products.product_id;
+------------+------------------------+--------------+
| first_name | product_name           | total_amount |
+------------+------------------------+--------------+
| Anand      | HP Victus 15           |     65000.00 |
| Rahul      | Samsung Galaxy S25     |     72900.00 |
| Rahul      | Logitech G102 Mouse    |     72900.00 |
| Priya      | LG UltraGear 24        |     12000.00 |
| Amit       | Apple iPad Air         |     56000.00 |
| Neha       | Canon Pixma G3010      |     15000.00 |
| Anand      | Logitech G102 Mouse    |       900.00 |
| Priti      | Samsung Galaxy A56     |     35000.00 |
| Suresh     | Samsung Galaxy M36     |     18000.00 |
| Suresh     | Acer Nitro Monitor     |     18000.00 |
| Kavita     | Logitech Webcam C270   |      2500.00 |
| Vikash     | HP Omen 16             |     25000.00 |
| Vikash     | Logitech Keyboard K120 |     25000.00 |
| Sneha      | HP Wireless Mouse      |       900.00 |
| Mohit      | Lenovo Tab M11         |     22000.00 |
| Anjali     | Samsung Galaxy Tab S10 |     56000.00 |
| Deepak     | Epson EcoTank L3250    |     15000.00 |
| Priya      | Dell 24 Monitor        |     12000.00 |
| Neha       | Apple Magic Mouse      |      9000.00 |
| Kavita     | HP Pavilion 14         |     65000.00 |
| Kavita     | HP Wireless Mouse      |     65000.00 |
| Vikash     | Canon Laser Printer    |     15000.00 |
| Vikash     | Logitech Webcam C270   |     15000.00 |
| Sneha      | Samsung Galaxy S25     |     72000.00 |
| Sneha      | Canon Pixma G3010      |     72000.00 |
| Rahul      | Logitech G102 Mouse    |       900.00 |
| Rahul      | LG UltraGear 24        |       900.00 |
+------------+------------------------+--------------+
27 rows in set (0.02 sec)

mysql> /* Business Questions */
mysql> -- 6. Display all products purchased by Rahul.
mysql> select first_name, product_name from customers INNER JOIN orders ON customers.customer_id = orders.customer_id INNER JOIN orderitems ON orders.order_id = orderitems.order_id INNER JOIN products ON orderitems.product_id = products.product_id;
+------------+------------------------+
| first_name | product_name           |
+------------+------------------------+
| Anand      | HP Victus 15           |
| Anand      | Logitech G102 Mouse    |
| Rahul      | Samsung Galaxy S25     |
| Rahul      | Logitech G102 Mouse    |
| Rahul      | Logitech G102 Mouse    |
| Rahul      | LG UltraGear 24        |
| Priya      | LG UltraGear 24        |
| Priya      | Dell 24 Monitor        |
| Amit       | Apple iPad Air         |
| Neha       | Canon Pixma G3010      |
| Neha       | Apple Magic Mouse      |
| Priti      | Samsung Galaxy A56     |
| Suresh     | Samsung Galaxy M36     |
| Suresh     | Acer Nitro Monitor     |
| Kavita     | Logitech Webcam C270   |
| Kavita     | HP Pavilion 14         |
| Kavita     | HP Wireless Mouse      |
| Vikash     | HP Omen 16             |
| Vikash     | Logitech Keyboard K120 |
| Vikash     | Canon Laser Printer    |
| Vikash     | Logitech Webcam C270   |
| Sneha      | HP Wireless Mouse      |
| Sneha      | Samsung Galaxy S25     |
| Sneha      | Canon Pixma G3010      |
| Mohit      | Lenovo Tab M11         |
| Anjali     | Samsung Galaxy Tab S10 |
| Deepak     | Epson EcoTank L3250    |
+------------+------------------------+
27 rows in set (0.00 sec)

mysql> select first_name, product_name from customers INNER JOIN orders ON customers.customer_id = orders.customer_id INNER JOIN orderitems ON orders.order_id = orderitems.order_id INNER JOIN products ON orderitems.product_id = products.product_id where first_name = 'Rahul';
+------------+---------------------+
| first_name | product_name        |
+------------+---------------------+
| Rahul      | Samsung Galaxy S25  |
| Rahul      | Logitech G102 Mouse |
| Rahul      | Logitech G102 Mouse |
| Rahul      | LG UltraGear 24     |
+------------+---------------------+
4 rows in set (0.00 sec)

mysql> -- 7. Display all customers who purchased Samsung Galaxy S25.
mysql> select first_name, product_name from customers INNER JOIN orders ON customers.customer_id = orders.customer_id INNER JOIN orderitems ON orders.order_id = orderitems.order_id INNER JOIN products ON orderitems.product_id = products.product_id where product_name = 'Samsung Galaxy S25';
+------------+--------------------+
| first_name | product_name       |
+------------+--------------------+
| Rahul      | Samsung Galaxy S25 |
| Sneha      | Samsung Galaxy S25 |
+------------+--------------------+
2 rows in set (0.00 sec)

mysql> -- Display all HP products purchased by customers.
mysql> select first_name, product_name from customers INNER JOIN orders ON customers.customer_id = orders.customer_id INNER JOIN orderitems ON orders.order_id = orderitems.order_id INNER JOIN products ON products.product_id = orderitems.product_id where brand = 'HP';
+------------+-------------------+
| first_name | product_name      |
+------------+-------------------+
| Anand      | HP Victus 15      |
| Kavita     | HP Pavilion 14    |
| Vikash     | HP Omen 16        |
| Sneha      | HP Wireless Mouse |
| Kavita     | HP Wireless Mouse |
+------------+-------------------+
5 rows in set (0.02 sec)

mysql> -- 9. Display all products whose quantity purchased is greater than 1.
mysql> select product_name, quantity from products INNER JOIN orderitems ON products.product_id = orderitems.product_id where quantity > 1;
+----------------------+----------+
| product_name         | quantity |
+----------------------+----------+
| HP Wireless Mouse    |        2 |
| Logitech Webcam C270 |        2 |
+----------------------+----------+
2 rows in set (0.00 sec)

mysql> -- 10. Display Customer Name, Product Name, Brand, Quantity only for delivered orders.
mysql> select first_name, product_name, brand, quantity from customers INNER JOIN orders ON customers.customer_id = orders.customer_id INNER JOIN orderitems ON orders.order_id = orderitems.order_id INNER JOIN products ON orderitems.product_id = products.product_id where status = 'Delivered';
+------------+------------------------+---------------------+----------+
| first_name | product_name           | brand               | quantity |
+------------+------------------------+---------------------+----------+
| Anand      | HP Victus 15           | HP                  |        1 |
| Priya      | LG UltraGear 24        | LG                  |        1 |
| Anand      | Logitech G102 Mouse    | Logitech            |        1 |
| Priti      | Samsung Galaxy A56     | Samsung Electronics |        1 |
| Kavita     | Logitech Webcam C270   | sony                |        1 |
| Vikash     | HP Omen 16             | HP                  |        1 |
| Vikash     | Logitech Keyboard K120 | Logitech            |        1 |
| Sneha      | HP Wireless Mouse      | HP                  |        1 |
| Deepak     | Epson EcoTank L3250    | Epson               |        1 |
| Neha       | Apple Magic Mouse      | Apple               |        1 |
| Kavita     | HP Pavilion 14         | HP                  |        1 |
| Kavita     | HP Wireless Mouse      | HP                  |        2 |
| Rahul      | Logitech G102 Mouse    | Logitech            |        1 |
| Rahul      | LG UltraGear 24        | LG                  |        1 |
+------------+------------------------+---------------------+----------+
14 rows in set (0.02 sec)

mysql> /* Final Challenge */
mysql> /* Display customer name, product name, brand, quantity */
mysql> select first_name, product_name, brand, quantity from customers INNER JOIN orders ON customers.customer_id = orders.customer_id INNER JOIN orderitems ON orders.order_id = orderitems.order_id INNER JOIN products ON orderitems.product_id = products.product_id;
+------------+------------------------+---------------------+----------+
| first_name | product_name           | brand               | quantity |
+------------+------------------------+---------------------+----------+
| Anand      | HP Victus 15           | HP                  |        1 |
| Anand      | Logitech G102 Mouse    | Logitech            |        1 |
| Rahul      | Samsung Galaxy S25     | Samsung Electronics |        1 |
| Rahul      | Logitech G102 Mouse    | Logitech            |        1 |
| Rahul      | Logitech G102 Mouse    | Logitech            |        1 |
| Rahul      | LG UltraGear 24        | LG                  |        1 |
| Priya      | LG UltraGear 24        | LG                  |        1 |
| Priya      | Dell 24 Monitor        | Dell                |        1 |
| Amit       | Apple iPad Air         | Apple               |        1 |
| Neha       | Canon Pixma G3010      | Canon               |        1 |
| Neha       | Apple Magic Mouse      | Apple               |        1 |
| Priti      | Samsung Galaxy A56     | Samsung Electronics |        1 |
| Suresh     | Samsung Galaxy M36     | Samsung             |        1 |
| Suresh     | Acer Nitro Monitor     | Acer                |        1 |
| Kavita     | Logitech Webcam C270   | sony                |        1 |
| Kavita     | HP Pavilion 14         | HP                  |        1 |
| Kavita     | HP Wireless Mouse      | HP                  |        2 |
| Vikash     | HP Omen 16             | HP                  |        1 |
| Vikash     | Logitech Keyboard K120 | Logitech            |        1 |
| Vikash     | Canon Laser Printer    | Canon               |        1 |
| Vikash     | Logitech Webcam C270   | sony                |        2 |
| Sneha      | HP Wireless Mouse      | HP                  |        1 |
| Sneha      | Samsung Galaxy S25     | Samsung Electronics |        1 |
| Sneha      | Canon Pixma G3010      | Canon               |        1 |
| Mohit      | Lenovo Tab M11         | Lenovo              |        1 |
| Anjali     | Samsung Galaxy Tab S10 | Samsung Electronics |        1 |
| Deepak     | Epson EcoTank L3250    | Epson               |        1 |
+------------+------------------------+---------------------+----------+
27 rows in set (0.02 sec)
```