# QA Engineer Portfolio

Welcome to my QA portfolio. This repository showcases my practical testing skills, documentation, and technical approach as a QA Engineer.

## What's Inside

| Folder | Description |
|--------|-------------|
| `test-cases/` | Manual test cases with steps, expected results, and actual results |
| `bug-reports/` | Bug reports with reproduction steps, severity, and evidence |
| `api-tests/` | API testing collections and examples |
| `sql-cheatsheet/` | SQL queries for QA verification and data validation |
| `test-plans/` | Test plans for different testing scenarios |
| `automation-scripts/` | Automation testing scripts and frameworks |
| `ci-testing/` | CI/CD testing integrations and workflows |

## About Me

I'm an aspiring QA Engineer with hands-on experience in manual testing, exploratory testing, and web application testing. I have a working technical background in PHP, Laravel, React, C#, and MySQL, which helps me understand the development side and communicate effectively with dev teams.

**Core Skills:**
- Manual Testing & Exploratory Testing
- Functional, Smoke, and Sanity Testing
- Defect Reporting & Bug Tracking (Jira)
- SQL for data verification
- API testing with Postman/Newman
- Basic automation with Python/Playwright
- CI/CD testing workflows

## Featured Work

### Test Cases
- [Authentication Flow Test Cases](test-cases/authentication-flow.md)
- [Search Functionality Test Cases](test-cases/search-functionality.md)

### Bug Reports
- [UI Bug: Form Validation Issue](bug-reports/form-validation-bug.md)
- [API Bug: Incorrect Response Status](bug-reports/api-status-bug.md)

### API Testing
- [Postman Collection: Health Platform API](api-tests/health-platform-api.postman_collection.json)

### SQL Queries
- [QA SQL Cheatsheet](sql-cheatsheet/qa-sql-queries.md)

### TodoMVC Test Suite (Playwright)
- [todomvc-tests/](todomvc-tests/) — Complete Playwright test suite (19 test cases) for TodoMVC React
  - Functional tests: Add, Complete, Delete, Edit, Filter
  - Validation tests: Empty input, spaces, special chars, long text, emoji
  - Boundary tests: Multiple items, complete all, clear completed
  - Regression tests: Action sequences
  - Out-of-the-box tests: Cancel edit, double Enter, hidden button behavior
- [Calculator Tests](todomvc-tests/tests/calculator.spec.ts) — Basic calculator test suite (4 operations)

## How to Run the Tests

```bash
# Install dependencies
cd todomvc-tests
npm install

# Install Playwright browsers
npx playwright install chromium

# Run all TodoMVC tests
npx playwright test tests/todomvc.spec.ts --project=chromium

# Run calculator tests
npx playwright test tests/calculator.spec.ts --project=chromium
```

## Lessons Learned

- **Unicode matters:** `−` ≠ `-`, `×` ≠ `*`, `÷` ≠ `/` — always inspect actual UI before writing locators
- **Page load strategy:** `waitUntil: 'domcontentloaded'` fixes timeout on slow sites
- **Hidden vs absent:** `toBeHidden()` checks CSS-hidden elements; `toHaveCount(0)` checks DOM absence
- **Test the real behavior:** When a test fails, verify if the app is wrong OR the test assumption is wrong

## Tools & Technologies

- **Testing:** Manual Testing, Postman, Playwright, pytest
- **Bug Tracking:** Jira
- **Databases:** MySQL, SQL queries for data validation
- **Development:** PHP, Laravel, React, C#, Python
- **Version Control:** Git, GitHub
- **CI/CD:** GitHub Actions

## Contact

- LinkedIn: [linkedin.com/in/kraven-cris-añoneuvo](https://linkedin.com/in/kraven-cris-añoneuvo)
- GitHub: [@nagisa314](https://github.com/nagisa314)
- Email: kravenanonuevo2@gmail.com

---

*This portfolio is continuously updated as I learn and practice new QA skills.*
