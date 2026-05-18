/**
 * CSS SELECTOR TUTORIAL - Complete Reference
 * ==========================================
 * 
 * 1. ID Selector
 *    Syntax: #idvalue
 *    Example: #small-searchterms
 * 
 * 2. Tagname with ID Selector
 *    Syntax: Tagname#idvalue
 *    Example: input#small-searchterms
 * 
 * 3. Attribute Selector
 *    Syntax: [attributeName='attributeValue']
 *    Example: [name='email']
 * 
 * 4. Tagname with Attribute Selector
 *    Syntax: tagName[attributeName='attributeValue']
 *    Example: input[name='email']
 * 
 * 5. Class Selector
 *    Syntax: .classvalue
 *    Example: .class-name
 */

// Import required modules from Playwright (JavaScript version)
const { test, expect } = require('@playwright/test');

/**
 * Test 1: Basic CSS Selector Examples (ID and Tagname+ID)
 * Demonstrates:
 * - Using ID selector (#small-searchterms)
 * - Using tagname with ID selector (input#small-searchterms)
 */
test("CSS Selector example", async ({ page }) => {
    // Navigate to the nopCommerce demo registration page
    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2Fregister");

    // ===== ID Selector =====
    // Syntax: #idvalue
    // Selects element with id="small-searchterms"
    await page.locator("#small-searchterms").fill("Python");
    await page.waitForTimeout(5000);

    // ===== Tagname with ID Selector =====
    // Syntax: tagname#idvalue
    // Selects <input id="small-searchterms"> - more specific than just ID
    await page.locator('input#small-searchterms').fill("Javascript");
    await page.waitForTimeout(5000);
});

/**
 * Test 2: Attribute Selector Examples (Facebook Login)
 * Demonstrates:
 * - Using attribute selector [name='value']
 * - Using attribute selector [aria-label='value']
 * - Double and single quotes both work
 */
test("CSS Selector example - facebook", async ({ page }) => {
    // Navigate to Facebook homepage
    await page.goto("https://www.facebook.com/");

    // ===== Attribute Selector =====
    // Syntax: [attributeName='attributeValue']
    // Single quotes around attribute value
    await page.locator("[name='email']").fill("Test@gmail.com");

    // Double quotes around attribute value (also valid)
    await page.locator('[name="pass"]').fill("Test@123");

    // ===== Attribute Selector with aria-label =====
    // Useful for accessibility-related attributes
    await page.locator('[aria-label="Show password"]').click();
    await page.waitForTimeout(5000);
});

/**
 * Test 3: Tagname with Attribute Selector (Facebook Login)
 * Demonstrates:
 * - Using tagname with attribute: input[name='email']
 * - More specific than pure attribute selector
 * - Using different tagname: div[aria-label="..."]
 */
test("CSS Selector example - facebook 1", async ({ page }) => {
    await page.goto("https://www.facebook.com/");

    // ===== Tagname with Attribute Selector =====
    // Syntax: tagName[attributeName='attributeValue']
    // More specific: only <input> elements with name='email'
    await page.locator("input[name='email']").fill("Test@gmail.com");
    await page.locator('input[name="pass"]').fill("Test@123");

    // Using div instead of default selector (tests broader match)
    await page.locator('div[aria-label="Show password"]').click();
    await page.waitForTimeout(5000);
});

/**
 * Test 4: Advanced CSS Selectors with Assertions (Facebook Login)
 * Demonstrates:
 * - Storing locators in variables for reuse
 * - Using expect() for assertions
 * - toHaveValue() - verify input field value
 * - toBeVisible() - verify element is visible
 */
test.only("CSS Selector example - facebook 2", async ({ page }) => {
    await page.goto("https://www.facebook.com/");

    // ===== Store locators in variables for cleaner code =====
    // This improves readability and allows element reuse
    const email = page.locator("input[name='email']");
    const pass = page.locator('input[name="pass"]');
    const demo = page.locator('div[aria-label="Show password"]');

    // Fill the form fields using stored locators
    await email.fill("Test@gmail.com");
    await pass.fill("Test@123");
    await page.waitForTimeout(3000);

    // ===== Assertions =====
    // toHaveValue() - Verifies the input field contains the expected value
    await expect(email).toHaveValue("Test@gmail1.com");  // Note: intentionally mismatched
    await expect(pass).toHaveValue("Test@123");

    // toBeVisible() - Verifies the element is visible on the page
    await expect(email).toBeVisible();
    await expect(pass).toBeVisible();
});