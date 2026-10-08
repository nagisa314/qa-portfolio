# Test Plan: One Health Web Platform

**Project:** One Health (Web-Based Immunization & Prenatal Record System)
**Version:** 1.0
**Date:** October 2025
**Tester:** Kraven Cris Añonuevo
**Environment:** Production (https://onehealth.my)

---

## 1. Introduction

This test plan outlines the testing strategy for the One Health web platform, focusing on manual and automated testing approaches for QA portfolio demonstration.

## 2. Scope

### In Scope
- Functional testing of core features
- UI/UX testing
- API endpoint testing
- Database validation
- Cross-browser compatibility
- Mobile responsiveness

### Out of Scope
- Load/performance testing
- Security penetration testing
- Backend code review

## 3. Test Types

| Test Type | Description | Tools |
|-----------|-------------|-------|
| Functional Testing | Verify features work as expected | Manual, Postman |
| Exploratory Testing | Uncover unexpected behavior | Manual |
| API Testing | Validate REST endpoints | Postman, curl |
| Database Testing | Verify data integrity | MySQL queries |
| UI Testing | Check layouts, responsiveness | Browser DevTools |
| Regression Testing | Ensure fixes don't break existing features | Manual checklist |

## 4. Test Environment

- **URL:** https://onehealth.my
- **Browsers:** Chrome, Firefox, Edge
- **OS:** Windows 11
- **Database:** MySQL
- **Backend:** Laravel (PHP)
- **Frontend:** React.js

## 5. Test Schedule

| Phase | Duration | Activities |
|-------|----------|------------|
| Week 1 | 3-4 days | Functional testing, test case creation |
| Week 2 | 3-4 days | API testing, bug reporting |
| Week 3 | 2-3 days | Database validation, SQL queries |
| Week 4 | 2-3 days | Automation script setup, CI integration |

## 6. Entry Criteria

- Test environment is accessible
- Test data is available
- Documentation is reviewed

## 7. Exit Criteria

- All critical bugs are fixed
- Test cases are executed and documented
- Bug reports are submitted
- Portfolio artifacts are ready

## 8. Risks & Mitigation

| Risk | Mitigation |
|------|-----------|
| Production environment changes | Document baseline state, take screenshots |
| Limited test data | Create test accounts, use staging if available |
| Time constraints | Prioritize critical features first |

## 9. Deliverables

- Test cases (Markdown)
- Bug reports (Markdown)
- API test collection (Postman JSON)
- SQL validation queries
- Automation scripts (Python/Playwright)
- CI/CD testing workflow (GitHub Actions)
- Test summary report

---

*This test plan will be updated as testing progresses.*
