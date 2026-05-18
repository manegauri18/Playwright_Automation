import { test, expect } from "@playwright/test";


// =====================================================
// 🔹 Multiple Context + Window Handling
// =====================================================
// Context = Separate browser session
// Each context behaves like a separate user
//
// Browser
//   ├── Context 1 (User 1)
//   │      ├── Page 1 → Original Tab
//   │      └── Page 2 → New Tab
//   │
//   └── Context 2 (User 2)
//          ├── Page 1 → Original Tab
//          └── Page 2 → New Tab
//
// =====================================================

test("Multiple context + window handling", async ({ browser }) => {

    // =====================================================
    // 🔹 Step 1: Create Browser Contexts
    // =====================================================
    // Contexts are isolated sessions
    // Cookies, local storage, login sessions are separate

    const context1 = await browser.newContext();
    const context2 = await browser.newContext();


    // =====================================================
    // 🔹 Step 2: Create Pages for Each Context
    // =====================================================

    const page1 = await context1.newPage();
    const page2 = await context2.newPage();


    // =====================================================
    // 🔹 Step 3: Navigate Both Users to Application
    // =====================================================

    await page1.goto("https://demo.automationtesting.in/Windows.html");

    await page2.goto("https://demo.automationtesting.in/Windows.html");


    // =====================================================
    // 🔹 Step 4: Handle New Tab for User 1
    // =====================================================
    // context.waitForEvent('page')
    // → waits for newly opened tab/window

    const [newPage1] = await Promise.all([

        // Wait for new tab
        context1.waitForEvent('page'),

        // Click button that opens new tab
        page1.click('//button[@class="btn btn-info"]')
    ]);


    // =====================================================
    // 🔹 Step 5: Handle New Tab for User 2
    // =====================================================

    const [newPage2] = await Promise.all([

        // Wait for new tab
        context2.waitForEvent('page'),

        // Click button that opens new tab
        page2.click('//button[@class="btn btn-info"]')
    ]);


    // =====================================================
    // 🔹 Step 6: Wait for New Tabs to Load
    // =====================================================

    await newPage1.waitForLoadState();

    await newPage2.waitForLoadState();


    // =====================================================
    // 🔹 Step 7: Validate Heading in New Tabs
    // =====================================================

    await expect(newPage1.locator("h1"))
        .toHaveText("Selenium automates browsers. That's it!");

    await expect(newPage2.locator("h1"))
        .toHaveText("Selenium automates browsers. That's it!");


    // =====================================================
    // 🔹 Step 8: Print URLs of New Tabs
    // =====================================================

    console.log("✅ User 1 New Tab URL :", newPage1.url());

    console.log("✅ User 2 New Tab URL :", newPage2.url());


    // =====================================================
    // 🔹 Step 9: Close Browser Contexts
    // =====================================================
    // Closing context closes all pages/tabs inside it

    await context1.close();

    await context2.close();

});


// =====================================================
// 🔥 IMPORTANT POINTS
// =====================================================

// ✅ Browser
// → Only one browser instance

// ✅ Browser Context
// → Separate isolated sessions/users

// ✅ Contexts do NOT share:
//    - Cookies
//    - Cache
//    - Local Storage
//    - Login Session

// ✅ Page
// → Represents a browser tab/window

// ✅ context.waitForEvent('page')
// → Used to capture newly opened tab/window

// ✅ Promise.all()
// → Ensures click + wait happen simultaneously

// ✅ bringToFront()
// → Used to focus on specific tab

// ✅ Closing context closes all tabs automatically


// =====================================================
// 🔥 Why Multiple Contexts are Important?
// =====================================================

// ✔ Multi-user testing
// ✔ Chat applications
// ✔ Admin vs User testing
// ✔ Buyer vs Seller testing
// ✔ Session isolation testing


// =====================================================
// 🧠 Interview One-Liners
// =====================================================

// “Browser contexts in Playwright provide isolated
// sessions similar to different users.”

// “context.waitForEvent('page') is used to handle
// newly opened tabs/windows.”

// “Promise.all() prevents missing popup events
// during tab opening.”