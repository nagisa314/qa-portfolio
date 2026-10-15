# API Test Case Document — PokeAPI

**Project:** PokeAPI (https://pokeapi.co)
**Tester:** Kraven Cris Añonuevo
**Date:** October 2026
**Tool:** Postman
**Base URL:** https://pokeapi.co/api/v2

---

## Test Environment

| Item | Value |
|------|-------|
| API Version | v2 |
| Authentication | None required |
| Content-Type | application/json |
| Test Tool | Postman |

---

## Test Cases

### TC-API-001: Get Pokemon by Name — Valid Name

| Field | Value |
|-------|-------|
| **Test ID** | TC-API-001 |
| **Title** | Search for a valid Pokemon by name |
| **Method** | GET |
| **URL** | /pokemon/pikachu |
| **Precondition** | API is accessible |

**Steps:**
1. Send GET request to `https://pokeapi.co/api/v2/pokemon/pikachu`

**Expected Result:**
- Status code: 200 OK
- Response time: < 1000ms
- Response body contains `"name": "pikachu"`
- Response body contains `"id": 25`
- Response body contains `"types"` with `"electric"` type

**Actual Result:**
- Status code: 200 OK
- Response time: 253ms
- Response body contains `"name": "pikachu"`
- Response body contains `"id": 25`
- Response body contains `"types"` with `"electric"` type

**Status:** ✅ Pass

---

### TC-API-002: Get Pokemon by Name — Invalid Name

| Field | Value |
|-------|-------|
| **Test ID** | TC-API-002 |
| **Title** | Search for a non-existent Pokemon |
| **Method** | GET |
| **URL** | /pokemon/notarealpokemon |
| **Precondition** | API is accessible |

**Steps:**
1. Send GET request to `https://pokeapi.co/api/v2/pokemon/notarealpokemon`

**Expected Result:**
- Status code: 404 Not Found

**Actual Result:**
- Status code: 404 Not Found

**Status:** ✅ Pass

---

### TC-API-003: Get Pokemon by Name — Empty Name

| Field | Value |
|-------|-------|
| **Test ID** | TC-API-003 |
| **Title** | Search with empty Pokemon name |
| **Method** | GET |
| **URL** | /pokemon/ |
| **Precondition** | API is accessible |

**Steps:**
1. Send GET request to `https://pokeapi.co/api/v2/pokemon/`

**Expected Result:**
- Status code: 404 Not Found or 400 Bad Request

**Actual Result:**
- Status code: 404 Not Found

**Status:** ✅ Pass

---

### TC-API-004: Get Pokemon by Name — Case Sensitivity

| Field | Value |
|-------|-------|
| **Test ID** | TC-API-004 |
| **Title** | Search with uppercase Pokemon name |
| **Method** | GET |
| **URL** | /pokemon/PIKACHU |
| **Precondition** | API is accessible |

**Steps:**
1. Send GET request to `https://pokeapi.co/api/v2/pokemon/PIKACHU`

**Expected Result:**
- Status code: 200 OK (API should be case-insensitive)

**Actual Result:**
- Status code: 200 OK

**Status:** ✅ Pass

---

### TC-API-005: Get Pokemon by Name — Special Characters

| Field | Value |
|-------|-------|
| **Test ID** | TC-API-005 |
| **Title** | Search with special characters in name |
| **Method** | GET |
| **URL** | /pokemon/pik@chu |
| **Precondition** | API is accessible |

**Steps:**
1. Send GET request to `https://pokeapi.co/api/v2/pokemon/pik@chu`

**Expected Result:**
- Status code: 404 Not Found

**Actual Result:**
- Status code: 404 Not Found

**Status:** ✅ Pass

---

### TC-API-006: POST Request to Read-Only Endpoint

| Field | Value |
|-------|-------|
| **Test ID** | TC-API-006 |
| **Title** | Send POST request to a GET-only endpoint |
| **Method** | POST |
| **URL** | /pokemon/pikachu |
| **Precondition** | API is accessible |

**Steps:**
1. Send POST request to `https://pokeapi.co/api/v2/pokemon/pikachu`

**Expected Result:**
- Status code: 405 Method Not Allowed or 403 Forbidden

**Actual Result:**
- Status code: 403 Forbidden

**Status:** ✅ Pass

---

### TC-API-007: Response Time Performance

| Field | Value |
|-------|-------|
| **Test ID** | TC-API-007 |
| **Title** | Verify API response time is acceptable |
| **Method** | GET |
| **URL** | /pokemon/abra |
| **Precondition** | API is accessible |

**Steps:**
1. Send GET request to `https://pokeapi.co/api/v2/pokemon/abra`
2. Measure response time

**Expected Result:**
- Response time < 1000ms

**Actual Result:**
- Response time: 253ms

**Status:** ✅ Pass

---

### TC-API-008: Response Size Check

| Field | Value |
|-------|-------|
| **Test ID** | TC-API-008 |
| **Title** | Verify API response size is reasonable |
| **Method** | GET |
| **URL** | /pokemon/pikachu |
| **Precondition** | API is accessible |

**Steps:**
1. Send GET request to `https://pokeapi.co/api/v2/pokemon/pikachu`
2. Check response size

**Expected Result:**
- Response size < 100 KB

**Actual Result:**
- Response size: 5.92 KB

**Status:** ✅ Pass

---

### TC-API-009: Authentication Not Required

| Field | Value |
|-------|-------|
| **Test ID** | TC-API-009 |
| **Title** | Verify API works without authentication |
| **Method** | GET |
| **URL** | /pokemon/pikachu |
| **Precondition** | No authentication token provided |

**Steps:**
1. Send GET request without any authentication headers

**Expected Result:**
- Status code: 200 OK

**Actual Result:**
- Status code: 200 OK

**Status:** ✅ Pass

---

### TC-API-010: Rate Limit — Multiple Requests

| Field | Value |
|-------|-------|
| **Test ID** | TC-API-010 |
| **Title** | Verify API handles multiple requests without rate limiting |
| **Method** | GET |
| **URL** | /pokemon/pikachu |
| **Precondition** | API is accessible |

**Steps:**
1. Send 100 GET requests to `https://pokeapi.co/api/v2/pokemon/pikachu`
2. Check all response status codes

**Expected Result:**
- All 100 requests return 200 OK

**Actual Result:**
- All 100 requests returned 200 OK

**Status:** ✅ Pass

---

## Test Summary

| Test ID | Title | Status |
|---------|-------|--------|
| TC-API-001 | Get Pokemon by Name — Valid Name | ✅ Pass |
| TC-API-002 | Get Pokemon by Name — Invalid Name | ✅ Pass |
| TC-API-003 | Get Pokemon by Name — Empty Name | ✅ Pass |
| TC-API-004 | Get Pokemon by Name — Case Sensitivity | ✅ Pass |
| TC-API-005 | Get Pokemon by Name — Special Characters | ✅ Pass |
| TC-API-006 | POST Request to Read-Only Endpoint | ✅ Pass |
| TC-API-007 | Response Time Performance | ✅ Pass |
| TC-API-008 | Response Size Check | ✅ Pass |
| TC-API-009 | Authentication Not Required | ✅ Pass |
| TC-API-010 | Rate Limit — Multiple Requests | ✅ Pass |

**Total Tests:** 10
**Passed:** 10
**Failed:** 0
**Pass Rate:** 100%

---

## Postman Test Script

```javascript
// Test 1: Status code should be 200
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// Test 2: Response time should be under 1 second
pm.test("Response time is less than 1000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});

// Test 3: Response should contain Pikachu data
pm.test("Response contains Pikachu", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql("pikachu");
    pm.expect(jsonData.id).to.eql(25);
});

// Test 4: Response should have types
pm.test("Pikachu has electric type", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.types[0].type.name).to.eql("electric");
});
```

---

## Lessons Learned

1. **Assertions matter** — A test without assertions is just a request
2. **Tests must be able to fail** — A test that always passes is useless
3. **Green vs Red** — Green means correct, Red means bug found
4. **Test the happy path AND edge cases** — Valid input, invalid input, empty input, special characters
5. **Performance matters** — Response time and size are part of quality
6. **Security matters** — Test that read-only endpoints reject write methods
