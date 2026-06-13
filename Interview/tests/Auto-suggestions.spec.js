import { test, expect } from "@playwright/test"

/*
Q: How do you handle Auto Suggestion dropdowns in Playwright?
Answer:
Enter text into the input field.
Wait for suggestion list to appear.
Capture all suggestions using a locator.
Iterate through suggestions.
Compare text with expected value.
Click the matching suggestion.
If suggestions are keyboard-controlled, use ArrowDown and Enter.
*/

test('Select desired suggestion from Google', async ({ page }) => {

    await page.goto("https://www.google.com");

    await page.locator('textarea[name="q"]').fill('playwright');

    // Close popup if it appears
    const popup = page.locator("//button[text()='Do not use Chrome']");

    if (await popup.isVisible().catch(() => false)) {
        await popup.click();
    }

    await page.locator('//ul[@role="listbox"]//li').first().waitFor();

    // Wait for suggestions to appear
    const suggestions = page.locator('//ul[@role="listbox"]//li');

    const count = await suggestions.count();

    for (let i = 0; i < count; i++) {

        const text = await suggestions.nth(i).textContent();

        console.log(text);

        if (text.includes('playwright tutorial')) {

            await suggestions.nth(i).click();
            break;
        }
    }
});

test('Handling auto-suggestion from Red Bus', async ({ page }) => {

    await page.goto("https://www.redbus.in/");

    await page.locator("//input[@class='inputField___645031' and (@id='srcinput')]").fill("Pune");

    //await page.pause();


    await page.locator("//div[@class='searchSuggestionWrapper___defd2c' and (@aria-label='Search suggestions list')]").waitFor();


    const List = page.locator('//div[@aria-label="Popular Boarding Points near you"]//div[@class="listHeader___224ec6"]');

    const count = await List.count();

    console.log("Count: ", count);

    for (let i = 0; i < count; i++) {

        const text = await List.nth(i).textContent();

        if (text.includes('Swargate')) {

            await List.nth(i).click();
            break;

        }

    }
})



test('Handling auto-suggestion from RS Academy', async ({ page }) => {


    await page.goto("https://rahulshettyacademy.com/AutomationPractice/?utm_source=chatgpt.com");

    //await page.pause();

    await page.getByPlaceholder("Type to Select Countries").fill("US");


    const suggestedOptions = page.locator("//ul[@id='ui-id-1']//li")

    await suggestedOptions.first().waitFor();

    expect(suggestedOptions.first()).toBeVisible();


    const count = await suggestedOptions.count()

    console.log("Count: ", count);

    for (let i = 0; i < count; i++) {

        const text = await suggestedOptions.nth(i).textContent();

        if (text.includes('United States (USA)')) {
            await suggestedOptions.nth(i).click();
            break;
        }
    }
})

