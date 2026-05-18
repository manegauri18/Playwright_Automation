// =====================================================
// 🔹 Grouping in Playwright
// =====================================================
// Grouping means logically organizing related test cases
// test.describe() is used to group related tests together

import { test, expect } from "@playwright/test"


// =====================================================
// 🔹 Group 1: Login Functionality
// =====================================================
// .only → runs only this group (used for debugging)
test.describe.only("Login Functionality", () => {

    // 🔹 Runs before each test in this group
    test.beforeEach("Open Login page", async ({ page }) => {
        await page.goto("https://www.facebook.com/");
    });

    // 🔹 Test 1: Verify page title
    test("Verify login page title", async ({ page }) => {

        // Use regex because title may slightly vary
        await expect(page).toHaveTitle(/Facebook/);

        console.log("✅ Title verified");
    });

    // 🔹 Test 2: Verify logo visibility
    test("Verify logo", async ({ page }) => {

        // ⚠️ Avoid dynamic class locators (unstable)
        // Better locator:
        const logo = page.locator('img[alt="Facebook"]');

        await expect(logo).toBeVisible();

        console.log("✅ Logo verified");
    });
});


// =====================================================
// 🔹 Group 2: Home Functionality
// =====================================================
test.describe("Home Functionality", () => {

    // 🔹 Runs before each test in this group
    test.beforeEach("Open Home page", async ({ page }) => {
        await page.goto("https://www.facebook.com/");
    });

    // 🔹 Test 1: Verify page title
    test("Verify home page title", async ({ page }) => {

        await expect(page).toHaveTitle(/Facebook/);

        console.log("✅ Title verified");
    });

    // 🔹 Test 2: Verify logo visibility
    test("Verify logo", async ({ page }) => {

        const logo = page.locator('img[alt="Facebook"]');

        await expect(logo).toBeVisible();

        console.log("✅ Logo verified");
    });

});


// =====================================================
// 🔹 Independent Test (Not part of any group)
// =====================================================
test("Verify Facebook logo independently", async ({ page }) => {

    // 🔹 Open page manually (no beforeEach here)
    await page.goto("https://www.facebook.com/");

    // 🔹 Validate logo
    const logo = page.locator('img[alt="Facebook"]');
    await expect(logo).toBeVisible();

    console.log("✅ Logo verified successfully");
});