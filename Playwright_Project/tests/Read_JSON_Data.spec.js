import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";
import logindata from "../TestData/userData2.json";
import testData from "../TestData/nesttedLogindata.json";


test("Read json Data", async () => {

    // Create file path
    const filePath = path.join(__dirname, "../TestData/userData1.json");

    // Read file
    const rowData = fs.readFileSync(filePath, "utf-8");

    // Convert JSON string to JavaScript object
    const loginData = JSON.parse(rowData);
    console.log(loginData);
});

for (const data of logindata) {
    test(`Orange Login test - ${data.username}`, async ({ page }) => {

        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        await page.locator("input[name='username']").fill(data.username);
        await page.locator("input[name= 'password']").fill(data.password);
        await page.locator('button[type= "submit"]').click();
        await page.locator('//input[@id="file-upload"]').fill("")

        if (data.expectedResult === "success") {
            await expect(page).toHaveTitle("OrangeHRM");;
        }
        else {
            await expect(page.locator('//div[@class="oxd-alert oxd-alert--error"]')).toContainText("Invalid credentials");
        }
    })
}

for (const data of testData) {

    test(`${data.testID} - Nested JOSN Login test`, async ({ page }) => {


        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        await page.locator("input[name='username']").fill(data.credentials.username);
        await page.locator("input[name= 'password']").fill(data.credentials.password);
        await page.locator('button[type= "submit"]').click();

        if (data.expected.result === "success") {

            await expect(page.locator('h6')).toHaveText(data.expected.heading);
        }
        else {
            await expect(page.locator('//div[@class="oxd-alert oxd-alert--error"]')).toBeVisible();
        }
    })
}

//How do you run a test multiple times using json data
// ..Load the data array amd use for of  to cal; test(), once per object

// for(const data of testdata){
//     test(`${data.testID} - Nested JOSN Login test`, async ({ page }) => {
// }