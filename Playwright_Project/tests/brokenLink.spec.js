import { test, expect } from '@playwright/test';

test('Check broken links', async ({ page, request }) => {

    await page.goto('https://rustylinks.zomdir.com/');

    // Get all links
    const links = await page.locator('a').all();
   
    for (const link of links) 
    {

        // Get href value
        const url = await link.getAttribute('href');

        try {

            // Send request
            const response = await request.get(url);

            // Get status code
            const status = response.status();

            if (status >= 400) {

                console.log(`Broken Link: ${url} | Status: ${status}`);

            } 

        } 
        catch (error) {

            console.log(`⚠️ Error with link: ${url}`);
        }
    }
});