import { test, expect } from "@playwright/test"

// =====================================================
// 🔹 beforeAll Hook
// Runs once before all tests
// Used for global setup (e.g., config, DB, env setup)
// =====================================================
test.beforeAll("Before ALL Hooks", async () => {
    console.log("🚀 Runs once before all tests");
});


// =====================================================
// 🔹 afterAll Hook
// Runs once after all tests
// Used for cleanup (e.g., closing connections, logs)
// =====================================================
test.afterAll("After ALL Hooks", async () => {
    console.log("🧹 Runs once AFTER all tests");
});


// =====================================================
// 🔹 beforeEach Hook
// Runs before EACH test
// Used for common setup (e.g., open application)
// =====================================================
test.beforeEach("Before each hooks", async ({ page }) => {
    console.log("➡️ Before each - Opening Facebook page");

    // 🔹 Navigate to Facebook
    await page.goto("https://www.facebook.com/");

    // 🔹 Wait for page to load properly
    await page.waitForLoadState('domcontentloaded');
});


// =====================================================
// 🔹 Test Case 1: Verify Page Title
// =====================================================
test("Test 1 - Verify page title", async ({ page }) => {

    // 🔹 Assertion: Validate page title
    // NOTE: Facebook title may vary slightly → use regex
    await expect(page).toHaveTitle(/Facebook/);

    console.log("✅ Title verified successfully");
});


// =====================================================
// 🔹 Test Case 2: Verify Logo Visibility
// =====================================================
test("Test 2 - Verify logo", async ({ page }) => {

    // 🔹 Locate logo
    // ⚠️ Your previous locator was dynamic and may fail
    // Using more stable selector (aria-label / alt / role preferred)
    const logo = page.locator('img[alt="Facebook"]');

    // 🔹 Assertion: Check logo is visible
    await expect(logo).toBeVisible();

    console.log("✅ Logo verified");
});