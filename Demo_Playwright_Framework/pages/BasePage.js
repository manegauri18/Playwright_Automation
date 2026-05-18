// ============================================================
// Base Page - Enterprise E2E Automation Framework
// ============================================================
//
// Contains all reusable generic methods used across page objects
// Every page object extends this BasePage for code reusability
// Methods: click, type, getText, wait, scroll, hover, screenshot, etc.
//
// ============================================================

const Logger = require('../utils/Logger');

class BasePage {

    /**
     * Constructor - Initializes page object with Playwright page instance
     * @param {import('@playwright/test').Page} page - Playwright page
     */
    constructor(page) {
        this.page = page;
    }

    /**
     * Navigate to specified URL
     * @param {string} url - URL to navigate to
     */
    async navigateTo(url) {
        Logger.info(`Navigating to: ${url}`);
        await this.page.goto(url, { waitUntil: 'load', timeout: 30000 });
    }

    /**
     * Click on element identified by selector
     * @param {string} selector - Element selector
     */
    async clickElement(selector) {
        Logger.info(`Clicking element: ${selector}`);
        await this.page.locator(selector).click();
    }

    /**
     * Enter text into input field
     * @param {string} selector - Input field selector
     * @param {string} text - Text to enter
     */
    async enterText(selector, text) {
        Logger.info(`Entering text in: ${selector}`);
        await this.page.locator(selector).fill(text);
    }

    /**
     * Get text content of element
     * @param {string} selector - Element selector
     * @returns {Promise<string>} - Text content
     */
    async getText(selector) {
        const text = await this.page.locator(selector).textContent();
        Logger.info(`Got text from ${selector}: ${text}`);
        return text;
    }

    /**
     * Get inner text of element
     * @param {string} selector - Element selector
     * @returns {Promise<string>} - Inner text
     */
    async getInnerText(selector) {
        const text = await this.page.locator(selector).innerText();
        Logger.info(`Got inner text from ${selector}: ${text}`);
        return text;
    }

    /**
     * Get attribute value of element
     * @param {string} selector - Element selector
     * @param {string} attribute - Attribute name
     * @returns {Promise<string>} - Attribute value
     */
    async getAttribute(selector, attribute) {
        return await this.page.locator(selector).getAttribute(attribute);
    }

    /**
     * Wait for element to be visible
     * @param {string} selector - Element selector
     * @param {number} timeout - Max wait time in ms
     */
    async waitForElement(selector, timeout = 15000) {
        Logger.info(`Waiting for element: ${selector}`);
        await this.page.locator(selector).waitFor({ state: 'visible', timeout });
    }

    /**
     * Wait for element to be hidden
     * @param {string} selector - Element selector
     * @param {number} timeout - Max wait time in ms
     */
    async waitForElementHidden(selector, timeout = 15000) {
        await this.page.locator(selector).waitFor({ state: 'hidden', timeout });
    }

    /**
     * Wait for page to fully load
     */
    async waitForPageLoad() {
        Logger.info('Waiting for page load...');
        await this.page.waitForLoadState('load');
    }

    /**
     * Check if element is visible on page
     * @param {string} selector - Element selector
     * @returns {Promise<boolean>} - True if visible
     */
    async isElementVisible(selector) {
        const visible = await this.page.locator(selector).isVisible();
        Logger.info(`Element ${selector} visible: ${visible}`);
        return visible;
    }

    /**
     * Check if element is enabled
     * @param {string} selector - Element selector
     * @returns {Promise<boolean>} - True if enabled
     */
    async isElementEnabled(selector) {
        return await this.page.locator(selector).isEnabled();
    }

    /**
     * Select dropdown option by value
     * @param {string} selector - Dropdown selector
     * @param {string} value - Option value
     */
    async selectDropdown(selector, value) {
        Logger.info(`Selecting dropdown value: ${value}`);
        await this.page.locator(selector).selectOption(value);
    }

    /**
     * Select dropdown option by visible text
     * @param {string} selector - Dropdown selector
     * @param {string} text - Visible option text
     */
    async selectDropdownByText(selector, text) {
        Logger.info(`Selecting dropdown by text: ${text}`);
        await this.page.locator(selector).selectOption({ label: text });
    }

    /**
     * Scroll to element on page
     * @param {string} selector - Element selector
     */
    async scrollToElement(selector) {
        Logger.info(`Scrolling to element: ${selector}`);
        await this.page.locator(selector).scrollIntoViewIfNeeded();
    }

    /**
     * Hover over element
     * @param {string} selector - Element selector
     */
    async hoverElement(selector) {
        Logger.info(`Hovering over element: ${selector}`);
        await this.page.locator(selector).hover();
    }

    /**
     * Double click on element
     * @param {string} selector - Element selector
     */
    async doubleClick(selector) {
        Logger.info(`Double clicking element: ${selector}`);
        await this.page.locator(selector).dblclick();
    }

    /**
     * Right click on element
     * @param {string} selector - Element selector
     */
    async rightClick(selector) {
        Logger.info(`Right clicking element: ${selector}`);
        await this.page.locator(selector).click({ button: 'right' });
    }

    /**
     * Drag and drop from source to target
     * @param {string} sourceSelector - Source element selector
     * @param {string} targetSelector - Target element selector
     */
    async dragAndDrop(sourceSelector, targetSelector) {
        Logger.info(`Drag and drop: ${sourceSelector} -> ${targetSelector}`);
        await this.page.locator(sourceSelector).dragTo(this.page.locator(targetSelector));
    }

    /**
     * Upload file to file input element
     * @param {string} selector - File input selector
     * @param {string} filePath - Path to file
     */
    async uploadFile(selector, filePath) {
        Logger.info(`Uploading file: ${filePath}`);
        await this.page.locator(selector).setInputFiles(filePath);
    }

    /**
     * Take screenshot of current page
     * @param {string} name - Screenshot name
     * @returns {Promise<string>} - Screenshot path
     */
    async takeScreenshot(name = 'screenshot') {
        const path = require('path');

        const timestamp = new Date()
            .toISOString()
            .replace(/[:.]/g, '-');

        const filePath = path.resolve(
            __dirname,
            `../screenshots/${name}_${timestamp}.png`
        );

        await this.page.screenshot({
            path: filePath,
            fullPage: true
        });

        Logger.info(`Screenshot saved: ${filePath}`);
        return filePath;
    }

    /**
     * Generate random number for test data
     * @param {number} min - Minimum value
     * @param {number} max - Maximum value
     * @returns {number}
     */
    generateRandomNumber(min = 1000, max = 9999) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * Generate unique name with timestamp
     * @param {string} prefix - Name prefix
     * @returns {string}
     */
    generateUniqueName(prefix = 'Test') {
        return `${prefix}_${Date.now()}`;
    }

    /**
     * Press keyboard key
     * @param {string} key - Key to press (e.g., 'Enter', 'Tab')
     */
    async pressKey(key) {
        Logger.info(`Pressing key: ${key}`);
        await this.page.keyboard.press(key);
    }

    /**
     * Clear input field and type new text
     * @param {string} selector - Input selector
     * @param {string} text - New text
     */
    async clearAndType(selector, text) {
        await this.page.locator(selector).clear();
        await this.page.locator(selector).fill(text);
    }

    /**
     * Get count of elements matching selector
     * @param {string} selector - Element selector
     * @returns {Promise<number>}
     */
    async getElementCount(selector) {
        return await this.page.locator(selector).count();
    }

    /**
     * Get page title
     * @returns {Promise<string>}
     */
    async getPageTitle() {
        return await this.page.title();
    }

    /**
     * Get current page URL
     * @returns {string}
     */
    getCurrentURL() {
        return this.page.url();
    }

    /**
     * Accept browser alert/dialog and return message
     * @returns {Promise<string>}
     */
    async acceptAlert() {
        return new Promise(resolve => {
            this.page.once('dialog', async dialog => {
                const msg = dialog.message();
                await dialog.accept();
                resolve(msg);
            });
        });
    }

    /**
     * Wait for specified milliseconds
     * @param {number} ms - Milliseconds to wait
     */
    async wait(ms) {
        await this.page.waitForTimeout(ms);
    }
}

module.exports = BasePage;