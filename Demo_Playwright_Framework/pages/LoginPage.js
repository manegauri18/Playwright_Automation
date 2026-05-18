// ============================================================
// Login Page - Enterprise E2E Automation Framework
// ============================================================
//
// Page Object for Login functionality on demoblaze.com
// Contains: login, logout, error validation methods
//
// ============================================================

const BasePage = require('./BasePage');
const Logger = require('../utils/Logger');

class LoginPage extends BasePage {
    /**
     * Constructor - Initialize LoginPage selectors
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        super(page);

        // Selectors for Login Page elements
        this.loginNavLink = '#login2';
        this.loginModal = '#logInModal';
        this.usernameInput = '#loginusername';
        this.passwordInput = '#loginpassword';
        this.loginButton = "button[onclick='logIn()']";
        this.closeLoginModal = '#logInModal .btn-secondary';

        this.signUpNavLink = '#signin2';
        this.signUpModal = '#signInModal';
        this.signUpUsername = '#sign-username';
        this.signUpPassword = '#sign-password';
        this.signUpButton = "button[onclick='register()']";

        this.logoutNavLink = '#logout2';
        this.welcomeUser = '#nameofuser';
    }

    /**
     * Click Login navigation link to open login modal
     */
    async clickLoginNav() {
        Logger.info('Clicking Login navigation link');

        await this.waitForElement(this.loginNavLink);
        await this.clickElement(this.loginNavLink);
        await this.wait(1000);
    }

    /**
     * Enter username in login form
     * @param {string} username - Username to enter
     */
    async enterUsername(username) {
        Logger.info(`Entering username: ${username}`);

        await this.waitForElement(this.usernameInput);
        await this.enterText(this.usernameInput, username);
    }

    /**
     * Enter password in login form
     * @param {string} password - Password to enter
     */
    async enterPassword(password) {
        Logger.info('Entering password');

        await this.enterText(this.passwordInput, password);
    }

    /**
     * Click Login button to submit login form
     */
    async clickLoginButton() {
        Logger.info('Clicking Login button');

        await this.clickElement(this.loginButton);
    }

    /**
     * Complete login flow - opens modal, enters credentials, clicks login
     * @param {string} username - Username
     * @param {string} password - Password
     */
    async login(username, password) {
        Logger.info(`Performing login with user: ${username}`);

        await this.clickLoginNav();
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();

        await this.wait(2000);
    }

    /**
     * Perform logout by clicking Logout nav link
     */
    async logout() {
        Logger.info('Performing logout');

        await this.waitForElement(this.logoutNavLink);
        await this.clickElement(this.logoutNavLink);

        await this.wait(1000);
    }

    /**
     * Verify if user is logged in by checking Welcome message
     * @returns {Promise<boolean>} - True if logged in
     */
    async isLoggedIn() {
        try {
            await this.waitForElement(this.welcomeUser, 5000);

            const text = await this.getText(this.welcomeUser);

            Logger.info(`Welcome text: ${text}`);

            return text.includes('Welcome');
        } catch {
            return false;
        }
    }

    /**
     * Get welcome user text after login
     * @returns {Promise<string>} - Welcome text
     */
    async getWelcomeText() {
        await this.waitForElement(this.welcomeUser);

        return await this.getText(this.welcomeUser);
    }

    /**
     * Verify login nav link is visible (user is logged out)
     * @returns {Promise<boolean>}
     */
    async isLoginNavVisible() {
        return await this.isElementVisible(this.loginNavLink);
    }

    /**
     * Verify logout nav link is visible (user is logged in)
     * @returns {Promise<boolean>}
     */
    async isLogoutNavVisible() {
        return await this.isElementVisible(this.logoutNavLink);
    }

    /**
     * Perform sign up with new credentials
     * @param {string} username - New username
     * @param {string} password - New password
     */
    async signUp(username, password) {
        Logger.info(`Performing sign up with user: ${username}`);

        await this.clickElement(this.signUpNavLink);
        await this.wait(1000);

        await this.enterText(this.signUpUsername, username);
        await this.enterText(this.signUpPassword, password);

        await this.clickElement(this.signUpButton);

        await this.wait(1000);
    }
}

module.exports = LoginPage;