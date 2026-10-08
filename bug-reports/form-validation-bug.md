# Bug Report: Form Validation Does Not Prevent Empty Submission

**Bug ID:** BR-001
**Reported By:** Kraven Cris Añonuevo
**Date:** October 2025
**Project:** One Health (onehealth.my)
**Environment:** Production
**Severity:** Medium
**Priority:** High
**Status:** Open

---

## Summary

The patient record creation form allows submission with empty required fields, which should be blocked by client-side validation.

---

## Steps to Reproduce

1. Navigate to https://onehealth.my/records/create
2. Leave all required fields empty (patient name, date of birth, etc.)
3. Click "Submit" or "Save Record" button
4. Observe the behavior

**Expected Result:**
- Form validation should prevent submission
- Error messages should appear next to empty required fields
- Form should not be submitted to the database

**Actual Result:**
- Form submits successfully with empty fields
- Empty/null values are saved to the database
- No validation error messages are displayed

---

## Evidence

**Screenshots:**
*(Attach screenshots showing the form with empty fields and the successful submission)*

**Browser Console Errors:**
*(Check browser DevTools Console for any JavaScript errors)*

**Network Request:**
```
POST https://onehealth.my/api/records
Status: 200 OK (or 201 Created)
Response: {"id": 123, "name": null, "dob": null, ...}
```

---

## Environment Details

- **OS:** Windows 11
- **Browser:** Chrome 120+
- **URL:** https://onehealth.my/records/create
- **User Role:** Admin
- **Date/Time:** October 2025, 14:30 PHT

---

## Impact

- **Data Integrity:** Empty records are being saved to the database
- **User Experience:** Users may submit incomplete forms thinking they succeeded
- **Downstream Effects:** Reports and analytics may include invalid/null data

---

## Root Cause Analysis (Hypothesis)

- Client-side validation is missing or not properly implemented
- Server-side validation may also be absent
- Form submit handler does not check for empty required fields

---

## Recommended Fix

1. Implement client-side validation using HTML5 `required` attribute or JavaScript
2. Add server-side validation in the Laravel backend
3. Display user-friendly error messages for each empty field
4. Prevent form submission until all required fields are filled

---

## Additional Notes

- This bug was discovered during ad-hoc testing of the record creation workflow
- Related to input validation testing
- Should be tested across all form submissions in the application
