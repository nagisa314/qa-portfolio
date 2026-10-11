import { test, expect } from '@playwright/test';

// This test opens the calculator and checks if 2 + 3 = 5
test('calculator adds two numbers correctly', async ({ page }) => {
  // 1. Open the calculator HTML file
  await page.goto('file:///C:/Users/kravenn/Desktop/my-first-playwright/calculator.html');

  // 2. Click buttons: 2, +, 3, = 5
  await page.click('button:has-text("2")');
  await page.click('button:has-text("+")');
  await page.click('button:has-text("3")');
  await page.click('button:has-text("=")');

  // 3. Check the display shows "5"
  const display = page.locator('#display');
  await expect(display).toHaveText('5');
});

test('calculator subtracts two numbers correctly', async ({ page }) => {
  // 1. Open the calculator HTML file
  await page.goto('file:///C:/Users/kravenn/Desktop/my-first-playwright/calculator.html');

  // 2. Click buttons: 9, -, 4, = 5
  await page.click('button:has-text("9")');
  await page.click('button:has-text("−")');
  await page.click('button:has-text("4")');
  await page.click('button:has-text("=")');

  // 3. Check the display shows "5"
  const display = page.locator('#display');
  await expect(display).toHaveText('5');
});

test('calculator multiplies two numbers correctly', async ({ page }) => {
  // 1. Open the calculator HTML file
  await page.goto('file:///C:/Users/kravenn/Desktop/my-first-playwright/calculator.html');

  // 2. Click buttons: 6, *, 7, = 42
  await page.click('button:has-text("6")');
  await page.click('button:has-text("×")');
  await page.click('button:has-text("7")');
  await page.click('button:has-text("=")');

  // 3. Check the display shows "42"
  const display = page.locator('#display');
  await expect(display).toHaveText('42');
});

test('calculator divides two numbers correctly', async ({ page }) => {
  // 1. Open the calculator HTML file
  await page.goto('file:///C:/Users/kravenn/Desktop/my-first-playwright/calculator.html');

  // 2. Click buttons: 8, /, 2, = 4
  await page.click('button:has-text("8")');
  await page.click('button:has-text("÷")');
  await page.click('button:has-text("2")');
  await page.click('button:has-text("=")');

  // 3. Check the display shows "4"
  const display = page.locator('#display');
  await expect(display).toHaveText('4');
});