// =====================================================
// 🔹 Playwright Hooks
// =====================================================
// Hooks are special functions used to perform setup or
// cleanup actions before or after test execution.

// =====================================================
// 🔹 Types of Hooks
// =====================================================
// beforeAll  → Runs ONCE before all tests in the file
// beforeEach → Runs BEFORE every test
// afterEach  → Runs AFTER every test
// afterAll   → Runs ONCE after all tests in the file

import { test, expect } from "@playwright/test"


// =====================================================
// 🔹 beforeAll Hook
// Runs only once before all tests
// Used for global setup (e.g., DB connection, config)
// =====================================================
test.beforeAll("Before ALL Hooks", async () => {
    console.log("Runs once bfore all tests");
})


// =====================================================
// 🔹 afterAll Hook
// Runs only once after all tests
// Used for cleanup (e.g., closing DB, releasing resources)
// =====================================================
test.afterAll("After ALL Hooks", async () => {
    console.log("Runs once after all tests");
})


// =====================================================
// 🔹 beforeEach Hook
// Runs before EACH test case
// Used for common setup (e.g., login, navigation)
// =====================================================
test.beforeEach("Before each Hooks", async () => {
    console.log("Runs before every tests");
})


// =====================================================
// 🔹 afterEach Hook
// Runs after EACH test case
// Used for cleanup (e.g., logout, screenshot, reset state)
// =====================================================
test.afterEach("After each Hooks", async () => {
    console.log("Runs after every tests");
})


// =====================================================
// 🔹 Test Cases
// =====================================================

// 🔹 Test Case 1
test("Test 1", async () => {
    console.log("Execting Test 1")
})

// 🔹 Test Case 2
test("Test 2", async () => {
    console.log("Execting Test 2")
})

// 🔹 Test Case 3
test("Test 3", async () => {
    console.log("Execting Test 3")
})


// =====================================================
// 🔹 Execution Flow (VERY IMPORTANT)
// =====================================================

// BeforeAll  → runs only once
// beforeEach → runs before every test
// Test       → actual test execution
// afterEach  → runs after every test
// afterAll   → runs only once at the end


/*
Runs once bfore all tests

Runs before every tests
Execting Test 1
Runs after every tests

Runs before every tests
Execting Test 2
Runs after every tests

Runs before every tests
Execting Test 3
Runs after every tests

Runs once after all tests
*/


// =====================================================
// 🔥 IMPORTANT POINTS (Must Know)
// =====================================================

// ✅ 1. beforeAll & afterAll run only ONCE
// → Good for heavy setup (DB, browser, config)

// ✅ 2. beforeEach & afterEach run for EVERY test
// → Used for login/logout, navigation, cleanup

// ✅ 3. Hooks help reduce code duplication
// → Avoid writing same setup in every test

// ✅ 4. Hooks improve test maintainability
// → Changes needed only in one place

// ✅ 5. If beforeEach fails → test will NOT run ❌

// ✅ 6. If afterEach fails → test is already executed,
//    but cleanup may not complete ⚠️

// ✅ 7. Hooks follow strict execution order
// → Important for debugging

// ✅ 8. Hooks can be async (use await inside them)

// ✅ 9. Avoid heavy operations in beforeEach
// → Can slow down test execution

// ✅ 10. Best Practice:
// → Use beforeEach for login
// → Use afterEach for cleanup (logout, screenshot)


// =====================================================
// 🧠 Interview One-Liner
// =====================================================
// “Hooks in Playwright are used to manage setup and teardown
// logic efficiently and reduce code duplication.”