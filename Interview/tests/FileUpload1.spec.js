import { test, expect } from '@playwright/test';

test('Upload File @sanity', async ({ page }) => {

   await page.goto('/upload');

   await page.locator("#file-upload").setInputFiles("./testData/If_Else_If_Else_Statement.txt");

   //Remove Uploaded File
   //await page.locator('#file-upload').setInputFiles([]);

   await page.locator("#file-submit").click();

   await expect(page.locator("h3")).toHaveText("File Uploaded!");
   console.log("file uploaded")


})