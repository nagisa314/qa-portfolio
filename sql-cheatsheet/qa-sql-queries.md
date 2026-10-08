# QA SQL Cheatsheet

Useful SQL queries for QA engineers to verify data, validate application behavior, and investigate bugs.

---

## 1. Verify Data Integrity

### Count Records in a Table
```sql
SELECT COUNT(*) FROM patients;
SELECT COUNT(*) FROM records WHERE created_at >= '2025-10-01';
```

### Check for Duplicates
```sql
SELECT email, COUNT(*) as count
FROM users
GROUP BY email
HAVING count > 1;
```

### Find NULL Values in Required Fields
```sql
SELECT * FROM patients
WHERE name IS NULL
   OR date_of_birth IS NULL
   OR contact_number IS NULL;
```

---

## 2. Validate Data Relationships

### Foreign Key Validation
```sql
-- Find orphaned records
SELECT r.*
FROM records r
LEFT JOIN patients p ON r.patient_id = p.id
WHERE p.id IS NULL;
```

### Count Related Records
```sql
SELECT p.name, COUNT(r.id) as record_count
FROM patients p
LEFT JOIN records r ON p.id = r.patient_id
GROUP BY p.name
ORDER BY record_count DESC;
```

---

## 3. Date/Time Verification

### Recent Records
```sql
SELECT *
FROM records
WHERE created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)
ORDER BY created_at DESC;
```

### Date Range Validation
```sql
SELECT *
FROM appointments
WHERE appointment_date BETWEEN '2025-10-01' AND '2025-10-31'
ORDER BY appointment_date;
```

---

## 4. Authentication & Authorization Testing

### Check User Roles
```sql
SELECT username, role, COUNT(*) as login_count
FROM users
GROUP BY username, role;
```

### Verify Password Reset Tokens
```sql
SELECT email, reset_token, reset_token_expires_at
FROM users
WHERE reset_token IS NOT NULL;
```

---

## 5. API Testing Verification

### Verify Data After API Call
```sql
-- After creating a record via API, verify it exists
SELECT * FROM records
WHERE id = {{expected_id}}
  AND name = 'Test Patient'
  AND created_at >= NOW() - INTERVAL 1 MINUTE;
```

### Check for Partial Updates
```sql
-- Verify all fields were updated correctly
SELECT *
FROM patients
WHERE id = {{patient_id}}
  AND name IS NOT NULL
  AND contact_number IS NOT NULL;
```

---

## 6. Performance & Load Testing

### Query Execution Time
```sql
EXPLAIN ANALYZE
SELECT * FROM records
WHERE patient_id = 123;
```

### Check Table Sizes
```sql
SELECT table_name, table_rows, data_length
FROM information_schema.tables
WHERE table_schema = 'onehealth_db';
```

---

## 7. Data Cleanup for Testing

### Reset Test Data
```sql
-- Delete test records
DELETE FROM records
WHERE created_at >= '2025-10-01'
  AND notes LIKE 'TEST%';

-- Reset auto-increment
ALTER TABLE records AUTO_INCREMENT = 1;
```

### Create Test User
```sql
INSERT INTO users (username, email, password, role)
VALUES ('testuser', 'test@example.com', 'hashed_password', 'admin');
```

---

## 8. Common QA Queries

### Find Records Created Today
```sql
SELECT *
FROM records
WHERE DATE(created_at) = CURDATE();
```

### Check for Orphaned Records
```sql
-- Records without associated patients
SELECT r.id, r.patient_id
FROM records r
LEFT JOIN patients p ON r.patient_id = p.id
WHERE p.id IS NULL;
```

### Verify Data Consistency
```sql
-- Check that all immunizations have valid patient references
SELECT i.*, p.name as patient_name
FROM immunizations i
JOIN patients p ON i.patient_id = p.id;
```

---

## Tips for QA SQL Testing

1. **Always backup data before running DELETE/UPDATE queries**
2. **Use transactions for test data setup:**
   ```sql
   START TRANSACTION;
   -- Insert test data
   -- Verify application behavior
   -- Rollback if needed
   ROLLBACK;
   ```
3. **Document expected vs actual query results**
4. **Use LIMIT for large datasets during testing**
5. **Check affected rows count after INSERT/UPDATE/DELETE**
