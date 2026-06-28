import { test as base, expect } from '@playwright/test';

export const test = base.extend({
    myAuthFixure: async ({ page }, use) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    // Check if redirected to login page
    if ( page.url().includes('/login')) {
      await page.fill('input[name="username"]', 'Admin');
      await page.fill('input[name="password"]', 'admin123');
      await page.click('button[type="submit"]');
      
      await expect(page).toHaveURL(/dashboard/);

      await page.context().storageState({ path: 'auth/user.json'});
    }

    await use(page);
  
  }

});

export { expect };