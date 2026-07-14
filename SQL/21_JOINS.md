JOINs

```SQL
mysql> /* JOINS */
mysql> /* A JOIN combines rows from two or more tables using a related column (usually a Primary Key and a Foreign Key). */
mysql>
mysql> /* Why don't we keep everything in one table? */
mysql> /* By keeping everything in one table creates: */
mysql> -- 1. Duplicate data
mysql> -- 2. More storage
mysql> -- 3. Harder Updates
mysql> -- 4. Inconsistent information
mysql> /* So databases are normalized into multiple tables. */
mysql> /* JOINS reconstruct the complete information whenever you need it. */
mysql>
mysql> /* Types of JOINs */
mysql> -- 1. INNER JOIN
mysql> -- 2. LEFT JOIN
mysql> -- 2. RIGHT JOIN
mysql> -- 4. FULL OUTER JOIN
mysql> -- 5. CROSS JOIN
mysql>
mysql> /* INNER JOIN */
mysql> /* INNER JOIN returns only the rows that have matching values in both tables. Works on Concept of InterSection. */
mysql> /* SYNTAX: SELECT column(s) FROM table1 INNER JOIN table2 ON table1.common_column = table2.common_column; */
mysql>
mysql> /* Understanding ON clause */
mysql> /* This is the heart of every JOIN. */
mysql> /* Example : ON customers.customer_id = orders.customer_id */
mysql> /* Meaning: Match rows where both customer IDs are the same. */
mysql>
mysql> /* We can Use Table Aliases: */
mysql> /* Instead of "customers.customer_id" we usually write "c.customer_id" */
mysql> /* Example/Query */
mysql> /* SELECT c.first_name, o.total_amount FROM customers AS c INNER JOIN orders AS o ON c.customer_id = o.customer_id; */
```