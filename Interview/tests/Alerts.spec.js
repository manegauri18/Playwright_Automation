import { test, expect } from "@playwright/test";


test("Alert Hnadling", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    await page.pause()

    page.on("dialog", async dialog => {

        const dialogtext = dialog.message();
        console.log("Dialog test is: ", dialogtext);

        await expect(dialogtext).toBe("I am a JS Alert");

        await dialog.accept();
    })


    await page.locator("//button[text()='Click for JS Alert']").click();

    await expect(page.locator("#result")).toHaveText("You successfully clicked an alert");

})


test("Confirm popup handling", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on('dialog', async dialog => {

        const dialogMsg = dialog.message();

        console.log("dialog text is: ", dialogMsg);
        await expect(dialogMsg).toBe("I am a JS Confirm");
        await dialog.dismiss();
    })


    await page.locator("//button[@onclick='jsConfirm()']").click();

    await expect(page.locator("#result")).toHaveText("You clicked: Cancel");


})

test("Handle JavaScript Prompt", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on("dialog", async dialog => {

        const dialogText1 = dialog.message();
        console.log("Prompt message:", dialogText1);

        await expect(dialogText1).toBe("I am a JS prompt");

        await dialog.accept("Playwright Testing");
    });

    await page.locator('//button[@onclick="jsPrompt()"]').click();

    await expect(page.locator("#result"))
        .toContainText("Playwright Testing");

       console.log(`Timestamp: ${new Date().toISOString()}`);
});


/*
Que1. Why do we register the dialog listener before clicking the button?"
Answer: Because dialogs appear immediately after the click. 
If the listener is added after the click, the dialog may be missed, causing the test to fail or hang.

Que2: Why doesn't auto-waiting work for dialogs?
Answer:Playwright auto-waits for DOM elements.
Dialogs are browser-native popups and not part of the DOM.
Therefore Playwright cannot use locator-based waiting and requires explicit dialog handling.


Que3. 
page.on('dialog') vs page.waitForEvent('dialog')
page.on()
page.on('dialog', async dialog => {
    await dialog.accept();
});

Good for:
Multiple dialogs
Global listener


waitForEvent()
const dialogPromise =
page.waitForEvent('dialog');

await page.click('#btn');

const dialog = await dialogPromise;

await dialog.accept();

Good for: Single dialog, Cleaner code

*/