import { test, expect } from "@playwright/test";
import { resolve } from "path";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

test("Broekn Link", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const linksLocators = page.locator("a");

    const totalLinks = await linksLocators.count();

    console.log(`Total links founds : ${totalLinks}`);

    let brokenLinks = 0;
    let validLinks = 0;
    let skippedLinks = 0;

    for (let i = 0; i < totalLinks; i++) {

        const url = await linksLocators.nth(i).getAttribute('href');
        const text = await linksLocators.nth(i).textContent();

        const linkText = text ? text.trim() : "No Text"

        if (!url || url.trim() === " " || url.startsWith('javascript') || url.startsWith('#')) {
            console.log(`Skipping invalid links : ${url} | Text :${linkText}`);
            skippedLinks++;
            continue;
        }

        await delay(500);

        try {
            //convert realtive URL into absolute URL
            const fullurl = new URL(url, page.url()).href;
            //Creae timeout controller

            const controller = new AbortController();

            const timeOutID = setTimeout(() => controller.abort(), 10000);

            const response = await fetch(fullurl);
            clearTimeout(timeOutID);

            if (response.status >= 400) {
                console.log(`${response.status}:Broken link --> ${fullurl} | ${linkText}`);
                brokenLinks++;
            }
            else {
                console.log(`${response.status}:Valid link --> ${fullurl} | ${linkText}`);
                validLinks++;
            }
        }
        catch (error) {

            console.log(`Unable to access ${url} | Text : ${linkText} | ${error.message}`);
            brokenLinks++;
        }

    }

    console.log("======== Links Report ==========");

    console.log(`Total found links : ${totalLinks}`);
    console.log(`Valid Links :${validLinks}`);
    console.log(`Broken Links :${brokenLinks}`);
    console.log(`Skipped Links :${skippedLinks}`);

    expect(totalLinks).toBeGreaterThan(0);
    expect(brokenLinks).toBeLessThan(totalLinks);
})