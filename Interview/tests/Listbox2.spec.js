import { test, expect } from "@playwright/test";

test("Handle Dropdown using Loop Method", async ({ page }) => {

    console.log("Test Started");

    await page.goto('https://www.wikipedia.org/');
    console.log(" Opened Wikipedia");

    // Enter value
    await page.locator('#searchInput').fill("Cricket World Cup");
    console.log("⌨️ Entered search text");

    const suggestedOption = page.locator('.suggestion-text');

    // Wait for suggestions
    await expect(suggestedOption.first()).toBeVisible();
    console.log(" Suggestions are visible");

    // Fetch all suggestions
    const allresult = await suggestedOption.allTextContents();

    console.log("All Suggestions:");
    console.log(allresult);

    // Validate count
    expect(allresult.length).toBeLessThanOrEqual(6);
    console.log("Count validation passed");

    // -----------------------------
    //  Loop Method (Important)
    // -----------------------------
    let isSelected = false;

    for (let i = 0; i < allresult.length; i++) {

        console.log(`🔎 Checking: ${allresult[i]}`);

        if (allresult[i].toLowerCase().includes('cricket world cup')) {

            console.log(` Match Found: ${allresult[i]}`);

            await suggestedOption.nth(i).click();

            isSelected = true;
            break;
        }
    }
    // -----------------------------
    //  Validation after loop
    // -----------------------------
    expect(isSelected).toBeTruthy();
    console.log(" Value selected successfully");

    // Validate navigation
    await expect(page).toHaveURL(/Cricket_World_Cup/);
    console.log(" Navigation validation passed");

    console.log("Test Completed Successfully");

});