import { test, expect } from "@playwright/test";
import { sauuceLogin } from "../pages/sauuceLogin";
import { InventoryPage } from "../pages/InventoryPage";


test("TC-001 Valid Login", async ({ page }) => {

    const loginPage = new sauuceLogin(page);
    const inventory = new InventoryPage(page);

    await loginPage.openApp();

    await loginPage.Login("standard_user", 'secret_sauce');

    const title = await inventory.getPageTitle();
    expect(title).toBe("Products");
})

test("TC-001 Valid Login 2", async ({ page }) => {

    const loginPage = new sauuceLogin(page);
    const inventory = new InventoryPage(page);

    await loginPage.openApp();

    await loginPage.Login("standard_user", 'secret_sauce');


    await inventory.addFirstItemTocart();
    const count = await inventory.getCartCount();
    expect(count).toBe('1');
})

test("TC-001 Locked user", async ({ page }) => {

    const loginPage = new sauuceLogin(page);
    await loginPage.openApp();

    await loginPage.Login("locked_out_user", 'secret_sauce');

    expect(await loginPage.isErrorVisbile()).toBe(true);
    expect(await loginPage.getErrorText()).toContain("locked out");
})