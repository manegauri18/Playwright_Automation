import { test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';

test('Download File', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/download');

    const [download] = await Promise.all([
        page.waitForEvent('download'),    //listens for the event download
        page.locator("text=some-file.txt").click()
    ]);

    const filePath = path.join(
        process.cwd(),
        'downloads',
        download.suggestedFilename()
    );

   
    await download.saveAs(filePath);

    expect(fs.existsSync(filePath)).toBeTruthy();

});

/*

waitForEvent('download') --- listens for the download.
           Promise.all() ---prevents race conditions.
     suggestedFilename() ---gets the actual downloaded file name.
                saveAs() ---stores the file in your desired location.

*/