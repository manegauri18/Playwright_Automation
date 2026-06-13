// Locators are used to identify and interact with specific elements on a web page.
// Such as text boxes, buttons, links, checkboxes, dropdowns, and radio buttons.

// Common locator types:
// - XPath
// - CSS selector
// - role selectors, text selectors, and placeholder selectors

// XPATH - XML Path language
// Type of XPath:
// 1. Absolute XPath
//    Starts from the root element and follows the entire DOM hierarchy.
//    Example: /html/body/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/form/div[1]/input
//    This is brittle and usually not recommended.

// 2. Relative XPath
//    Starts with // and targets elements directly from anywhere in the DOM.
//    Example: //input[@name='username']

// XPath examples:
// - By attribute:     //tagName[@attributeName='attributeValue']
// - By text:          //tagName[text()='Login']
// - Using contains(): //tagName[contains(@attribute,'value')]
// - Using starts-with: //tagName[starts-with(@id,'user')]
// - By index:         (//tagName[@class='example'])[1]

// Additional locator notes:
// - Use CSS selectors when the structure is stable and the selector is simple.
// - Use XPath when you need powerful text or hierarchical matching.
// - Prefer attribute-based locators over absolute paths.
// - Use Playwright's auto-waiting locator methods to reduce flakiness.
// - Keep selectors readable, maintainable, and unique.
// - Avoid hard-coded waits whenever possible.
// - Use data-test or data-testid attributes when available for more stable selectors.
import { test, expect } from "@playwright/test";

test("XPath by attribute", async ({ page }) => {
    // findElement -> single element
    // findElements -> list of elements
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // XPath by attribute: //tagName[@attributeName='attributeValue']
    await page.locator('//input[@name="username"]').fill("Admin");
    await page.locator('//input[@type="password"]').fill("admin123");
    await page.locator('//button[@type="submit"]').click();

    // Playwright locator methods include auto-waiting.
    await expect(page).toHaveURL(/dashboard/);
});


test("XPath by attribute on Facebook login page", async ({ page }) => {
    await page.goto("https://www.facebook.com/");

    // Use attribute-based XPath locators for input fields.
    await page.locator('//input[@name="email"]').fill("test@example.com");
    await page.locator('//input[@name="pass"]').fill("Password123");

    // Do not submit real credentials in a test.
    await expect(page.locator('//input[@name="email"]')).toBeVisible();
});

// XPath by text example:
// //button[normalize-space(text())='Login']

test("XPath by text", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.locator('//input[@name="username"]').fill("Admin");
    await page.locator('//input[@type="password"]').fill("admin123");

    // Use normalize-space() to ignore extra spacing in button text.
    await page.locator("//button[text()=' Login ']").click();
});

// Additional notes:
// page.locator(selector) returns a Playwright Locator object.
// Locator is a lazy reference to element(s) and resolves only when an action or assertion is performed.
// It supports auto-waiting, retry logic, and can target multiple matching elements.
//
// Return type: Locator
// Example: const usernameField = page.locator('//input[@name="username"]');
//
// findElement / findElements (Selenium-style) vs Locator:
// - findElement finds and returns a single WebElement immediately.
// - findElements returns an array/list of WebElements.
// - page.locator is not an element itself; it is a smart selector object.
// - Locator is preferred in Playwright for stable, auto-waiting actions.

// Use Locator when you want:
// - built-in waiting for the element to appear
// - automatic retry on transient failures
// - readable, reusable selector code