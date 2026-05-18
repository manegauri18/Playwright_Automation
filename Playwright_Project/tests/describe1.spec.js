import { test, expect } from "@playwright/test"

// =====================================================
// 🔹 Group 1: Login Tests
// =====================================================
test.describe("Login Test", () => {

    // 🔹 Runs before each test in this group
    test.beforeEach(async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/login");
        console.log("🔐 Login group - Navigated to login page");
    });

    // =====================================================
    // 🔹 TC01 - Valid Login
    // =====================================================
    test("TC01 - Valid Login", async ({ page }) => {

        // 🔹 Enter valid credentials
        await page.fill("#username", 'tomsmith');
        await page.fill("#password", 'SuperSecretPassword!');

        // 🔹 Click login button
        await page.click('//button[@type="submit"]');

        // 🔹 Validate successful login using URL
        await expect(page).toHaveURL(/secure/);
    });


    // =====================================================
    // 🔹 TC02 - Invalid Login
    // =====================================================
    test("TC02 - Invalid Login", async ({ page }) => {

        // 🔹 Enter invalid password
        await page.fill("#username", 'tomsmith');
        await page.fill("#password", 'SuperSecretPasswor'); // wrong password

        // 🔹 Click login button
        await page.click('//button[@type="submit"]');

        // 🔹 Validate error message
        await expect(page.locator("#flash"))
            .toContainText("Your password is invalid!");
    });
});


// =====================================================
// 🔹 Group 2: Checkbox Tests
// =====================================================
test.describe("Checkbox Test", () => {

    // 🔹 Runs before each test in this group
    test.beforeEach(async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/checkboxes");
        console.log("☑️ Checkbox group - Navigated to checkbox page");
    });

    // =====================================================
    // 🔹 TC03 - First Checkbox State (Unchecked)
    // =====================================================
    test("TC03 - First Checkbox State", async ({ page }) => {

        const checkbox1 = page.locator('//input[@type="checkbox"]').first();

        // 🔹 Verify first checkbox is NOT checked
        await expect(checkbox1).not.toBeChecked();
    });


    // =====================================================
    // 🔹 TC04 - Second Checkbox State (Checked)
    // =====================================================
    test("TC04 - Second Checkbox State", async ({ page }) => {

        const checkbox2 = page.locator('//input[@type="checkbox"]').last();

        // 🔹 Verify second checkbox IS checked
        await expect(checkbox2).toBeChecked();
    });
});