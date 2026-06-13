import { test, expect } from "@playwright/test"

/*
 * Playwright Built-in Locators Demo
 * This file demonstrates various built-in locators in Playwright
 */

// getByRole - Locates elements by their ARIA role
test("Register user using getByRole", async ({ page }) => {

    await page.goto('https://demo.automationtesting.in/Register.html');

    // Fill first name using textbox role and name attribute
    await page.getByRole('textbox', { name: 'First Name' }).fill("Ketan");
    // Fill last name using button role and name attribute
    await page.getByRole("button", { name: 'Last Name' }).fill('Jadhav');
    await page.waitForTimeout(5000);
});

// getByRole - Login test with assertion
test("Login using getByRole", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // Enter username in textbox with name attribute
    await page.getByRole('textbox', { name: 'username' }).fill('Admin');
    // Enter password in textbox with name attribute
    await page.getByRole('textbox', { name: 'password' }).fill('admin123');
    // Click login button
    await page.getByRole('button', { name: 'Login' }).click();

    await page.waitForTimeout(3000);

    // Verify dashboard is visible after login
    const dashboard = await page.getByRole('heading', { name: 'Dashboard' }).isVisible();

    if (dashboard) {
        console.log("Login successful");
    }
    else {
        console.log("Login failed");
    }
});

// getByLabel - Locates form elements by their label text
test("Login using getByLabel", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/login")

    // Fill username using label text
    await page.getByLabel('Username').fill("tomsmith");
    // Fill password using label text
    await page.getByLabel('Password').fill("SuperSecretPassword!");
    // Click login button
    await page.getByRole('button', { name: 'Login' }).click();

    // Assert success message is visible
    await expect(page.getByText('You logged into a secure area!')).toBeVisible();
});

// getByText - Locates elements by their text content
test("Login using getByText", async ({ page }) => {

    await page.goto("https://www.facebook.com/");
    // Click on link containing exact text
    await page.getByText("Forgotten password?").click();
    await page.waitForTimeout(5000);
});

// getByPlaceholder, getByTestId, getByTitle - Other built-in locators
test.only('Login using various locators', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // getByTestId - Locates by data-testid attribute
    await page.getByTestId('Username').fill("Admin");
    // getByTitle - Locates element by title attribute
    await page.getByTitle('Password').fill("admin123");
    // Click login button
    await page.getByRole('button', { name: 'Login' }).click();
});
