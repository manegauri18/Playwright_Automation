// XPath types and examples
// 1. XPath by attribute
//    //tagName[@attributeName='attributeValue']
//    Example: //input[@name='username']
//
// 2. XPath using contains() with attribute
//    //tagName[contains(@attribute,'partialValue')]
//    Example: //input[contains(@name,'email')]
//
// 3. XPath by text
//    //tagName[text()='exact text']
//    Example: //button[text()='Log In']
//
// 4. XPath contains() with text
//    //tagName[contains(text(),'partial text')]
//    Example: //a[contains(text(),'Forgot')]
//
// 5. XPath by index
//    (xpathExpression)[index]
//    Example: (//div[@class='item'])[2]

// Additional notes:
// - Use XPath contains() when values change slightly or when partial matches are needed.
// - Prefer attribute-based selectors for maintainability.
// - Avoid hard-coded wait times; use Playwright assertions when possible.

import { test, expect } from "@playwright/test";

test("Contains by attribute", async ({ page }) => {
    await page.goto("https://www.facebook.com/");

    // Use contains() when the attribute value is partial or dynamic.
    await page.locator('//input[contains(@name,"email")]').fill("test@example.com");
    await page.locator('//input[contains(@name,"pass")]').fill("Password123");

});

test("XPath index example", async ({ page }) => {
    await page.goto("https://www.facebook.com/");

    // Use index-based XPath to select the second matching element.
    // This is useful when multiple similar elements appear on the page.
    const secondLoginButton = page.locator("(//span[contains(text(),'Log in')])[2]");
    await secondLoginButton.click();

});

test("XPath index example 2", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // Another index-based XPath example targeting a repeated input group.
    const secondInputGroup = page.locator("(//div[contains(@class,'oxd-input-group')])[2]");
});

// XPath index example
// Use an index to select the nth matching element.
// Example: await page.locator("(//div[@class='item'])[2]").click();
