import { test, expect } from "@playwright/test";

test("Window Handling", async ({ browser }) => {

    // Step 1 - Create a new browser context
    const context = await browser.newContext();

    // Step 2 - Open new page
    const page = await context.newPage();

    // Step 3 - Navigate to the website
    await page.goto("https://demo.automationtesting.in/Windows.html");

    // Step 4 - Handle new window
    const [childPage] = await Promise.all([
        context.waitForEvent('page'),
        page.click('//button[@class="btn btn-info"]')
    ]);

    await childPage.waitForLoadState('domcontentloaded');

    console.log("Child window URL:", childPage.url());
    console.log("Child window title:", await childPage.title());

    await page.waitForTimeout(5000);
    await childPage.close();
    await page.waitForTimeout(2000);

    await page.bringToFront(); //optional
    await page.waitForTimeout(2000);

    console.log("parent window title:", await page.title());

    //driver.switch, - 
    //palywirght - Not required
});

//Browser,nextContext - create a new browser session
//browser - chrome 
//context - Incognito window
//Page = tab


//What is context -  context is the object retrune by newContext

//Open new tab - context.newPage();
//Listen for new tab -  context.waitForEvent('page'),
//get all tab -  context.pages()
//close session - context.close()l

// //In playwirght multiple windows or tabs are handle as seprate page object within the same
// browsercontext, we capture the new page using event line context.waitforEvent('page'),
// page.waitforEvent('popup') then interact with it and switch back if Need//


//Promise.all - is used to run multiple async operation in parallerl and wait for all
// if then to complete


//Browser - represent the actual browser instance  ()
//page - A page represrtn a single tab ot win dow indide the browser

//Browser -- Context - page 
//browser - chrome application
//context - Incognito window - seprate user session
//page - Tab inside that windows


test.only("Muptiple browser", async ({ browser }) => {

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("https://demo.automationtesting.in/Windows.html")

    await page.locator("//a[contains(text(),'Open New Seperate Windows')]").click();

    //Handle new window using promise all

    const [newPage] = await Promise.all([
        context.waitForEvent('page'), //wait for new windows/tab
        await page.click('//button[@class="btn btn-primary"]')
    ])

    await newPage.waitForLoadState('domcontentloaded')

    let expectedText = "Selenium automates browsers. That's it!";

    const actualText = await newPage.locator("h1").textContent();

    const AT = await newPage.textContent('h1')

    await expect(AT).toBe(expectedText);

    console.log(await newPage.url());
    console.log(await newPage.title());

    await page.waitForTimeout(3000);
    await page.bringToFront();
    await page.waitForTimeout(3000);
    let text = await page.textContent('h1');
    console.log(text);

})