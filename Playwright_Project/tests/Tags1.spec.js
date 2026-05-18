import { test, expect } from "@playwright/test";


// =====================================================
// 🔹 Tags in Playwright
// =====================================================
// Tags are labels used to:
//
// ✅ Categorize tests
// ✅ Filter test execution
// ✅ Run smoke/regression/sanity suites
// ✅ Manage CI/CD execution


// =====================================================
// 🔹 Smoke + Regression Test
// =====================================================
// @smoke
// → Critical functionality
//
// @regression
// → Full application testing

test("Login with valid credential -1 @smoke @regression", async ({ page }) => {

    // Open Facebook
    await page.goto("https://www.facebook.com/");


    // Validate Facebook logo visibility
    // ⚠ Dynamic class locators are unstable
    // Better locator used below

    const logo = page.locator('img[alt="Facebook"]');

    await expect(logo).toBeVisible();

    console.log("✅ Logo verified successfully");

});


// =====================================================
// 🔹 Regression Test
// =====================================================

test("Login with valid credential -2 @regression", async ({ page }) => {

    // Open Facebook
    await page.goto("https://www.facebook.com/");


    // Enter email
    await page.locator('//input[@name="email"]')
        .fill("Test@gmail.com");


    // Enter password
    await page.locator('//input[@name="pass"]')
        .fill("Test@gmail.com");


    // Click login button
    await page.locator("//span[text()='Log in']")
        .click();

});


// =====================================================
// 🔹 Smoke + Regression Test
// =====================================================

test("Checkout test @smoke @regression", async ({ page }) => {

    // Open OrangeHRM Login Page
    await page.goto(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );


    // Validate URL
    await expect(page)
        .toHaveURL(/auth\/login/);

});


// =====================================================
// 🔹 Sanity Test
// =====================================================

test("Login Test 1 @sanity", async ({ page }) => {

    console.log("✅ Login executed");

});


// =====================================================
// 🔹 Commonly Used Tags
// =====================================================

// @sanity
// @smoke
// @regression
// @e2e
// @api
// @ui
// @critical
// @negative


// =====================================================
// 🔹 Run Tagged Tests
// =====================================================

// Run smoke tests
// npx playwright test --grep "@smoke"


// Run sanity tests
// npx playwright test --grep "@sanity"


// Run multiple tags
// npx playwright test --grep "@smoke|@sanity"


// Exclude tags
// npx playwright test --grep-invert "@regression"


// =====================================================
// 🔹 Grouping with test.describe()
// =====================================================

test.describe.only("Login Module @smokeTesting", () => {

    // =====================================================
    // 🔹 Valid Login Test
    // =====================================================

    test("Valid login", async () => {

        console.log("✅ Valid login");

    });


    // =====================================================
    // 🔹 Invalid Login Test
    // =====================================================

    test("Invalid login", async () => {

        console.log("❌ Invalid login");

    });

});


// =====================================================
// 🔹 Another Test Group
// =====================================================

test.describe("Logout Module @Demo", () => {

    test("Valid logout", async () => {

        console.log("✅ Valid logout");

    });

    test("Invalid logout", async () => {

        console.log("❌ Invalid logout");

    });

});


// =====================================================
// 🔥 IMPORTANT THEORY POINTS
// =====================================================

// ✅ Tags
// → Used for categorization/filtering

// ✅ test.describe()
// → Used to group related test cases

// ✅ Multiple tags can be added

// Example:
// @smoke @regression

// ✅ --grep
// → Used to run tagged tests

// ✅ --grep-invert
// → Used to exclude tagged tests


// =====================================================
// 🔹 only vs Tags
// =====================================================

/*

Difference Between only and Tags

| only                         | Tags                           |
|-----------------------------|--------------------------------|
| Runs ONLY selected test     | Categorize/filter tests        |
| Temporary debugging         | Test organization              |
| Used during development     | Used in CI/CD execution        |
| Hardcoded execution control | Flexible command-line control  |
| Risky if committed          | Safe for framework execution   |

*/


// =====================================================
// 🔥 only Examples
// =====================================================

// test.only()
// → Runs only selected test

// test.describe.only()
// → Runs only selected group


// =====================================================
// 🔥 Best Practices
// =====================================================

// ✅ Use meaningful tags

// ✔ Good
// @smoke
// @regression
// @login

// ❌ Bad
// @abc
// @test1


// ✅ Remove .only before commit

// ✅ Use tags for CI/CD execution

// ✅ Avoid unstable locators


// =====================================================
// 🧠 Interview One-Liners
// =====================================================

// “Tags are used to categorize and selectively
// execute tests in Playwright.”

// “test.only() is mainly used for debugging.”

// “Tags provide flexible execution control
// using --grep.”

// “test.describe() helps group related tests.”