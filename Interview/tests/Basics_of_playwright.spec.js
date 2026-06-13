// Import required modules from Playwright
import { test, expect } from "@playwright/test";

// ================= BASIC UNDERSTANDING =================

// test --> Used to define a single test case
// expect --> Assertion library used to validate results

// page --> Represents a browser tab (like WebDriver in Selenium)
// Playwright automatically provides "page" using fixtures

// async --> Marks function as asynchronous (returns a Promise)
// Promise --> Represents future result (Pending / Fulfilled / Rejected)

// await --> Waits for async operation to complete before moving ahead

// ================= TEST CASE =================

test("My first test", async ({ page }) => {

    // Step 1: Navigate to a URL
    await page.goto("https://www.facebook.com/");

    // Step 2: Get page title
    let title = await page.title();

    // Step 3: Print title in console
    console.log("Page title :", title);

    // Step 4: Assertion (validation)
    await expect(page).toHaveTitle(/Facebook/); // Regex match

});

// 🔹 1. Run all tests
// npx playwright test

// 🔹 2. Run a specific test file
// npx playwright test tests/example.spec.js

// 🔹 3. Run tests in headed mode (browser visible)
// npx playwright test --headed


// 🔹 3. Install Playwright
// npm init playwright@latest

// 👉 This will:

// Install Playwright
// Install browsers (Chromium, Firefox, WebKit)
// Create sample tests
// Create playwright.config.js

//🔹 4. Install Browsers Manually(if needed)
//npx playwright install