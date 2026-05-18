import { test, expect } from "@playwright/test";
import { RegisterPage1 } from "../pages/RegisterPage1";


test("TC-001 : Register a new user", async ({ page }) => {

    const registerPage = new RegisterPage1(page);
    await registerPage.navigateToRegisterPage();

    await registerPage.fillAndSubmit({
        firstName: "Ravi",
        lastName: "Kumar",
        address: "123 Pune",
        email: "Ravi.kumar@test.com",
        phoneNumber: "9876543456"
    })
    await page.waitForTimeout(5000);
})