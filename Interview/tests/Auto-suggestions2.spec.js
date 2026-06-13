import { test, expect } from "@playwright/test"


test('Select desired suggestion from MakeMyTrip', async ({ page }) => {

    await page.goto("https://www.makemytrip.com/flights/?utm_source=chatgpt.com");

    // Check whether popup is visible
    const popup = expect(page.locator("//span[@data-cy='closeModal']")).toBeVisible;

    // If popup exists, close it
    if (popup) {
        await page.locator("//span[@data-cy='closeModal']").click();
    }
    else {
        console.log("Popup not visible");
    }

    // Click on From City field
    await page.locator("//input[@id='fromCity']").click();

    // Enter Maharashtra in search box
    await page.locator("//input[@placeholder='From']").fill('maharashtra');

    // Capture all suggested options
    const suggestedOptions = page.locator("//ul[@role='listbox']//li");

    // Get total number of suggestions
    const count = await suggestedOptions.count();
    console.log("Count: ", count);

    
    for (let i = 0; i < count; i++) {

        const text = await suggestedOptions.nth(i).textContent();

        if (text.includes("Shirdi")) {

            await suggestedOptions.nth(i).click();
            break;
        }
    }

});


// test('Select desired suggestion from MakeMyTrip', async ({ page }) => {

//     await page.goto("https://www.makemytrip.com/flights/?utm_source=chatgpt.com");

//     //await page.pause();

//     const popup = page.locator("//span[@data-cy='closeModal']");

//     if (await popup.isVisible().catch(() => false)) {
//         await popup.click();
//     }


  

// });
