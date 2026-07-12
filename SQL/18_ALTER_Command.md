ALTER TABLE

```SQL
mysql> /* ALTER TABLE */
mysql> /* ALTER TABLE changes table structure, not data. */
mysql> /* UPDATE : Changes DATA inside Rows */
mysql> /* ALTER TABLE : Changes the structure of the table */
mysql>
mysql> /* By the help of ALTER TABLE, We can : */
mysql> -- 1. ADD COLUMN
mysql> -- 2. DROP COLUMN
mysql> -- 3. MODIFY COLUMN
mysql> -- 4. RENAME COLUMN
mysql> -- 5. ADD CONSTRAINTs
mysql>
mysql> -- 1. ADD COLUMN :
mysql> /* SYNTAX : ALTER TABLE table_name ADD column_name datatype; */
mysql>
mysql> -- 2. DROP COLUMN :
mysql> /* SYNTAX : ALTER TABLE table_name DROP COLUMN column_name; */
mysql>
mysql> -- 3. MODIFY COLUMN :
mysql> /* SYNTAX : ALTER TABLE table_name MODIFY column_name datatype; */
mysql> /* MODIFY COLUMN changes the definition of an existing column (such as its data type or constraints). */
mysql>
mysql> -- 4. RENAME COLUMN :
mysql> /* SYNTAX : ALTER TABLE table_name RENAME COLUMN old_column_name to new_column_name */
mysql>
mysql> -- 5. ADD CONSTRAINTS :
mysql> /* SYNTAX : ALTER TABLE table_name ADD CONSTRAINT(column_name); */
mysql>
mysql> /* Practice Questions */
mysql> /* Level 1: Basic ALTER */
mysql> -- 1. Add a column gender VARCHAR(10) to customers.
mysql> alter table customers add gender varchar(10);
Query OK, 0 rows affected (0.20 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> select * from customers;
+-------------+------------+-----------+------------------+------------+-----------+------------+--------+
| customer_id | first_name | last_name | email            | phone      | city      | created_at | gender |
+-------------+------------+-----------+------------------+------------+-----------+------------+--------+
|           1 | Anand      | Kumar     | anand@gmail.com  | 9876543210 | Banglore  | 2026-01-10 | NULL   |
|           2 | Rahul      | Singh     | rahul@gmail.com  | 9876543211 | Delhi     | 2026-02-15 | NULL   |
|           3 | Priya      | Sharma    | priya@gmail.com  | 9876543212 | Kolkata   | 2026-03-12 | NULL   |
|           4 | Amit       | verma     | amit@gmail.com   | 9876543213 | Lucknow   | 2026-04-08 | NULL   |
|           5 | Neha       | gupta     | neha@gmail.com   | 9876543214 | Kolkata   | 2026-05-21 | NULL   |
|           6 | Rohan      | Das       | rohan@gmail.com  | 9998887776 | hyderabad | 2026-06-01 | NULL   |
|           7 | Priti      | kumari    | priti@gmail.com  | 9876543216 | Ranchi    | 2026-07-23 | NULL   |
|           8 | Suresh     | Yadav     | suresh@gmail.com | 9876543217 | Delhi     | 2026-08-01 | NULL   |
|           9 | Kavita     | Mishra    | kavita@gmail.com | 9876543218 | Kolkata   | 2026-08-05 | NULL   |
|          10 | Vikash     | Roy       | vikash@gmail.com | 9876543219 | Ranchi    | 2026-08-08 | NULL   |
|          11 | Sneha      | Jain      | Sneha@gmail.com  | 9876543220 | Kolkata   | 2026-08-10 | NULL   |
|          12 | Mohit      | Sharma    | mohit@gmail.com  | 9876543221 | Delhi     | 2026-08-12 | NULL   |
|          13 | Anjali     | Sinha     | anjali@gmail.com | 9876543222 | Pune      | 2026-08-15 | NULL   |
|          14 | Deepak     | Gupta     | deepak@gmail.com | 9876543223 | Ranchi    | 2026-08-18 | NULL   |
+-------------+------------+-----------+------------------+------------+-----------+------------+--------+
14 rows in set (0.00 sec)

mysql> -- 2. Add discount DECIMAL(5,2) to products.
mysql> alter table products add discount decimal(5,2);
Query OK, 0 rows affected (0.07 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> -- 3. Add delivery_date DATE to orders.
mysql> alter table orders add delivery_date DATE;
Query OK, 0 rows affected (0.07 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> -- 4. Add remarks VARCHAR(100) to payments;
mysql> alter table payments add remarls varchar(100);
Query OK, 0 rows affected (0.04 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> -- 5. Add supplier VARCHAR(50) to products.
mysql> alter table products add supplier VARCHAR(50);
Query OK, 0 rows affected (0.04 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> /* Level 2: MODIFY */
mysql> -- 6. Modify phone to varchar(15).
mysql> alter table products modify phone varchar(15);
ERROR 1054 (42S22): Unknown column 'phone' in 'products'
mysql> alter table customers modify phone varchar(15);
Query OK, 0 rows affected (0.01 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> -- 7. Modify brand to VARCHAR(50);
mysql> alter table products modify brand varchar(50);
Query OK, 0 rows affected (0.13 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> -- 8. Modify description to VARCHAR(200).
mysql> alter table categories modify description varchar(200);
Query OK, 0 rows affected (0.04 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> -- 9. Modify payment_method to VARCHAR(30).
mysql> alter table payments modify payment_method varchar(30);
Query OK, 0 rows affected (0.10 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> -- 10. Modify city to varchar(40).
mysql> alter table customers modify city varchar(40);
Query OK, 0 rows affected (0.08 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> /* Level 3: Rename & Drop */
mysql> -- 11. Rename phone to mobile_number.
mysql> alter table customers rename column phone to mobile_number;
Query OK, 0 rows affected (0.03 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> -- 12. Rename remarks to payment_remarks.
mysql> alter table payments rename column remarks to payment_remarks;
ERROR 1054 (42S22): Unknown column 'remarks' in 'payments'
mysql>
mysql> -- 13. DROP supplier.
mysql> alter table products drop column supplier;
Query OK, 0 rows affected (0.05 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> -- 14. DROP Discount.
mysql> alter table products drop column discounts;
ERROR 1091 (42000): Can't DROP 'discounts'; check that column/key exists
mysql> alter table products drop column discount;
Query OK, 0 rows affected (0.04 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> -- 15. Rename delivery_date to expected_delivery.
mysql> alter table orders rename column delivery_date to expected_delivery;
Query OK, 0 rows affected (0.04 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> /* Challenge Questions */
mysql> /* Add a column named country varchar(30) then rename it to country_name, then modify it to varchar(50), then drop it.*/
mysql> alter table customers add country varchar(30);
Query OK, 0 rows affected (0.04 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> alter table customers rename column country to country_name;
Query OK, 0 rows affected (0.02 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> alter table customers modify country_name varchar(50);
Query OK, 0 rows affected (0.03 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> alter table customers drop column country_name;
Query OK, 0 rows affected (0.01 sec)
Records: 0  Duplicates: 0  Warnings: 0
```