import { test, expect } from "@playwright/test"
import xlsx from "xlsx"


const workbook = xlsx.readFile("/Users/ranjeetkendre/Desktop/PlaywrightAutomation/28_feb_PlaywrightAutomationT/TestData/Excel.xlsx")
const sheet = workbook.Sheets['TestData']
const testData = xlsx.utils.sheet_to_json(sheet);
console.log(testData);

for (const data of testData) {

    test(`Login test for user :${data.password}`, async ({ page }) => {

        await page.goto("https://www.saucedemo.com/");
        await page.locator("#user-name").fill(data.username);
        await page.locator("#password").fill(data.password);
        await page.locator("#login-button").click();

        if (data.expectedResult === "success") {
            await expect(page.locator('.title')).toHaveText("Products");
        }
        else {
            await expect(page.locator('[data-test="error"]')).toBeVisible();
        }
    });

}
test.skip("Test Data", async () => {

    const workbook = xlsx.readFile("/Users/ranjeetkendre/Desktop/PlaywrightAutomation/28_feb_PlaywrightAutomationT/TestData/TestDataEx.xlsx")
    const sheet = workbook.Sheets['Sheet1']
    const rows = xlsx.utils.sheet_to_json(sheet);
    console.log(rows);

    //Access firs row
    console.log(rows[0]);
    //Access aspecific column value from a row

    console.log(rows[0].username);
    console.log(rows[0].password);

    console.log(rows[1].username);
    console.log(rows[1].password);

    for (const [index, row] of rows.entries()) {
        console.log(`Row ${index + 1}:UserName = ${row.username}, Password = ${row.password}`);
    }
})
