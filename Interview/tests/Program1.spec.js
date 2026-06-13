
import{test, expect} from "@playwright/test"


test("my first program", async({page})=>{

    await page.goto("https://www.facebook.com/");
})


//  test("Invalid Login", async({page})=>{
//      await page.goto('https://www.facebook.com/');
//   await page.getByRole('textbox', { name: 'Email address or mobile number' }).click();
//   await page.getByRole('textbox', { name: 'Email address or mobile number' }).fill('test@gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('12345678');
//   await page.getByRole('button', { name: 'Log in' }).click();
//   await page.locator('.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x1iyjqo2.x2lwn1j.xl56j7k').first().click();
//   await expect(page.locator('[id="_R_1hmkqsqppb6am_"]')).toContainText('The password you\'ve entered is incorrect.');
//  })


 test("Valid Login", async({page})=>{

    await page.goto('https://eventhub.rahulshettyacademy.com/login');

    await page.locator("#email").fill("khedekar.gauri18@gmail.com");
    await page.locator("#password").fill("Rsa@45678");
    await page.pause();
    await page.locator("#login-btn").click();
    
 })


