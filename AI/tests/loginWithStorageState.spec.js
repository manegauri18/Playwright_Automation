import { test, expect } from '../fixture/authFixture';

test('Verify storage state', async ({myAuthFixure}) => {

    await myAuthFixure.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await expect(myAuthFixure.locator('//h6[text()="Dashboard"]')).toBeVisible();

    

});