import { test, expect } from "@playwright/test";

const BASEURL = "https://the-internet.herokuapp.com/javascript_alerts";

/*
====================================================
🔹 What are JavaScript Alerts?
====================================================
- Browser-level popups created using:
  alert(), confirm(), prompt()
- Cannot be inspected using DOM locators
- Must be handled using Playwright dialog API
- Dialog blocks execution (synchronous)
*/

test("Handle JavaScript Alert", async ({ page }) => {

    await page.goto(BASEURL);

    // 👉 Register listener BEFORE action
    page.on("dialog", async dialog => {

        const dialogText = dialog.message();
        console.log("Alert message:", dialogText);

        await expect(dialogText).toBe("I am a JS Alert");

        await dialog.accept(); // Click OK
    });

    await page.locator('//button[@onclick="jsAlert()"]').click();

    // ✅ Validate result message on UI
    await expect(page.locator("#result"))
        .toHaveText("You successfully clicked an alert");
});



/*
====================================================
🔹 Handle JavaScript Confirm
====================================================
- OK → accept()
- Cancel → dismiss()
*/

test("Handle JavaScript Confirm", async ({ page }) => {

    await page.goto(BASEURL);

    page.on("dialog", async dialog => {

        const dialogText = dialog.message();
        console.log("Confirm message:", dialogText);

        await expect(dialogText).toBe("I am a JS Confirm");

        await dialog.dismiss(); // Cancel
    });

    await page.locator('//button[@onclick="jsConfirm()"]').click();

    await expect(page.locator("#result"))
        .toHaveText("You clicked: Cancel");
});



/*
====================================================
🔹 Handle JavaScript Prompt
====================================================
- accept("text") → enter text + OK
*/

test("Handle JavaScript Prompt", async ({ page }) => {

    await page.goto(BASEURL);

    page.on("dialog", async dialog => {

        const dialogText = dialog.message();
        console.log("Prompt message:", dialogText);

        await expect(dialogText).toBe("I am a JS prompt");

        await dialog.accept("Playwright Testing");
    });

    await page.locator('//button[@onclick="jsPrompt()"]').click();

    await expect(page.locator("#result"))
        .toContainText("Playwright Testing");
});

/*
====================================================
🔹 Handle Permission Popup (Notification)
====================================================
- NOT a JS alert
- Handled using browser context
*/

test("Handle Permission Popup", async ({ browser }) => {

    const context = await browser.newContext({
        permissions: ["notifications"] // ✅ FIXED (was 'notification')
    });

    const page = await context.newPage();

    await page.goto("https://www.hdfcbank.com/");

    // ⚠️ No assertion because site doesn’t trigger popup
    await page.waitForTimeout(3000);
});



/*
====================================================
🔹 Handle Authentication Popup (Basic Auth)
====================================================
- NOT dialog
- Use URL OR httpCredentials
*/

test.only("Handle Authentication Popup", async ({ page }) => {

    await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");

    // ✅ Proper validation
    await expect(page.locator("p"))
        .toContainText("Congratulations! You must have the proper credentials.");
});

/*
📘 Playwright Core Concepts – browser vs context vs page

🔹 1. How to handle alert or popup
Playwright automatically handles JavaScript alerts by dismissing them if no handler is provided, but in real
 automation we explicitly handle them using page.on('dialog') to validate and control behavior
 or
 In Playwright, handling alerts or popups depends on their type.
JavaScript alerts are handled using page.on('dialog'), while browser-level popups like permissions
 and authentication are handled using browser context.
🔹 2. What is browser?
👉 browser = actual browser instance (Chrome / Chromium / Firefox)

📌 Example:

const browser = await chromium.launch();

🧠 Think like:
👉 Browser = Google Chrome app

🔹 3. What is context?
👉 context = new browser profile / session

📌 Created using:

const context = await browser.newContext();
🧠 Real-Life Analogy
Concept	Real Example
Browser	Chrome application
Context	New Incognito window
Page	Tab inside that window
🔥 Important Points about context

✔ Each context is isolated

No shared cookies
No shared login
No cache sharing

✔ Used for:

Permissions (notifications, location)
Authentication
Multiple users testing
📌 Your Example:
const context = await browser.newContext({
    permissions: ['notifications']
});

👉 Meaning:

Create a fresh browser session
With notifications already allowed
🔹 4. What is page?

👉 page = tab inside browser

📌 Created using:

const page = await context.newPage();
🧠 Real-Life Example

👉 You open Chrome → open Incognito → open tab → open website

That flow is:

browser → context → page
🔁 Full Flow (VERY IMPORTANT)
const context = await browser.newContext(); // new session
const page = await context.newPage();       // new tab
await page.goto("https://example.com");     // open website
🔥 Why NOT directly use page?

👉 In Playwright test:

test("example", async ({ page }) => {

👉 This page is:

Already created
Uses default context
❗ But when you need special control:

👉 You must create your own context:

const context = await browser.newContext({
    permissions: ['notifications']
});
⚠️ Interview Trap (Very Important)

👉 Question:
Why use browser.newContext() instead of default page?

✅ Answer:
👉 Because default page does NOT allow:

Custom permissions
Multiple user sessions
Authentication setup

//Visual Flow (Best for Students)
Browser (Chrome)
   ↓
Context (Incognito / Session)
   ↓
Page (Tab)
   ↓
Website (URL)

| Feature    | browser        | context            | page             |
| ---------- | -------------- | ------------------ | ---------------- |
| Level      | Top            | Middle             | Lowest           |
| Represents | Browser app    | Session            | Tab              |
| Use Case   | Launch browser | Permissions, login | Interact with UI |
| Isolation  | No             | Yes                | No               |


Interview Answer (Perfect)

👉 “In Playwright, browser is the main instance, context is an isolated session like incognito, 
and page represents a tab where we perform actions.”

🧠 Why we used browser instead of page?
🔹 Short Answer

👉 We used browser because we needed to create a custom context (session)

👉 You cannot create context from page
What happens if you try using page?
test("Wrong way", async ({ page }) => {

    // ❌ This is NOT possible
    const context = await page.newContext(); // ERROR ❌
});

Why we needed context here?

Because we wanted to:

👉 Handle browser-level popup (notifications)

permissions: ['notifications']

We use browser instead of page when we need to create a new context, because context 
can only be created from the browser, not from an existing page.”


📘 Why do we write page.on("dialog") BEFORE clicking?
🔹 Short Answer

👉 Because JavaScript alerts appear immediately and block execution
👉 Playwright must be ready BEFORE alert appears

🔥 What happens internally?
Step-by-step flow:
1. You click button
2. Alert appears immediately
3. Browser execution is BLOCKED
4. Playwright cannot continue
❌ WRONG WAY (Common Mistake)
await page.locator("button").click(); // ❌ alert already appeared

page.on("dialog", async dialog => {
    await dialog.accept();
});

👉 Problem:
Alert already shown
Playwright didn’t register listener
❌ Test will hang / fail
✅ CORRECT WAY
page.on("dialog", async dialog => {
    await dialog.accept();
});

await page.locator("button").click();

👉 Now:
Listener is ready
Alert appears → Playwright handles it immediately
🧠 Important Concept (VERY IMPORTANT)

👉 JavaScript alerts are:
Synchronous
Blocking

👉 Meaning:
Browser pauses everything
Until alert is handled
🔥 Real-Life Analogy

👉 Think like:
📞 Phone call example
Alert = Incoming call
page.on("dialog") = Picking phone ready

❌ If you react AFTER call ends → missed
✅ If you’re ready → you answer immediately

⚠️ What Playwright Does by Default
👉 If you DON’T write page.on("dialog"):
👉 Playwright will:
❗ Auto-dismiss alert

But:
❌ You cannot:
Capture message
Validate alert
Enter text (prompt)


await dialog.accept();

👉 This ensures:
Listener + action happen together

🎯 Interview Answer

👉 “We register page.on('dialog') before clicking because JavaScript alerts 
are synchronous and block execution, so Playwright must be ready to handle them before 
they appear.”
*/