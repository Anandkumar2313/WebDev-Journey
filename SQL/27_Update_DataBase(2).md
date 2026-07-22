Updating Database

```
mysql> /* Updating Database to Learn Next Complex Queries. */
mysql>
mysql> /* Adding/Inserting into Customers */
mysql> insert into customers(first_name, last_name, email, mobile_number, city, created_at, gender) values
    -> ('Arjun', 'Mehta', 'arjun@gmail.com', '9876543224', 'Mumbai', '2026-08-20', 'Male'),
    -> ('Riya', 'Kapoor', 'riya@gmail.com', '9876543225', 'Delhi', '2026-08-21', 'Female'),
    -> ('Karan', 'Patel', 'karan@gmail.com', '9876543226', 'Ahmedabad', '2026-08-22', 'Male'),
    -> ('Simran', 'Kaur', 'simran@gmail.com', '9876543227', 'Chandigarh', '2026-08-23', 'Female');
Query OK, 4 rows affected (0.19 sec)
Records: 4  Duplicates: 0  Warnings: 0

mysql> /* Adding/Inserting into Categories */
mysql> insert into categories(category_name, description) values ('Gaming Console', 'Gaming devices and accessories');
Query OK, 1 row affected (0.03 sec)

mysql>
mysql> /* Adding/Inserting into Products */
mysql> insert into products(product_name, category_id, price, stock, brand) values
    -> ('Sony PlayStation 5', 7, 55000, 8, 'Sony'),
    -> ('Xbox Series X', 7, 52000, 6, 'Microsoft'),
    -> ('Nintendo Switch OLED', 7, 32000, 12, 'Nintendo'),
    -> ('Dell XP5 13', 1, 98000, 4, 'Dell'),
    -> ('HP EliteBook 840', 1, 88000, 5, 'HP');
Query OK, 5 rows affected (0.05 sec)
Records: 5  Duplicates: 0  Warnings: 0

mysql>
mysql> /* Adding/Inserting into Orders */
mysql> insert into orders(customer_id, order_date, total_amount, status) values
    -> (17, '2026-08-24', 98000, 'Delivered'),
    -> (17, '2026-08-25', 32000, 'Pending'),
    -> (18, '2026-08-25', 55000, 'Delivered');
Query OK, 3 rows affected (0.03 sec)
Records: 3  Duplicates: 0  Warnings: 0

mysql> /* Adding/Inserting into OrderItems */
mysql> insert into orderitems(order_id, product_id, quantity, item_price) values
    -> (21, 24, 1, 98000),
    -> (22, 23, 1, 32000),
    -> (23, 21, 1, 55000);
Query OK, 3 rows affected (0.05 sec)
Records: 3  Duplicates: 0  Warnings: 0

mysql> /* Adding/Inserting into Payments */
mysql> insert into payments(order_id, payment_date, payment_method, payment_status) values
    -> (21, '2026-08-24', 'Credit Card', 'Completed'),
    -> (23, '2026-08-25', 'UPI', 'Completed');
    -> (12, '2026-07-05', 'Cash', 'Completed', 'Store Payment'),
    -> (16, '2026-07-17', 'UPI', 'Completed', 'PhonePe'),
    -> (22, '2026-08-25', 'Net Banking', 'Pending', 'Awaiting Confirmation'),
    -> (7, '2026-07-08', 'Debit Card', 'Completed', 'Rupay');
Query OK, 6 rows affected (0.05 sec)
Records: 6  Duplicates: 0  Warnings: 0
```