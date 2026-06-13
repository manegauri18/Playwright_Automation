
/*await page.keyboard.type('text');
await page.insertText('text');

await page.locator().press('Enter');
await page.locator().press('Tab');
await page.locator().press('Escape');
await page.locator().press('Space');

await page.locator().press('ArrowUp');
await page.locator().press('ArrowDown');
await page.locator().press('ArrowLeft');
await page.locator().press('ArrowRight');

await pag.locator()e.down('Shift');
await page.locator().up('Shift');

await page.locator().press('Control+A');
await page.locator().press('Control+C');
await page.locator().press('Control+V');
await page.locator().press('Control+X');
await page.locator().press('Control+Z');
await page.locator().press('Control+Y');  */

import{test, expect} from "@playwright/test"


test("Keyboard actions", async({page})=>{

await page.goto("https://rahulshettyacademy.com/angularpractice/");

const tab = page.locator("//input[@name='name']").nth(0);

await tab.fill("sagar");

await page.locator("//input[@name='name']").nth(0).press('Control+A');

await page.locator("//input[@name='name']").nth(0).press('Control+C');

await tab.press('Tab');

await page.locator("//input[@name='email']").press('Control+V');

await page.pause()

})















