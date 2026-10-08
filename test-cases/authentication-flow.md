# Authentication Flow Test Cases

**Project:** One Health (Web-Based Immunization & Prenatal Record System)
**Test Environment:** Production (onehealth.my)
**Date:** October 2025
**Tester:** Kraven Cris Añonuevo

---

## Test Case 1: Valid User Login

| Field | Value |
|-------|-------|
| Test Case ID | TC-AUTH-001 |
| Priority | High |
| Test Type | Functional |
| Precondition | User has a registered account |

**Steps:**
1. Navigate to https://onehealth.my/login
2. Enter valid username/email
3. Enter valid password
4. Click "Login" button

**Expected Result:**
- User is redirected to dashboard
- Success message or welcome banner appears
- User session is maintained

**Actual Result:**
*(To be filled during execution)*

**Status:** Pass / Fail / Blocked

---

## Test Case 2: Invalid Password

| Field | Value |
|-------|-------|
| Test Case ID | TC-AUTH-002 |
| Priority | High |
| Test Type | Negative Testing |
| Precondition | User has a registered account |

**Steps:**
1. Navigate to https://onehealth.my/login
2. Enter valid username/email
3. Enter incorrect password
4. Click "Login" button

**Expected Result:**
- Error message: "Invalid credentials" or similar
- User remains on login page
- No session is created

**Actual Result:**
*(To be filled during execution)*

**Status:** Pass / Fail / Blocked

---

## Test Case 3: Empty Required Fields

| Field | Value |
|-------|-------|
| Test Case ID | TC-AUTH-003 |
| Priority | Medium |
| Test Type | Validation |
| Precondition | User is on login page |

**Steps:**
1. Navigate to https://onehealth.my/login
2. Leave email/username field empty
3. Leave password field empty
4. Click "Login" button

**Expected Result:**
- Validation error messages appear
- Form is not submitted
- User remains on login page

**Actual Result:**
*(To be filled during execution)*

**Status:** Pass / Fail / Blocked

---

## Test Case 4: Email Format Validation

| Field | Value |
|-------|-------|
| Test Case ID | TC-AUTH-004 |
| Priority | Medium |
| Test Type | Validation |
| Precondition | User is on registration page |

**Steps:**
1. Navigate to registration page
2. Enter invalid email format (e.g., "notanemail")
3. Enter valid password
4. Click "Register" button

**Expected Result:**
- Email format validation error message
- Form is not submitted
- User remains on registration page

**Actual Result:**
*(To be filled during execution)*

**Status:** Pass / Fail / Blocked

---

## Test Case 5: Password Strength Validation

| Field | Value |
|-------|-------|
| Test Case ID | TC-AUTH-005 |
| Priority | Medium |
| Test Type | Validation |
| Precondition | User is on registration page |

**Steps:**
1. Navigate to registration page
2. Enter valid email
3. Enter weak password ("123" or "abc")
4. Click "Register" button

**Expected Result:**
- Password strength validation message
- Form is not submitted OR password strength meter updates

**Actual Result:**
*(To be filled during execution)*

**Status:** Pass / Fail / Blocked

---

## Test Case 6: Logout Functionality

| Field | Value |
|-------|-------|
| Test Case ID | TC-AUTH-006 |
| Priority | High |
| Test Type | Functional |
| Precondition | User is logged in |

**Steps:**
1. Log in with valid credentials
2. Navigate to user profile/settings
3. Click "Logout" button
4. Try to access a protected page directly

**Expected Result:**
- User is logged out successfully
- User is redirected to login page
- Session/token is invalidated
- Protected pages redirect to login

**Actual Result:**
*(To be filled during execution)*

**Status:** Pass / Fail / Blocked
