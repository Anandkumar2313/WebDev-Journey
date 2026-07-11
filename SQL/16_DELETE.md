DELETE

```SQL
mysql> /* DELETE */
mysql> /* The DELETE statement is used to remove existing row(s) from a table. */
mysql> /* DELETE removes the row completely. */
mysql>
mysql> /* SYNTAX : DELETE from table_name where condition; */
mysql> /* NOTE : Never forget where, because without WHERE table remains there only the data data disappears. */
mysql>
mysql> /* DELETE : Remove selected rows */
mysql> /* TRUNCATE : Empty the Table */
mysql> /* DROP : Remove the entile table */
mysql>
mysql> /* Practice Questions */
mysql> /* Level 1: Basic DELETE */
mysql> -- 1. Delete customer 15.
mysql> delete from customers where customer_id = 15;
Query OK, 1 row affected (0.03 sec)

mysql> -- 2. Delete product 20.
mysql> delete from products where product_id - 20;
ERROR 1451 (23000): Cannot delete or update a parent row: a foreign key constraint fails (`techstoredb`.`orderitems`, CONSTRAINT `orderitems_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`))
mysql> delete from products where product_id = 20;
ERROR 1451 (23000): Cannot delete or update a parent row: a foreign key constraint fails (`techstoredb`.`orderitems`, CONSTRAINT `orderitems_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`))
mysql>
mysql> -- 3. Delete payment 20.
mysql> delete from payments where payment_id = 20;
Query OK, 1 row affected (0.02 sec)

mysql> -- 4. Delete order 20.
mysql> delete from orders where order_id = 20;
ERROR 1451 (23000): Cannot delete or update a parent row: a foreign key constraint fails (`techstoredb`.`orderitems`, CONSTRAINT `orderitems_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`))
mysql> -- 5. Delete category 6.
mysql> delete from categories where category_id = 6;
ERROR 1451 (23000): Cannot delete or update a parent row: a foreign key constraint fails (`techstoredb`.`products`, CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`))
mysql>
mysql> /* Delete all customers from Lucknow. */
mysql> select * from customers where city = 'lucknow';
+-------------+------------+-----------+----------------+------------+---------+------------+
| customer_id | first_name | last_name | email          | phone      | city    | created_at |
+-------------+------------+-----------+----------------+------------+---------+------------+
|           4 | Amit       | verma     | amit@gmail.com | 9876543213 | Lucknow | 2026-04-08 |
+-------------+------------+-----------+----------------+------------+---------+------------+
1 row in set (0.00 sec)

mysql> delete from customers where city = 'lucknow';
ERROR 1451 (23000): Cannot delete or update a parent row: a foreign key constraint fails (`techstoredb`.`orders`, CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`))
mysql>
mysql> -- 7. Delete all products whose stock is less than 5.
mysql> delete from products where stock <= 15;
ERROR 1451 (23000): Cannot delete or update a parent row: a foreign key constraint fails (`techstoredb`.`orderitems`, CONSTRAINT `orderitems_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`))
mysql>
mysql> -- 8. Delete all orders whose status is Cancelled.
mysql> delete from orders where status = 'cancelled';
ERROR 1451 (23000): Cannot delete or update a parent row: a foreign key constraint fails (`techstoredb`.`orderitems`, CONSTRAINT `orderitems_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`))
mysql>
mysql> -- 9. Delete all payments whose payment method is Cash.
mysql> delete from payments where payment_method = 'cash';
Query OK, 5 rows affected (0.01 sec)

mysql> -- 10. Delete all products whose price is between ₹900 and ₹1500.
mysql> delete from products where price between 900 and 1500;
ERROR 1451 (23000): Cannot delete or update a parent row: a foreign key constraint fails (`techstoredb`.`orderitems`, CONSTRAINT `orderitems_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`))
mysql>
mysql> /* Level 3: Combining Conditions */
mysql> -- 11. Delete all HP products whose price is less than ₹10,000.
mysql> delete from products where brand = 'hp' and price < 10000;
Query OK, 0 rows affected (0.01 sec)

mysql> -- 12. Delete all Samsung Electronics products whose stock is 30.
mysql> delete from products where brand = 'samsung' and stock = 30;
Query OK, 0 rows affected (0.02 sec)

mysql> -- 13. Delete all customers whose city is Kolkata and customer_id is greater than 8.
mysql> delete from customers where city = 'kolkata' and customer_id > 8;
ERROR 1451 (23000): Cannot delete or update a parent row: a foreign key constraint fails (`techstoredb`.`orders`, CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`))
mysql>
mysql> -- 14. Delete all payments whose status is Completed.
mysql> delete from payments where payment_status = 'completed';
Query OK, 8 rows affected (0.03 sec)

mysql> -- 15. Delete all orders, whose total amount is less than ₹10,000 and whose status is Delivered.
mysql> delete from orders where total_amount < 10000 and status = 'delivered';
ERROR 1451 (23000): Cannot delete or update a parent row: a foreign key constraint fails (`techstoredb`.`orderitems`, CONSTRAINT `orderitems_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`))
mysql> /* Challenge Question */
mysql> -- Write one query to delete all HP products, price below ₹50,000 and stock below 25.
mysql> delete from products where brand = 'hp' and stock < 25;
ERROR 1451 (23000): Cannot delete or update a parent row: a foreign key constraint fails (`techstoredb`.`orderitems`, CONSTRAINT `orderitems_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`))

mysql> /* NOTE : DELETE -> Checks foreign key intigrity -> If child records exist -> Reject deletion */
mysql>
mysql> /* NOTE : If we try to delete a row from a parent table that is currently being referenced by one or more rows in a child table through a foreign key, MySQL refuses the DELETE operation and throws a foreign key constraint error. */
mysql>
mysql> /* NOTE/RULE : MySQL prevents the deletion of a parent row only when that specific row is being referenced by one or more rows in a child table through a foreign key. */

mysql>
mysql> /* Why can't we delete a parent row? */
mysql> /* Because the parent row is referenced by child rows through a foreign key. MySQL blocks the deletion to maintain referential integrity and prevent orphan records. */
```