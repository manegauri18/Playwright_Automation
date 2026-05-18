import { test, expect } from "@playwright/test";


// =====================================================
// 🔹 Tags in Playwright
// =====================================================
// Tags are labels added to test cases
// Used for:
//
// ✅ Test categorization
// ✅ Selective execution
// ✅ Smoke / Regression / Sanity testing
// ✅ CI/CD execution control


// =====================================================
// 🔹 Smoke Test
// =====================================================
// @smoke
// → Critical functionality tests
// → Executed frequently

test("Login Test @smoke", async ({ page }) => {

    console.log("✅ Login executed");

});


// =====================================================
// 🔹 Regression Test
// =====================================================
// @regression
// → Full functionality testing
// → Ensures existing features still work

test("Add Cart Test @regression", async ({ page }) => {

    console.log("✅ Cart executed");

});


// =====================================================
// 🔹 Multiple Tags
// =====================================================
// @smoke
// @sanity
//
// Same test can belong to multiple categories

test("Checkout Test @smoke @sanity", async ({ page }) => {

    console.log("✅ Checkout executed");

});


// =====================================================
// 🔹 Another Smoke Test
// =====================================================

test("Login Test 1 @smoke", async ({ page }) => {

    console.log("✅ Login executed");

});


// =====================================================
// 🔥 IMPORTANT THEORY POINTS
// =====================================================

// ✅ Tags are labels inside test titles

// ✅ Tags help filter test execution

// ✅ Multiple tags can be added to one test

// ✅ Tags improve test organization

// ✅ Tags are heavily used in CI/CD pipelines


// =====================================================
// 🔹 Commonly Used Tags
// =====================================================

// @smoke
// @sanity
// @regression
// @api
// @ui
// @e2e
// @critical
// @negative
// @positive


// =====================================================
// 🔹 Run Tagged Tests
// =====================================================

// Run smoke tests
// npx playwright test --grep "@smoke"


// Run regression tests
// npx playwright test --grep "@regression"


// Run smoke OR sanity tests
// npx playwright test --grep "@smoke|@sanity"


// Exclude smoke tests
// npx playwright test --grep-invert "@smoke"


// =====================================================
// 🔥 Advantages of Tags
// =====================================================

// ✔ Faster execution

// ✔ Better test organization

// ✔ Easy filtering

// ✔ Easy CI/CD integration

// ✔ Useful for large automation frameworks


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


// ✅ Keep naming consistent

// ✔ @smoke
// ❌ @Smoke
// ❌ @SMOKE


// =====================================================
// 🧠 Interview One-Liners
// =====================================================

// “Tags are used to categorize and selectively
// execute Playwright test cases.”

// “--grep is used to run tagged tests.”

// “Multiple tags can be assigned to a single test.”