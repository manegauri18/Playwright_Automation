import { test, expect } from "@playwright/test";

import path from "path";

import fs from "fs";

// =====================================================
// 🔹 Import JSON Test Data
// =====================================================
// userData1.json contains multiple login credentials

import userData from "../TestData/userData1.json";


// =====================================================
// 🔹 Example JSON Structure
// =====================================================

/*

[
    {
        "username": "standard_user",
        "password": "secret_sauce"
    },
    {
        "username": "standard_user1",
        "password": "secret_sauce1"
    },
    {
        "username": "standard_user2",
        "password": "secret_sauce2"
    }
]

*/


// =====================================================
// 🔹 Data-Driven Execution using FOR Loop
// =====================================================
// Loop through all users from JSON file

for (let i = 0; i < userData.length; i++) {

    // =====================================================
    // 🔹 Dynamic Test Creation
    // =====================================================

    test(`Login test for user : ${userData[i].username}`, async ({ page }) => {

        // =====================================================
        // 🔹 Step 1: Open Application
        // =====================================================

        await page.goto("https://www.saucedemo.com/");


        // =====================================================
        // 🔹 Step 2: Enter Username
        // =====================================================

        await page.locator("#user-name")
            .fill(userData[i].username);


        // =====================================================
        // 🔹 Step 3: Enter Password
        // =====================================================

        await page.locator("#password")
            .fill(userData[i].password);


        // =====================================================
        // 🔹 Step 4: Click Login Button
        // =====================================================

        await page.locator("#login-button").click();


        // =====================================================
        // 🔹 Step 5: Validation Logic
        // =====================================================

        // Successful Login Locator
        const inventoryContainer = page.locator(
            "#inventory_container"
        );

        // Error Message Locator
        const errorMessage = page.locator(
            '[data-test="error"]'
        );


        // =====================================================
        // 🔹 Step 6: Handle Valid & Invalid Users
        // =====================================================

        // Check if login successful

        if (await inventoryContainer.isVisible()) {

            // Validate successful login URL

            await expect(page)
                .toHaveURL(/inventory.html/);

            console.log(
                `✅ Login successful for user : ${userData[i].username}`
            );

        }

        // Handle invalid login

        else if (await errorMessage.isVisible()) {

            const errorText = await errorMessage.textContent();

            console.log(
                `❌ Login failed for user : ${userData[i].username}`
            );

            console.log(`Error Message : ${errorText}`);

        }

    });

}


// =====================================================
// 🔥 IMPORTANT THEORY POINTS
// =====================================================

// ✅ Data-Driven Testing
// → Running same test using multiple datasets

// ✅ JSON
// → JavaScript Object Notation

// ✅ JSON used for:
// ✔ Test data
// ✔ API payloads
// ✔ Configurations

// ✅ Dynamic Test Creation
// → Tests generated automatically using loop

// ✅ userData.length
// → Returns total number of users

// ✅ import userData
// → Directly imports JSON data


// =====================================================
// 🔹 Why This Approach is Useful?
// =====================================================

// ✔ Avoid duplicate test scripts

// ✔ Easy maintenance

// ✔ Better scalability

// ✔ Better test coverage


// =====================================================
// 🔥 Best Practices
// =====================================================

// ✅ Keep test data separate from scripts

// ✅ Use JSON/Excel for external test data

// ✅ Validate both:
//    ✔ Success scenario
//    ✔ Failure scenario

// ✅ Use dynamic test names

// ✅ Avoid hardcoded credentials


// =====================================================
// 🔹 Alternative Ways to Read JSON
// =====================================================

// 1️⃣ Direct Import
// import userData from "./data.json"

// 2️⃣ fs Module
// fs.readFileSync()

// 3️⃣ Excel Sheet
// Using xlsx / exceljs


// =====================================================
// 🧠 Interview One-Liners
// =====================================================

// “Data-driven testing executes the same test
// with multiple datasets.”

// “JSON files are commonly used to store external
// test data in Playwright.”

// “Loops help dynamically generate tests
// for multiple users.”