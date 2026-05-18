import { test, expect } from "@playwright/test";
import process from "process";

/*
====================================================
Test 1: Right Click (Context Click)
====================================================
Concept:
- Right click is used to open context menu
- In Playwright: click({ button: 'right' })
====================================================
*/
test("Mouse Actions - Right Click", async ({ page }) => {

    await page.goto("https://demo.guru99.com/test/simple_context_menu.html");

    // Click on link (normal click)
    await page.locator("//a[contains(text(),'Insurance Project')]").click();

    // Perform right click
    await page.locator('//span[@class="context-menu-one btn btn-neutral"]')
        .click({ button: "right" });

    await page.waitForTimeout(3000);
});


/*
====================================================
Test 2: Double Click
====================================================
Concept:
- Double click triggers special events
- In Playwright: dblclick()
====================================================
*/
test("Double click", async ({ page }) => {

    await page.goto("https://demo.guru99.com/test/simple_context_menu.html");

    // Handle alert before action
    page.on("dialog", async dialog => {
        console.log("Alert message:", dialog.message());
        await dialog.accept();
    });

    // Perform double click
    await page.locator('//button[@ondblclick="myFunction()"]').dblclick();

    await page.waitForTimeout(3000);
});


/*
====================================================
Test 3: Mouse Hover
====================================================
Concept:
- Hover is used to reveal hidden elements (dropdown/menu)
- In Playwright: hover()
====================================================
*/
test("Mouse hover", async ({ page }) => {

    await page.goto("https://www.amazon.in/");

    const element = page.locator("#nav-link-accountList");

    // Hover on element
    await element.hover();

    await page.waitForTimeout(2000);

    // Click submenu option
    await page.locator("//span[contains(text(),'Your Orders')]").click();
});


/*
====================================================
Test 4: Drag and Drop
====================================================
Concept:
- Move element from source → target
- In Playwright: dragTo()
- Important: handle iframe properly
====================================================
*/
test("Drag and Drop", async ({ page }) => {

    await page.goto("https://www.globalsqa.com/demo-site/draganddrop/");

    const frame = page.frameLocator("iframe.demo-frame");

    const src = frame.locator('//img[@alt="The chalet at the Green mountain lake"]');
    const dest = frame.locator("#trash");

    // Drag and drop action
    await src.dragTo(dest);

    await page.waitForTimeout(3000);
});


/*
====================================================
Test 5: Keyboard Actions (Copy-Paste)
====================================================
Concept:
- Keyboard shortcuts simulate real user behavior
- Use Meta (Mac) or Control (Windows)
====================================================
*/
test.only("Keyboard Actions", async ({ page }) => {

    await page.goto("https://www.facebook.com/");

    const input1 = page.locator('//input[@name="email"]');
    const input2 = page.locator('//input[@name="pass"]');

    // Enter text
    await input1.fill("Test@gmail.com");

    // Detect OS
    const modifyKey = process.platform === "darwin" ? "Meta" : "Control";

    // Select all + Copy
    await input1.press(`${modifyKey}+A`);
    await input1.press(`${modifyKey}+C`);

    await page.waitForTimeout(2000);

    // Move to password field
    await input1.press("Tab");

    // Paste
    await input2.press(`${modifyKey}+V`);

    // Validation
    const emailTxt = await input1.inputValue();
    const passTxt = await input2.inputValue();

    console.log("Email:", emailTxt);
    console.log("Password:", passTxt);

    await expect(emailTxt).toBe(passTxt);

    // ❌ Incorrect syntax (teaching point)
    // await input1.press("Control +A") ❌ space not allowed

    // ✅ Correct
    await input1.press("Control+A");

});

/*
1. How to perform right click in Playwright?
👉 Use:

await locator.click({ button: "right" });
✔ Opens context menu
✔ No Actions class required

2. How to perform double click?
👉 Use:
await locator.dblclick();

✔ Triggers double-click event

3. How to perform mouse hover?
👉 Use:
await locator.hover();
✔ Used for dropdowns and hidden elements

4. How to perform drag and drop?
👉 Use:
await source.dragTo(target);

✔ Simple and built-in

5. What if drag and drop does not work?

👉 Use low-level mouse actions:

await page.mouse.move(x, y);
await page.mouse.down();
await page.mouse.move(x2, y2);
await page.mouse.up();

9. How to press keyboard keys?

👉 Use:
await page.keyboard.press("Enter");

✔ Simulates key press

10. How to perform copy-paste?
const modifier = process.platform === "darwin" ? "Meta" : "Control";
await locator.press(`${modifier}+A`);
await locator.press(`${modifier}+C`);
await locator.press(`${modifier}+V`);

✔ Works for both Mac and Windows

11. Difference between locator.press() and keyboard.press()
👉 locator.press()
✔ Works on a specific element

👉 keyboard.press()
✔ Works globally on the page

12. What is keyboard.down() and keyboard.up()?

👉 keyboard.down() → Holds the key
👉 keyboard.up() → Releases the key

✔ Used for combinations like SHIFT + A

13. How to validate input value?

👉 Use:
await locator.inputValue();

✔ Returns value from input field

14. Common mistake in keyboard actions?

❌ Wrong:
await locator.press("Control +A");

✅ Correct:
await locator.press("Control+A");

*/