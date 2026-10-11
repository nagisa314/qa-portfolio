import { test, expect } from '@playwright/test';

/**
 * TodoMVC React - Complete Test Suite
 * 19 test cases covering functional, validation, boundary, regression, and out-of-the-box testing
 * 
 * Test URL: https://todomvc.com/examples/react/dist/
 */

// ============================================================
// FUNCTIONAL TESTS (TC-001 to TC-005)
// ============================================================

test.describe('Functional Tests', () => {

  test('TC-001: Add a new todo item', async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/');
    
    await page.fill('.new-todo', 'Buy groceries');
    await page.press('.new-todo', 'Enter');
    
    const todoItem = page.locator('.todo-list li');
    await expect(todoItem).toHaveCount(1);
    await expect(todoItem).toContainText('Buy groceries');
    
    const counter = page.locator('.todo-count');
    await expect(counter).toContainText('1 item left');
  });

  test('TC-002: Mark a todo as completed', async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/');
    
    await page.fill('.new-todo', 'Buy groceries');
    await page.press('.new-todo', 'Enter');
    
    await page.locator('.todo-list li .toggle').click();
    
    const todoItem = page.locator('.todo-list li');
    await expect(todoItem).toHaveClass(/completed/);
    
    const counter = page.locator('.todo-count');
    await expect(counter).toContainText('0 items left');
  });

  test('TC-003: Delete a todo item', async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/');
    
    await page.fill('.new-todo', 'Buy groceries');
    await page.press('.new-todo', 'Enter');
    
    await page.locator('.todo-list li').hover();
    await page.locator('.todo-list li .destroy').click();
    
    const todoItem = page.locator('.todo-list li');
    await expect(todoItem).toHaveCount(0);
  });

  test('TC-004: Edit a todo item', async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/');
    
    await page.fill('.new-todo', 'Buy groceries');
    await page.press('.new-todo', 'Enter');
    
    await page.locator('.todo-list li label').dblclick();
    await page.locator('.todo-list li .edit').fill('Buy milk');
    await page.locator('.todo-list li .edit').press('Enter');
    
    const todoItem = page.locator('.todo-list li');
    await expect(todoItem).toContainText('Buy milk');
    
    const counter = page.locator('.todo-count');
    await expect(counter).toContainText('1 item left');
  });

  test('TC-005: Filter todos (All / Active / Completed)', async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/');
    
    // Add two tasks
    await page.fill('.new-todo', 'Buy groceries');
    await page.press('.new-todo', 'Enter');
    await page.fill('.new-todo', 'Walk the dog');
    await page.press('.new-todo', 'Enter');
    
    // Complete the first task
    await page.locator('.todo-list li').first().locator('.toggle').click();
    
    // Click Active filter
    await page.locator('.filters li', { hasText: 'Active' }).click();
    let visibleItems = page.locator('.todo-list li:visible');
    await expect(visibleItems).toHaveCount(1);
    await expect(visibleItems.first()).toContainText('Walk the dog');
    
    // Click Completed filter
    await page.locator('.filters li', { hasText: 'Completed' }).click();
    visibleItems = page.locator('.todo-list li:visible');
    await expect(visibleItems).toHaveCount(1);
    await expect(visibleItems.first()).toContainText('Buy groceries');
    
    // Click All filter
    await page.locator('.filters li', { hasText: 'All' }).click();
    visibleItems = page.locator('.todo-list li:visible');
    await expect(visibleItems).toHaveCount(2);
  });
});

// ============================================================
// VALIDATION TESTS (TC-006 to TC-010)
// ============================================================

test.describe('Validation Tests', () => {

  test('TC-006: Empty input should not add a blank item', async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/');
    
    await page.press('.new-todo', 'Enter');
    
    const todoItem = page.locator('.todo-list li');
    await expect(todoItem).toHaveCount(0);
  });

  test('TC-007: Spaces only should not add a blank item', async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/');
    
    await page.fill('.new-todo', '   ');
    await page.press('.new-todo', 'Enter');
    
    const todoItem = page.locator('.todo-list li');
    await expect(todoItem).toHaveCount(0);
  });

  test('TC-008: Special characters should be accepted', async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/');
    
    await page.fill('.new-todo', '!@#$%^&*()');
    await page.press('.new-todo', 'Enter');
    
    const todoItem = page.locator('.todo-list li');
    await expect(todoItem).toHaveCount(1);
    await expect(todoItem).toContainText('!@#$%^&*()');
  });

  test('TC-009: Very long text should be accepted', async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/');
    
    const longText = 'A'.repeat(200);
    await page.fill('.new-todo', longText);
    await page.press('.new-todo', 'Enter');
    
    const todoItem = page.locator('.todo-list li');
    await expect(todoItem).toHaveCount(1);
    await expect(todoItem).toContainText(longText);
  });

  test('TC-010: Emoji should be accepted', async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/');
    
    await page.fill('.new-todo', '🛒 Buy milk 🥛');
    await page.press('.new-todo', 'Enter');
    
    const todoItem = page.locator('.todo-list li');
    await expect(todoItem).toHaveCount(1);
    await expect(todoItem).toContainText('🛒 Buy milk 🥛');
  });
});

// ============================================================
// BOUNDARY TESTS (TC-011 to TC-013)
// ============================================================

test.describe('Boundary Tests', () => {

  test('TC-011: Add 3 tasks rapidly and verify counter', async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/');
    
    await page.fill('.new-todo', 'Task 1');
    await page.press('.new-todo', 'Enter');
    await page.fill('.new-todo', 'Task 2');
    await page.press('.new-todo', 'Enter');
    await page.fill('.new-todo', 'Task 3');
    await page.press('.new-todo', 'Enter');
    
    const todoItems = page.locator('.todo-list li');
    await expect(todoItems).toHaveCount(3);
    
    const counter = page.locator('.todo-count');
    await expect(counter).toContainText('3 items left');
  });

  test('TC-012: Complete all tasks and verify counter shows 0', async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/');
    
    await page.fill('.new-todo', 'Task 1');
    await page.press('.new-todo', 'Enter');
    await page.fill('.new-todo', 'Task 2');
    await page.press('.new-todo', 'Enter');
    await page.fill('.new-todo', 'Task 3');
    await page.press('.new-todo', 'Enter');
    
    // Complete all tasks
    const toggles = page.locator('.todo-list li .toggle');
    await toggles.nth(0).click();
    await toggles.nth(1).click();
    await toggles.nth(2).click();
    
    const counter = page.locator('.todo-count');
    await expect(counter).toContainText('0 items left');
  });

  test('TC-013: Clear completed removes only completed tasks', async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/');
    
    await page.fill('.new-todo', 'Task 1');
    await page.press('.new-todo', 'Enter');
    await page.fill('.new-todo', 'Task 2');
    await page.press('.new-todo', 'Enter');
    await page.fill('.new-todo', 'Task 3');
    await page.press('.new-todo', 'Enter');
    
    // Complete only Task 1
    await page.locator('.todo-list li').first().locator('.toggle').click();
    
    // Click Clear completed
    await page.locator('.clear-completed').click();
    
    const todoItems = page.locator('.todo-list li');
    await expect(todoItems).toHaveCount(2);
    await expect(todoItems.first()).toContainText('Task 2');
    
    const counter = page.locator('.todo-count');
    await expect(counter).toContainText('2 items left');
  });
});

// ============================================================
// REGRESSION TESTS (TC-014 to TC-016)
// ============================================================

test.describe('Regression Tests', () => {

  test('TC-014: Add → Complete → Add sequence', async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/');
    
    // Add Task A
    await page.fill('.new-todo', 'Task A');
    await page.press('.new-todo', 'Enter');
    await expect(page.locator('.todo-count')).toContainText('1 item left');
    
    // Complete Task A
    await page.locator('.todo-list li .toggle').click();
    await expect(page.locator('.todo-count')).toContainText('0 items left');
    
    // Add Task B
    await page.fill('.new-todo', 'Task B');
    await page.press('.new-todo', 'Enter');
    await expect(page.locator('.todo-count')).toContainText('1 item left');
  });

  test('TC-015: Complete → Uncomplete updates counter', async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/');
    
    await page.fill('.new-todo', 'Task A');
    await page.press('.new-todo', 'Enter');
    
    // Complete
    await page.locator('.todo-list li .toggle').click();
    await expect(page.locator('.todo-count')).toContainText('0 items left');
    
    // Uncomplete
    await page.locator('.todo-list li .toggle').click();
    await expect(page.locator('.todo-count')).toContainText('1 item left');
  });

  test('TC-016: Delete a completed task keeps counter correct', async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/');
    
    await page.fill('.new-todo', 'Task A');
    await page.press('.new-todo', 'Enter');
    await page.fill('.new-todo', 'Task B');
    await page.press('.new-todo', 'Enter');
    
    // Complete Task A
    await page.locator('.todo-list li').first().locator('.toggle').click();
    await expect(page.locator('.todo-count')).toContainText('1 item left');
    
    // Delete Task A (completed)
    await page.locator('.todo-list li').first().hover();
    await page.locator('.todo-list li').first().locator('.destroy').click();
    
    const todoItems = page.locator('.todo-list li');
    await expect(todoItems).toHaveCount(1);
    await expect(todoItems.first()).toContainText('Task B');
    await expect(page.locator('.todo-count')).toContainText('1 item left');
  });
});

// ============================================================
// OUT-OF-THE-BOX TESTS (TC-017 to TC-019)
// ============================================================

test.describe('Out-of-the-Box Tests', () => {

  test('TC-017: Cancel edit with Escape', async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/');
    
    await page.fill('.new-todo', 'Buy groceries');
    await page.press('.new-todo', 'Enter');
    
    // Enter edit mode
    await page.locator('.todo-list li label').dblclick();
    
    // Change text
    await page.locator('.todo-list li .edit').fill('Changed text');
    
    // Press Escape
    await page.locator('.todo-list li .edit').press('Escape');
    
    // Verify original text is preserved
    const todoItem = page.locator('.todo-list li');
    await expect(todoItem).toContainText('Buy groceries');
    await expect(todoItem).not.toContainText('Changed text');
  });

  test('TC-018: Double Enter does not add duplicate tasks', async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/');
    
    await page.fill('.new-todo', 'Test task');
    await page.press('.new-todo', 'Enter');
    await page.press('.new-todo', 'Enter');
    
    const todoItems = page.locator('.todo-list li');
    await expect(todoItems).toHaveCount(1);
  });

test('TC-019: Clear completed button is hidden when nothing is completed', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  
  await page.fill('.new-todo', 'Task A');
  await page.press('.new-todo', 'Enter');
  
  // The button EXISTS in the DOM but is HIDDEN via CSS
  const clearBtn = page.locator('.clear-completed');
  await expect(clearBtn).toBeHidden();  // ← checks it's not visible
  
  // The task should still be there
  const todoItems = page.locator('.todo-list li');
  await expect(todoItems).toHaveCount(1);
});


});
