const { test, expect } = require('@playwright/test');
const { OrangeHRMLoginPage } = require('../pages/orangeHRMLoginPage');
const { OrangeHRMDashboardPage } = require('../pages/orangeHRMDashboardPage');

test.use({ storageState: undefined });

test.describe('OrangeHRM login tests', () => {
  test('should login successfully with valid credentials', async ({ page }) => {
    const loginPage = new OrangeHRMLoginPage(page);
    const dashboardPage = new OrangeHRMDashboardPage(page);

    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');

    await dashboardPage.waitForDashboard();
    await expect(dashboardPage.dashboardHeading).toBeVisible();
    await expect(page).toHaveURL(/dashboard/);
  });

  test('should show error message for invalid credentials', async ({ page }) => {
    const loginPage = new OrangeHRMLoginPage(page);

    await loginPage.goto();
    await loginPage.login('WrongUser', 'WrongPass');

    const error = await loginPage.getErrorMessage();
    await expect(error).toContain('Invalid credentials');
    await expect(page).toHaveURL(/auth\/login/);
  });

  test('should display username textbox visible and enabled', async ({ page }) => {
    const loginPage = new OrangeHRMLoginPage(page);

    await loginPage.goto();
    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.usernameInput).toBeEnabled();
  });

  test('should display password textbox visible and enabled', async ({ page }) => {
    const loginPage = new OrangeHRMLoginPage(page);

    await loginPage.goto();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeEnabled();
  });

  test('should display login button visible and enabled', async ({ page }) => {
    const loginPage = new OrangeHRMLoginPage(page);

    await loginPage.goto();
    await expect(loginPage.loginButton).toBeVisible();
    await expect(loginPage.loginButton).toBeEnabled();
  });

  test('should display forgot password link', async ({ page }) => {
    const loginPage = new OrangeHRMLoginPage(page);

    await loginPage.goto();
    await expect(loginPage.forgotPasswordLink).toBeVisible();
  });

  test('should display correct username and password placeholders', async ({ page }) => {
    const loginPage = new OrangeHRMLoginPage(page);

    await loginPage.goto();
    await expect(await loginPage.getUsernamePlaceholder()).toContain('Username');
    await expect(await loginPage.getPasswordPlaceholder()).toContain('Password');
  });

  test('should mask password input', async ({ page }) => {
    const loginPage = new OrangeHRMLoginPage(page);

    await loginPage.goto();
    await expect(await loginPage.isPasswordMasked()).toBeTruthy();
  });
});