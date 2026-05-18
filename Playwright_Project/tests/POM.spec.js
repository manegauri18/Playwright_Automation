import { test, expect } from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"

test("TC- 01 - Valid Login - OrangeHRM", async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.openLoginPage();
    await loginPage.Login("Admin", "admin123");
    const heading = await loginPage.getDashboardHeading();
    expect(heading).toContain("Dashboard");

})

test("TC-02 Invalid Login - Orange HRM", async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.openLoginPage();
    await loginPage.Login("Admin", "admin1234");
    const error = await loginPage.getErrorMessage();
    expect(error).toContain("Invalid credentials");

})
//new LoginPage(page) = Construcotr save this.page
//loginPage.openLogn() = page.goto()