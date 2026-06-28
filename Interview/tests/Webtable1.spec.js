import { test, expect } from "@playwright/test"


test('Count Rows and columns', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //1. rows count
    const rows = page.locator('#productTable tbody tr');
    console.log('Total Rows:', await rows.count());
    await expect(await rows.count()).toBe(5);

    //2. column count
    const columns = page.locator('#productTable th');
    console.log('Total Columns:', await columns.count());
    await expect(await columns.count()).toBe(4);


    //3. select specific product from table

    // const matchedRow = await rows.filter({
    //     has: page.locator('td'),
    //     hasText: 'Tablet'
    // })

    // await matchedRow.locator('input').check();


    await selectProduct(rows, page, 'Smartwatch');
    await selectProduct(rows, page, 'Laptop');

    await page.waitForTimeout(5000);
    

    //5. Print all data in table from page1 using loop

    for (let i = 0; i < await rows.count(); i++) {

        const row = await rows.nth(i);
        const tds = await row.locator('td'); //get all td of that row

        let rowData = []; //to print data in single line, used array to store data of each row

        for (let j = 0; j < await tds.count() - 1; j++) {
            rowData.push((await tds.nth(j).textContent()).trim());
        }
        console.log(rowData.join(' | ')); //join method is used to print data in single line with separator
    }


    //Read data from all the pages in table

    const pages = await page.locator('.pagination li a');
    console.log('Total Pages:', await pages.count());

    for (let p = 0; p < await pages.count(); p++) {

        if (p > 0) {
            await pages.nth(p).click();
            await page.waitForTimeout(1000);
        }

        for (let i = 0; i < await rows.count(); i++) {

            const row = await rows.nth(i);
            const tds = await row.locator('td');

            let rowData = [];

            for (let j = 0; j < await tds.count() - 1; j++) {
                rowData.push((await tds.nth(j).textContent()).trim());
            }
            console.log(rowData.join(' | '));
        }
        await page.waitForTimeout(3000);
    }

});

//4. select multiple products from table by using reusable function

async function selectProduct(rows, page, name) {

    const matchedRow = await rows.filter({
        has: page.locator('td'),
        hasText: name
    })

    await matchedRow.locator('input').check();
}
