const { expect } = require('@playwright/test');

class OrangeHRMLoginPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.getByRole('button', { name: /Login/i });
    this.forgotPasswordLink = page.locator('p:has-text("Forgot your password?")');
    this.errorMessage = page.locator('.oxd-alert-content-text');
  }

  async goto() {
    await this.page.context().clearCookies();
    await this.page.goto(this.url);
    await this.page.waitForLoadState('domcontentloaded');
    await this.usernameInput.waitFor({ state: 'visible', timeout: 10000 });
    await this.loginButton.waitFor({ state: 'visible', timeout: 10000 });
    await expect(this.page).toHaveURL(/auth\/login/);
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async isUsernameVisibleAndEnabled() {
    return await this.usernameInput.isVisible() && await this.usernameInput.isEnabled();
  }

  async isPasswordVisibleAndEnabled() {
    return await this.passwordInput.isVisible() && await this.passwordInput.isEnabled();
  }

  async isLoginButtonVisibleAndEnabled() {
    return await this.loginButton.isVisible() && await this.loginButton.isEnabled();
  }

  async isForgotPasswordLinkVisible() {
    return await this.forgotPasswordLink.isVisible();
  }

  async getUsernamePlaceholder() {
    return await this.usernameInput.getAttribute('placeholder');
  }

  async getPasswordPlaceholder() {
    return await this.passwordInput.getAttribute('placeholder');
  }

  async isPasswordMasked() {
    return (await this.passwordInput.getAttribute('type')) === 'password';
  }

  async getErrorMessage() {
    await expect(this.errorMessage).toBeVisible();
    return this.errorMessage.textContent();
  }
}

module.exports = { OrangeHRMLoginPage };