import { test, expect } from "@playwright/test";


// =====================================================
// 🔹 Test Data
// =====================================================
// valid = true  → Expected successful login
// valid = false → Expected invalid login message

const users = [

    {
        "username": "Admin",
        "password": "admin123",
        "valid": true
    },

    {
        "username": "Admin1",
        "password": "admin1234",
        "valid": false
    },

    {
        "username": "Admin2",
        "password": "admin1234",
        "valid": false
    },

];


// =====================================================
// 🔹 Data-Driven Testing using for...of loop
// =====================================================

for (const user of users) {

    // =====================================================
    // 🔹 Dynamic Test Creation
    // =====================================================

    test(`Login Test - ${user.username}`, async ({ page }) => {

        // =====================================================
        // 🔹 Step 1: Open Application
        // =====================================================

        await page.goto(
            "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
        );


        // =====================================================
        // 🔹 Step 2: Enter Username
        // =====================================================

        await page.fill(
            '//input[@name="username"]',
            user.username
        );


        // =====================================================
        // 🔹 Step 3: Enter Password
        // =====================================================

        await page.fill(
            '//input[@name="password"]',
            user.password
        );


        // =====================================================
        // 🔹 Step 4: Click Login Button
        // =====================================================

        await page.click('//button[@type="submit"]');


        // =====================================================
        // 🔹 Step 5: Validation Logic
        // =====================================================

        // =====================================================
        // 🔹 Valid User Scenario
        // =====================================================

        if (user.valid) {

            // Validate successful login
            await expect(page).toHaveURL(/dashboard/);

            // Alternative validation
            await expect(
                page.locator('.oxd-userdropdown-name')
            ).toBeVisible();

            console.log(
                `✅ Valid user login passed for : ${user.username}`
            );
        }


        // =====================================================
        // 🔹 Invalid User Scenario
        // =====================================================

        else {

            // Error message locator
            const errorMsg = page.locator(
                '.oxd-alert-content'
            );

            // Validate error message
            await expect(errorMsg)
                .toContainText("Invalid credentials");

            console.log(
                `❌ Invalid user validation passed for : ${user.username}`
            );
        }

    });

}


// =====================================================
// 🔥 IMPORTANT THEORY POINTS
// =====================================================

// ✅ Data-Driven Testing
// → Running same test with multiple datasets

// ✅ for...of loop
// → Used to iterate arrays easily

// ✅ Dynamic Test Creation
// → Tests created automatically using loop

// ✅ Positive Scenario
// → Valid login credentials

// ✅ Negative Scenario
// → Invalid login credentials

// ✅ expect()
// → Used for assertions/validation


// =====================================================
// 🔹 Why This Approach is Important?
// =====================================================

// ✔ Reduces duplicate code

// ✔ Easy maintenance

// ✔ Better test coverage

// ✔ Easy to add more users

// ✔ Supports scalable automation framework


// =====================================================
// 🔥 Best Practices
// =====================================================

// ✅ Keep test data separate from scripts

// ✅ Validate both:
//    ✔ Success scenario
//    ✔ Failure scenario

// ✅ Use meaningful logs

// ✅ Use dynamic test names

// ✅ Use regex for flexible URL validation


// =====================================================
// 🔹 Difference Between Valid & Invalid Tests
// =====================================================

// Valid User
// → Dashboard should open

// Invalid User
// → Error message should appear

// Both scenarios are expected behavior
// Therefore both tests PASS ✅


// =====================================================
// 🧠 Interview One-Liners
// =====================================================

// “Negative test cases pass when expected
// validation/error message is displayed.”

// “Data-driven testing improves scalability
// and reduces duplicate scripts.”

// “for...of loop is commonly used in Playwright
// for iterating external test data.”