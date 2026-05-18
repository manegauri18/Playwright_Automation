import { test, expect} from "@playwright/test"


test("Handling windows", async ({ page, context }) => {

    await page.goto("https://the-internet.herokuapp.com/windows");

    await expect(page).toHaveTitle("The Internet");

    

    // Listen + click (IMPORTANT)
    //Use Promise.all to run both actions simultaneously // Why? → Prevents missing the new tab event (avoids flaky tests)
    //Store the newly opened tab in 'newPage' -> Now you can perform actions on the child window using newPage
        const [newPage] = await Promise.all([
        context.waitForEvent('page'), //triggers when a new tab opens
        page.getByText('Click Here').click() // Clicking this link opens a new window/tab
    ]);


    await newPage.waitForLoadState();

    await expect(newPage).toHaveTitle("New Window");

    // Bring parent page back
    await page.bringToFront();

    const text = await page.locator("//div[@class='example']/h3").textContent();
    console.log("text is:", text);
});


//👉 “Promise.all() is used to execute multiple asynchronous operations in parallel and wait for all of them to complete. 
// In Playwright, it prevents race conditions by ensuring event listeners are registered before triggering actions.